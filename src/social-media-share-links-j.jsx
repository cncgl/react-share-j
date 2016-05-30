/* eslint-disable prefer-template */
import assert from 'assert';

export function hatena(url) {
  assert(url, 'hatena.url');

  return `http://b.hatena.ne.jp/entry/${url}`;
}

export function feedly(url) {
  assert(url, 'feedly.url');

  return `http://cloud.feedly.com/#subscription/feed/${encodeURIComponent(url)}`;
}

export function pocket(url, opts) {
  assert(url, 'pocket.url');

  return `http://getpocket.com/edit?url=${url}&title=${opts.title}`;
}
