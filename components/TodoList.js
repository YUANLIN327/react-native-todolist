/**
 * Created by linyuan on 11/11/16.
 */

import React, {Component} from 'react';
import {View, Text} from 'react-native';
import {observer} from 'mobx-react/native';

@observer
class Title extends Component {
    render() {
        return (
            <View>
                <Text>{this.props.store.todos[0]}</Text>
            </View>
        )
    }
}
export {Title};

