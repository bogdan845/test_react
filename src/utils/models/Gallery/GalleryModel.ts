export class GalleryModel {
    id: string;
    img: string;

    constructor(public data: any) {
        this.id = data.id || "";
        this.img = data.url || "";
    }
}