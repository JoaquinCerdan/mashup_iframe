import './Home.css';
import React from 'react';

const Home = () => {
  return (
    <>
      <div data-testid="page-home" className="page-home">
        <div className="container">
          <iframe
            title="iframe_home"
            src="https://sdggrouppartner.cloud.looker.com/embed/dashboards/21?allow_login_screen=true"
          />                                                            
        </div>
      </div>
    </>
  );
};

export default Home;
