import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import Hello from './component/Hello/hello'

ReactDOM.render(<App />, document.getElementById('root'));
ReactDOM.render(<Hello />,document.getElementById('root'));
/*使用es6的箭头函数*/
// var func = str => {
//     document.getElementById('root').innerHTML = str;
// };
// func('我现在在使用Babel!');
registerServiceWorker();
