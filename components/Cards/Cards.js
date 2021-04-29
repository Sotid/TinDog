import React, { useState, useMemo, useEffect } from "react";
import { Button, View } from "react-native";
import styled from "styled-components/native";
import TinderCard from "react-tinder-card";
import firebase from "../../database/firebase";

// const alreadyRemoved = [];
// let charactersState = cards;

function Cards() {
  const [dogs, setDogs] = useState();

  const swiped = (direction, nameToDelete) => {
    console.log("removing:" + nameToDelete);
  };

  const outOfFrame = (name) => {
    console.log(name + " left the screen!");
  };

  useEffect(() => {
    const unsuscribe = firebase
      .collection("dogs")
    
      .onSnapshot((snapshot) =>
        setDogs(snapshot.docs.map((doc) => doc.data()))
      );

    return () => {
      unsuscribe();
    };
  }, []);
  console.log(dogs);

  return (
    <Container>
      <CardContainer>
        {dogs &&
          dogs.map((dog, index) => (
            <TinderCard
              key={dog.Name}
              preventSwipe={["right", "left"]}
              onSwipe={(dir) => swiped(dir, dog.Name)}
              onCardDownScreen={() => outOfFrame(dog.Name)}

            >
              <Card>
                <CardImage source={{ uri: dog.Image }}>
                  <CardTitle>{dog.Name}</CardTitle>
                  <View>{dog.Location}</View>
                </CardImage>
              </Card>
            </TinderCard>
          ))}
      </CardContainer>
      <Button title="Like" />
      <Button title="Not" />
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
  position: absolute;
  bottom: 0;
  margin: 10px;
  color: white;
  fontsize: 25px;
  fontweight: 700;
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

export default Cards;
