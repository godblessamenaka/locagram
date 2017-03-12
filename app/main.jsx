'use strict'
import React from 'react'
import axios from 'axios'
import {Router, Route, IndexRedirect, browserHistory} from 'react-router'
import {render} from 'react-dom'
import {connect, Provider} from 'react-redux'
import { getLocaGrams } from './reducers/locaGrams'
import store from './store'
import FeedContainer from './containers/FeedContainer'
import Login from './components/Login'
import WhoAmI from './components/WhoAmI'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import getMuiTheme from 'material-ui/styles/getMuiTheme'
import injectTapEventPlugin from 'react-tap-event-plugin'
import {GridList, GridTile} from 'material-ui/GridList';
import IconButton from 'material-ui/IconButton';
import Subheader from 'material-ui/Subheader';
import StarBorder from 'material-ui/svg-icons/toggle/star-border';


injectTapEventPlugin()

// const ExampleApp = connect(
//   ({ auth }) => ({ user: auth })
// )(
//   ({ user, children }) =>
//     <div>
//       <nav>
//         {user ? <WhoAmI /> : <Login />}
//       </nav>
//       {children}
//     </div>
// )

const setLocation = function(position){
  var lat = position.coords.latitude;
  var long = position.coords.longitude;
  console.log(lat,long);
  axios.post('/api/insta', {lat,long})
      .then(response => response.data)
      .then(gramsArr => {
        store.dispatch(getLocaGrams(gramsArr))
      })
      .catch(err => console.error(err))
}


const onFeedEnter = () => {
        navigator.geolocation.getCurrentPosition(setLocation);
}




render(
  <MuiThemeProvider>
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" >
        <Route path="/grams" component={FeedContainer} onEnter={onFeedEnter} />
          <IndexRedirect to="/grams" />
        </Route>
    </Router>
  </Provider>
  </MuiThemeProvider>,
  document.getElementById('main')
)
