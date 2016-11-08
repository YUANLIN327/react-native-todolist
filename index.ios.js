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
    TouchableOpacity
} from 'react-native';

const {height, width} = Dimensions.get('window');
class CreateButton extends Component {
    constructor(props) {
        super(props);
        this.state = {myButtonOpacity: 1}
    }

    render() {
        return (
            <TouchableOpacity onPress={() => this.setState({myButtonOpacity: 0.1})}
                              onPressOut={() => this.setState({myButtonOpacity: 1})}>
                <View style={[styles.button, {opacity: this.state.myButtonOpacity}]}>
                    <Text>Press me!</Text>
                </View>
            </TouchableOpacity>
        )
    }
}

export default class TodoList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            inputText: 'What are you up to...',
            toDos: []
        }
    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.welcome}>
                    Todo List
                </Text>
                <View style={styles.textInputContainer}>
                    <TextInput
                        style={styles.textInput}
                        onChangeText={(inputText) => this.setState({inputText})}
                        value={this.state.inputText}
                    />
                    <TouchableOpacity>
                        <View style={styles.button}>
                            <Text style={styles.buttonText}>+</Text>
                        </View>
                    </TouchableOpacity>
                </View>
                <Text style={styles.instructions}>
                    To get started, edit index.ios.js
                </Text>
                <Text style={styles.instructions}>
                    Press Cmd+R to reload,{'\n'}
                    Cmd+D or shake for dev menu
                </Text>
            </View>
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
    },
    textInputContainer: {
        alignSelf: 'stretch',
        flexDirection: 'row',
        alignItems: 'flex-start',
        justifyContent: 'space-around'
    },
    textInput: {
        paddingLeft: 12,
        marginBottom: 20,
        height: 48,
        width: width * 0.7,
        borderWidth: 1
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
    button: {
        height: 48,
        width: 48,
        backgroundColor: 'gray',
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center'
    },
    buttonText:{
        fontSize:36,
        color:'white'
    }
});

AppRegistry.registerComponent('TodoList', () => TodoList);
