import React from 'react';
import { Text } from 'react-native';
const Mytext = ({text,style}) => {
    return (
        <Text style={style}>{text}</Text>
    );
}

export default Mytext;