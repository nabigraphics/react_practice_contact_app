import React from 'react';
import ReactDOM from 'react-dom';

import {BrowserRouter as Router,Route,Link} from 'react-router-dom';

import Index from './route/Index';
import Login from './route/login';
import Series from './route/Series';

import { createStore } from 'redux';
import reducers from './reducers';
import * as actions from './actions';
import {Provider} from 'react-redux';
const store = createStore(reducers);

class App extends React.Component{
  constructor() {
    super();
    
    this.state = {
      loading: true,
      window_w:"",
      window_h:""
    };
    this.onRezise = this.onRezise.bind(this);
  }
  onRezise(){
    //console.log("가로 : " + window.innerWidth + "\n" + "세로 : " + window.innerHeight);
    this.setState({
      window_w:window.innerWidth+"px",
      window_h:window.innerHeight+"px"
    })
  }
  componentWillMount(){
    this.onRezise();
  }
  componentDidMount() {
    window.addEventListener("resize", this.onRezise);
    //console.log(store.getState());
    /*
    setTimeout(() => this.setState({ loading: false }), 3000); 
    */
  }
  componentWillUnmount() {
    window.removeEventListener("resize", this.onRezise);
  }

  render(){
    /*
    const { loading } = this.state;
    
    if(loading) {
      return null; // render null when app is not ready
    }
    */
    return(
        <Provider store={store}>
          <Router>
            <div className="swag" style={{height:this.state.window_h}}>
              <Route exact path="/" component={Index}/>
              <Route path="/add_contact" component={Login}/>
              <Route path="/login" component={Login}/>
            </div>
          </Router>
        </Provider>
    )
  }
}
const AppElement = document.getElementById('app');
ReactDOM.render(<App/>,AppElement);