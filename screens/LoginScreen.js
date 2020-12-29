import React from 'react';
import { 
    View, 
    Text, 
    Image, 
    ScrollView, 
    TextInput, 
    SafeAreaView, 
    StyleSheet, 
    Button } from 'react-native';

const LoginScreen = ({ setSignedIn }) => {
    return (
        <View style={styles.container}>
            <Text>Login</Text>
            <TextInput 
                style={{
                    width: 100,
                    height: 40,
                    borderColor: 'gray',
                    borderWidth: 1
                }}
                defaultValue="Email"
            />
            <TextInput 
                style={{
                    width: 100,
                    height: 40,
                    borderColor: 'gray',
                    borderWidth: 1
                }}
                defaultValue="Password"
            />
            <Button
                onPress={() => setSignedIn(true)} 
                title="Login"
                color="blue"
                acessibilityLabel="Learn more about this button"
            />
        </View>
    )
}

export default LoginScreen


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});