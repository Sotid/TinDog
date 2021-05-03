import React, { useState } from 'react';
import { View, Button, Image, Text, TextInput, Alert, ScrollView, Keyboard ,StyleSheet, SafeAreaView} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { registration } from '../../database/methods';
import * as ImagePicker from 'expo-image-picker';


export default function SignUp({ navigation }) {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [dogName, setDogName] = useState('');
  const [age, setAge] = useState('');
  const [city,setCity] = useState('')
  const [breed, setBreed] = useState('')
  const [character, setCharacter] = useState('')
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [image, setImage] = useState('')

  const emptyState = () => {
    setFirstName('');
    setLastName('');
    setEmail('');
    setPassword('');
    setConfirmPassword('');
    setDogName('');
    setAge('');
    setBreed('')
    setCaracter('')
    setCity('');

  };

  const handlePress = () => {
    if (!firstName) {
      Alert.alert('First name is required');
    } else if (!email) {
      Alert.alert('Email field is required.');
    } else if (!password) {
      Alert.alert('Password field is required.');
    } else if (!confirmPassword) {
      setPassword('');
      Alert.alert('Confirm password field is required.');
    } else if (password !== confirmPassword) {
      Alert.alert('Password does not match!');
    } else {
      registration(
        email,
        password,
        lastName,
        firstName,
        dogName,
        age,
        breed,
        character,
        city,
        image
       
      );
      navigation.navigate('Dashboard');
      emptyState();
    }
  };

  const pickImageHandler = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });


    if (!result.cancelled) {
      setImage(result.uri);
      console.log(result.uri)
    }
  };

  return (
    <SafeAreaView>
     <View style={styles.container}>
       <Text style={styles.text}>Create an account </Text>

       <ScrollView onBlur={Keyboard.dismiss}>
          <TextInput
          style={styles.textInput}
          placeholder="First name*"
          value={firstName}
          onChangeText={(name) => setFirstName(name)}
          />
         <TextInput
          style={styles.textInput}
          placeholder="Last name"
          value={lastName}
          onChangeText={(name) => setLastName(name)}
         />

         <TextInput
          style={styles.textInput}
          placeholder="Enter your email*"
          value={email}
          onChangeText={(email) => setEmail(email)}
          keyboardType="email-address"
          autoCapitalize="none"
         />
 
          <TextInput
          style={styles.textInput}
          placeholder="Enter your password*"
          value={password}
          onChangeText={(password) => setPassword(password)}
          secureTextEntry={true}
         />
         <TextInput
          style={styles.textInput}
          placeholder="Retype your password to confirm*"
          value={confirmPassword}
          onChangeText={(password2) => setConfirmPassword(password2)}
          secureTextEntry={true}
          />
<Text>Present us your dog!</Text>
<Button title="Pick Image" onPress={pickImageHandler} />
<Image source={image} style={{ width: 200, height: 200 }}/>
<TextInput
          style={styles.textInput}
          placeholder="Dog`s name*"
          value={dogName}
          onChangeText={(dogName) => setDogName(dogName)}
          />
           <TextInput
          style={styles.textInput}
          placeholder="City*"
          value={city}
          onChangeText={(city) => setCity(city)}
          />
           <TextInput
          style={styles.textInput}
          placeholder="Age*"
          value={age}
          onChangeText={(age) => setAge(age)}
          />
           <TextInput
          style={styles.textInput}
          placeholder="Breed*"
          value={breed}
          onChangeText={(breed) => setBreed(breed)}
          />
 <TextInput
          style={styles.textInput}
          multiline = {true}
numberOfLines = {4}

          placeholder="Character*"
          value={character}
          onChangeText={(character) => setCharacter(character)}
          />

          <TouchableOpacity style={styles.button} onPress={handlePress}>
           <Text style={styles.buttonText}>Sign Up</Text>
          </TouchableOpacity>

          <Text style={styles.inlineText}>Already have an account?</Text>
          <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Sign In')}>
            <Text style={styles.buttonText}>Sign In</Text>
          </TouchableOpacity>
       </ScrollView>
     </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    height: '100%',
    width: '100%',
    backgroundColor: '#90c9c2',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    width: 200,
    padding: 5,
    backgroundColor: '#ff9999',
    borderWidth: 2,
    borderColor: 'white',
    borderRadius: 15,
    alignSelf: 'center',
    margin: '5%',
  },
  buttonText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'navy',
    textAlign: 'center'
  },
  inlineText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'navy',
    textAlign: 'center',
    marginTop: '5%',
  },
  text: {
    textAlign: 'center',
    fontSize: 25,
    margin: '5%',
    marginTop:'15%',
    fontWeight: 'bold',
    color: '#2E6194',
  },
  textInput: {
    width: 300,
    fontSize:18,
    borderWidth: 1,
    borderColor:'#a4eddf',
    padding: 10,
    margin: 5,
  },
});