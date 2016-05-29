/* eslint-disable prefer-template */
import assert from 'assert';

// import { objectToGetParams } from './utils';

export function hatena(url) {
  assert(url, 'hatena.url');

  return `http://b.hatena.ne.jp/entry/${url}`;
}

export function feedly(url) {
  assert(url, 'feedly.url');

  return `http://cloud.feedly.com/#subscriptionen/feed/${encodeURIComponent(url)}`;
}

export function pocket(url) {
  assert(url, 'pocket.url');

  return `http://getpocket.com/edit?url=${url}`;
}
