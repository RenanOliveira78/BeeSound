// components/Rectangle.js
import React from 'react';
import Svg, { Rect } from 'react-native-svg';

const Rectangle = ({ children, style, ...props}) => (
  <Svg width="385" height="96" viewBox="0 0 385 96" fill="none" {...props}>
    <Rect width="385" height="96" rx="48" fill="black" />
    {children}
  </Svg>
);

export default Rectangle;
