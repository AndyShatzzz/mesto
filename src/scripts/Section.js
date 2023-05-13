export class Section {
    constructor ({data, renderer}, containerSelector) {
        this._data = data;
        this._renderer = renderer;
        this._containerSelector = containerSelector;
    }

    addItem(el){
        this._containerSelector.append(el);
    }

    renderer(){
        this._data.forEach( item => {
            this._renderer(item);
        })
    }
}