import React from "react";
import { View , Text, Button } from "react-native";


type CardProps= {
    a: string
    b: string
    colorButton : string
}
export const CardIIT : React.FC<CardProps> =(props) => {
    const {a,b , colorButton} = props
    return (<View>
        <Text>
        {a}
        </Text>
        <Button title={b} color={colorButton}/> 
        
    </View>)    
}
