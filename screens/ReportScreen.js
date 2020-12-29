import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

const ReportScreen = ({ navigation }) => {
    return (
      <View style={styles.container}>
        <Text>Report Screen</Text>
        <Button
          title="Go to Calendar Screen"
          onPress={() => navigation.navigate("Calendar")}
        />
      </View>
    )
}

export default ReportScreen;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });