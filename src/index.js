import * as $ from 'jquery'; 
import 'popper.js';
import 'bootstrap';
import {model} from '@/model'; 
import {App} from '@/classes/app'; 
import '@/scss/main.scss';

new App(model).init();
