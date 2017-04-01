import React from 'react';
import icons from './icons-j';

export function generateIconJ(network) {
  if (!icons[network.toLowerCase()]) {
    throw new Error('invalid network name for a social icon');
  }

  const iconConfig = icons[network.toLowerCase()];

  return React.createClass({
    propTypes: {
      className: React.PropTypes.string.isRequired,
      round: React.PropTypes.bool.isRequired,
      size: React.PropTypes.number.isRequired,
    },

    getDefaultProps() {
      return {
        size: 64,
      };
    },

    render() {
      const {
        className,
        round,
        size,
      } = this.props;

      const baseStyle = {
        width: size,
        height: size,
      };

      const svgStyle = {
        fill: 'white',
        width: size,
        height: size,
      };

      const classes = `social-icon social-icon--${network} ${className}`;

      return (
        <div style={baseStyle}>
          <svg
            viewBox="0 0 64 64"
            style={svgStyle}
            className={classes}>
            <g>
              {(!round ? (
                <rect
                  width="64"
                  height="64"
                  style={{ fill: iconConfig.color }} />
              ) : (
                <circle
                  cx="32"
                  cy="32"
                  r="31"
                  style={{ fill: iconConfig.color }} />
              ))}
            </g>

            <g>
              <path d={iconConfig.icon} />
            </g>
          </svg>
        </div>
      );
    },
  });
}

export default generateIconJ;
