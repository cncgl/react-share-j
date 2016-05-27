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

export function getPocketCount(shareUrl, callback) {
  const url = `${encodeURIComponent(shareUrl)}`;
  const endpoint = `https://widgets.getpocket.com/v1/button?count=vertical&url=${url}`;

  $.ajaxPrefilter( function (options) {
    if (options.crossDomain && $.support.cors) {
      const http = (window.location.protocol === 'http:' ? 'http:' : 'https:');
      options.url = http + '//cors-anywhere.herokuapp.com/' + options.url;
    }
  });

  $.get(endpoint, function (response) {
    const count = Number($(response).find('#cnt').text());
    callback(count);
  });
}
