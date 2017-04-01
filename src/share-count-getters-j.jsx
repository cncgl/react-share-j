/* eslint-disable no-param-reassign */
import $ from 'jquery';
import fetchJsonp from 'fetch-jsonp';

export function getHatenaBookmarkCount(shareUrl, callback) {
  const url = `${encodeURIComponent(shareUrl)}`;
  const baseUrl = window.location.protocol === 'https:' ? 'https://b.hatena.ne.jp' : 'http://api.b.st-hatena.com';
  const endpoint = `${baseUrl}/entry.count?url=${url}`;

  // $.ajax({
  //   url: endpoint,
  //   dataType: 'jsonp',
  //   success: (count) => { callback(!!count ? count : 0); },
  // });
  fetchJsonp(endpoint)
    .then((response) => { response.json(); })
    .then((count) => {
      callback(!!count ? count : 0);
    });
}

export function getFeedlyFeederCount(shareUrl, callback) {
  const url = `${encodeURIComponent(shareUrl)}`;
  const endpoint = `http://cloud.feedly.com/v3/feeds/feed%2F${url}`;
  const proxy = `https://crossorigin.me/${endpoint}`;

  $.getJSON(proxy).then(
    (data) => { callback(!!data ? data.subscribers : 0); },
  );
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

  $.get(endpoint, (response) => {
    const count = Number($(response).find('#cnt').text());
    callback(count);
  });
}
