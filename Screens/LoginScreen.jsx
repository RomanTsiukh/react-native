import { StyleSheet, Text, View, ImageBackground } from "react-native";

export default function LoginScreen() {
  return (
    // <View style={styles.container}>
    //   <View style={styles.inerBox}>
    //     <Text style={styles.text}>
    //       Open up App.js to start working on your appp!
    //     </Text>
    //   </View>
    //   <StatusBar style="auto" />
    // </View>
    <View style={styles.container}>
      <ImageBackground
        style={styles.image}
        source={require("../assets/picture_background.png")}
      >
        <Text style={styles.text}>Hello world</Text>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    color: "#fff",
    fontSize: 30,
  },
});
