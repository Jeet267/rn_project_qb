import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
  FlatList,
  TextInput,
  Alert,
} from 'react-native';

const companies = [
  { id: '1', name: 'Google' },
  { id: '2', name: 'Microsoft' },
  { id: '3', name: 'Tekion' },
  { id: '4', name: 'Coinbase' },
  { id: '5', name: 'Oracle' },
  { id: '6', name: 'Amazon' },
  { id: '7', name: 'Netflix' },
  { id: '8', name: 'Tesla' },
];

const HomeScreen = ({ navigation }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const screenWidth = Dimensions.get('window').width;
  const numColumns = screenWidth < 600 ? 3 : 4;

  // Filter companies based on search input
  const filteredCompanies = companies.filter((company) =>
    company.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Render each company card (clickable)
  const renderItem = ({ item }) => (
    <TouchableOpacity
      style={styles.card}
      onPress={() => navigation.navigate('Company', { companyName: item.name })}
    >
      <Text style={styles.cardText}>{item.name}</Text>
    </TouchableOpacity>
  );

  const handleExplore = () => {
    Alert.alert('Coming Soon 🚧', 'This feature will be available soon!');
  };

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
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
      </View>

      {/* Hero Section */}
      <View style={styles.hero}>
        <Text style={styles.heroTitle}>Welcome to OnlinePYQ 🚀</Text>
        <Text style={styles.heroSubtitle}>
          Explore top tech companies, enhance your skills, and prepare for your
          dream job.
        </Text>

        <TouchableOpacity style={styles.ctaButton} onPress={handleExplore}>
          <Text style={styles.ctaButtonText}>Explore Now</Text>
        </TouchableOpacity>
      </View>

      {/* Search Bar */}
      <View style={styles.searchContainer}>
        <TextInput
          placeholder="Search company..."
          style={styles.searchInput}
          value={searchQuery}
          onChangeText={setSearchQuery}
        />
      </View>

      {/* Companies Grid */}
      <View style={styles.content}>
        <Text style={styles.sectionTitle}>Top Tech Companies 🏢</Text>
        <FlatList
          data={filteredCompanies}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
          numColumns={numColumns}
          key={numColumns} // Forces re-render when layout changes
          contentContainerStyle={styles.grid}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f5f5f5' },

  // Header
  header: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    backgroundColor: '#6200ee',
    padding: 10,
  },
  button: {
    backgroundColor: '#fff',
    paddingVertical: 6,
    paddingHorizontal: 14,
    borderRadius: 8,
    marginLeft: 10,
  },
  buttonText: {
    color: '#6200ee',
    fontWeight: '600',
  },

  // Hero Section
  hero: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ede7f6',
    paddingVertical: 40,
    paddingHorizontal: 20,
  },
  heroTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#4a148c',
    textAlign: 'center',
    marginBottom: 10,
  },
  heroSubtitle: {
    fontSize: 16,
    color: '#555',
    textAlign: 'center',
    marginBottom: 20,
    maxWidth: 500,
  },
  ctaButton: {
    backgroundColor: '#6200ee',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
    elevation: 3,
  },
  ctaButtonText: {
    color: '#fff',
    fontWeight: '700',
    fontSize: 16,
  },

  // Search Bar
  searchContainer: {
    paddingHorizontal: 16,
    paddingVertical: 10,
  },
  searchInput: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 10,
    elevation: 2,
    fontSize: 16,
  },

  // Companies Grid
  content: {
    flex: 1,
    alignItems: 'center',
    padding: 16,
  },
  sectionTitle: {
    fontSize: 22,
    fontWeight: '700',
    color: '#6200ee',
    marginBottom: 16,
  },
  grid: {
    alignItems: 'center',
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 12,
    elevation: 3,
    margin: 8,
    padding: 20,
    width: Dimensions.get('window').width / 3.6,
    alignItems: 'center',
    justifyContent: 'center',
  },
  cardText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
  },
});

export default HomeScreen;
