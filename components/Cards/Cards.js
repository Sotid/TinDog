import React, { useState, useEffect } from "react";
import { Button, Text, View, StyleSheet, TouchableOpacity, LayoutAnimation } from "react-native";
import styled from "styled-components/native";
import TinderCard from "react-tinder-card";
import database from "../../database/firebase";
import firebase from 'firebase/app';

// const alreadyRemoved = [];
// let charactersState = cards;
import 'firebase/firestore';
function Cards() {
  const [dogs, setDogs] = useState();
  const [yes, setYes] = useState([]);
  const [no, setNo] = useState([]);
  const [lastDirection, setLastDirection] = useState();
const [index,setIndex] = useState(0)

  const swiped = (direction, nameToDelete) => {
    const currentUser = firebase.auth().currentUser;
    const db = firebase.firestore();
    if (direction === "up") {
      setLastDirection(direction);
   setYes([...yes], nameToDelete)
   yes.push(nameToDelete)
   db.collection('likes')
      .doc(currentUser.uid)
      .set({
       like:yes
      })
    } else {
      setLastDirection(direction);
      setNo([...no], nameToDelete)
      no.push(nameToDelete)
      db.collection('dislike')
      .doc(currentUser.uid)
      .set({
       dislike:no
      })
    }

  };


  const goToNext = () => {
   if(index >= 0 && index < dogs.length)
          setIndex(index + 1)
          dogs.length + 1
    }

    console.log(index)

 
  useEffect(() => {
    const unsuscribe = database
      .collection("dogs")

      .onSnapshot((snapshot) =>
        setDogs(snapshot.docs.map((doc) => doc.data()))
      );
    return () => {
      unsuscribe();
    };
  }, []);

  return (
    <Container>
      <CardContainer>
        {dogs &&
          dogs.map((dog, index) => (
            <TinderCard
              key={dog.Name}
              preventSwipe={["right", "left"]}
              onSwipe={(dir) => swiped(dir, dog.dogName)}
            >
              <Card>
                <CardImage source={{ uri: dog.image }}>
                <CardInfo>{dog.age} years old, {dog.city}</CardInfo>

                  <CardTitle>{dog.dogName}</CardTitle>

                </CardImage>

              </Card>

            </TinderCard>
          ))}
      </CardContainer>
      <TouchableOpacity title="Like" onPress= {()=> goToNext()}>
      <Text>Like</Text>
      </TouchableOpacity>
      <Button title="Not" onPress= {()=> goToNext()}/>
    </Container>
  );
}
   

const Container = styled.View`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  background: #eff7f6;
`;

const CardContainer = styled.View`
  width: 100%;
  max-width: 360px;
  height: 700px;
  padding: 100px 50px;
`;
const Card = styled.View`
  position: absolute;
  background-color: #fff;
  width: 100%;
  max-width: 260px;
  height: 300px;
  shadow-color: black;
  shadow-opacity: 0.2;
  shadow-radius: 20px;
  border-radius: 20px;
  resize-mode: cover;
`;

const CardImage = styled.ImageBackground`
  width: 100%;
  height: 100%;
  overflow: hidden;
  border-radius: 20px;
`;

const CardTitle = styled.Text`
  ${"" /* position: absolute; */}
  bottom: 0;
  margin: 10px;
  color: white;
  fontSize: 25px;
  fontWeight: 900;
`;
const CardInfo = styled.Text`
position: absolute; 
  margin: 10px;
  color: white;
  fontSize: 15px;
  fontWeight: 900;
  paddingTop: 260px;
  paddingLeft: 59px;
`;
const Buttons = styled.View`
  margin: 20px;
  z-index: -100;
`;

const InfoText = styled.Text`
  height: 28px;
  justify-content: center;
  display: flex;
  z-index: -100;
`;
const Info = styled.Text`
    color: white;
    fontWeight: 900;
`;
const ContainerInfo = styled.View`
paddingTop: 80%;
paddingLeft: 65%;
`;

export default Cards;
