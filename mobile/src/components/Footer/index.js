import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import styles from "./styles";

const Footer = ({ total, onCheckout }) => (
  <View style={styles.footer}>
    <Text style={styles.totalText}>TOTAL</Text>
    <Text style={styles.totalValue}>R${total.toFixed(2)}</Text>
    <TouchableOpacity style={styles.checkoutButton} onPress={onCheckout}>
      <Text style={styles.checkoutText}>FINALIZAR PEDIDO</Text>
    </TouchableOpacity>
  </View>
);

export default Footer;