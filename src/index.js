import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'semantic-ui-css/semantic.min.css'
import App from './App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import RoomIndex from '../src/components/RoomIndex';
import RoomForm from '../src/components/RoomForm';
// import RoomsContainer from '../src/components/RoomsContainer';
// import AllRooms from '../src/components/AllRooms';




// ReactDOM.render(<App />, document.getElementById('root'));

ReactDOM.render((
  <Router>
    <React.Fragment>

       <Route exact path="/" component={App} />
       <Route exact path="/rooms" component={RoomIndex} />
       <Route exact path="/create_a_room" component={RoomForm} />
      {/*  <Route exact path="/allrooms" component={AllRooms} />

        <Route exact path="/design_your_room" component={RoomsContainer} />
        */}


     </React.Fragment>
    </Router>),
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
