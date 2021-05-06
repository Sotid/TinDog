import React from 'react';
import { Text, View, Icon} from 'react-native';
import CustomIcon from  "../../customIcon"


const Messages = () => {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" , backgroundColor: "pink"}}>
      <Text>
        Try editing me! 🎉
      </Text>
      <CustomIcon name="Happy" size={50} /> 
      
      
  
    </View>
  );
}

export default Messages;