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
import {Router, Scene, Reducer, Switch, Modal, Actions, ActionConst} from 'react-native-router-flux';
import {PageOne} from './components/PageOne'
import {PageTwo} from './components/PageTwo'


const styles = StyleSheet.create({
    container: {
        flex: 1, backgroundColor: 'transparent', justifyContent: 'center',
        alignItems: 'center',
    },
    tabBarStyle: {
        backgroundColor: '#eee',
    },
    tabBarSelectedItemStyle: {
        backgroundColor: '#ddd',
    },
});

const reducerCreate = params => {
    const defaultReducer = new Reducer(params);
    return (state, action) => {
        console.log('ACTION:', action);
        return defaultReducer(state, action);
    };
};
const getSceneStyle = (/* NavigationSceneRendererProps */ props, computedProps) => {
    const style = {
        flex: 1,
        backgroundColor: '#fff',
        shadowColor: null,
        shadowOffset: null,
        shadowOpacity: null,
        shadowRadius: null,
    };
    if (computedProps.isActive) {
        style.marginTop = computedProps.hideNavBar ? 0 : 64;
        style.marginBottom = computedProps.hideTabBar ? 0 : 50;
    }
    return style;
};

let currentSwitchPasge = 'text1';

const a = (props) => (
    <View>
        <Text style={{marginTop: 100, textAlign: 'center'}}>current page: {props.text}</Text>
        <Button
            onPress={() => {
                currentSwitchPage = currentSwitchPage === 'text1' ? 'text2' : 'text1';
                Actions.refresh({key: 'switcher'});
            }}
        >
            Switch!
        </Button>
        <Button
            onPress={() => {
                Actions.launch({type: ActionConst.RESET});
            }}
        >
            Exit
        </Button>
    </View>
);
export class Example extends Component {
    render() {
        return (
            <Router>
                <Scene key="root">
                    <Scene key="pageOne" component={PageOne} title="PageOne" initial />
                    <Scene key="pageTwo" component={PageTwo} title="PageTwo"/>
                </Scene>
            </Router>
        );
    }
}
