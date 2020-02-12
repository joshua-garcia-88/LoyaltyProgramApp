import { Alert } from "react-native";
import * as Constants from '../constants/Constants';

class services {

    getUserInfo = () => {    
        return fetch('https://coding-challenge-api.aerolab.co/user/me', {
            headers: {
                'Authorization': Constants.TOKEN
            }
        })
            .then((response) => response.json())
            .then((responseJson) => {
                return responseJson;
            })
            .catch((error) => {
                Alert.alert(error);
            });
    };

    getProducts = () => {
        return fetch('https://coding-challenge-api.aerolab.co/products', {
            headers: {
                'Authorization': Constants.TOKEN
            }
        })
            .then((response) => response.json())
            .then((responseJson) => {
                return responseJson;
            })
            .catch((error) => {
                Alert.alert(error);
            });
    };

    redeemProduct = (id) => {
        return fetch('https://coding-challenge-api.aerolab.co/redeem', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': Constants.TOKEN
            },
            body: JSON.stringify(
                {
                    productId: id
                }
            )
        })
            .then((response) => response.json())
            .then((responseJson) => {
                return true;
            })
            .catch((error) => {
                Alert.alert(error);
            });
    };

    getHistory = () => {
        return fetch('https://coding-challenge-api.aerolab.co/user/history', {
            headers: {
                'Authorization': Constants.TOKEN
            }
        })
            .then((response) => response.json())
            .then((responseJson) => {
                return responseJson;
            })
            .catch((error) => {
                Alert.alert(error);
            });
    };
}

export default new services()