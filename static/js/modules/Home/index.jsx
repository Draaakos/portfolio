import React, { Component } from 'react';
import technologiesData from './mock/technologies.json';

// components
import Header from './../ui/Header';

const Technologies = ({ data }) => (
  <div className="technologies__section">
    {data.technologies
      .map((item, key) => (
        <div key={key} className="technologies__section-item">
          <img src={item.url} alt={item.name} />
        </div>)
      )}
  </div>
)

class Home extends Component {
  render() {
    return (
      <div className="app">
        <Header />
        <Technologies data={technologiesData} />
        

        <section className="body__home">
          
        </section>

      </div>
    );
  }
}

export default Home;
