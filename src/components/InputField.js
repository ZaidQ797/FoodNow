import React from "react";
import { TextInput, StyleSheet } from "react-native";
const InputField = props => {
  return (
    <TextInput
      style={styles.input}
      placeholder={props.placeholder}
      secureTextEntry={props.secureTextEntry}
      keyboardType={props.keyboardType}
      maxLength={props.maxLength}
      onChangeText={props.onChangeText}
      value={props.value}
    ></TextInput>
  );
};
const styles = StyleSheet.create({
  input: {
    margin: 10,
    backgroundColor: "#e8f0ff",
    padding: 10,
    borderRadius: 30,
    width: "75%",
    fontFamily: "geometriaBold",
    textAlign: "center"

    // justifyContent:'center',
    // alignItems:'center'
  }
});
export default InputField;
