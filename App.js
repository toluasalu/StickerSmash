import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,  Image, Pressable } from 'react-native';
import FontAwesome from "@expo/vector-icons/FontAwesome";

const PlaceholderImage = require('./assets/images/background-image.png');

export default function App() {
  
  return (
    <View style={styles.container}>
      <View style= {styles.imageContainer}>
        <Image source={PlaceholderImage} style={styles.image} />
      </View>
      <View style= {styles.footerContainer}>
       <View style= {styles.Container}>
       <Pressable style={styles.buttonContainer} onPress={() => alert('You pressed a button.')}>
          <Text style={styles.buttonLabel}>Choose a photo</Text>
        </Pressable>
        <Pressable style={styles.buttonContainer} onPress={() => alert('You pressed a button.')}>
          <Text style={styles.buttonLabel}>Use this photo</Text>
        </Pressable>
       </View>
      </View>
      
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
    backgroundColor: '#25292e',
    alignItems: 'center',
  },
  imageContainer: {
    flex: 1,
    paddingTop: 58,
  },
  image: {
    width: 320,
    height: 440,
    borderRadius: 18,
  },
  buttonContainer: {
    width: 320,
    height: 68,
    marginHorizontal: 20,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 3,
  },
  // Styles that are unchanged from previous step are hidden for brevity. 
  footerContainer: {
    flex: 1 / 3,
    alignItems: 'center',
  },

  button: {
    borderRadius: 10,
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  buttonIcon: {
    paddingRight: 8,
  },
  buttonLabel: {
    color: '#fff',
    fontSize: 16,
  },

});
