export function searchStrUrl(base, searchStr) {
  return `${base}/search?q=${searchStr}`;
}

export function collectionUrl(base, collection) {
  return `${base}/search?collection=${collection.collectionKey}`;
}