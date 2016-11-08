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

const {height, width} = Dimensions.get('window');

export default class TodoList extends Component {
    constructor(props) {
        super(props);
        const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        this.state = {
            inputText: '',
            items: [{text: 'firstTodo', isDone: false}],
            rows: ds.cloneWithRows([])
        }
    }

    addTodo() {
        const toDoItem = {
            text: this.state.inputText,
            isDone: false
        };
        const items = this.state.items.concat(toDoItem);
        this.setState({inputText: '', items});
        this.textInput.focus();
    }

    getDataSource() {
        return this.state.rows.cloneWithRows(this.state.items);
    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.welcome}>
                    ToDo List
                </Text>
                <View style={styles.textInputContainer}>
                    <TextInput
                        ref={(input) => this.textInput = input}
                        placeholder='What are you up to...'
                        style={styles.textInput}
                        onChangeText={(inputText) => this.setState({inputText})}
                        value={this.state.inputText}
                    />
                    <TouchableOpacity onPress={() => {
                        this.addTodo();
                    }}>
                        <View style={styles.button}>
                            <Text style={styles.buttonText}>+</Text>
                        </View>
                    </TouchableOpacity>
                </View>
                <ListView
                    dataSource={this.getDataSource()}
                    renderRow={(rowData) =>
                        <View style={styles.itemRow}>
                            <Text style={styles.listItemText}>{rowData.text}</Text>
                            <TouchableOpacity onPress={()=> {
                                const items = this.state.items;
                                const index = _.findIndex(items, {text: rowData.text});
                                items.splice(index, 1);
                                this.setState({items});
                            }}>
                                <View style={styles.iconContainer}>
                                    <Text style={styles.icon}>✖️</Text>
                                </View>
                            </TouchableOpacity>
                        </View>

                    }
                />
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
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    buttonText: {
        fontSize: 36,
        color: 'white'
    },
    itemRow: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    listItemText: {},
    iconContainer: {
        height: 24,
        width: 24,
        borderRadius: 8,
        justifyContent: 'center',
        alignItems: 'center'
    },
    icon: {fontSize: 12}
});

AppRegistry.registerComponent('TodoList', () => TodoList);
