interface IData {
    id: string;
    url: string;
}

export class GalleryModel {
    id: string;
    img: string;

    constructor(public data: IData) {
        this.id = data.id || "";
        this.img = data.url || "";
    }
}