import React from 'react';
import classNames from 'classnames';

const CircleButton = ({ type }) => {
  const iconStyle = classNames({
    "icon-clock": type === "clock",
    "test": type === "test"
  });

  return (
    <div className="header-mobile__block">
      <span className={iconStyle} />
    </div>
  )
}

export default CircleButton;