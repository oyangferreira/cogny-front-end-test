import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import styles from './styles';

const Header = ({ navigation, cartItems }) => {
  return (
    <View style={styles.header}>
      <View style={styles.headerLeft}>
        <Text style={styles.headerText}>COGNYSHOES</Text>
        <Image source={require("../../../assets/shoe-logo.png")} style={styles.logo} />
      </View>
      <TouchableOpacity onPress={() => navigation.navigate('Cart', { cartItems })} style={styles.cartButton}>
        <Image source={require("../../../assets/car.png")} style={styles.cartIcon} />
        {cartItems.length > 0 && (
          <View style={styles.cartBadge}>
            <Text style={styles.cartBadgeText}>{cartItems.length}</Text>
          </View>
        )}
      </TouchableOpacity>
    </View>
  );
};

export default Header; 
