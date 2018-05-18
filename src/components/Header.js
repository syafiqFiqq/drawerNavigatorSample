import React, { Component } from 'react';
import { View, Text, TouchableHighlight, StyleSheet, Dimensions } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

var { width, height } = Dimensions.get('window')

export default class Header extends Component {
    render() {
        return (

            <View style={styles.container1}>
                <TouchableHighlight style={styles.touchableHighlight} onPress={() => {
                    this.props.navigation.toggleDrawer()
                }}>
                    <Icon name="bars" size={20} color="white" />
                </TouchableHighlight>
                <View style={styles.container2}>
                    <Text>Fiqq's</Text>
                </View>
            </View>


        );
    }
}

const styles = StyleSheet.create({
    container1: {
        height: 70,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        backgroundColor: '#ab567f'
    },
    container2: {
        marginTop: 20,
        marginLeft: (width / 2) - 50,
    },
    touchableHighlight: {
        marginTop: 20,
        marginLeft: 10,
    }
});
