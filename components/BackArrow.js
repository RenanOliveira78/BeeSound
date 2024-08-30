// components/BackArrow.js
import React from 'react';
import Svg, { Path } from 'react-native-svg';

const BackArrow = (props) => (
  <Svg width="8" height="14" viewBox="0 0 8 14" fill="none" {...props}>
    <Path d="M7 13L1 7L7 1" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
    />
  </Svg>
);

export default BackArrow;
