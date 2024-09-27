import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import styles from './styles';

const Card = ({ item, addToCart, removeFromCart, quantities, isInCart }) => {
  return (
    <View style={styles.card}>
      <Image source={{ uri: item.image }} style={styles.image} />

      <Text style={styles.title}>
        {item.description || "Descrição não disponível"}
      </Text>

      <Text style={styles.price}>
        R${item.price ? item.price.toFixed(2) : "0.00"}
      </Text>

      <View style={styles.buttonContainer}>
        <View style={[styles.quantityContainer, isInCart && styles.activeQuantityContainer]}>
          <Text style={[styles.quantityText, isInCart && styles.activeQuantityText]}>
            {quantities[item.id] || 1}
          </Text>
        </View>

        <TouchableOpacity
          style={[
            styles.addButton, 
            isInCart ? styles.removeButton : styles.addButtonDefault
          ]}
          onPress={async () => {
            if (isInCart) {
              await removeFromCart(item);
            } else {
              await addToCart(item);
            }
          }}
        >
          <Text style={styles.buttonText}>
            {isInCart ? "REMOVER" : "ADICIONAR"}
          </Text> 
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Card;
