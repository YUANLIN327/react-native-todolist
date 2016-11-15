/**
 * Created by linyuan on 11/15/16.
 */
import React, {Component} from 'react';
import {View, Text, TouchableHighlight} from 'react-native';

class TodoItem extends Component {
    render() {
        return (
            <View style={{
                flex: 1, flexDirection: 'row', width: 70,
                height: 70, justifyContent: 'space-between',
                alignItems:'flex-start'
            }}>
                <Text>{this.props.text}</Text>
                <TouchableHighlight {{
                    width: 70,
                    height: 70,
                    justifyContent: 'center',
                    alignItems: 'center',
                    borderTopWidth: 1,
                    borderColor: '#ededed'
                }} />
            </View>
        )
    }
}

