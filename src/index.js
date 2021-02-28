import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import rootReducer from './reducers/rootReducer';

const store = createStore(rootReducer);

ReactDOM.render(
  <React.StrictMode>
    {/* 将创建的store作用于APP组件，app就可以请求store中的数据 */}
    <Provider store={store}> 
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
