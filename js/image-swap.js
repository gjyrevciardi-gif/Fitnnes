// image-swap.js
// Attempt to replace placeholder images/backgrounds with uploaded photos.
document.addEventListener('DOMContentLoaded', () => {
  function loadImage(url) {
    return new Promise(resolve => {
      const img = new Image();
      img.onload = () => resolve(true);
      img.onerror = () => resolve(false);
      img.src = url;
    });
  }

  // Replace <img> elements that have a `data-prefer` attribute (comma-separated URLs)
  document.querySelectorAll('img[data-prefer]').forEach(async img => {
    const candidates = img.getAttribute('data-prefer').split(',').map(s => s.trim()).filter(Boolean);
    for (const c of candidates) {
      try {
        const ok = await loadImage(c);
        if (ok) { img.src = c; break; }
      } catch (e) { /* ignore */ }
    }
  });

  // Replace background images for elements that have `data-background-prefer` (comma-separated URLs)
  document.querySelectorAll('[data-background-prefer]').forEach(async el => {
    const candidates = el.getAttribute('data-background-prefer').split(',').map(s => s.trim()).filter(Boolean);
    for (const c of candidates) {
      try {
        const ok = await loadImage(c);
        if (ok) {
          const current = el.style.background || '';
          el.style.backgroundImage = `url('${c}')`;
          el.style.backgroundSize = el.style.backgroundSize || 'cover';
          el.style.backgroundPosition = el.style.backgroundPosition || 'center';
          break;
        }
      } catch (e) { /* ignore */ }
    }
  });
});
