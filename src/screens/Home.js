import React from "react";
import {
  View,
  ScrollView,
  StyleSheet,
  SafeAreaView,
  Text,
  TouchableOpacity,
} from "react-native";

import Header from "../components/Header";
import Avatar from "../components/Avatar";
import Primarycard from "../components/PrimaryCard";
import SecondaryCard from "../components/SecondaryCard";

import Categories from "../../MOCK/categories";
import Videos from "../../MOCK/Videos";

import Avatars from "../../MOCK/Avatar";

const MOCK = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

export const Home = () => {
  return (
    <SafeAreaView style={style.container}>
      <ScrollView style={style.content}>
        <Header />

        <ScrollView
          style={style.stories}
          horizontal
          showsHorizontalScrollIndicator={false}
        >
          {Avatars.map((item, i) => (
            <Avatar name={item.name} image={item.image} key={`avatar_${i}`} />
          ))}
        </ScrollView>

        <ScrollView
          style={style.stories}
          horizontal
          showsHorizontalScrollIndicator={false}
        >
          {Videos.map((item, i) => (
            <Primarycard
              image={item.image}
              duration={item.time}
              key={`main-card_${i}`}
            />
          ))}
        </ScrollView>

        {Categories.map((item, i) => (
          <View key={`section_${i}`}>
            <View style={style.sectionHeader}>
              <Text style={style.sectionTitle}>{item.name}</Text>

              <TouchableOpacity>
                <Text style={style.sectionButton}>See All</Text>
              </TouchableOpacity>
            </View>

            <ScrollView
              style={style.stories}
              horizontal
              showsHorizontalScrollIndicator={false}
            >
              {Categories.map((category, i) => (
                <SecondaryCard
                  image={category.image}
                  title={category.name}
                  key={`list_1_${i}`}
                />
              ))}
            </ScrollView>
          </View>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

const style = StyleSheet.create({
  container: {
    backgroundColor: "#000",
    flex: 1,
  },
  stories: {
    marginVertical: 20,
  },
  content: {
    flex: 1,
    paddingHorizontal: 12,
    paddingBottom: 90,
  },
  sectionHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  sectionTitle: {
    color: `#fff`,
    fontSize: 24,
    fontWeight: "bold",
  },
  sectionButton: {
    color: `#fff`,
    fontSize: 18,
    fontWeight: `700`,
  },
});
