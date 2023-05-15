export class Section {
    constructor ({data, renderer}, container) {
        this._data = data;
        this._renderer = renderer;
        this._container = container;
    }

    addItem(el){
        this._container.prepend(el);
    }

    renderer(){
        this._data.forEach( item => {
            this._renderer(item);
        })
    }
}