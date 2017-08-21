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


class Button extends React.Component{

  constructor(props) {
    super(props);
    this.state = this.generatorStyles()
  }

  overwriteStyle = (oldStyle) => {

    const { style, overlayStyle } = this.props;

    if (overlayStyle) {
      return style
    }
    if ( style ) {
      return Object.assign( {}, oldStyle, style )
    }
    return oldStyle

  }

  generatorStyles = () => {

    const { size } = this.props

    return this.overwriteStyle({
      backgroundColor: colors.blue2,
      color: colors.white,
      ...buttonSizes[size ? size : 'medium']
    })

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

  render() {

    const { labelStyle, children } = this.props

    return (
        <FlatButton 
          labelStyle = { labelStyle}
          label= "123"
          onMouseOver = {this.changgColorToLight}
          onMouseOut = {this.changeColorToDark}
          style={ this.state }
        />
    )

  }
}

// const buttonSizes = {
//   small: {
//     'font-size': '14px',
//     'line-height': '30px',
//     padding: '0 8px',
//   },
//   medium: {
//     'font-size': '16px',
//     'line-height': '40px',
//     padding: '0 12px',
//   },
//   large: {
//     'font-size': '18px',
//     'line-height': '50px',
//     padding: '0 16px',
//   },
//   wide: {
//     'font-size': '16px',
//     'line-height': '40px',
//     padding: '0 36px',
//   },
//   extraWide: {
//     'font-size': '16px',
//     'line-height': '40px',
//     padding: '0 72px',
//   },
//   fullWidth: {
//     'font-size': '16px',
//     'line-height': '40px',
//     padding: '0 8px',
//   },
// };

// function setDisplay({ size }) {
//   return size === 'fullWidth' ? 'block' : 'inline-block';
// }

// function setWidth({ size }) {
//   return size === 'fullWidth' ? '100%' : 'initial';
// }

// const Button = styled.button`
//   background: ${({ bgColor })  => colors[bgColor]};
//   border: none;
//   border-radius: 2px;
//   color: ${({ fontColor })  => colors[fontColor]};
//   cursor: pointer;
//   display: ${setDisplay};
//   font-size: ${({ size }) => buttonSizes[size]['font-size']};
//   line-height: ${({ size }) => buttonSizes[size]['line-height']};
//   font-weight: 200;
//   margin: 8px 0;
//   outline: none;
//   padding: ${({ size }) => buttonSizes[size]['padding']};
//   width: ${setWidth};
//   text-transform: uppercase;
//   transition: all 300ms ease;
//   &:hover {
//     background: ${({ bgColor })  => darken(0.1, colors[bgColor])};
//   }
// `;

// Button.defaultProps = {
//   bgColor: 'blue',
//   fontColor: 'white',
//   size: 'medium',
// };

export default Button;
