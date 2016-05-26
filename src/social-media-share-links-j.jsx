/* eslint-disable prefer-template */
import assert from 'assert';

import { objectToGetParams } from './utils';

export function hatena(url) {
  assert(url, 'hatena.url');

  return 'https://facebook.com/sharer.php' + objectToGetParams({ u: url });
}

export function feedly(url) {
  assert(url, 'feedly.url');

  return 'https://facebook.com/sharer.php' + objectToGetParams({ u: url });
}
