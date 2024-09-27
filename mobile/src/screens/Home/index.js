import React, { useEffect, useState, useCallback } from "react";
import { View, FlatList, ActivityIndicator } from "react-native";
import { db } from "../../config/firebase";
import { collection, getDocs } from "firebase/firestore";
import { useNavigation, useFocusEffect } from "@react-navigation/native";
import AsyncStorage from '@react-native-async-storage/async-storage';
import Header from '../../components/Header';
import Card from '../../components/Card';
import styles from "./styles";

const Home = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [quantities, setQuantities] = useState({});
  const navigation = useNavigation();

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      try {
        const productCollection = collection(db, "products");
        const productSnapshot = await getDocs(productCollection);
        const productList = productSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        setProducts(productList);
      } catch (error) {
        console.error("Error fetching products: ", error);
      }
      setLoading(false);
    };

    fetchProducts();
  }, []);

  useFocusEffect(
    useCallback(() => {
      const loadCartItems = async () => {
        try {
          const storedCart = await AsyncStorage.getItem('cartItems');
          if (storedCart) {
            setCartItems(JSON.parse(storedCart));
          } else {
            setCartItems([]);
          }
        } catch (error) {
          console.error("Error loading cart items: ", error);
        }
      };

      loadCartItems();
    }, [])
  );

  const saveCartItems = async (updatedCart) => {
    setCartItems(updatedCart);
    await AsyncStorage.setItem('cartItems', JSON.stringify(updatedCart));
  };

  const addToCart = async (item) => {
    const existingItem = cartItems.find(cartItem => cartItem.id === item.id);
    let updatedCart;

    if (existingItem) {
      updatedCart = cartItems.map(cartItem =>
        cartItem.id === item.id
          ? { ...cartItem, quantity: cartItem.quantity + (quantities[item.id] || 1) }
          : cartItem
      );
    } else {
      updatedCart = [...cartItems, { ...item, quantity: quantities[item.id] || 1 }];
    }

    saveCartItems(updatedCart);
  };

  const removeFromCart = async (item) => {
    const updatedCart = cartItems.filter(cartItem => cartItem.id !== item.id);
    saveCartItems(updatedCart);
  };

  const increaseQuantity = (itemId) => {
    setQuantities((prevQuantities) => ({
      ...prevQuantities,
      [itemId]: (prevQuantities[itemId] || 1) + 1,
    }));
  };

  const decreaseQuantity = (itemId) => {
    setQuantities((prevQuantities) => {
      const newQuantity = (prevQuantities[itemId] || 1) - 1;
      return {
        ...prevQuantities,
        [itemId]: newQuantity > 0 ? newQuantity : 1,
      };
    });
  };

  const renderProduct = ({ item }) => {
    const isInCart = cartItems.some(cartItem => cartItem.id === item.id);
    return (
      <Card
        item={item}
        addToCart={addToCart}
        removeFromCart={removeFromCart}
        increaseQuantity={increaseQuantity}
        decreaseQuantity={decreaseQuantity}
        quantities={quantities}
        isInCart={isInCart}
      />
    );
  };

  return (
    <View style={styles.container}>
      {loading ? <ActivityIndicator size={"small"} color={"#F8375D"}/>:(<>
        <Header navigation={navigation} cartItems={cartItems} />
        <FlatList
          data={products}
          keyExtractor={(item) => item.id}
          renderItem={renderProduct} 
          contentContainerStyle={styles.list}
        />
      </>)}
    </View>
  );
};

export default Home;
