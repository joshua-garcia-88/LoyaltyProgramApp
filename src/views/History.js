import React, { Component } from "react";
import { View, Text, StyleSheet, ActivityIndicator, FlatList, Image } from 'react-native';

import ProductHistory from '../components/ProductHistory';
import services from '../services/Services';

export default class History extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isLoading: true,
            Products: null,
            Points: null
        };
    }

    componentDidMount() {
        services.getHistory().then((info) => {
            this.setState({
                isLoading: false,
                Products: info
            });
        });
    }

    separador = () => {
        return (
            <View style={{ height: 3, width: "100%", backgroundColor: "#E6E6FA", marginVertical: 3 }}></View>
        )
    }

    render() {
        if (this.state.isLoading) {
            return (
                <View style={styles.container}>
                    <ActivityIndicator size='large' color='#0ad4fa' />
                    <Text>Cargando Historial...</Text>
                </View>
            )
        }

        return (

            <View style={styles.container}>
                <FlatList
                    data={this.state.Products}
                    renderItem={({ item }) =>

                        <ProductHistory detail={item}></ProductHistory>
                    }
                    keyExtractor={item => item.productId + item.createDate}
                    horizontal={false}
                    ItemSeparatorComponent={this.separador}
                    ListEmptyComponent={<Text> No hay Productos </Text>}>
                </FlatList>
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
    }
});