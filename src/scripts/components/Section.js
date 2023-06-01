export class Section {
    constructor ({ renderer }, container) {
        this._renderer = renderer;
        this._container = container;
    }

    addItem(el){
        this._container.prepend(el);
    }

    renderer(data){
        data.forEach( item => {
            this._renderer(item);
        })
    }
}