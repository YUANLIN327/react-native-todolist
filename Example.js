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
import {PageThree} from './components/PageThree';
import {PageFour} from './components/PageFour';
import {PageFive} from './components/PageFive';
import {PageSix} from './components/PageSix';

const TabIcon = ({selected, title}) => (
    <Text style={{color: selected ? 'red' : 'black'}}>{title}</Text>
);
export class Example extends Component {
    render() {
        return (
            <Router>
                <Scene key="root">
                    <Scene
                        key="tabbar"
                        tabs
                        tabBarStyle={{backgroundColor: '#FFFFFF'}}>
                        <Scene key="tab1" title="Tab 1" icon={TabIcon}>
                            <Scene key="pageOne" title="Page One" component={PageOne} initial/>
                            <Scene key="pageTwo" title="Page Two" component={PageTwo}/>
                        </Scene>
                        <Scene key="tab2" title="Tab 2" icon={TabIcon}>
                            <Scene key="pageThree" title="Page Three" component={PageThree} initial/>
                            <Scene key="pageFour" title="Page Four" component={PageFour}/>
                        </Scene>
                        <Scene key="tab3" title="Tab 3" icon={TabIcon}>
                            <Scene key="pageFive" title="Page Five" component={PageFive} initial/>
                            <Scene key="pageSix" title="Page Six" component={PageSix}/>
                        </Scene>
                    </Scene>
                </Scene>
            </Router>
        );
    }
}
