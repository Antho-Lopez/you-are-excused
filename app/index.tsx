import React, { useState } from "react";
import { Text, View, StyleSheet, SafeAreaView, Image, TouchableOpacity } from "react-native";
import colors from '@/constants/colors';
import { excusesBilingue } from '@/constants/excuses';
import i18n from '@/utils/i18n';
import { useTranslation } from 'react-i18next';
import { Link } from "expo-router";

export default function Index() {
  const [excuse, setExcuse] = useState('');
  const [scale, setScale] = useState(1);
  const { t } = useTranslation();

  const handlePressIn = () => {
    setScale(0.90);
  };
  
  const handlePressOut = () => {
    setScale(1);
  };

  const generateRandomExcuse = () => {

    const randomIndex = Math.floor(Math.random() * excusesBilingue.length);
    const randomExcuse = excusesBilingue[randomIndex];
    const currentExcuse = i18n.language === 'fr' ? randomExcuse.fr : randomExcuse.en;
    setExcuse(currentExcuse);

  };

  return (
    <SafeAreaView style={styles.safeArea}>
      
      <Link style={styles.bmac} href="https://buymeacoffee.com/antholopez">
        <Image
          source={require('@/assets/images/buy-me-a-coffee.png')}
          style={styles.bmacImage}
        />
      </Link>

      <View style={styles.container}>
        <View style={styles.imageContainer}>
          <Image
            source={require('@/assets/images/logo.png')}
            style={styles.image}
          />
        </View>

        <View style={styles.contentContainer}>
          
          <Text style={styles.title}>{t('title')}</Text>
          
          <View style={styles.excuseContainer}>
            <Text style={styles.excuse}>
              {excuse || t('placeholder')}
            </Text>
          </View>

          <TouchableOpacity
            style={[styles.button, { transform: [{ scale }] }]} 
            onPress={generateRandomExcuse}
            onPressIn={handlePressIn} 
            onPressOut={handlePressOut} 
            activeOpacity={0.7}
          >
            <Text style={styles.buttonText}>{t('buttonText')}</Text>
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
  bmac: {
    alignSelf: 'flex-end',
    marginRight: 20,
  },
  bmacImage : {
    width: 50,
    height: 50,
  },
  container: {
    flex: 1,
    margin: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 40,
  },
  image: {
    width: 180,
    height: 180,
    borderRadius: 20,
    borderWidth: 4,
    borderColor: colors.yellow,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.25,
    shadowRadius: 5,
    elevation: 5,
  },
  contentContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
  },
  title: {
    fontSize: 35,
    textAlign: 'center',
    fontFamily: 'LuckiestGuy',
    color: colors.yellow,
    marginBottom: 20,
    textShadowColor: 'black',
    textShadowRadius: 5,
    textShadowOffset: { width: -2, height: 4 },
  },
  excuseContainer: {
    height: 150,
  },
  excuse: {
    marginTop: 20,
    fontSize: 24,
    height: 'auto',
    textAlign: 'center',
    fontFamily: 'LuckiestGuy',
    color: 'white',
    paddingHorizontal: 30,
    marginBottom: 40,
    textShadowColor: 'black',
    textShadowRadius: 5,
    textShadowOffset: { width: -2, height: 4 },
  },
  button: {
    backgroundColor: colors.red,
    borderRadius: 25,
    paddingHorizontal: 30,
    paddingVertical: 15,
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.25,
    shadowRadius: 5,
    width: '100%',
    transform: [{ scale: 1 }],
  },
  buttonText: {
    fontSize: 24,
    fontFamily: 'LuckiestGuy',
    color: 'white',
    textAlign: 'center',
    textShadowColor: 'black',
    textShadowRadius: 3,
    textShadowOffset: { width: -1, height: 2 },
  },
});
