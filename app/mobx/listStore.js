import {observable} from 'mobx';

let index = 0;

class ObservableListStore {
    @observable list = [];

    addList(item) {
        this.list.push({
            name: item,
            items: [],
            index
        });
        index++;
    }

    removeList(item) {
        this.list = this.list.filter((l) => {
            return l.index !== item.index;
        })
    }

    addItem(item, name) {
        this.list.forEach((l) => {
            if (l.index === item.index) {
                console.log('oh yes?');

                l.items.push(name);
            }
        })
    }

    deleteTodoItem(item, i) {
        console.log('item', item);
        console.log('i', i);
        this.list.forEach((l) => {
            if (l.index === item.index) {
                l.items.splice(i, 1);
            }
        })
    }
}

const observableListStore = new ObservableListStore();
export default observableListStore;

