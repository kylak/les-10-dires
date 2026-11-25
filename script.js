// Affiche ou masque les numéros de verset du décalogue avec la touche V.
(function () {
  'use strict';

  function isEditable(target) {
    return (
      target instanceof HTMLElement &&
      (target.isContentEditable ||
        ['INPUT', 'TEXTAREA', 'SELECT'].indexOf(target.tagName) !== -1)
    );
  }

  function isVerseShortcut(event) {
    if (event.ctrlKey || event.metaKey || event.altKey) return false;
    if (event.repeat || event.isComposing) return false;
    return event.key.toLowerCase() === 'v' || event.code === 'KeyV';
  }

  document.addEventListener('keydown', function (event) {
    if (event.defaultPrevented) return;
    if (isEditable(event.target)) return;
    if (!isVerseShortcut(event)) return;

    document.body.classList.toggle('show-verses');
  });
})();
