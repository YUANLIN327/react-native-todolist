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

class ToDoInput extends Component {
    add() {
        this.textInput.focus();
        return this.props.addTodo();
    }

    render() {
        return (
            <View style={styles.textInputContainer}>
                <TextInput
                    ref={(input) => this.textInput = input}
                    placeholder='What are you up to...'
                    style={styles.textInput}
                    onChangeText={this.props.onChangeText}
                    value={this.props.inputText}
                />
                <TouchableOpacity onPress={this.add.bind(this)}>
                    <View style={styles.button}>
                        <Text style={styles.buttonText}>+</Text>
                    </View>
                </TouchableOpacity>
            </View>
        )
    }
}

class ToDoItem extends Component {
    renderItem(checked) {
        if (checked) {
            return (
                <View style={[styles.iconContainer, {backgroundColor: 'grey', borderWidth: 1, borderColor: 'black'}]}>
                    <Text style={styles.icon}>✔️</Text>
                </View>
            );
        }
        return (
            <View style={[styles.iconContainer,
                {backgroundColor: 'white', borderWidth: 1, borderColor: 'black'}]}></View>
        );
    }

    render() {
        return (
            <View style={styles.itemRow}>
                <TouchableOpacity>
                    {this.renderItem(this.props.toDoItem.isDone)}
                </TouchableOpacity>
                <Text style={styles.listItemText}>{parseInt(this.props.rowID) + 1}.&nbsp;{this.props.toDoItem.text}</Text>
                <TouchableOpacity>
                    <View style={styles.iconContainer}>
                        <Text style={styles.icon}>✖️</Text>
                    </View>
                </TouchableOpacity>
            </View>
        )
    }
}


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
    }

    getDataSource() {
        return this.state.rows.cloneWithRows(this.state.items);
    }

    onChangeText(inputText) {
        this.setState({inputText})
    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.welcome}>
                    ToDo List
                </Text>
                <ToDoInput ref={(input) =>this.textInput = input}
                           inputText={this.state.inputText}
                           onChangeText={this.onChangeText.bind(this)}
                           addTodo={this.addTodo.bind(this)}
                />
                <ListView
                    dataSource={this.getDataSource()}
                    renderRow={(rowData, sectionID, rowID) =>
                        <ToDoItem toDoItem={rowData} rowID={rowID}/>
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
        width: width * 0.9,
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 20
    },
    listItemText: {
        fontSize: 18
    },
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
