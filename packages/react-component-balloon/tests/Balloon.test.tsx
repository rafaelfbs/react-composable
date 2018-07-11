import * as React from "react";
import * as renderer from 'react-test-renderer';
import Balloon from "../src";

describe('<Balloon />', () => {
    describe('When received colors', () => {
        it('renders correctly', () => {
            const tree = renderer
                .create(
                    <Balloon
                        message="My balloon message"
                        balloonColor="red"
                        balloonBackgroundColor="gray"
                        balloonBorderColor="gainsboro"
                    />
                )
                .toJSON();
            expect(tree).toMatchSnapshot();
        });
    });

    describe('When balloon is positioned on top', () => {
        it('renders correctly with default props', () => {
            const tree = renderer
                .create(
                    <Balloon
                        message="My balloon message"
                        balloonArrowPosition="top"
                    />
                )
                .toJSON();
            expect(tree).toMatchSnapshot();
        });

        it('renders correctly with offset at start', () => {
            const tree = renderer
                .create(
                    <Balloon
                        message="My balloon message"
                        balloonArrowPosition="top"
                        balloonArrowPositionOffset="0"
                    />
                )
                .toJSON();
            expect(tree).toMatchSnapshot();
        });

        it('renders correctly with offset at end', () => {
            const tree = renderer
                .create(
                    <Balloon
                        message="My balloon message"
                        balloonArrowPosition="top"
                        balloonArrowPositionOffset="100%"
                    />
                )
                .toJSON();
            expect(tree).toMatchSnapshot();
        });
    });

    describe('When balloon is positioned on right', () => {
        it('renders correctly with default props', () => {
            const tree = renderer
                .create(
                    <Balloon
                        message="My balloon message"
                        balloonArrowPosition="right"
                    />
                )
                .toJSON();
            expect(tree).toMatchSnapshot();
        });

        it('renders correctly with offset at start', () => {
            const tree = renderer
                .create(
                    <Balloon
                        message="My balloon message"
                        balloonArrowPosition="right"
                        balloonArrowPositionOffset="0"
                    />
                )
                .toJSON();
            expect(tree).toMatchSnapshot();
        });

        it('renders correctly with offset at end', () => {
            const tree = renderer
                .create(
                    <Balloon
                        message="My balloon message"
                        balloonArrowPosition="right"
                        balloonArrowPositionOffset="100%"
                    />
                )
                .toJSON();
            expect(tree).toMatchSnapshot();
        });
    });

    describe('When balloon is positioned on bottom', () => {
        it('renders correctly with default props', () => {
            const tree = renderer
                .create(
                    <Balloon
                        message="My balloon message"
                        balloonArrowPosition="bottom"
                    />
                )
                .toJSON();
            expect(tree).toMatchSnapshot();
        });

        it('renders correctly with offset at start', () => {
            const tree = renderer
                .create(
                    <Balloon
                        message="My balloon message"
                        balloonArrowPosition="bottom"
                        balloonArrowPositionOffset="0"
                    />
                )
                .toJSON();
            expect(tree).toMatchSnapshot();
        });

        it('renders correctly with offset at end', () => {
            const tree = renderer
                .create(
                    <Balloon
                        message="My balloon message"
                        balloonArrowPosition="bottom"
                        balloonArrowPositionOffset="100%"
                    />
                )
                .toJSON();
            expect(tree).toMatchSnapshot();
        });
    });

    describe('When balloon is positioned on left', () => {
        it('renders correctly with default props', () => {
            const tree = renderer
                .create(
                    <Balloon
                        message="My balloon message"
                        balloonArrowPosition="left"
                    />
                )
                .toJSON();
            expect(tree).toMatchSnapshot();
        });

        it('renders correctly with offset at start', () => {
            const tree = renderer
                .create(
                    <Balloon
                        message="My balloon message"
                        balloonArrowPosition="left"
                        balloonArrowPositionOffset="0"
                    />
                )
                .toJSON();
            expect(tree).toMatchSnapshot();
        });

        it('renders correctly with offset at end', () => {
            const tree = renderer
                .create(
                    <Balloon
                        message="My balloon message"
                        balloonArrowPosition="right"
                        balloonArrowPositionOffset="100%"
                    />
                )
                .toJSON();
            expect(tree).toMatchSnapshot();
        });
    });
});
