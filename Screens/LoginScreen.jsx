import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  TextInput,
  Button,
} from "react-native";

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
        {/* <Text style={styles.text}>Hello world</Text> */}
        <View style={styles.form}>
          <View>
            <Text style={styles.inputTitle}>Адрес електронной почты</Text>
            <TextInput style={styles.input} textAlign={"center"} />
          </View>
          <View style={{ marginTop: 20 }}>
            <Text style={styles.inputTitle}>Пароль</Text>
            <TextInput
              style={styles.input}
              textAlign={"center"}
              secureTextEntry={true}
            />
          </View>
          <Button title="Войти" />
        </View>
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
    // alignItems: "center",
  },
  input: {
    borderWidth: 1,
    borderColor: "#f0f8ff",
    height: 40,
    borderRadius: 6,
    // marginHorizontal: 30,
    color: "#fff",
  },
  form: {
    marginHorizontal: 40,
  },
  inputTitle: {
    color: "#f0f8ff",
    marginBottom: 10,
    fontSize: 18,
  },
});
