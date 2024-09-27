import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import styles from "./styles";

const CartItem = ({ item }) => {
  return (
    <View style={styles.cartItem}>
      <View style={styles.cartRow}>
        <Image source={{ uri: item.image }} style={styles.cartImage} />
        <View style={styles.cartDetails}>
          <Text style={styles.cartTitle}>{item.description}</Text>
          <Text style={styles.cartPrice}>R${item.price.toFixed(2)}</Text>
        </View>
      </View> 
      <View style={styles.quantityPriceContainer}>
        <View style={styles.controlsContainer}>
          <View style={styles.quantityBox}>
            <Text style={styles.quantityText}>{item.quantity}</Text>
          </View>
        </View>
        <Text style={styles.cartTotal}>R${(item.quantity * item.price).toFixed(2)}</Text>
      </View>
    </View>
  );
};

export default CartItem;