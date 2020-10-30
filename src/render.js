import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {stateUpdate} from './redux/state';

const Render = (state) => {
    ReactDOM.render(
        <React.StrictMode>
          <App state={state} stateUpdate={stateUpdate}/>
        </React.StrictMode>,
        document.getElementById('root')
      );
}

export default Render;

