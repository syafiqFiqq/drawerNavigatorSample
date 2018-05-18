import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import Header from '../components/Header';

export default class InfoScreen extends Component {
    static navigationOptions = ({ navigation }) => {
        //drawerLabel = () => (<Text style={{ color: 'white', fontWeight: 'bold', }}>Info</Text>);
        drawerLabel = 'Info',
            drawerIcon = () => (
                <Icon name="info" size={20} color='white' />
            );
        return { drawerLabel, drawerIcon };
    };
    render() {
        return (
            <View style={styles.container1}>
                <Header {...this.props} />
                <View style={styles.container2}>
                    <Text> This is InfoScreen </Text>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container1: {
        flex: 1,
        backgroundColor: '#df8495'
    },
    container2: {
        justifyContent: 'center',
        alignItems: 'center',
    }
});

