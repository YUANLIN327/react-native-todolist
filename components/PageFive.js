import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Actions } from 'react-native-router-flux';

export class PageFive extends Component {
    render() {
        return (
            <View style={{margin: 128}}>
                <Text onPress={Actions.pageSix}>This is Page Five!</Text>
            </View>
        )
    }
}