import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Alert} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import firebase from 'firebase/app';
import {loggingOut} from '../../database/methods';

export default function Dashboard({ navigation }) {
  let currentUserUID = firebase.auth().currentUser.uid;
  const [firstName, setFirstName] = useState('');
  const [dogName, setDogName] = useState('');
  const [age, setAge] = useState('');
  const [city,setCity] = useState('')
  const [breed, setBreed] = useState('')

  console.log(currentUserUID)

  useEffect(() => {
    async function getUserInfo(){
      let doc = await firebase
      .firestore()
      .collection('users')
      .doc(currentUserUID)
      .get()
      // .updateProfile({ dogName: dogName })

      if (!doc.exists){
        Alert.alert('No user data found!')
      } else {
        let dataObj = doc.data();
        setFirstName(dataObj.firstName)
        setDogName(dataObj.dogName)
        setAge(dataObj.age)
        setBreed(dataObj.breed)
        setCity(dataObj.city)


      }
    }
    getUserInfo();
  })

  const handlePress = () => {
    loggingOut();
    navigation.replace('Home');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.titleText}>Dashboard</Text>
      <Text style={styles.text}>Hi {firstName} and {dogName}</Text>
      <Text style={styles.text}> {dogName}</Text>
      <Text style={styles.text}> {age}</Text>
      <Text style={styles.text}> {breed}</Text>
      <Text style={styles.text}> {city}</Text>




      <TouchableOpacity style={styles.button} onPress={handlePress}>
        <Text style={styles.buttonText}>Log Out</Text>
      </TouchableOpacity>
    </View>
  )
}

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