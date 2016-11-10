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


// const styles = StyleSheet.create({
//     container: {
//         flex: 1, backgroundColor: 'transparent', justifyContent: 'center',
//         alignItems: 'center',
//     },
//     tabBarStyle: {
//         backgroundColor: '#eee',
//     },
//     tabBarSelectedItemStyle: {
//         backgroundColor: '#ddd',
//     },
// });
//
// const reducerCreate = params => {
//     const defaultReducer = new Reducer(params);
//     return (state, action) => {
//         console.log('ACTION:', action);
//         return defaultReducer(state, action);
//     };
// };
// const getSceneStyle = (/* NavigationSceneRendererProps */ props, computedProps) => {
//     const style = {
//         flex: 1,
//         backgroundColor: '#fff',
//         shadowColor: null,
//         shadowOffset: null,
//         shadowOpacity: null,
//         shadowRadius: null,
//     };
//     if (computedProps.isActive) {
//         style.marginTop = computedProps.hideNavBar ? 0 : 64;
//         style.marginBottom = computedProps.hideTabBar ? 0 : 50;
//     }
//     return style;
// };
//
// let currentSwitchPasge = 'text1';
//
// const a = (props) => (
//     <View>
//         <Text style={{marginTop: 100, textAlign: 'center'}}>current page: {props.text}</Text>
//         <Button
//             onPress={() => {
//                 currentSwitchPage = currentSwitchPage === 'text1' ? 'text2' : 'text1';
//                 Actions.refresh({key: 'switcher'});
//             }}
//         >
//             Switch!
//         </Button>
//         <Button
//             onPress={() => {
//                 Actions.launch({type: ActionConst.RESET});
//             }}
//         >
//             Exit
//         </Button>
//     </View>
// );

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
