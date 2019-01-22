import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'semantic-ui-css/semantic.min.css'
import App from './App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { createStore, combineReducers, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import usersReducer from './reducers/usersReducer'
import { composeWithDevTools } from 'redux-devtools-extension'
import registerServiceWorker from './registerServiceWorker'
import RoomIndex from '../src/components/RoomIndex';
import RoomForm from '../src/components/RoomForm';



const rootReducer = combineReducers({ usersReducer: usersReducer })

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))


ReactDOM.render(
  <Provider store={store}>
    <Router>
      <React.Fragment>
        <Route exact path="/" component={App} />
        <Route exact path="/rooms" component={RoomIndex} />
        <Route exact path="/create_a_room" component={RoomForm} />
      </React.Fragment>
    </Router>
  </Provider>,
  document.getElementById('root')
)
registerServiceWorker()
