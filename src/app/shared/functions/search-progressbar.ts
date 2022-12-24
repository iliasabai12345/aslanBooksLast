export function showSPB() {
  const el = document.getElementById('search-progressbar');
  el && el.setAttribute('style', 'visibility:visible;');
}

export function hideSPB() {
  const el = document.getElementById('search-progressbar');
  el && el.setAttribute('style', 'visibility:hidden;');
}
