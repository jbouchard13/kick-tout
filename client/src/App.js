import React, { useContext } from 'react';
import {
  Route,
  Switch,
  BrowserRouter,
  Redirect,
  useLocation
} from 'react-router-dom';

import {useTransition, animated, config} from 'react-spring';
import { AuthProvider, AuthContext } from './AuthContext';
import Home from './pages/Home';
import Signup from './pages/Signup';
import Feed from './pages/Feed';
import Profile from './pages/Profile';
import CreatePost from './pages/CreatePost';
import MyPosts from './pages/MyPosts';
import Favorites from './pages/Favorites';


// import Chat from './components/Chat/Chat';

// Even though this is the App.js file, in the end we are not exactly exporting
// the App component.  We actually set up the app component to implement our react
// router, but in the end we export App wrapped in the context provider

function App() {

  const location = useLocation();

  const transitions = useTransition(location, location => location.pathname, {
    from: {opacity: 0, transform: 'translate(100%, 0)'},
    enter: {opacity: 1, transform: 'translate(0%, 0)'},
    leave: {opacity: 0, transform: 'translate(-50%, 0)'}
  });
  // Here we subscribe the authentication context using the useContext hook
  // we use isAuth to determine whether the user is logged in, and setIsAuth
  // to change their status on logout.

  const { isAuth, setIsAuth } = useContext(AuthContext);
  console.log('App auth: ', isAuth);

  // here we are ceating a private route wrapper to prevent front end routing to
  // restricted pages.  The ({ component: Component, ...rest })  argument that is
  // passed to this functional component is essentially the same as just passing
  // props, but using object destucturing.  the ...rest is literally the rest of
  // the props that were not destructured.
  const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route
      {...rest}
      render={(props) =>
        isAuth ? <Component {...props} /> : <Redirect to='/' />
      }
    />
  );

  return transitions.map(({item, props, key}) => (
          <Switch location={item}>
            <Route exact path='/' render={(props) => <Home {...props} />} />
            <Route exact path='/signup' render={(props) => <Signup {...props} />} />
          <animated.div key={key} style={props}>
            <PrivateRoute exact path='/feed' component={Feed} />
            <PrivateRoute exact path='/profile' component={Profile} />
            <PrivateRoute exact path='/create-post' component={CreatePost} />
            <PrivateRoute exact path='/my-posts' component={MyPosts} />
            <PrivateRoute exact path='/favorites' component={Favorites} />
          </animated.div>
          </Switch>
        
  ))
}

// Here we export the final product of our app/context configuration, and
// even though it is unnamed here, it will be imported as App in index.js
export default () => {
  return(
    <AuthProvider>
      <BrowserRouter>
        <App />
    </BrowserRouter>
    </AuthProvider>
  )
} 
// => {
//   return (
//     <AuthProvider>
//       <App />
//     </AuthProvider>
//   );
// };
