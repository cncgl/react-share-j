import jsonp from 'jsonp';
import platform from 'platform';

import { objectToGetParams } from './utils';


export function getHatenaShareCount(shareUrl, callback) {
  const fql = encodeURIComponent('select like_count, share_count from ' +
    `link_stat where url = '${encodeURIComponent(shareUrl)}'`);

  const endpoint = 'https://api.facebook.com/method/fql.query' +
    `?format=json&query=${fql}`;

  jsonp(endpoint, (err, data) => {
    if (!err) {
      callback(data.length && data[0].share_count
        ? data[0].share_count
        : undefined);
    }
  });
}

export function getPocketCount(shareUrl, callback) {
  const fql = encodeURIComponent('select like_count, share_count from ' +
    `link_stat where url = '${encodeURIComponent(shareUrl)}'`);

  const endpoint = 'https://api.facebook.com/method/fql.query' +
    `?format=json&query=${fql}`;

  jsonp(endpoint, (err, data) => {
    if (!err) {
      callback(data.length && data[0].share_count
        ? data[0].share_count
        : undefined);
    }
  });
}
