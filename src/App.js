import React, { Component } from 'react';
import './style/agency.less';
import './style/variables.less';
import './style/mixins.less';
import 'font-awesome-webpack';

import NavBarComponent from './Components/NavBar'
import Video from './Components/Video'
import Description from './Components/Description'
import Desafios from './Components/Desafios'
export default class App extends Component {
  render() {
    return (
      <div>
        <NavBarComponent/>
          <Video/>
          <Description/>
          <Desafios/>
      </div>

    );
  }
}
