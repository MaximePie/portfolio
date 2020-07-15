import React from 'react';

export default function Button(props) {

  const {text, icon, variant, link, className, isFabIcon} = props;

  return (
    <a
      href={link}
      className={`Button ${variant ? 'Button--secondary' : ''}`}
    >
      <i className={`${isFabIcon ? 'fab' : 'fas'} fa-${icon} Button__icon`}/>
      {text}
    </a>
  );
}
