---
layout: page
permalink: /publications/
title: publications
nav: true
nav_order: 1
---

<!-- _pages/publications.md -->

<!-- Bibsearch Feature -->

{% include bib_search.liquid %}

<div class="publications">

{% bibliography %}

</div>

<!--
  Make hover-zoom on publication figures use the ORIGINAL full-resolution image.
  Thumbnails are served through a responsive <picture> at sizes="200px", so the
  browser loads a small (~480px) webp and medium-zoom would otherwise scale that
  small variant up (pixelated). The <img>'s own src still points to the original
  file, so we copy it into data-zoom-src; medium-zoom then loads the original,
  giving a crisp zoom at each figure's native size.
-->
<script>
  (function () {
    function setZoomSrc() {
      var imgs = document.querySelectorAll('.publications img.preview, .publications img[data-zoomable]');
      var n = 0;
      imgs.forEach(function (img) {
        if (!img.getAttribute('data-zoom-src')) {
          var src = img.getAttribute('src');
          if (src) {
            img.setAttribute('data-zoom-src', src);
            n++;
          }
        }
      });
      console.log('[pub-zoom] data-zoom-src set on ' + n + ' of ' + imgs.length + ' preview image(s)');
    }
    setZoomSrc();
    document.addEventListener('DOMContentLoaded', setZoomSrc);
  })();
</script>
