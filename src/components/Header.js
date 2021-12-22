import React from "react";
import { View, StyleSheet, TouchableOpacity, Text, Image } from "react-native";

const Header = () => {
  return (
    <View style={styles.container}>
      <View style={{ minWidth: "40%" }}>
        <TouchableOpacity style={styles.btn}>
          <Image source={require("../../assets/icons/icon-menu.png")} />
        </TouchableOpacity>
      </View>

      <TouchableOpacity style={styles.btn}>
        <Image source={require("../../assets/icons/icon-calendar.png")} />
      </TouchableOpacity>
      <TouchableOpacity style={styles.btn}>
        <Image source={require("../../assets/icons/icon-home.png")} />
      </TouchableOpacity>
      <TouchableOpacity style={styles.btn}>
        <Image source={require("../../assets/icons/icon-notification.png")} />
      </TouchableOpacity>
      <TouchableOpacity style={styles.logoContainer}>
        <Text style={styles.logo}>Business</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  logoContainer: {
    minHeight: 45,
    alignItems: "center",
    flexDirection: "row",
  },
  logo: {
    fontSize: 18,
    color: "#fff",
    fontWeight: "700",
  },
  btn: {
    width: 45,
    height: 45,
    alignItems: "center",
    justifyContent: "center",
    //backgroundColor: `#fff`,
  },
});

export default Header;
