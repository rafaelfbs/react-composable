import * as React from 'react';
import styled from 'styled-components';

const direction = {left: 'right', right: 'left'};
const primaryColor = {left: 'primary', right: 'secondary'};
const secondaryColor = {left: 'secondary', right: 'primary'};
const backgroundSize = {left: '50%', right: '51%'};
const backgroundPos = {left: '-100%', right: '100%'};

const SlideButton = styled.button`
    margin: 0;
    padding: 0;
    width: auto;
    overflow: visible;

    color: inherit;
    font: inherit;

    line-height: normal;

    -webkit-font-smoothing: inherit;
    -moz-osx-font-smoothing: inherit;

    -webkit-appearance: none;

    text-align: inherit;
    
    background-size: 200% 100%;
    background-image: linear-gradient(
      to ${props => direction[props.theme.orientation]},
      ${props => props.theme[primaryColor[props.theme.orientation]]} 50%,
      ${props => props.theme[secondaryColor[props.theme.orientation]]} 50%
    );
    transition: background-position ${props => props.theme.transitionDuration} linear;
    
    border: none;
    border-${props => props.theme.orientation}:
      ${props => props.theme.borderWidth} solid ${props => props.theme.secondary};
    
    &:hover {
      background-position: ${props => backgroundPos[props.theme.orientation]} 0;
    }
`;

SlideButton.defaultProps = {
    theme: {
        primary: '#F0F0F0',
        secondary: '#026DB2',
        transitionDuration: '0.1s',
        orientation: 'left',
        borderWidth: '5px'
    },
};

export default SlideButton;
