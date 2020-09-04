import React from 'react';
import {View, ImageBackground, Text} from 'react-native';
import styles from './styles';
import { RectButton } from 'react-native-gesture-handler';



import giveClassesBgImage from '../../assets/images/give-classes-background.png'
import { useNavigation } from '@react-navigation/native';

function GiveClasses(){

    const {goBack} = useNavigation();

    function handleNavigateBack () {
        goBack();
    }

    return (

    <View style={styles.container}>
        <ImageBackground 
        resizeMode="contain" 
        source={giveClassesBgImage} 
        style={styles.content} >

            <Text style={styles.title}>Quer abrir uma conta?</Text>
            <Text style={styles.description}>
                Para começar, você precisa se cadastrar na nossa plataforma web.
            </Text>

        </ImageBackground>

        <RectButton onPress={handleNavigateBack} style={styles.okButton}>
            <Text style={styles.okButtonText}>
                Tudo bem
            </Text>
        </RectButton>

    </View>
    
    
    )}

export default GiveClasses;

