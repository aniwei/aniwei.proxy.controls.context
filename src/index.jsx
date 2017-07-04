import React, { Component, createElement, cloneElement, createFactory, PropTypes } from 'react';
import { render } from 'react-dom'


class ControlsContext extends Component {
  render () {
    const all = {};
    
    components.forEach(cmp => {
      all[cmp.name] = function (state = {}, action) {
        const reducer = cmp.reducers[action.type];

        return reducer ? reducer(state, action) : state;
      }
    });

    return cloneElement(this.props.children, {
      reducers: all
    });
  }
}

const components = [];

export function register (reducers, component) {
  const name = component.name;
  
  components.push({
    name,
    component,
    reducers
  });
}

export function inject (Component) {
  return function (props) {
    const cmpts = {};

    components.forEach(cmp => cmpts[cmp.name] = cmp.component);

    return (
      <Component 
        {...props} 
        components={cmpts} 
      />
    );
  }
}

export default ControlsContext;