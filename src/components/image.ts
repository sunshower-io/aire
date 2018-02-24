export class Image {

    public encoding : string;
    public image : string;
    public url : string;

    constructor(data?:any) {
        Object.assign(this, data);
    }

    getSrc() : string {
        if (this.url) {
            return this.url;
        } else if (this.encoding && this.image) {
            return `${this.encoding},${this.image}`;
        } else {
            return "";
        }
    }
}