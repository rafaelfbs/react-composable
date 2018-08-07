import * as React from 'react';

import {storiesOf} from '@storybook/react';
import {action} from '@storybook/addon-actions';
import {linkTo} from '@storybook/addon-links';
import {withKnobs, text, boolean, number, select, object} from '@storybook/addon-knobs';
import styled from 'styled-components';

import SlideButton from "../src";

const ButtonContent = styled.div`
  height: 50px;
  line-height: 50px;
  padding: 10px;
`;

storiesOf('Balloon', module)
    .addDecorator(withKnobs)
    .addDecorator(story => (
        <div style={{padding: '10px'}}>
            {story()}
        </div>
    ))
    .add('default', () => (
        <SlideButton
            theme={{
                ...SlideButton.defaultProps.theme,
                orientation: select('orientation', ['left', 'right'], 'left')
            }}
        >
            <ButtonContent>
                BUTTON
            </ButtonContent>
        </SlideButton>
    ));
// .add('with position', () => (
//     <Balloon
//         message={text('message', 'Some message')}
//         balloonArrowPosition={select('position', ['top', 'right', 'bottom', 'left'], 'top')}
//         balloonArrowPositionOffset={text('offset', "50%")}
//     />
// ))
// .add('with colors', () => (
//     <Balloon
//         message={text('message', 'Some message')}
//         balloonColor={text('color', 'black')}
//         balloonBackgroundColor={text('background color', '#f9f9f9')}
//         balloonBorderColor={text('border color', '#cecece')}
//     />
// ))
// .add('with custom style', () => (
//     <Balloon
//         message={text('message', 'Some message')}
//         balloonStyle={object('balloon style', {display: "inline"})}
//     />
// ));
