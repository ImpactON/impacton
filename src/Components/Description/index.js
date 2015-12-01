import React, { Component } from 'react';
import { Navbar,NavItem,NavDropdown,MenuItem,Nav } from 'react-bootstrap';
module.exports = () =>(
    <section id="descripcion">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 text-center">
              <h2 className="section-heading">¿Qué es ImpactON?</h2>
              <h3 className="section-subheading text-muted">
                La primera hackaton de SmartCities e Impacto Social, que une al sector publico, privado, la academia y la ciudadania para co-crear soluciones de alto impacto social.
              </h3>
          </div>
        </div>
        <div className="row text-center">
            <div className="col-md-3">
                <span className="fa-stack fa-4x">
                    <i className="fa fa-circle fa-stack-2x text-primary"></i>
                    <i className="fa fa-book fa-stack-1x fa-inverse"></i>
                </span>
                <h4 className="service-heading">Academia</h4>
                <p className="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit.</p>
            </div>
            <div className="col-md-3">
                <span className="fa-stack fa-4x">
                    <i className="fa fa-circle fa-stack-2x text-primary"></i>
                    <i className="fa fa-building-o fa-stack-1x fa-inverse"></i>
                </span>
                <h4 className="service-heading">Industria</h4>
                <p className="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit.</p>
            </div>
            <div className="col-md-3">
                <span className="fa-stack fa-4x">
                    <i className="fa fa-circle fa-stack-2x text-primary"></i>
                    <i className="fa fa-users fa-stack-1x fa-inverse"></i>
                </span>
                <h4 className="service-heading">Ciudadanía</h4>
                <p className="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit.</p>
            </div>
            <div className="col-md-3">
                <span className="fa-stack fa-4x">
                    <i className="fa fa-circle fa-stack-2x text-primary"></i>
                    <i className="fa fa-users fa-stack-1x fa-inverse"></i>
                </span>
                <h4 className="service-university">Gobierno</h4>
                <p className="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit.</p>
            </div>
        </div>
      </div>
    </section>
)
