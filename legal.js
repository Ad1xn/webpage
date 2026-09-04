/* Shared behaviour for the Impressum / Datenschutz pages:
   theme toggle and language toggle, using the same stored keys as index.html. */
(function () {
  var root = document.documentElement;
  var themeBtn = document.getElementById('themeBtn');
  var langBtn  = document.getElementById('langBtn');
  var mqD = window.matchMedia('(prefers-color-scheme: dark)');

  function isDark() {
    var t = root.getAttribute('data-theme');
    return t ? t === 'dark' : mqD.matches;
  }
  function themeLabel() {
    themeBtn.textContent = isDark()
      ? (lang === 'de' ? 'Hell' : 'Light')
      : (lang === 'de' ? 'Dunkel' : 'Dark');
  }
  themeBtn.addEventListener('click', function () {
    var next = isDark() ? 'light' : 'dark';
    root.setAttribute('data-theme', next);
    try { localStorage.setItem('au-theme', next); } catch (e) {}
    themeLabel();
  });
  mqD.addEventListener('change', themeLabel);

  var lang = 'en';
  function applyLang(next) {
    lang = next;
    root.setAttribute('lang', next);
    Array.prototype.forEach.call(document.querySelectorAll('[data-lang]'), function (el) {
      el.hidden = el.getAttribute('data-lang') !== next;
    });
    langBtn.textContent = next === 'de' ? 'EN' : 'DE';
    document.title = document.querySelector('[data-title-' + next + ']')
      .getAttribute('data-title-' + next);
    themeLabel();
    try { localStorage.setItem('au-lang', next); } catch (e) {}
  }
  langBtn.addEventListener('click', function () { applyLang(lang === 'de' ? 'en' : 'de'); });

  var saved = null;
  try { saved = localStorage.getItem('au-lang'); } catch (e) {}
  if (!saved && (navigator.language || '').toLowerCase().indexOf('de') === 0) saved = 'de';
  applyLang(saved === 'de' ? 'de' : 'en');
})();
