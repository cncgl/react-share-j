/* eslint-disable react/no-multi-comp */
import React, { Component, PropTypes } from 'react';
import cx from 'classnames';

import * as links from './social-media-share-links-j';
import { windowOpen } from './utils';

const supportedNetworks = Object.keys(links);

export default class ShareButtonJ extends Component {
  static propTypes = {
    className: PropTypes.string.isRequired,
    network: PropTypes.oneOf(supportedNetworks).isRequired,
    url: PropTypes.string.isRequired.isRequired,
    opts: PropTypes.object.isRequired,
  };

  onClick = (e) => {
    e.preventDefault();
    windowOpen(this.link());
  };

  link() {
    const { url, opts, network } = this.props;
    return links[network](url, opts);
  }

  render() {
    const {
      className,
      network,
      ...rest
    } = this.props;

    return (
      <div
        {...rest}
        onClick={this.onClick}
        url={this.link()}
        className={cx(
          'SocialMediaShareButton',
          `SocialMediaShareButton--${network}`,
          className,
        )} />
    );
  }
}

/* HOC to ease migration from v1 to v2.
 * To-be-removed in v2.
 */
function createShareButton(network, optsMap = () => ({}), props) {
  return React.createClass({
    props,

    render() {
      return (
        <ShareButtonJ
          {...this.props}
          network={network}
          opts={optsMap(this.props)} />
      );
    },
  });
}

export const HatenaBookmarkButton = createShareButton('hatena', props => ({
  title: props.title,
}), {
  title: PropTypes.string.isRequired,
});

export const FeedlyFeedButton = createShareButton('feedly', props => ({
  title: props.title,
}), {
  title: PropTypes.string.isRequired,
});

export const PocketButton = createShareButton('pocket', props => ({
  title: props.title,
}), {
  title: PropTypes.string.isRequired,
});
