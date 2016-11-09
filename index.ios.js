/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    TextInput,
    Dimensions,
    TouchableOpacity,
    ListView
} from 'react-native';
import _ from 'lodash';
import {Router, Scene} from 'react-native-router-flux';
import {PageOne} from './components/PageOne'
import {PageTwo} from './components/PageTwo'

const {height, width} = Dimensions.get('window');


class TodoList extends Component {
    render() {
        return (
            <Router>
                <Scene key="root">
                    <Scene key="pageOne" component={PageOne} title="PageOne" initial={true} />
                    <Scene key="pageTwo" component={PageTwo} title="PageTwo" />
                </Scene>
            </Router>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
        paddingTop: 40
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        marginBottom: 20
    }
});

AppRegistry.registerComponent('TodoList', () => TodoList);
