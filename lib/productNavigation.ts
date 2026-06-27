export function getNormalizedProductUrl(href: string) {
  const url = new URL(href, window.location.origin);
  return `${url.pathname}${url.search}${url.hash}`;
}

export function isSamePageProductHash(href: string, pathname: string | null) {
  if (!pathname || typeof window === 'undefined') return false;

  const url = new URL(href, window.location.origin);
  return url.pathname === pathname && url.pathname === '/products' && Boolean(url.hash);
}

export function pushProductHash(href: string) {
  const oldUrl = window.location.href;
  const nextPath = getNormalizedProductUrl(href);
  const currentPath = `${window.location.pathname}${window.location.search}${window.location.hash}`;

  if (currentPath !== nextPath) {
    window.history.pushState(null, '', nextPath);
  } else {
    window.history.replaceState(null, '', nextPath);
  }

  const newUrl = window.location.href;

  if (typeof HashChangeEvent === 'function') {
    window.dispatchEvent(new HashChangeEvent('hashchange', { oldURL: oldUrl, newURL: newUrl }));
  } else {
    window.dispatchEvent(new Event('hashchange'));
  }
}
