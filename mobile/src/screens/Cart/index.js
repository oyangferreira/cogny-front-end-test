import React, { useState, useEffect } from "react";
import { View, FlatList, Alert } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import CartItem from "../../components/CartItem";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import styles from "./styles";

const Cart = ({ route, navigation }) => {
  const [cartItems, setCartItems] = useState(route.params.cartItems || []);

  useEffect(() => {
    const saveCartItems = async () => {
      await AsyncStorage.setItem("cartItems", JSON.stringify(cartItems));
    };
    saveCartItems();
  }, [cartItems]);

  const updateQuantity = (itemId, change) => {
    setCartItems((prevItems) => {
      return prevItems
        .map((item) => {
          if (item.id === itemId) {
            const newQuantity = item.quantity + change;
            return newQuantity > 0 ? { ...item, quantity: newQuantity } : null;
          }
          return item;
        })
        .filter(Boolean);
    });
  };

  const renderCartItem = ({ item }) => (
    <CartItem item={item} updateQuantity={updateQuantity} />
  );

  const total = cartItems.reduce(
    (acc, item) => acc + item.quantity * item.price,
    0
  );

  const handleCheckout = () => {
    Alert.alert(
      "Finalizar Pedido",
      "Tem certeza que deseja finalizar o pedido?",
      [
        {
          text: "Sim",
          style: "cancel",
          onPress: () => {
            setCartItems([]);
            AsyncStorage.removeItem("cartItems");
          },
        },
        {
          text: "Não",
          
        },
      ]
    );
  };

  return (
    <View style={styles.container}>
      <Header navigation={navigation} cartItems={cartItems} />

      <View style={styles.contentContainer}>
        <View style={styles.card}>
          <FlatList
            data={cartItems}
            keyExtractor={(item) => item.id}
            renderItem={renderCartItem}
            contentContainerStyle={styles.list}
            style={styles.flatList}
            showsVerticalScrollIndicator={false} 
          />
          <Footer total={total} onCheckout={handleCheckout} />
        </View>
      </View>
    </View>
  );
};

export default Cart;
