import React from 'react';
import { Text, View } from 'react-native';
import { createIconSetFromFontello } from 'react-native-vector-icons';
import fontelloConfig from '../../config.json';
const Icon = createIconSetFromFontello(fontelloConfig);

const Messages = () => {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>
        Try editing me! 🎉
      </Text>
      <Icon name="dog-icons-set-happy-sad-angry-isolated-vector-1860708-copia-3" size={80} c
      
      
      
       />
    </View>
  );
}

export default Messages;