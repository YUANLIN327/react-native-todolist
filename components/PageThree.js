import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Actions } from 'react-native-router-flux';

export class PageThree extends Component {
    render() {
        return (
            <View style={{margin: 128}}>
                <Text onPress={Actions.pageFour}>This is Page Three!</Text>
            </View>
        )
    }
}