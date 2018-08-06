import React from 'react'
import PropTypes from 'prop-types'
import {Spinner} from 'spin.js';

var opts = {
  lines: 13, // The number of lines to draw
  length: 38, // The length of each line
  width: 17, // The line thickness
  radius: 45, // The radius of the inner circle
  scale: 1, // Scales overall size of the spinner
  corners: 1, // Corner roundness (0..1)
  color: '#ffffff', // CSS color or array of colors
  fadeColor: 'transparent', // CSS color or array of colors
  speed: 1, // Rounds per second
  rotate: 0, // The rotation offset
  animation: 'spinner-line-fade-quick', // The CSS animation name for the lines
  direction: 1, // 1: clockwise, -1: counterclockwise
  zIndex: 2e9, // The z-index (defaults to 2000000000)
  className: 'spinner', // The CSS class to assign to the spinner
  top: '50%', // Top position relative to parent
  left: '50%', // Left position relative to parent
  shadow: '0 0 1px transparent', // Box-shadow for the lines
  position: 'absolute' // Element positioning
};

var spinner = new Spinner().spin();

console.log(spinner.el)

// Wine glass filling up loader
// https://codepen.io/wolfvanveen/pen/zopKqN

export default function LoaderWrapper({
  loading,
  children
}) {
  return(
    loading ? loading : children
  )
}

LoaderWrapper.propTypes = {
  loading: PropTypes.bool,
  children: PropTypes.node
}
