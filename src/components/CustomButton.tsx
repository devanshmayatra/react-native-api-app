import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";
import { styles } from "../styles";

const CustomButton = ({ title, onPress }:{title:string , onPress: ()=> void}) => {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  );
};

export default CustomButton;
