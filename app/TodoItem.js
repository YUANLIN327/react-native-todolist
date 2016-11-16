/**
 * Created by linyuan on 11/15/16.
 */
import React, {Component} from 'react';
import {View, Text, TouchableHighlight, StyleSheet} from 'react-native';

class TodoItem extends Component {
    render() {
        return (<View style={styles.itemContainer}>
            <Text
                style={styles.item}>{this.props.text}</Text>
            <Text
                style={styles.deleteItem}
                onPress={this.props.deleteTodoItem.bind(this, this.props.index)}>Remove</Text>
        </View>);
    }
}

const styles = StyleSheet.create({
    itemContainer: {
        borderBottomWidth: 1,
        borderBottomColor: '#ededed',
        flexDirection: 'row'
    },
    item: {
        color: '#156e9a',
        fontSize: 18,
        flex: 3,
        padding: 20
    },
    deleteItem: {
        flex: 1,
        padding: 20,
        color: '#a3a3a3',
        fontWeight: 'bold',
        marginTop: 3
    }
});

export default TodoItem;
