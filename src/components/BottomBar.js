import React from "react";
import { View, StyleSheet, TouchableOpacity, Image, Text } from "react-native";

const Bottombar = () => {
  return (
    <View style={[styles.container]}>
      <TouchableOpacity style={[styles.item]}>
        <Image
          style={[styles.itemImage]}
          source={require("../../assets/icons/icon-wallet.png")}
        />
        <Text style={[styles.itemLabel]}>Wallet</Text>
      </TouchableOpacity>
      <TouchableOpacity style={[styles.item]}>
        <Image
          style={[styles.itemImage]}
          source={require("../../assets/icons/icon-favorites.png")}
        />
        <Text style={[styles.itemLabel]}>Favourites</Text>
      </TouchableOpacity>
      <TouchableOpacity style={[styles.item]}>
        <Image
          style={[styles.itemImage]}
          source={require("../../assets/icons/icon-camera.png")}
        />
        <Text style={[styles.itemLabel]}>Camera</Text>
      </TouchableOpacity>
      <TouchableOpacity style={[styles.item]}>
        <Image
          style={[styles.itemImage]}
          source={require("../../assets/icons/icon-chat.png")}
        />
        <Text style={[styles.itemLabel]}>Chats</Text>
      </TouchableOpacity>
      <TouchableOpacity style={[styles.item]}>
        <Image
          style={[styles.itemImage]}
          source={require("../../assets/icons/icon-feed.png")}
        />
        <Text style={[styles.itemLabel]}>Feed</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#252836",
    height: 80,
    bottom: 0,
    position: "absolute",
    left: 0,
    right: 0,
    bottom: 0,
    flexDirection: `row`,
    justifyContent: `space-between`,
    alignItems: `center`,
  },
  item: {
    flex: 1,
    justifyContent: `space-between`,
    alignItems: `center`,
  },
  itemImage: {
    width: 26,
    height: 26,
    marginBottom: 8,
    resizeMode: "contain",
  },
  itemLabel: {
    color: "#fff",
    fontSize: 13,
  },
});

export default Bottombar;
