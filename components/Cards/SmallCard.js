import React from 'react';
import {View, Image} from 'react-native';

const SmallCard = ({source}) => {

    const width = 100;
    const height = 100;
  const br = 10;
  const m = 5;
    const bg = 'white';
    
  return (
    <View
      style={{
        width: width,
        height: height,
        borderRadius: br,
        backgroundColor: bg,
              margin: m,
        
          }}>
          
          <Image
        
          source={source}
          >
              
          </Image>
          
    </View>
  );
};

export default SmallCard;
