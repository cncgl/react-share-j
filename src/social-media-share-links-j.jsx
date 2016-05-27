/* eslint-disable prefer-template */
import assert from 'assert';

import { objectToGetParams } from './utils';

export function hatena(url) {
  assert(url, 'hatena.url');

  return 'http://b.hatena.ne.jp/entry/' + objectToGetParams({ u: url });
}

export function feedly(url) {
  assert(url, 'feedly.url');

  return 'https://facebook.com/sharer.php' + objectToGetParams({ u: url });
}

export function pocket(url) {
  assert(url, 'pocket.url');

  return 'https://facebook.com/sharer.php' + objectToGetParams({ u: url });
}
