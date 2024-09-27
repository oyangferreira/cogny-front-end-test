import { StyleSheet } from 'react-native';

export default styles = StyleSheet.create({
  cartItem: {
    marginBottom: 20,
  },
  cartRow: {
    flexDirection: "row",
    alignItems: "center",
  },
  cartImage: {
    width: 80,
    height: 80,
    resizeMode: "contain",
    marginRight: 16,
  },
  cartDetails: {
    flex: 1,
    marginLeft: 16,
  },
  cartTitle: {
    fontSize: 14,
    flex: 1,
  },
  cartPrice: {
    fontSize: 16,
    marginBottom: 15,
    fontWeight: "600",
  },
  quantityPriceContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "#f0f0f0",
    padding: 8,
    borderRadius: 5,
    marginTop: 8,
    alignItems: "center",
  },
  controlsContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  controlText: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#F8375D",
    marginHorizontal: 10,
  },
  quantityBox: {
    backgroundColor: "#fff",
    borderRadius: 5,
    minWidth: 45,
    justifyContent: "center",
    alignItems: "center",
  },
  quantityText: {
    fontWeight: "bold",
    color: "#666666",
  },
  cartTotal: {
    fontSize: 16,
    fontWeight: "600",
    alignSelf: "flex-end",
  },
});
