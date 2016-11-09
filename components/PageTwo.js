import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Actions } from 'react-native-router-flux';

export class PageTwo extends Component {
    render() {
        return (
            <View style={{margin: 128}}>
                <Text onPress={Actions.pageOne}>This is Page Two!</Text>
            </View>
        )
    }
}