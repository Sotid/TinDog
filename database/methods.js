import firebase from 'firebase/app';
import 'firebase/firestore';
import {Alert} from 'react-native';

export async function registration(email, password, lastName, firstName, dogName, age, breed, city) {
  try {
    await firebase.auth().createUserWithEmailAndPassword(email, password);

    const currentUser = firebase.auth().currentUser;
     const db = firebase.firestore();

    db.collection('users')
      .doc(currentUser.uid)
      .set({
        uid: currentUser.uid,
        email: currentUser.email,
        lastName: lastName,
        firstName: firstName,
        dogName: dogName,
        age: age,
        breed: breed,
        city: city
      })
    


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
