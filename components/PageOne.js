import React, {Component} from 'react';
import {View, Text} from 'react-native';
import {Actions} from 'react-native-router-flux';
import {Title} from './TodoList';
import {store} from '../stores/TodoStore';

setTimeout(() => {
    console.log('set time out',);
    store.todos[0] = 'now is changing';
},3000)
export class PageOne extends Component {
    render() {
        return (
            <View style={{margin: 128}}>
                <Title store={store}/>
            </View>
        )
    }
}