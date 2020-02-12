import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import Moment from 'react-moment';

export default function ProductHistory(props) {

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
                    <Moment element={Text} format='DD-MM-YYYY HH:mm'>{props.detail.createDate}</Moment>
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
    category: {
        color: 'gray'
    },
    points: {
        fontWeight: 'bold'
    }
});