import firebase from 'firebase/app';
import 'firebase/firestore';
import {Alert} from 'react-native';

export async function registration(email, password, lastName, firstName, dogName, age, breed, character, city, image) {
  try {
    await firebase.auth().createUserWithEmailAndPassword(email, password);

    const currentUser = firebase.auth().currentUser;
     const db = firebase.firestore();

    let newUser= db.collection('users')
      .doc(currentUser.uid)
      .set({
        uid: currentUser.uid,
        email: currentUser.email,
        lastName: lastName,
        firstName: firstName,
        dogName: dogName,
        age: age,
        breed: breed,
        character:character,
        city: city,
        image:image
      })
      .get()
      .add(newUser.data())



  } catch (err) {
    Alert.alert('There is something wrong!', err.message);
  }
}

export async function signIn(email, password) {
  try {
    await firebase
      .auth()
      .signInWithEmailAndPassword(email, password);
  } catch (err) {
    Alert.alert('There is something wrong!', err.message);
  }
}

export async function loggingOut() {
  try {
    await firebase.auth().signOut();
  } catch (err) {
    Alert.alert('There is something wrong!', err.message);
  }
}


