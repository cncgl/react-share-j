import React from 'react';
import {
  ShareButtons,
  ShareCounts,
  generateShareIcon,
} from 'react-share';

import {
  ShareButtonsJ,
  ShareCountsJ,
  generateShareIconJ,
} from '../lib/react-share-j';

const {
  FacebookShareButton,
  GooglePlusShareButton,
  LinkedinShareButton,
  TwitterShareButton,
  VKShareButton,
} = ShareButtons;
const {
  HatenaBookmarkButton,
  FeedlyFeedButton,
  PocketButton,
} = ShareButtonsJ;

const {
  FacebookShareCount,
  GooglePlusShareCount,
  LinkedinShareCount,
} = ShareCounts;
const {
  HatenaBookmarkCount,
  FeedlyFeederCount,
  PocketCount,
} = ShareCountsJ;

const FacebookIcon = generateShareIcon('facebook');
const TwitterIcon = generateShareIcon('twitter');
const GooglePlusIcon = generateShareIcon('google');
const LinkedinIcon = generateShareIcon('linkedin');
const VKIcon = generateShareIcon('vk');
const HatenaIcon = generateShareIconJ('hatena');
const FeedlyIcon = generateShareIconJ('feedly');
const PocketIcon = generateShareIconJ('pocket');


const Demo = React.createClass({
  render() {
    const shareUrl = 'http://cncgl.github.io/react-share-j';
    const feedUrl = 'https://github.com/cncgl/react-share-j/commits/master.atom';
    const title = '[React-Share-J]';
    const hashtags = ['react-share-j'];

    return (
      <div className="Demo__container">
        <div className="Demo__some-network">
          <FacebookShareButton
            url={shareUrl}
            title={title}
            className="Demo__some-network__share-button">
            <FacebookIcon
              size={32}
              round={false} />
          </FacebookShareButton>

          <FacebookShareCount
            url={shareUrl}
            className="Demo__some-network__share-count">
            {count => count}
          </FacebookShareCount>
        </div>

        <div className="Demo__some-network">
          <TwitterShareButton
            url={shareUrl}
            title={title}
            hashtags={hashtags}
            className="Demo__some-network__share-button">
            <TwitterIcon
              size={32}
              round={false} />
          </TwitterShareButton>

          <div className="Demo__some-network__share-count">
            &nbsp;
          </div>
        </div>

        <div className="Demo__some-network">
          <GooglePlusShareButton
            url={shareUrl}
            className="Demo__some-network__share-button">
            <GooglePlusIcon
              size={32}
              round={false} />
          </GooglePlusShareButton>

          <GooglePlusShareCount
            url={shareUrl}
            className="Demo__some-network__share-count">
            {count => count}
          </GooglePlusShareCount>
        </div>

        <div className="Demo__some-network">
          <LinkedinShareButton
            url={shareUrl}
            title={title}
            className="Demo__some-network__share-button">
            <LinkedinIcon
              size={32}
              round={false} />
          </LinkedinShareButton>

          <LinkedinShareCount
            url={shareUrl}
            className="Demo__some-network__share-count">
            {count => count}
          </LinkedinShareCount>
        </div>

        <div className="Demo__some-network">
          <VKShareButton
            url={shareUrl}
            className="Demo__some-network__share-button">
            <VKIcon
              size={32}
              round={false} />
          </VKShareButton>

          <div className="Demo__some-network__share-count">
            &nbsp;
          </div>
        </div>

        <div className="Demo__some-network">
          <HatenaBookmarkButton
            url={shareUrl}
            title={title}
            className="Demo__some-network__share-button">
            <HatenaIcon
              size={32}
              round={false} />
          </HatenaBookmarkButton>

          <HatenaBookmarkCount
            url={shareUrl}
            className="Demo__some-network__share-count">
            {count => count}
          </HatenaBookmarkCount>
        </div>

        <div className="Demo__some-network">
          <HatenaBookmarkButton
            url={shareUrl}
            title={title}
            className="Demo__some-network__share-button">
            <HatenaIcon
              size={32}
              round />
          </HatenaBookmarkButton>

          <HatenaBookmarkCount
            url={shareUrl}
            className="Demo__some-network__share-count">
            {count => count}
          </HatenaBookmarkCount>
        </div>

        <div className="Demo__some-network">
          <FeedlyFeedButton
            url={feedUrl}
            title={title}
            className="Demo__some-network__share-button">
            <FeedlyIcon
              size={32}
              round={false} />
          </FeedlyFeedButton>

          <FeedlyFeederCount
            url={feedUrl}
            className="Demo__some-network__share-count">
            {count => count}
          </FeedlyFeederCount>
        </div>

        <div className="Demo__some-network">
          <FeedlyFeedButton
            url={feedUrl}
            title={title}
            className="Demo__some-network__share-button">
            <FeedlyIcon
              size={32}
              round />
          </FeedlyFeedButton>

          <FeedlyFeederCount
            url={feedUrl}
            className="Demo__some-network__share-count">
            {count => count}
          </FeedlyFeederCount>
        </div>

        <div className="Demo__some-network">
          <PocketButton
            url={shareUrl}
            title={title}
            className="Demo__some-network__share-button">
            <PocketIcon
              size={32}
              round={false} />
          </PocketButton>

          <PocketCount
            url={shareUrl}
            className="Demo__some-network__share-count">
            {count => count}
          </PocketCount>
        </div>

        <div className="Demo__some-network">
          <PocketButton
            url={shareUrl}
            title={title}
            className="Demo__some-network__share-button">
            <PocketIcon
              size={32}
              round />
          </PocketButton>

          <PocketCount
            url={shareUrl}
            className="Demo__some-network__share-count">
            {count => count}
          </PocketCount>
        </div>
      </div>
    );
  },
});

export default Demo;
