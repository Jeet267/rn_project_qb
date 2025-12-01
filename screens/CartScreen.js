import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, TouchableOpacity, FlatList, Alert } from "react-native";

export default function CartScreen({ route, navigation }) {
  const [cart, setCart] = useState(
    route.params?.cart.map(item => ({ ...item, selected: true, price: 3 })) || []
  ); // Each item has default price ₹3 and selected

  const [total, setTotal] = useState(0);

  // Calculate total whenever cart changes
  useEffect(() => {
    const sum = cart
      .filter(item => item.selected)
      .reduce((acc, item) => acc + (item.price || 0), 0);
    setTotal(sum);
  }, [cart]);

  const toggleSelect = (id) => {
    setCart(cart.map(item =>
      item.id === id ? { ...item, selected: !item.selected } : item
    ));
  };

  const handleRemove = (id) => {
    Alert.alert(
      "Remove Item",
      "Are you sure you want to remove this item?",
      [
        { text: "Cancel" },
        { text: "Remove", onPress: () => setCart(cart.filter(item => item.id !== id)) }
      ]
    );
  };

  const handlePayment = () => {
    if (total === 0) {
      Alert.alert("No items selected", "Please select items to proceed.");
      return;
    }
    Alert.alert("Payment", `Total amount: ₹${total}\nPayment feature coming soon 🚧`);
  };

  const renderItem = ({ item }) => (
    <View style={styles.cartItem}>
      <TouchableOpacity onPress={() => toggleSelect(item.id)}>
        <Text style={[styles.cartText, !item.selected && { textDecorationLine: "line-through", color: "#999" }]}>
          {item.name} - ₹{item.price}
        </Text>
      </TouchableOpacity>
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <TouchableOpacity onPress={() => handleRemove(item.id)}>
          <Text style={styles.removeText}>Remove ❌</Text>
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      {cart.length > 0 ? (
        <>
          <FlatList
            data={cart}
            renderItem={renderItem}
            keyExtractor={(item) => item.id}
            style={{ width: "100%" }}
          />
          <Text style={styles.totalText}>Total: ₹{total}</Text>
          <TouchableOpacity style={styles.paymentButton} onPress={handlePayment}>
            <Text style={styles.paymentText}>Proceed to Payment 💳</Text>
          </TouchableOpacity>
        </>
      ) : (
        <Text style={styles.emptyText}>Your Cart is Empty 🛒</Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: "center", justifyContent: "center", padding: 20 },
  emptyText: { fontSize: 22, fontWeight: "bold", color: "#555" },
  cartItem: {
    backgroundColor: "#f1f1f1",
    padding: 16,
    marginVertical: 8,
    borderRadius: 8,
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  cartText: { fontSize: 18 },
  removeText: { color: "red", fontWeight: "bold", marginLeft: 10 },
  totalText: { fontSize: 20, fontWeight: "bold", marginTop: 10 },
  paymentButton: {
    backgroundColor: "#6200ee",
    padding: 12,
    borderRadius: 8,
    marginTop: 20,
    width: "100%",
  },
  paymentText: { color: "#fff", fontWeight: "bold", textAlign: "center", fontSize: 16 },
});
