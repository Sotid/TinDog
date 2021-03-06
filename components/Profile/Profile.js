import React, { useEffect, useState } from "react";
import { View, Text, Image, StyleSheet, Alert } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import firebase from "firebase/app";
import { loggingOut } from "../../database/methods";
import { LinearGradient } from "expo-linear-gradient";
import { Card, Button } from "react-native-elements";

export default function Dashboard({ navigation }) {
  let currentUserUID = firebase.auth().currentUser.uid;
  const [firstName, setFirstName] = useState("");
  const [dogName, setDogName] = useState("");
  const [age, setAge] = useState("");
  const [city, setCity] = useState("");
  const [breed, setBreed] = useState("");
  const [coordinates, setCoordinates] = useState([]);
  const [image, setImage] = useState("");
  const [character, setCharacter] = useState("");

  useEffect(() => {
    async function getUserInfo() {
      let doc = await firebase
        .firestore()
        .collection("users")
        .doc(currentUserUID)
        .get();

      if (!doc.exists) {
        Alert.alert("No user data found!");
      } else {
        let dataObj = doc.data();
        setFirstName(dataObj.firstName);
        setDogName(dataObj.dogName);
        setAge(dataObj.age);
        setBreed(dataObj.breed);
        setCity(dataObj.city);
        setCharacter(dataObj.character);
        setImage(dataObj.image);
      }
    }
    getUserInfo();
  });

  async function handleConfirm  () {
    let newDog = await  firebase
    .firestore()
    .collection("users")
    .doc(currentUserUID)
    .get()

    firebase
    .firestore()
    .collection("dogs")
    .add(newDog.data())
  }
  const handlePress = () => {
    loggingOut();
    navigation.replace("Home");
  };

  return (
    <View style={styles.root}>
      <LinearGradient colors={["#ff9999", "#faf3dd"]} style={styles.gradient} />
      <View style={styles.imageContainer}>
        <Text style={styles.titleText}>
          Hello {firstName} and {dogName}
        </Text>
        <Image source={{ uri: image }} style={styles.image} />
      </View>
      <View></View>

      <View style={styles.card}>
        <Card>
          <Card.Title>
            {" "}
            <Text style={styles.text}>
              {" "}
              {dogName},{age} years old{" "}
            </Text>
          </Card.Title>
          <Card.Divider />

          <Text style={styles.text}> Breed: {breed} </Text>
          <Text style={styles.text}> City: {city}</Text>
          <Text style={styles.text}> Character: {character}</Text>
        </Card>
      </View>


     
     
      <View style={{ alignItems: "center" }}>
        <TouchableOpacity style={styles.button} onPress={handleConfirm}>
          <Text style={styles.buttonText}>Confirm and start </Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={handlePress}>
          <Text style={styles.buttonText}>Log Out</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: "#faf3dd",
  },
  gradient: {
    height: "16%",
  },

  button: {
    width: 200,
    borderRadius: 15,
    borderWidth: 3,
    borderColor: "white",
    backgroundColor: "#ff9999",
    padding: 5,
    marginTop: "9%",
  },
  buttonText: {
    fontSize: 20,
    fontWeight: "bold",
    color: "navy",
    textAlign: "center",
  },

  card: {
    backgroundColor: "#90c9c2",
    marginTop: "5%",
    paddingBottom: "3%",
  },
  text: {
    textAlign: "center",
    fontSize: 18,
    marginTop: "8%",
    marginBottom: "3%",
    fontWeight: "bold",
    color: "navy",
  },
  titleText: {
    textAlign: "center",
    fontSize: 19,
    fontWeight: "bold",
    color: "#2E6194",
    paddingBottom: "5%",
  },
  imageContainer: {
    alignItems: "center",
    marginTop: -100,
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 50,
    borderWidth: 2,

    borderColor: "navy",
  },
});
