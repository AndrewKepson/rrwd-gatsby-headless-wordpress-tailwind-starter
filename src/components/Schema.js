import React from 'react';
import { Script } from 'gatsby';

export const Schema = ({ children }) => (
  <Script type="application/ld+json">{children}</Script>
);
