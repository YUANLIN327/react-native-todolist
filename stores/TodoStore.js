/**
 * Created by linyuan on 11/11/16.
 */
import {observable, autorun} from 'mobx';

class TodoStore {
    @observable todos = ['buy milks', 'buy eggs'];
    @observable filter = '';
}

let store = window.store = new TodoStore;
export {store};

autorun( () => {
    console.log('store',store.filter);
    console.log('store',store.todos[0]);
});