import * as React from "react";
import * as renderer from 'react-test-renderer';
import SlideButton from "../src";

describe('<SlideButton />', () => {
    describe('with default props', () => {
        it('renders correctly', () => {
            const tree = renderer.create(<SlideButton/>).toJSON();
            expect(tree).toMatchSnapshot();
        });
    });

    describe('with different orientation', () => {
        it('accepts "left" orientation', () => {
            const tree = renderer.create(
                <SlideButton
                    theme={{...SlideButton.defaultProps.theme, orientation: 'left'}}
                />
            ).toJSON();
            expect(tree).toMatchSnapshot();
        });

        it('accepts "right" orientation', () => {
            const tree = renderer.create(
                <SlideButton
                    theme={{...SlideButton.defaultProps.theme, orientation: 'right'}}
                />
            ).toJSON();
            expect(tree).toMatchSnapshot();
        });
    });

    describe('with custom colors', () => {
        it('accepts "primary" color', () => {
            const tree = renderer.create(
                <SlideButton
                    theme={{...SlideButton.defaultProps.theme, primary: 'red'}}
                />
            ).toJSON();
            expect(tree).toMatchSnapshot();
        });

        it('accepts "secondary" color', () => {
            const tree = renderer.create(
                <SlideButton
                    theme={{...SlideButton.defaultProps.theme, secondary: 'red'}}
                />
            ).toJSON();
            expect(tree).toMatchSnapshot();
        });
    });

    describe('with custom border width', () => {
        it('accepts custom "borderWidth"', () => {
            const tree = renderer.create(
                <SlideButton
                    theme={{...SlideButton.defaultProps.theme, borderWidth: '1rem'}}
                />
            ).toJSON();
            expect(tree).toMatchSnapshot();
        });

        it('accepts zero "borderWidth"', () => {
            const tree = renderer.create(
                <SlideButton
                    theme={{...SlideButton.defaultProps.theme, borderWidth: '0'}}
                />
            ).toJSON();
            expect(tree).toMatchSnapshot();
        });
    });

    describe('with custom transition duration', () => {
        it('accepts custom "transitionDuration"', () => {
            const tree = renderer.create(
                <SlideButton
                    theme={{...SlideButton.defaultProps.theme, transitionDuration: '0.5s'}}
                />
            ).toJSON();
            expect(tree).toMatchSnapshot();
        })
    })
});
