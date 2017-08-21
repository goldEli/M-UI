/**
 *  create by miaoyu  2017/8/17
 * 
 *  props =>
 *    size: small \ medium \ large
 * 
 */


import React from 'react';
// import styled from 'styled-components';
import * as colors from '../../styles/colors';
import { buttonSizes } from  '../../styles/size';
import { darken } from 'polished';

import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

import theme from '../../styles/theme';

class Button extends React.Component{

  constructor(props) {
    super(props);
    this.muiTheme =  getMuiTheme(theme.getTheme())
    this.state = this.generatorStyles();
    
  }

  overwriteStyle = (oldStyle) => {

    const { style } = this.props;

    if ( style ) {
      return Object.assign( {}, oldStyle, style )
    }
    return oldStyle

  }

  generatorStyles = () => {

    const { size, disabled } = this.props;
    const obj = { ...buttonSizes[size ? size : 'medium'] };

    // disabled
    if (disabled) {
      obj.backgroundColor = colors.disabled1;
      obj.color = colors.disabled2;
      obj.cursor = "not-allowed";
      return this.overwriteStyle(obj)
    }  else {
      obj.backgroundColor = colors.blue2;
      obj.color = colors.white;
      return this.overwriteStyle(obj)
    }

    

  }

  changeColorToDark = () => {
    this.setState({
      backgroundColor: colors.blue2
    })
  }

  changgColorToLight = () => {
    this.setState({
      backgroundColor: colors.blue1
    })
  }

  generateProperty = () => {
    const { onClick, disabled } = this.props

    if (disabled) {
      return {
        disabled: true,
        style: this.state 
      }
    } else {
      return {
        onMouseOver: this.changgColorToLight,
        onMouseOut: this.changeColorToDark,
        onClick: onClick,
        style: this.state,
      }
    }

  }

  render() {

    const { labelStyle, children, label } = this.props

    return (
      <MuiThemeProvider muiTheme = { this.muiTheme } >
          <FlatButton 
            labelStyle = { labelStyle}
            label= { label ? label : 'default' }
            {...this.generateProperty()}
          />
      </MuiThemeProvider>  
    )

  }
}

export default Button;
