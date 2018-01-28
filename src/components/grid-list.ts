import {bindable} from 'aurelia-framework';

export class GridList {

    @bindable
    private tiles: {title: string, content: string, action ?: any}[]



}