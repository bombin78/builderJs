import {model} from '@/model'; 
import '@/styles/main.css';
import '@/styles/scss.scss';

const $site = document.querySelector('#site');

model.forEach(block => {
    $site.insertAdjacentHTML('beforeend', block.toHtml());
});
