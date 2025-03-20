/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { FlashList } from "@shopify/flash-list";

function App(): React.JSX.Element {
  const data = [
    { key: 3, title: "Multi-Choices Multi-Choices" },
    { key: 7, title: "Kale" },
    {
      key: 2,
      title:
        "This is the longest string in this data. Size doesn't seem to grow correctly",
    },
    { key: 1, title: "Short string" },
    { key: 4, title: "Throw" },
    { key: 5, title: "Jam" },
    { key: 6, title: "Stone" },
  ];

  const renderText = ({ item }) => (
    <Text style={styles.text}>{item.title}</Text>
  );

  const renderBlankSeparator = () => <View style={styles.separator} />;

  return (
    <View style={styles.sectionContainer}>
      <FlashList
        contentContainerStyle={{ padding: 12 }}
        ItemSeparatorComponent={renderBlankSeparator}
        data={data}
        estimatedItemSize={40}
        keyExtractor={(item) => item.key.toString()}
        renderItem={renderText}
        horizontal
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: "20%",
    gap: 16,
  },
  text: {
    width: 40,
    backgroundColor: "cyan",
  },
  separator: {
    width: 20,
  },
});

export default App;
