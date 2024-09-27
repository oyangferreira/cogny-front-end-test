import { StyleSheet } from 'react-native';

export default styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 16,
    backgroundColor: "#141419",
    marginTop: 40,
  },
  headerLeft: {
    flexDirection: "row",
    alignItems: "center",
  },
  logo: {
    marginLeft: 10,
  },
  headerText: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#fff",
    fontFamily: "Roboto",
  },
  cartButton: {
    position: "relative",
    padding: 8,
  },
  cartBadge: {
    position: "absolute",
    right: 4,
    top: 5,
    backgroundColor: "#F8375D",
    borderRadius: 10,
    width: 15,
    height: 15,
    justifyContent: "center",
    alignItems: "center",
  },
  cartBadgeText: {
    color: "#fff",
    fontSize: 10,
    fontWeight: "bold",
  },
});
