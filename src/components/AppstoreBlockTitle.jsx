import React from 'react';

import './AppstoreBlockTitle.less';

const AppstoreBlockTitle = ({ title, outline = true, children }) => (
  <div
    className={`block-title appstore-block-title${
      outline === false ? ' no-outline' : ''
    }`}
  >
    {title && <span>{title}</span>}
    {children}
  </div>
);

export default AppstoreBlockTitle;
