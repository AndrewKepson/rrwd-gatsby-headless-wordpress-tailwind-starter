import React from 'react';
import { Slice } from 'gatsby';

const PrimaryLayout = ({ children }) => {
  return (
    <div>
      <Slice alias="header" />
      <main>{children}</main>
      <Slice alias="footer" />
    </div>
  );
};

export default PrimaryLayout;
