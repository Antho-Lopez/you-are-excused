import { Text, View, StyleSheet, SafeAreaView, Image, TouchableOpacity } from "react-native";
import colors from '@/constants/colors';

export default function Index() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        
        <View style={styles.imageContainer}>
          <Image
              source={require('@/assets/images/logo.png')}
              style={styles.image}
          />
        </View>

        <View style={styles.contentContainer}>
          <Text style={styles.title}>Trouve ton excuse</Text>
          <Text style={styles.excuse}>L'excuse générée</Text>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>test</Text>
          </TouchableOpacity>
        </View>

      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: colors.darkBlue,
  },
  container: {
    height: '80%',
    margin: 20,
    alignContent: 'center',
    justifyContent: 'center',
  },
  imageContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  image: {
    width: 200,
    height: 200,
    borderRadius: 25,
  },
  contentContainer: {
    marginTop: 60,
    alignContent: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 30,
    textAlign: 'center',
    fontFamily: 'LuckiestGuy',
    color: colors.yellow,
    textShadowColor: 'black',
    textShadowRadius: 3,
    textShadowOffset: { width: -3, height: 4 },
  },
  excuse: {
    marginTop: 20,
    fontSize: 24,
    textAlign: 'center',
    fontFamily: 'LuckiestGuy',
    color: colors.yellow,
    textShadowColor: 'black',
    textShadowRadius: 3,
    textShadowOffset: { width: -3, height: 4 },
  },
  button: {
    marginTop: 20,
    backgroundColor: colors.red,
    borderRadius: 25,
  },
  buttonText: {
    padding: 10,
    textAlign: 'center',
    fontSize: 30,
    fontFamily: 'LuckiestGuy',
    color: colors.yellow,
    textShadowColor: 'black',
    textShadowRadius: 1,
    textShadowOffset: { width: -3, height: 4 },
  }
});
