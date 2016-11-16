import React, {Component} from 'react'
import {View, Text, StyleSheet, TextInput, TouchableHighlight} from 'react-native'
import {observer} from 'mobx-react/native';
import TodoItem from './TodoItem';


@observer
class NewItem extends Component {
    constructor(props) {
        super(props)
        this.state = {
            newItem: ''
        }
    }

    addItem() {
        if (this.state.newItem === '') return;
        console.log('calling', this.state.newItem);
        this.props.store.addItem(this.props.item, this.state.newItem)
        this.setState({
            newItem: ''
        })
    }

    deleteTodoItem(i) {
        console.log('i', i);
        console.log('item', this.props.item);
        this.props.store.deleteTodoItem(this.props.item, i);
    }

    updateNewItem(text) {
        this.setState({
            newItem: text
        })
    }


    render() {
        const {item} = this.props;
        return (
            <View style={{flex: 1}}>
                <View style={styles.heading}>
                    <Text style={styles.headingText}>{item.name}</Text>
                    <Text
                        onPress={this.props.navigator.pop}
                        style={styles.closeButton}>×</Text>
                </View>
                {!item.items.length && <NoItems />}
                {item.items.length ? <View style={{flex: 1, paddingTop: 10}}>
                    {item.items.map((todoItem, i) => {
                        return <TodoItem key={Math.random()} text={todoItem} index={i}
                                         deleteTodoItem={this.deleteTodoItem.bind(this, i)}/>
                    })
                    }
                </View> : <View />}
                <View style={{flexDirection: 'row'}}>
                    <TextInput
                        value={this.state.newItem}
                        onChangeText={(text) => this.updateNewItem(text)}
                        style={styles.input}/>
                    <TouchableHighlight
                        onPress={this.addItem.bind(this)}
                        style={styles.button}>
                        <Text>Add</Text>
                    </TouchableHighlight>
                </View>
            </View>
        )
    }
}

const NoItems = () => (
    <View style={styles.noItem}>
        <Text style={styles.noItemText}>No Items, Add Items To Get Started</Text>
    </View>
)
const Items = ({items}) => (
    <View style={{flex: 1, paddingTop: 10}}>
        {items.map((item, i) => {
            return <Text style={styles.item} key={i}>• {item}</Text>
        })
        }
    </View>
)

const styles = StyleSheet.create({
    heading: {
        height: 80,
        justifyContent: 'center',
        alignItems: 'center',
        borderBottomWidth: 1,
        borderBottomColor: '#156e9a'
    },
    headingText: {
        color: '#156e9a',
        fontWeight: 'bold'
    },
    input: {
        height: 70,
        backgroundColor: '#ededed',
        padding: 20,
        flex: 1
    },
    button: {
        width: 70,
        height: 70,
        justifyContent: 'center',
        alignItems: 'center',
        borderTopWidth: 1,
        borderColor: '#ededed'
    },
    closeButton: {
        position: 'absolute',
        right: 17,
        top: 18,
        fontSize: 36
    },
    noItem: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    noItemText: {
        fontSize: 22,
        color: '#156e9a'
    },
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

export default NewItem