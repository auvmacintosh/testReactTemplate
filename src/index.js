import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, NavLink, Route} from 'react-router-dom';
import Cp from './Cp';
import runtime from 'serviceworker-webpack-plugin/lib/runtime';

const App = () => {
    return (
        <Router>
            <Cp/>
            <ul>
                <li><NavLink exact to="/">Home</NavLink></li>
                <li><NavLink to="/contact">Contact</NavLink></li>
            </ul>
        </Router>
    )
};

ReactDOM.render(<App/>, document.getElementById('root'));

if ('serviceWorker' in navigator) {
    const registration = runtime.register();
    // window.addEventListener('load', ()=>{
    //     navigator.serviceWorker
    //         .register('sw.js')
    //         .then(reg => console.debug('Service Worker: Registered'))
    //         .catch(err => 'Service Worker: Error.');
    // });
}