import React, { Component } from "react";
import { View, Text, StyleSheet, ActivityIndicator, Image } from 'react-native';
import Button from 'react-native-button';

import services from '../services/Services';

export default class Login extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isLoading: true,
            Usuario: null
        };
    }

    componentDidMount() {
        services.getUserInfo().then((info) => {
            this.setState({
                isLoading: false,
                Usuario: info
            });
        });
    };

    goCatalog = () => {
        this.props.navigation.navigate('Catalog', {             
            remainPoints: (this.props.route.params == undefined ? this.state.Usuario.points : this.props.route.params.points) });
    }

    goHistory = () => {
        this.props.navigation.navigate('History');
    }

    render() {

        if (this.state.isLoading) {
            return (
                <View style={styles.container}>
                    <ActivityIndicator size='large' color='#0ad4fa' />
                    <Text>Cargando información...</Text>
                </View>
            )
        }

        return (
            <View style={styles.container}>
                <Image source={require('../../assets/logo.png')} style={styles.image} />
                <Text style={styles.texto}>Hola!</Text>
                <Text style={styles.texto}>{this.state.Usuario.name}</Text>
                {
                    this.props.route.params == undefined
                        ?
                        <Text style={[styles.texto, styles.negrita]}>Tienes {this.state.Usuario.points} puntos</Text>
                        :
                        <Text style={[styles.texto, styles.negrita]}>Tienes {this.props.route.params.points} puntos</Text>
                }


                <Button style={styles.boton} onPress={this.goCatalog}>Catálogo</Button>
                <Button style={styles.boton} onPress={this.goHistory}>Historial</Button>
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
        width: 150,
        height: 150,
        resizeMode: 'contain',
        marginTop: -50
    },
    texto: {
        fontSize: 20
    },
    negrita: {
        fontWeight: 'bold'
    }
});