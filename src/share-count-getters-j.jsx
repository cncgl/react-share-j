/* eslint-disable no-param-reassign */
import 'whatwg-fetch';
import jsonp from 'jsonp';
import $ from 'jquery';

export function getHatenaBookmarkCount(shareUrl, callback) {
  const url = `${encodeURIComponent(shareUrl)}`;
  const endpoint = `http://api.b.st-hatena.com/entry.count?url=${url}`;

  jsonp(endpoint, (err, data) => {
    if (!err) {
      callback(data);
    }
  });
}

export function getFeedlyFeederCount(shareUrl, callback) {
  const url = `${encodeURIComponent(shareUrl)}`;
  const endpoint = `http://cloud.feedly.com/v3/feeds/feed%2F${url}`;
  const proxy = `https://crossorigin.me/${endpoint}`;

  $.get(proxy, (data) => { callback(!!data ? data.subscribers : 0); });

  // fetch(proxy, {
  //   method: 'GET',
  //   mode: 'cors',
  //   credentials: 'include'
  // }).then(function(response) {
  //   console.log(`response: ${response}`);
  //   return response.json();
  // }).then(function(json) {
  //   console.log(json);
  //   callback(json.describers);
  // });


  // jsonp(endpoint, (err, data) => {
  //   console.log(`err: ${err} data: ${data}`);
  //   const count = data ? Number(data.subscribers) : 0;
  //   callback(count);
  // });
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
