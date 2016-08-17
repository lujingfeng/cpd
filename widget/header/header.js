/**
 * @require ./header.less
 */

import React from "react";
import {History} from "react-router";

const Header = React.createClass({
  mixins: [History],

  getInitialState: function(){
    return {}
  },

  render: function(){

    return (
      <div className="c-header">
        <div>header</div>
      </div>
    );
  }
});

export default Header;