import React from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';
import Svg, { Path } from 'react-native-svg';



const BottomLeftSvg = (props) => (
    <Svg width="222" height="239" viewBox="0 0 222 239" fill="none"  {...props}>
        <Path d="M90.6987 26.732L131 3.4641L171.301 26.7321V73.2679L131 96.5359L90.6987 73.2679V26.732Z" fill="#FDAC05" stroke="#FDAC05" stroke-width="6"/>
        <Path d="M9.69873 26.732L50 3.4641L90.3013 26.7321V73.2679L50 96.5359L9.69873 73.2679V26.732Z" stroke="#FDAC05" stroke-width="6"/>
        <Path d="M131.699 96.732L172 73.4641L212.301 96.7321V143.268L172 166.536L131.699 143.268V96.732Z" fill="#FDAC05" stroke="#FDAC05" stroke-width="6"/>
        <Path d="M90.6987 165.732L131 142.464L171.301 165.732V212.268L131 235.536L90.6987 212.268V165.732Z" stroke="#FDAC05" stroke-width="6"/>
        <Path d="M9.69873 165.732L50 142.464L90.3013 165.732V212.268L50 235.536L9.69873 212.268V165.732Z" stroke="#FDAC05" stroke-width="6"/>
        <Path d="M50.6987 96.732L91 73.4641L131.301 96.7321V143.268L91 166.536L50.6987 143.268V96.732Z" stroke="#FDAC05" stroke-width="6"/>
    </Svg>
);

const BottomRightSvg = (props) => (
    <Svg width="221" height="170" viewBox="0 0 221 170" fill="none"  {...props}>
        <Path d="M90.6987 96.732L131 73.4641L171.301 96.7321V143.268L131 166.536L90.6987 143.268V96.732Z" stroke="#FDAC05" stroke-width="6"/>
        <Path d="M49.6987 26.732L90 3.4641L130.301 26.7321V73.2679L90 96.5359L49.6987 73.2679V26.732Z" stroke="#FDAC05" stroke-width="6"/>
        <Path d="M130.699 26.732L171 3.4641L211.301 26.7321V73.2679L171 96.5359L130.699 73.2679V26.732Z" fill="#FDAC05" stroke="#FDAC05" stroke-width="6"/>
        <Path d="M9.69873 96.732L50 73.4641L90.3013 96.7321V143.268L50 166.536L9.69873 143.268V96.732Z" fill="#FDAC05" stroke="#FDAC05" stroke-width="6"/>
    </Svg>
);

const TopLeftSvg = (props) => (
    <Svg width="301" height="170" viewBox="0 0 301 170" fill="none"  {...props}>
        <Path d="M90.6987 96.732L131 73.4641L171.301 96.7321V143.268L131 166.536L90.6987 143.268V96.732Z" stroke="#FDAC05" stroke-width="6"/>
        <Path d="M210.699 26.732L251 3.4641L291.301 26.7321V73.2679L251 96.5359L210.699 73.2679V26.732Z" fill="#FDAC05" stroke="#FDAC05" stroke-width="6"/>
        <Path d="M171.699 96.732L212 73.4641L252.301 96.7321V143.268L212 166.536L171.699 143.268V96.732Z" fill="#FDAC05" stroke="#FDAC05" stroke-width="6"/>
        <Path d="M49.6987 26.732L90 3.4641L130.301 26.7321V73.2679L90 96.5359L49.6987 73.2679V26.732Z" stroke="#FDAC05" stroke-width="6"/>
        <Path d="M130.699 26.732L171 3.4641L211.301 26.7321V73.2679L171 96.5359L130.699 73.2679V26.732Z" stroke="#FDAC05" stroke-width="6"/>
        <Path d="M9.69873 96.732L50 73.4641L90.3013 96.7321V143.268L50 166.536L9.69873 143.268V96.732Z" fill="#FDAC05" stroke="#FDAC05" stroke-width="6"/>
    </Svg>
);


const { width, height } = Dimensions.get('window');

const Background = () => (
    <View style={styles.container}>
      {/* Top-left */}
      <View style={[styles.svgContainer, { top: -30, left: -60 }]}>
        <TopLeftSvg style={styles.svg} />
      </View>
      
      {/* Bottom Left */}
      <View style={[styles.svgContainer, { bottom: +35, left: -70 }]}>
        <BottomLeftSvg style={styles.svg} />
      </View>
      
      {/* Bottom Right */}
      <View style={[styles.svgContainer, { bottom: -30, right: -51 }]}>
        <BottomRightSvg style={styles.svg} />
      </View>
      
    </View>
  );

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject, // Takes up the entire container
    backgroundColor: '#262626', // Example background color
    zIndex: -1, // Ensures it stays behind other content
  },
  svgContainer: {
    position: 'absolute',
  },
});

export default Background;

