/* eslint-disable no-param-reassign */
import 'whatwg-fetch';
// import jsonp from 'jsonp';
import $ from 'jquery';

export function getHatenaBookmarkCount(shareUrl, callback) {
  const url = `${encodeURIComponent(shareUrl)}`;
  const endpoint = `http://api.b.st-hatena.com/entry.count?url=${url}`;

  $.ajax({
    url: endpoint,
    dataType: 'jsonp',
    success: (count) => { callback(!!count ? count : 0); },
  });

  // fetch(endpoint, {mode: 'cors'})
  //   .then((res) => { return res.text(); })
  //   .then((text) => { callback(Number(text)); });

  // $.get(endpoint, (data) => { callback(!!data ? Number(data) : 0); });

  // jsonp(endpoint, (err, data) => {
  //   if (!err) { callback(data); }
  // });
}

export function getFeedlyFeederCount(shareUrl, callback) {
  const url = `${encodeURIComponent(shareUrl)}`;
  const endpoint = `http://cloud.feedly.com/v3/feeds/feed%2F${url}`;
  const proxy = `https://crossorigin.me/${endpoint}`;

  $.get(proxy, (data) => { callback(!!data ? data.subscribers : 0); });
}

export function getPocketCount(shareUrl, callback) {
  const url = `${encodeURIComponent(shareUrl)}`;
  const endpoint = `https://widgets.getpocket.com/v1/button?count=vertical&url=${url}`;

  $.ajaxPrefilter((options) => {
    if (options.crossDomain && $.support.cors) {
      const http = (window.location.protocol === 'http:' ? 'http:' : 'https:');
      options.url = `${http}//cors-anywhere.herokuapp.com/${options.url}`;
    }
  });

  $.get(endpoint, response => {
    const count = Number($(response).find('#cnt').text());
    callback(count);
  });
}
