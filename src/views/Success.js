import React, { Component } from "react";
import { View, Text, StyleSheet, Image } from 'react-native';

import services from '../services/Services';
import Button from 'react-native-button';
import { CommonActions } from '@react-navigation/native';

export default class Success extends Component {

    constructor(props) {
        super(props);
    }

    continuar = () => {

        services.getUserInfo().then((info) => {
            this.props.navigation.dispatch(
                CommonActions.navigate({
                  name: 'Dashboard',
                  params: {
                    points: info.points,
                  }
                })
              )
        });
        
    }

    render() {
        return (
            <View style={styles.container}>
                <Image source={require('../../assets/success.png')} style={styles.image} />
                <Text style={styles.texto}>Canje realizado con exito!</Text>
                <Button style={styles.boton} onPress={this.continuar}>Continuar</Button>
            </View>

        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white'
    },
    boton:
    {
        backgroundColor: '#0ad4fa',
        color: 'white',
        fontSize: 25,
        borderRadius: 10,
        padding: 10,
        width: 300,
        marginTop: 10
    },
    image: {
        width: 100,
        height: 100,
        resizeMode: 'contain'        
    },
    texto: {
        fontSize: 20 ,
        marginTop: 20 
    }
});