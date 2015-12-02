import React, { Component } from 'react';
import { Navbar,NavItem,NavDropdown,MenuItem,Nav } from 'react-bootstrap';
import './video.less';
module.exports = () =>(
    <header>
        <div className="video-container">
            <video autoPlay poster="https://s3-us-west-2.amazonaws.com/s.cdpn.io/4273/polina.jpg" id="bgvid" loop>
              <source src="src/vid/timelapse.mp4" type="video/mp4"/>
            </video>
            <div className="foreground">
              <div className="intro-text">
                  <div className="intro-heading">ImpactON</div>
                  <div className="intro-lead-in">"Para resolver problemas de todos queremos la voz de todos"</div>
                  <a href="#descripcion" className="page-scroll btn btn-xl mt++++">Quiero Saber Más</a>
              </div>
            </div>
        </div>
    </header>
)
