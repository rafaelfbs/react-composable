import * as React from "react";
import * as CSS from "csstype";

export interface BalloonProps {
    /**
     * Node displayed inside balloon.
     */
    message: React.ReactNode;

    /**
     * Node displayed when message is empty.
     *
     * @default null
     */
    emptyMessage?: React.ReactNode;

    /**
     * ClassName for balloon element.
     *
     * @default "rc-balloon"
     */
    balloonClassName?: string;

    /**
     * Style for balloon element.
     *
     * @default {}
     */
    balloonStyle?: React.CSSProperties;

    /**
     * Text color for balloon message.
     *
     * @default "white"
     */
    balloonColor?: CSS.ColorProperty;

    /**
     * Background color for balloon.
     *
     * @default "black"
     */
    balloonBackgroundColor?: CSS.BackgroundColorProperty;

    /**
     * Border color for balloon.
     *
     * @default "black"
     */
    balloonBorderColor?: CSS.BorderColorProperty;

    /**
     * ClassName for balloon arrow element.
     *
     * @default "rc-balloon-arrow"
     */
    balloonArrowClassName?: string;

    /**
     * Style for balloon arrow element.
     *
     * @default {}
     */
    balloonArrowStyle?: React.CSSProperties;

    /**
     * Position for balloon arrow.
     *
     * @default "top"
     */
    balloonArrowPosition?: "top" | "right" | "bottom" | "left";

    /**
     * Position offset for balloon arrow. Accepts same format as top, right, bottom and left properties.
     *
     * @default "50%"
     */
    balloonArrowPositionOffset?: string;

    /**
     * Width of balloon arrow in pixels.
     *
     * @default 20
     */
    balloonArrowWidth?: number;

    /**
     * Height of balloon arrow in pixels.
     *
     * @default 10
     */
    balloonArrowHeight?: number;
}

export default class Balloon extends React.Component<BalloonProps> {
    public static defaultProps = {
        emptyMessage: null,
        balloonColor: 'white',
        balloonBackgroundColor: 'black',
        balloonBorderColor: 'black',
        balloonClassName: 'rc-balloon',
        balloonStyle: {},
        balloonArrowClassName: 'rc-balloon-arrow',
        balloonArrowStyle: {},
        balloonArrowWidth: 20,
        balloonArrowHeight: 10,
        balloonArrowPosition: 'top',
        balloonArrowPositionOffset: "50%"
    };

    protected get balloonProps() {
        return {
            className: this.props.balloonClassName,
            style: this.generateBalloonStyle()
        };
    }

    protected get balloonArrowProps() {
        return {
            className: this.props.balloonArrowClassName,
            style: this.generateBalloonArrowStyle()
        }
    }

    protected get isLeftRight() {
        return ['left', 'right'].includes(this.props.balloonArrowPosition)
    }

    protected generateBalloonStyle(): React.CSSProperties {
        return {
            padding: '5px',

            ...this.props.balloonStyle,

            position: "relative",
            color: this.props.balloonColor,
            backgroundColor: this.props.balloonBackgroundColor,
            border: `1px solid ${this.props.balloonBorderColor}`,
        };
    }

    protected generateBalloonArrowStyle(): React.CSSProperties {
        const fixedPosAxis = this.props.balloonArrowPosition;
        const relativePosAxis = fixedPosAxis === "top" || fixedPosAxis === "bottom" ? "left" : "top";
        const arrowSize = this.generateBalloonArrowSize();

        return {
            zIndex: 10,

            ...this.props.balloonArrowStyle,

            width: `${arrowSize.width.toFixed(0)}px`,
            height: `${arrowSize.height.toFixed(0)}px`,

            position: "absolute",
            [fixedPosAxis]: "100%",
            [relativePosAxis]: this.calculateBalloonArrowPositionOffset()
        };
    }

    protected generateBalloonArrowSize() {
        return {
            width: this.isLeftRight ? this.props.balloonArrowHeight : this.props.balloonArrowWidth,
            height: this.isLeftRight ? this.props.balloonArrowWidth : this.props.balloonArrowHeight,
        };
    }

    protected generateBalloonArrowPoints() {
        const w = this.props.balloonArrowWidth;
        const h = this.props.balloonArrowHeight;
        const w2 = w / 2;

        switch (this.props.balloonArrowPosition) {
            case 'top': return `0,0 ${w2},${h} ${w},0`;
            case 'right': return `${h},${w} 0,${w2} ${h},0`;
            case 'bottom': return `0,${h} ${w2},0 ${w},${h}`;
            case 'left': return `0,${w} ${h},${w2} 0,0`;
        }
    }

    protected calculateBalloonArrowPositionOffset() {
        const { width, height } = this.generateBalloonArrowSize();
        const offset = this.props.balloonArrowPositionOffset;
        return this.isLeftRight
            ? `calc(${offset} - ${height/2}px)`
            : `calc(${offset} - ${width/2}px)`;
    }

    public render() {
        const arrowPoints = this.generateBalloonArrowPoints();
        const arrowSize = this.generateBalloonArrowSize();

        if (!this.props.message) {
            return this.props.emptyMessage;
        }

        return (
            <div {...this.balloonProps}>
                <span {...this.balloonArrowProps}>
                    <svg
                        {...arrowSize}
                        xmlns="http://www.w3.org/2000/svg"
                        style={{ verticalAlign: 'top' }}
                    >
                        <polygon
                            points={arrowPoints}
                            fill={this.props.balloonBackgroundColor}
                        />
                        <polyline
                            points={arrowPoints}
                            fill="transparent"
                            stroke={this.props.balloonBorderColor}
                        />
                    </svg>
                </span>
                {this.props.message}
            </div>
        );
    }
}
