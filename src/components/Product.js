import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import Button from 'react-native-button';
import services from '../services/Services';

export default function Product(props) {

    function redeem(id) {
        if (services.redeemProduct(id)) {
            props.nav.navigate('Success');
        }
    }

    return (

        <TouchableOpacity>
            <View style={styles.container}>
                <View style={styles.headerLeft}>
                    <Image source={{ uri: props.detail.img.url }} style={styles.image} />
                </View>
                <View style={styles.headerRight}>
                    <Text style={styles.category}>{props.detail.category}</Text>
                    <Text>{props.detail.name}</Text>
                    <Text style={styles.points}>{props.detail.cost} Puntos</Text>
                    {
                        props.detail.cost > props.remainPoints
                            ?
                            <Text style={styles.remain}>Te faltan {props.detail.cost - props.remainPoints} Puntos</Text>
                            :
                            <Button style={styles.button} onPress={redeem.bind(this, props.detail._id)}>Canjear</Button>
                    }
                </View>
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container: {
        width: 300,
        flexDirection: 'row' //horitzontal
    },
    headerLeft: {
        flex: 1
    },
    headerRight: {
        flex: 1,
        justifyContent: 'center'
    },
    image: {
        width: 150,
        height: 150,
        resizeMode: 'contain'
    },
    button:
    {
        backgroundColor: '#0ad4fa',
        color: 'white',
        // fontSize: 20,
        borderRadius: 10,
        padding: 5,
        // width: 300,
        marginTop: 5
    },
    category: {
        color: 'gray'
    },
    points: {
        fontWeight: 'bold'
    },
    remain: {
        color: 'red'
    }
});