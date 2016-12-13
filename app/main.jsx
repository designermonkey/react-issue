import React from 'react';
import { render } from 'react-dom';
import { polyfill } from 'es6-promise';
import Something from './something';

polyfill();

const load = () => render((
    <Something/>
), document.getElementById('app'));

if (document.readyState !== 'complete') {
    document.addEventListener('DOMContentLoaded', load);
} else {
    load();
}
