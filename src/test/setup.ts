import 'reflect-metadata';
import 'document-register-element'
import {Options}               from 'aurelia-loader-nodejs';
import 'aurelia-pal-browser';
import {initialize} from 'aurelia-pal-browser';
initialize();
import * as path               from 'path';
Options.relativeToDir = path.join(__dirname, '../../dist');
