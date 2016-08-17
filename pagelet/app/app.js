import React from "react";
import {History} from "react-router";

import Header from "/widget/header/header";

const App = React.createClass({ 
  mixins: [History],
  getInitialState: function(){
    return {};
  },
  componentDidMount: function(){

  },

  componentWillUnmount: function(){
  },

  onLoginStateChange: function(state){
  },

  render: function(){
    return (
      <div className="c-app">
        <Header/>
      </div>
    );
  }
});

export default App;