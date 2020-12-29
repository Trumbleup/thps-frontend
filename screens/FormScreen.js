import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

const FormScreen = ({ navigation }) => {
    return (
      <View style={styles.container}>
        <Text>Form Screen</Text>
        <Button
          title="Go to Report Screen"
          onPress={() => navigation.navigate("Report")}
        />
      </View>
    )
}

export default FormScreen;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });