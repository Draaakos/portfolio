import React from 'react';

//mock
import mock from './mock.json';

//Components
import CircleButton from './components/CircleButton';


const Header = () => (
  <div className="header-mobile">
    {mock.buttonData.map((data, index) =>
      <CircleButton
        key={`button-${index}`}
        type={data.type}
      />)
    }
  </div>
);

export default Header;