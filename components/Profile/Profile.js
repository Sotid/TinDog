// export default function Dashboard({ navigation }) {
//   let currentUserUID = firebase.auth().currentUser.uid;
//   const [firstName, setFirstName] = useState('');
//
//   useEffect(() => {
//     async function getUserInfo(){
//       try {
//         let doc = await firebase
//           .firestore()
//           .collection('users')
//           .doc(currentUserUID)
//           .get();

//         if (!doc.exists){
//           Alert.alert('No user data found!')
//         } else {
//           let dataObj = doc.data();
//           console.log(dataObj)
//           setFirstName(dataObj.firstName)

//         }
//       } catch (err){
//       Alert.alert('There is an error.', err.message)
//       }
//     }
//     getUserInfo();
//   })

//   const handlePress = () => {
//     loggingOut();
//     navigation.replace('Home');
//   };

//   return (
//     <View style={styles.container}>
//       <Text style={styles.text}>Hi {firstName}</Text>
//       <Text style={styles.text}>Hi {age}</Text>

//       <TouchableOpacity style={styles.button} onPress={handlePress}>
//         <Text style={styles.buttonText}>Log Out</Text>
//       </TouchableOpacity>
//     </View>
//   )
// }

import React, { useState, useEffect } from "react";
import {
  Button,
  View,
  StyleSheet,
  TextInput,
  ScrollView,
  Text,
  Alert,
} from "react-native";
import firebase from "firebase/app";
import database from "../../database/firebase";
import { TouchableOpacity } from "react-native-gesture-handler";
import "firebase/auth";
import { loggingOut } from "../../database/methods";

const AddDog = (props) => {
  const initalState = {
    id: "",
    name: "",
    age: "",
    breed: "",
    city: "",
  };

  const [state, setState] = useState(initalState);
  let currentUserUID = firebase.auth().currentUser.uid;
  const [firstName, setFirstName] = useState("");

  useEffect(() => {
    async function getUserInfo() {
      try {
        let doc = await database.collection("users").doc(currentUserUID).get();

        if (!doc.exists) {
          Alert.alert("No user data found!");
        } else {
          let dataObj = doc.data();
          console.log(dataObj);
          setFirstName(dataObj.firstName);
        }
      } catch (err) {
        Alert.alert("There is an error.", err.message);
      }
    }
    getUserInfo();
  });

  const handlePress = () => {
    loggingOut();
    navigation.replace("Home");
  };

  const handleChangeText = (value, name) => {
    setState({ ...state, [name]: value });
  };

  const saveNewDog = async () => {
    try {
      await database
        .collection("dogs")

        .add({
          name: state.name,
          age: state.age,
          breed: state.breed,
          city: state.city,
        });

      props.navigation.navigate("Swipe");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <ScrollView style={styles.container}>
      {/* Name Input */}

      <View style={styles.container}>
        <Text style={styles.text}>
          Hi {firstName} and {name}
        </Text>

        <TouchableOpacity style={styles.button} onPress={handlePress}>
          <Text style={styles.buttonText}>Log Out</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.inputGroup}>
        <TextInput
          placeholder="Name"
          onChangeText={(value) => handleChangeText(value, "name")}
          value={state.name}
        />
      </View>

      {/* Email Input */}
      <View style={styles.inputGroup}>
        <TextInput
          placeholder="Age"
          onChangeText={(value) => handleChangeText(value, "age")}
          value={state.age}
        />
      </View>

      {/* Input */}
      <View style={styles.inputGroup}>
        <TextInput
          placeholder="Breed"
          onChangeText={(value) => handleChangeText(value, "breed")}
          value={state.breed}
        />
      </View>
      <View style={styles.inputGroup}>
        <TextInput
          placeholder="City"
          onChangeText={(value) => handleChangeText(value, "city")}
          value={state.city}
        />
      </View>

      <View style={styles.button}>
        <Button title="Register" onPress={() => saveNewDog()} />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  inputGroup: {
    flex: 1,
    padding: 0,
    marginBottom: 15,
    borderBottomWidth: 1,
    borderBottomColor: "#cccccc",
  },
  loader: {
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    position: "absolute",
    alignItems: "center",
    justifyContent: "center",
  },
  button: {
    width: 200,
    borderRadius: 15,
    borderWidth: 3,
    borderColor: "white",
    backgroundColor: "#ff9999",
    padding: 5,
    margin: "%",
  },
  buttonText: {
    fontSize: 20,
    fontWeight: "bold",
    color: "navy",
    textAlign: "center",
  },
  container: {
    height: "100%",
    width: "100%",
    backgroundColor: "#faf3dd",
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  text: {
    textAlign: "center",
    fontSize: 20,
    fontStyle: "italic",
    marginTop: "2%",
    marginBottom: "10%",
    fontWeight: "bold",
    color: "black",
  },
  titleText: {
    textAlign: "center",
    fontSize: 30,
    fontWeight: "bold",
    color: "#2E6194",
  },
});

export default AddDog;
