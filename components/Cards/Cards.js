import React, { useState, useMemo } from "react";
import { Button } from "react-native";
import styled from "styled-components/native";
import TinderCard from "react-tinder-card";

const cards = [
  { name: "Pepe", image: "https://media.giphy.com/media/GfXFVHUzjlbOg/giphy.gif" },
  { name: "Peri", image: "https://media.giphy.com/media/irTuv1L1T34TC/giphy.gif" },
  { name: "Puppy", image: "https://media.giphy.com/media/LkLL0HJerdXMI/giphy.gif" },
  { name: "Snow", image: "https://media.giphy.com/media/fFBmUMzFL5zRS/giphy.gif" },
  { name: "Snoopy", image: "https://media.giphy.com/media/oDLDbBgf0dkis/giphy.gif" },
  { name: "Tina", image: "https://media.giphy.com/media/7r4g8V2UkBUcw/giphy.gif" },
  { name: "Lola", image: "https://media.giphy.com/media/K6Q7ZCdLy8pCE/giphy.gif" },
  { name: "Yuna", image: "https://media.giphy.com/media/hEwST9KM0UGti/giphy.gif" },
  {
    name: "Rumba",
    image: "https://media.giphy.com/media/3oEduJbDtIuA2VrtS0/giphy.gif",
  },
];

const alreadyRemoved = [];
let charactersState = cards;

export default function Cards() {
  const [dogs, setDogs] = useState(cards);
  //   const [lastDirection, setLastDirection] = useState();

  //   const childRefs = useMemo(
  //     () =>
  //       Array(cards.length)
  //         .fill(0)
  //         .map((i) => React.createRef()),
  //     []
  //   );

  //   const swiped = (direction, nameToDelete) => {
  //     console.log("removing: " + nameToDelete + " to the " + direction);
  //     setLastDirection(direction);
  //     alreadyRemoved.push(nameToDelete);
  //   };

  //   const outOfFrame = (name) => {
  //     console.log(name + " left the screen!");
  //     charactersState = charactersState.filter(
  //       (character) => character.name !== name
  //     );
  //     setDogs(charactersState);
  //   };

  //   const swipe = (dir) => {
  //     const cardsLeft = characters.filter(
  //       (person) => !alreadyRemoved.includes(person.name)
  //     );
  //     if (cardsLeft.length) {
  //       const toBeRemoved = cardsLeft[cardsLeft.length - 1].name; // Find the card object to be removed
  //       const index = db.map((person) => person.name).indexOf(toBeRemoved); // Find the index of which to make the reference to
  //       alreadyRemoved.push(toBeRemoved); // Make sure the next card gets removed next time if this card do not have time to exit the screen
  //       childRefs[index].current.swipe(dir); // Swipe the card!
  //     }
  //   };
  return (
    <Container>
      <CardContainer>
        {dogs.map((dog, index) => (
          <TinderCard key={dog.name} preventSwipe={["right", "left"]}>
            <Card>
              <CardImage source={{uri: dog.image}}>
                <CardTitle>{dog.name}</CardTitle>
              </CardImage>
            </Card>
          </TinderCard>
        ))}
      </CardContainer>
    </Container>
  );
}

const Container = styled.View`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

const CardContainer = styled.View`
  width: 100%;
  max-width: 360px;
  height: 700px;
  padding: 80px 50px;
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
  fontSize: 25px;
  fontWeight: 700;
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
