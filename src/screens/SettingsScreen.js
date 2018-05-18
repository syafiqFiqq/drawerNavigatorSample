import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import Header from '../components/Header';

export default class SettingsScreen extends Component {
    static navigationOptions = ({ navigation }) => {
        //drawerLabel = () => (<Text style={{ color: 'white', fontWeight: 'bold', }}>Settings</Text>);
        drawerLabel = 'Settings',
            drawerIcon = () => (
                <Icon name="cog" size={20} color='white' />
            );
        return { drawerLabel, drawerIcon };
    };
    render() {
        return (
            <View style={styles.container1}>
                <Header {...this.props} />
                <View style={styles.container2}>
                    <Text style={styles.text}> This is SettingsScreen </Text>
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
