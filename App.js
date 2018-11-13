import React from "react";
import { StyleSheet, Text, View } from "react-native";
import WebViewExample from './web_view_example.js'


export default class App extends React.Component {
  render() {
    return (
      <WebViewExample/>

    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
