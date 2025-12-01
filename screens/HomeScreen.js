import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Dimensions, FlatList, TextInput, Alert } from 'react-native';
import { supabase } from '../supabase';

const companies = [
  { id: '1', name: 'Google', price: 3 },
  { id: '2', name: 'Microsoft', price: 3 },
  { id: '3', name: 'Tekion', price: 3 },
  { id: '4', name: 'Coinbase', price: 3 },
  { id: '5', name: 'Oracle', price: 3 },
  { id: '6', name: 'Amazon', price: 3 },
  { id: '7', name: 'Netflix', price: 3 },
  { id: '8', name: 'Tesla', price: 3 },
];

const HomeScreen = ({ navigation }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [user, setUser] = useState(null);
  const [cart, setCart] = useState([]);
  const screenWidth = Dimensions.get('window').width;
  const numColumns = screenWidth < 600 ? 3 : 4;

  useEffect(() => {
    const getUser = async () => {
      const { data } = await supabase.auth.getSession();
      if (data?.session) setUser(data.session.user);
    };
    getUser();

    const { data: listener } = supabase.auth.onAuthStateChange((_e, session) => {
      setUser(session?.user || null);
    });

    return () => listener.subscription.unsubscribe();
  }, []);

  const handleLogout = async () => {
    await supabase.auth.signOut();
    Alert.alert("Logout", "You have been logged out.");
  };

  const filteredCompanies = companies.filter((c) =>
    c.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const addToCart = (company) => {
    if (cart.find(c => c.id === company.id)) {
      Alert.alert("Already Added", `${company.name} is already in your cart`);
      return;
    }
    setCart([...cart, company]);
    Alert.alert("Added to Cart", `${company.name} has been added to your cart`);
  };

  const renderItem = ({ item }) => (
    <View style={styles.card}>
      <TouchableOpacity
        onPress={() => navigation.navigate('Company', { companyName: item.name })}
      >
        <Text style={styles.cardText}>{item.name}</Text>
        <Text style={styles.priceText}>Price: ₹{item.price}</Text>
      </TouchableOpacity>

      {user && (
        <TouchableOpacity style={styles.addButton} onPress={() => addToCart(item)}>
          <Text style={styles.addButtonText}>Add to Cart 🛒</Text>
        </TouchableOpacity>
      )}
    </View>
  );

  return (
    <View style={styles.container}>
      {/* HEADER */}
      <View style={styles.header}>
        {user ? (
          <>
            <TouchableOpacity
              style={styles.iconButton}
              onPress={() => navigation.navigate('Cart', { cart })}
            >
              <Text style={styles.icon}>🛒 ({cart.length})</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.button}
              onPress={() => Alert.alert("Profile", user.email)}
            >
              <Text style={styles.buttonText}>Profile</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.button} onPress={handleLogout}>
              <Text style={styles.buttonText}>Logout</Text>
            </TouchableOpacity>
          </>
        ) : (
          <>
            <TouchableOpacity
              style={styles.button}
              onPress={() => navigation.navigate('Login')}
            >
              <Text style={styles.buttonText}>Login</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.button}
              onPress={() => navigation.navigate('Signup')}
            >
              <Text style={styles.buttonText}>Signup</Text>
            </TouchableOpacity>
          </>
        )}
      </View>

      {/* HERO */}
      <View style={styles.hero}>
        <Text style={styles.heroTitle}>Welcome to OnlinePYQ 🚀</Text>
        <Text style={styles.heroSubtitle}>
          Explore top tech companies, enhance your skills, and prepare for your dream job.
        </Text>
      </View>

      {/* SEARCH */}
      <View style={styles.searchContainer}>
        <TextInput
          placeholder="Search company..."
          style={styles.searchInput}
          value={searchQuery}
          onChangeText={setSearchQuery}
        />
      </View>

      {/* COMPANY LIST */}
      <View style={styles.content}>
        <Text style={styles.sectionTitle}>Top Tech Companies 🏢</Text>
        <FlatList
          data={filteredCompanies}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
          numColumns={numColumns}
          key={numColumns}
          contentContainerStyle={styles.grid}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f5f5f5' },
  header: { flexDirection: 'row', justifyContent: 'flex-end', backgroundColor: '#6200ee', padding: 10 },
  iconButton: { backgroundColor: '#fff', padding: 8, borderRadius: 8, marginRight: 10 },
  icon: { fontSize: 16, fontWeight: 'bold', color: '#6200ee' },
  button: { backgroundColor: '#fff', paddingVertical: 6, paddingHorizontal: 14, borderRadius: 8, marginLeft: 10 },
  buttonText: { color: '#6200ee', fontWeight: '600' },
  hero: { alignItems: 'center', justifyContent: 'center', backgroundColor: '#ede7f6', paddingVertical: 40, paddingHorizontal: 20 },
  heroTitle: { fontSize: 28, fontWeight: 'bold', color: '#4a148c', textAlign: 'center' },
  heroSubtitle: { fontSize: 16, color: '#555', textAlign: 'center', marginTop: 10, maxWidth: 500 },
  searchContainer: { padding: 16 },
  searchInput: { backgroundColor: '#fff', padding: 12, borderRadius: 10, elevation: 2 },
  content: { flex: 1, padding: 16 },
  sectionTitle: { fontSize: 22, fontWeight: '700', color: '#6200ee', marginBottom: 20 },
  grid: { alignItems: 'center' },
  card: { backgroundColor: '#fff', borderRadius: 12, elevation: 3, margin: 8, padding: 20, width: Dimensions.get('window').width / 3.5, alignItems: 'center' },
  cardText: { fontSize: 16, fontWeight: '600' },
  priceText: { fontSize: 14, color: '#555', marginTop: 5 },
  addButton: { marginTop: 10, backgroundColor: '#6200ee', paddingVertical: 6, paddingHorizontal: 12, borderRadius: 8 },
  addButtonText: { color: '#fff', fontWeight: '600' },
});

export default HomeScreen;
