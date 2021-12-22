import React from "react";
import {
  View,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
  Text,
} from "react-native";

const SecondaryCard = ({ image, title = "Trainers" }) => {
  return (
    <ImageBackground style={styles.container} source={image}>
      <View style={styles.content}>
        <Text style={styles.title}>{title}</Text>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 160,
    height: 115,
    backgroundColor: "#252836",
    marginRight: 12,
    borderRadius: 12,
    position: "relative",
    overflow: "hidden",
    resizeMode: "contain",
  },
  content: {
    position: `absolute`,
    left: 0,
    bottom: 0,
    right: 0,
    height: "50%",
    justifyContent: "center",
    borderBottomLeftRadius: 16,
    borderBottomRightRadius: 16,
    paddingHorizontal: 16,
  },
  title: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default SecondaryCard;
