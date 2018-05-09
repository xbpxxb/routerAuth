import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  // Link,
  Switch,
  Redirect
} from 'react-router-dom'
import asyncComponent from './components/AsyncComponent'
const AsyncLogin = asyncComponent(() => import('./pages/login'))
const Home = asyncComponent(() => import('./pages/test')) 

const Topics = () =>{
  return(
    <div>Topics</div>
  )
}
//路由拦截组件
const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      localStorage.getItem('user') ? (
        <Component {...props} />
      ) : (
        <Redirect
          to={{
            pathname: "/login",
            state: { from: props.location }
          }}
        />
      )
    }
  />
);
const App = () => (
  <Router>
    <Switch>
      <Route path="/login" component={AsyncLogin}/>
      <PrivateRoute path="/topics" component={Topics}/>
      <PrivateRoute path="/" component={Home} />
    </Switch>
  </Router>
)

export default App