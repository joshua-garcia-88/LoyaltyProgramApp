import React, { Component } from "react";
import { View, Text, StyleSheet, ActivityIndicator, FlatList, Image } from 'react-native';

import Product from '../components/Product';
import services from '../services/Services';

export default class Catalog extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isLoading: true,
            Products: null,
            RemainPoints: null
        };
    }

    componentDidMount() {       
        services.getProducts().then((info) => {
            this.setState({
                isLoading: false,
                Products: info,
                RemainPoints: this.props.route.params["remainPoints"]
            });
        });
    }    

    separador = () => {
        return (
            <View style={styles.separador}></View>
        )
    }

    render() {
        if (this.state.isLoading) {
            return (
                <View style={styles.container}>
                    <ActivityIndicator size='large' color='#0ad4fa' />
                    <Text>Cargando Productos...</Text>
                </View>
            )
        }

        return (

            <View style={styles.container}>
                <FlatList
                    data={this.state.Products}
                    renderItem={({ item }) =>

                        <Product detail={item} remainPoints={this.state.RemainPoints} nav={this.props.navigation}></Product>
                    }
                    keyExtractor={item => item._id}
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
    },
    separador: {
        height: 3, 
        width: "100%", 
        backgroundColor: "#E6E6FA", 
        marginVertical: 5
    }
});