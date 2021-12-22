import React from "react";
import {
  View,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
  Image,
  Text,
} from "react-native";

const Primarycard = ({ image, duration = "17:34 / 59:00" }) => {
  return (
    <ImageBackground style={styles.container} source={image}>
      <View style={styles.labelContainer}>
        <View>
          <Text style={styles.time}>{duration}</Text>
        </View>
        <View style={{ flexDirection: "row" }}>
          <TouchableOpacity style={styles.btn}>
            <Image source={require("../../assets/icons/icon-volume.png")} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.btn}>
            <Image source={require("../../assets/icons/icon-filter.png")} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.btn}>
            <Image source={require("../../assets/icons/icon-category.png")} />
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 310,
    height: 210,
    backgroundColor: "#fff",
    marginRight: 12,
    borderRadius: 16,
    position: "relative",
    overflow: "hidden",
    resizeMode: "contain",
  },

  labelContainer: {
    position: `absolute`,
    left: 0,
    bottom: 0,
    right: 0,
    backgroundColor: "#252836",
    height: 40,
    borderBottomLeftRadius: 16,
    borderBottomRightRadius: 16,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 18,
  },
  time: {
    color: "#fff",
    fontSize: 12,
  },
  btn: {
    width: 20,
    height: 20,
    // backgroundColor: "#fff",
    marginHorizontal: 11,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default Primarycard;
