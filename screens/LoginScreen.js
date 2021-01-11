import React from 'react';
import { 
    View, 
    Text, 
    Image, 
    ScrollView, 
    TextInput, 
    SafeAreaView, 
    StyleSheet, 
    Button, 
    ImageBackground
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import logo from '../assets/images/thps_logo.png';

const LoginScreen = ({ setSignedIn }) => {
    return (
        <View style={styles.container}>
            <View style={styles.titleContainer}>
                <Text style={{fontSize: 24, fontWeight: 'bold',}}>Texas Home Pro Services</Text>
            </View>
            <View style={styles.loginContainer}> 
                <TextInput 
                    style={{
                        width: 300,
                        height: 40,
                        padding: 10,
                        marginTop: 10,
                        borderColor: 'gray',
                        borderWidth: 1
                    }}
                    defaultValue="Email"
                />
                <TextInput 
                    style={{
                        width: 300,
                        height: 40,
                        padding: 10,
                        marginTop: 10,
                        marginBottom: 10,
                        borderColor: 'gray',
                        borderWidth: 1
                    }}
                    defaultValue="Password"
                />
                <Button
                    onPress={() => setSignedIn(true)} 
                    title="Login"
                    color="#00205B"
                    acessibilityLabel="Learn more about this button"
                />
            </View>
            {/* <View style={styles.imageContainer}>
                <Image source={logo} style={styles.image}></Image>  
            </View> */}
        </View>
    )
}

export default LoginScreen


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: 'center',
    backgroundColor: '#F5F5F5',
  },
  background: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    height: 800,
  },
  titleContainer: {
      flex: 1,
      justifyContent: "center",
      alignItems: 'center',
    },
    loginContainer: {
        flex: 2,
        justifyContent: 'flex-start'
    },
    imageContainer: {
        flex: 1,
        justifyContent: 'flex-start'
    },
    image: {
        width: 300,
        height: 200,
        resizeMode: 'contain'
    },
});