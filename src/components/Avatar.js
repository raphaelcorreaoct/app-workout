import React from "react";
import { View, StyleSheet, Image, Text } from "react-native";

const Avatar = ({ name = "", image }) => {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image style={styles.image} source={image} />
      </View>
      <Text style={styles.name}>{name}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    marginRight: 12,
  },
  imageContainer: {
    width: 75,
    height: 75,
    backgroundColor: "#fff",
    borderRadius: 38,
    marginBottom: 10,
    borderWidth: 3,
    borderColor: "#252836",
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    width: 70,
    height: 70,
    borderRadius: 35,
    borderWidth: 3,
    borderColor: "#000",
    overflow: "hidden",
  },
  name: {
    fontSize: 14,
    color: "#808191",
  },
});

export default Avatar;
