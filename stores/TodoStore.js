/**
 * Created by linyuan on 11/11/16.
 */
import React, {Component} from 'react';

import {observable, autorun} from 'mobx';

class TodoStore extends Component {
    @observable todos = ['buy milk', 'buy eggs'];
    @observable filters = '';
}


let store = window.store = new TodoStore;
setTimeout(()=> {
    console.log('calling',);
    store.todos[0] = 'now changing';
}, 2000);
export {store};

