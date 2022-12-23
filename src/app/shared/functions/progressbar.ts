export function showPB() {
  const el = document.getElementById('progressbar');
  el && el.setAttribute('style', 'visibility:visible;');
}

export function hidePB() {
  const el = document.getElementById('progressbar');
  el && el.setAttribute('style', 'visibility:hidden;');
}
