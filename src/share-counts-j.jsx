import React from 'react';

import {
  getHatenaBookmarkCount,
  getFeedlyFeederCount,
  getPocketCount,
} from './share-count-getters-j';

const SocialMediaShareCount = React.createClass({
  propTypes: {
    children: React.PropTypes.func,
    className: React.PropTypes.string,
    getCount: React.PropTypes.func,
    url: React.PropTypes.string.isRequired,
  },

  getInitialState() {
    return {
      count: 0,
    };
  },

  componentDidMount() {
    if (this.props.getCount) {
      this.setState({
        isLoading: true,
      });

      this.props.getCount(this.props.url, count => {
        if (this.isMounted()) {
          this.setState({
            count,
            isLoading: false,
          });
        }
      });
    }
  },

  render() {
    const {
      count,
      isLoading,
    } = this.state;

    const {
      children,
    } = this.props;

    const className = `SocialMediaShareCount ${this.props.className || ''}`;

    const render = children || function renderCount(shareCount) {
      return shareCount;
    };

    return (
      <div {...this.props} className={className}>
        {!isLoading && render(count || 0)}
      </div>
    );
  },
});

function shareCountFactory(getCount) {
  return props =>
    <SocialMediaShareCount getCount={getCount} {...props} />;
}

export const HatenaBookmarkCount = shareCountFactory(getHatenaBookmarkCount);
export const FeedlyFeederCount = shareCountFactory(getFeedlyFeederCount);
export const PocketCount = shareCountFactory(getPocketCount);
