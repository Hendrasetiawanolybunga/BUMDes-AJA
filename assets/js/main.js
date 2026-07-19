/**
 * BUMDes Arja Jaya Abadi – Main JavaScript
 * Author  : coderNTT
 * Version : 2.0.0
 * Stack   : Pure Vanilla JS (ES6+), No frameworks
 * ─────────────────────────────────────────────────────────────
 * Modules (all in one file, IIFE-scoped):
 *  1. GALLERY_DATA  – central data store for all albums
 *  2. Gallery       – dynamic card rendering + lazy images
 *  3. Lightbox      – full-screen album viewer w/ thumbnails
 *  4. Navbar        – scroll behaviour + active link tracking
 *  5. Mobile Drawer – hamburger toggle
 *  6. SmoothScroll  – anchor override
 *  7. ScrollReveal  – IntersectionObserver for [data-reveal]
 *  8. NumberCounter – animated stat counters
 * ─────────────────────────────────────────────────────────────
 */

(function () {
  'use strict';

  /* ══════════════════════════════════════════════════════
     1. GALLERY DATA  – single source of truth
     NOTE: folder names in img/ must match exactly
  ══════════════════════════════════════════════════════ */
  const GALLERY_DATA = [
    {
      category : 'counter-brilink',
      title    : 'Unit Counter & BRI Link',
      cover    : 'img/counter-brilink/1.jpeg',
      images   : [
        'img/counter-brilink/1.jpeg',
        'img/counter-brilink/2.jpeg',
      ],
    },
    {
      category : 'jasa-pemasangan-wifi',
      title    : 'Unit Jasa Pemasangan Wifi',
      cover    : 'img/jasa-pemasangan-wifi/1.jpeg',
      images   : [
        'img/jasa-pemasangan-wifi/1.jpeg',
        'img/jasa-pemasangan-wifi/2.jpeg',
        'img/jasa-pemasangan-wifi/3.jpeg',
        'img/jasa-pemasangan-wifi/4.jpeg',
      ],
    },
    {
      category : 'kegiatan-budidaya-nila-kolam-bioflok',
      title    : 'Budidaya Nila Kolam Bioflok',
      cover    : 'img/kegiatan-budidaya-nila-kolam-bioflok/1.jpeg',
      images   : [
        'img/kegiatan-budidaya-nila-kolam-bioflok/1.jpeg',
        'img/kegiatan-budidaya-nila-kolam-bioflok/2.jpeg',
        'img/kegiatan-budidaya-nila-kolam-bioflok/3.jpeg',
        'img/kegiatan-budidaya-nila-kolam-bioflok/4.jpeg',
        'img/kegiatan-budidaya-nila-kolam-bioflok/hasil1.jpeg',
        'img/kegiatan-budidaya-nila-kolam-bioflok/hasil2.jpeg',
        'img/kegiatan-budidaya-nila-kolam-bioflok/hasil3.jpeg',
        'img/kegiatan-budidaya-nila-kolam-bioflok/hasil4.jpeg',
      ],
    },
    {
      category : 'kegiatan-pertanian',
      title    : 'Unit Kegiatan Pertanian',
      cover    : 'img/kegiatan-pertanian/1.jpeg',
      images   : [
        'img/kegiatan-pertanian/1.jpeg',
      ],
    },
    {
      category : 'kegiatan-sosial-suran-muharoman',
      title    : 'Sosial: Suran Muharoman',
      cover    : 'img/kegiatan-sosial-suran-muharoman/1.jpeg',
      images   : [
        'img/kegiatan-sosial-suran-muharoman/1.jpeg',
        'img/kegiatan-sosial-suran-muharoman/2.jpeg',
        'img/kegiatan-sosial-suran-muharoman/3.jpeg',
        'img/kegiatan-sosial-suran-muharoman/4.jpeg',
        'img/kegiatan-sosial-suran-muharoman/5.jpeg',
      ],
    },
    {
      category : 'kunjungan-monitoring-dari-dispermades-kab-cilacap',
      title    : 'Monitoring Dispermades Cilacap',
      cover    : 'img/kunjungan-monitoring-dari-dispermades-kab-cilacap/1.jpeg',
      images   : [
        'img/kunjungan-monitoring-dari-dispermades-kab-cilacap/1.jpeg',
        'img/kunjungan-monitoring-dari-dispermades-kab-cilacap/2.jpeg',
        'img/kunjungan-monitoring-dari-dispermades-kab-cilacap/3.jpeg',
        'img/kunjungan-monitoring-dari-dispermades-kab-cilacap/4.jpeg',
        'img/kunjungan-monitoring-dari-dispermades-kab-cilacap/5.jpeg',
        'img/kunjungan-monitoring-dari-dispermades-kab-cilacap/6.jpeg',
      ],
    },
    {
      category : 'pelatihan',
      title    : 'Pelatihan & Peningkatan Kapasitas',
      cover    : 'img/pelatihan/1.jpeg',
      images   : [
        'img/pelatihan/1.jpeg',
        'img/pelatihan/2.jpeg',
        'img/pelatihan/3.jpeg',
        'img/pelatihan/4.jpeg',
        'img/pelatihan/5.jpeg',
        'img/pelatihan/6.jpeg',
        'img/pelatihan/7.jpeg',
        'img/pelatihan/8.jpeg',
        'img/pelatihan/9.jpeg',
      ],
    },
    {
      category : 'pembangunan-green-house',
      title    : 'Pembangunan Green House Melon',
      cover    : 'img/pembangunan-green-house/1.jpeg',
      images   : [
        'img/pembangunan-green-house/1.jpeg',
        'img/pembangunan-green-house/2.jpeg',
        'img/pembangunan-green-house/3.jpeg',
        'img/pembangunan-green-house/4.jpeg',
      ],
    },
    {
      category : 'penggemukan-ternak-sapi',
      title    : 'Unit Usaha Peternakan Sapi',
      cover    : 'img/penggemukan-ternak-sapi/1.jpeg',
      images   : [
        'img/penggemukan-ternak-sapi/1.jpeg',
        'img/penggemukan-ternak-sapi/2.jpeg',
        'img/penggemukan-ternak-sapi/3.jpeg',
        'img/penggemukan-ternak-sapi/4.jpeg',
      ],
    },
    {
      category : 'sosial-semenisasi-pembangunan-gang-rt',
      title    : 'Sosial: Semenisasi Jalan Gang RT',
      cover    : 'img/sosial-semenisasi-pembangunan-gang-rt/1.jpeg',
      images   : [
        'img/sosial-semenisasi-pembangunan-gang-rt/1.jpeg',
        'img/sosial-semenisasi-pembangunan-gang-rt/2.jpeg',
        'img/sosial-semenisasi-pembangunan-gang-rt/3.jpeg',
        'img/sosial-semenisasi-pembangunan-gang-rt/4.jpeg',
      ],
    },
  ];

  /* ══════════════════════════════════════════════════════
     2. GALLERY – dynamic card rendering
  ══════════════════════════════════════════════════════ */
  const GalleryModule = (function () {

    /** Build one skeleton placeholder during load */
    function _makeSkeleton () {
      const sk = document.createElement('div');
      sk.className = 'skeleton';
      sk.setAttribute('aria-hidden', 'true');
      return sk;
    }

    /** Build one album card DOM node */
    function _makeCard (album, index) {
      const count = album.images.length;

      const article = document.createElement('article');
      article.className  = 'gallery-album-card';
      article.setAttribute('role', 'listitem');
      article.setAttribute('tabindex', '0');
      article.setAttribute('aria-label', `${album.title} – ${count} foto. Klik untuk membuka album`);
      article.dataset.index = index;

      // Cover image – lazy loaded, explicit dimensions prevent CLS
      const img = document.createElement('img');
      img.src     = album.cover;
      img.alt     = `Cover album ${album.title}`;
      img.width   = 400;
      img.height  = 300;
      img.loading = 'lazy';
      img.decoding = 'async';

      // Overlay
      const overlay = document.createElement('div');
      overlay.className   = 'card-overlay';
      overlay.setAttribute('aria-hidden', 'true');

      const badge = document.createElement('span');
      badge.className = 'card-badge';
      badge.innerHTML = `<i class="fa-solid fa-images" aria-hidden="true"></i> ${count} Foto`;

      const title = document.createElement('p');
      title.className = 'card-title';
      title.textContent = album.title;

      overlay.appendChild(badge);
      overlay.appendChild(title);
      article.appendChild(img);
      article.appendChild(overlay);

      // Open lightbox on click or keyboard Enter/Space
      article.addEventListener('click', () => LightboxModule.open(index, 0));
      article.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          LightboxModule.open(index, 0);
        }
      });

      return article;
    }

    function init () {
      const grid = document.getElementById('gallery-grid');
      if (!grid) return;

      // Show skeletons first (perceived performance)
      const skeletons = GALLERY_DATA.map(_makeSkeleton);
      skeletons.forEach(sk => grid.appendChild(sk));

      // Use requestIdleCallback if available, else setTimeout
      const schedule = window.requestIdleCallback || ((cb) => setTimeout(cb, 80));

      schedule(() => {
        // Remove skeletons, inject real cards
        grid.innerHTML = '';
        const fragment = document.createDocumentFragment();
        GALLERY_DATA.forEach((album, idx) => {
          const card = _makeCard(album, idx);
          // Staggered reveal
          card.setAttribute('data-reveal', 'up');
          card.setAttribute('data-delay', String((idx % 4) + 1));
          fragment.appendChild(card);
        });
        grid.appendChild(fragment);

        // Re-observe newly injected elements for scroll-reveal
        if (window._revealObserver) {
          grid.querySelectorAll('[data-reveal]').forEach(el => {
            window._revealObserver.observe(el);
          });
        }
      });
    }

    return { init };
  })();

  /* ══════════════════════════════════════════════════════
     3. LIGHTBOX – album viewer with thumbnails + swipe
  ══════════════════════════════════════════════════════ */
  const LightboxModule = (function () {
    let _albumIdx  = 0;   // which GALLERY_DATA entry
    let _photoIdx  = 0;   // current image within album
    let _touchStartX = 0;

    const lb       = document.getElementById('lightbox');
    const lbImg    = document.getElementById('lb-img');
    const lbClose  = document.getElementById('lb-close');
    const lbPrev   = document.getElementById('lb-prev');
    const lbNext   = document.getElementById('lb-next');
    const lbCap    = document.getElementById('lb-caption');

    // Thumbnail strip – created once and reused
    let lbThumbs = document.getElementById('lb-thumbs');
    if (!lbThumbs) {
      lbThumbs = document.createElement('div');
      lbThumbs.id = 'lb-thumbs';
      lbThumbs.setAttribute('aria-label', 'Thumbnail foto');
      lb.appendChild(lbThumbs);
    }

    function _currentAlbum () { return GALLERY_DATA[_albumIdx]; }

    function _setPhoto (idx) {
      const album  = _currentAlbum();
      const total  = album.images.length;
      _photoIdx    = (idx + total) % total;

      // Fade transition
      lbImg.classList.add('fading');
      setTimeout(() => {
        lbImg.src = album.images[_photoIdx];
        lbImg.alt = `${album.title} – foto ${_photoIdx + 1} dari ${total}`;
        lbImg.classList.remove('fading');
      }, 150);

      lbCap.textContent = `${album.title}  •  ${_photoIdx + 1} / ${total}`;

      // Sync thumbnails
      lbThumbs.querySelectorAll('.lb-thumb').forEach((t, i) => {
        t.classList.toggle('active', i === _photoIdx);
        if (i === _photoIdx) t.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
      });
    }

    function _buildThumbs () {
      const album = _currentAlbum();
      lbThumbs.innerHTML = '';
      album.images.forEach((src, i) => {
        const t = document.createElement('img');
        t.src     = src;
        t.alt     = `Thumbnail foto ${i + 1}`;
        t.width   = 52;
        t.height  = 36;
        t.loading = 'lazy';
        t.className = 'lb-thumb' + (i === _photoIdx ? ' active' : '');
        t.addEventListener('click', (e) => { e.stopPropagation(); _setPhoto(i); });
        lbThumbs.appendChild(t);
      });
    }

    function open (albumIdx, photoIdx) {
      _albumIdx = albumIdx;
      _photoIdx = photoIdx;
      _buildThumbs();
      _setPhoto(_photoIdx);
      lb.removeAttribute('inert');          // make contents focusable before showing
      lb.classList.add('active');
      lb.setAttribute('aria-hidden', 'false');
      document.body.style.overflow = 'hidden';
      lbClose.focus();
    }

    function close () {
      lb.classList.remove('active');
      lb.setAttribute('aria-hidden', 'true');
      lb.setAttribute('inert', '');         // remove from focus order immediately
      lbImg.src = '';
      lbThumbs.innerHTML = '';
      document.body.style.overflow = '';
    }

    function _init () {
      if (!lb) return;

      lbClose.addEventListener('click', close);
      lbPrev.addEventListener('click', (e) => { e.stopPropagation(); _setPhoto(_photoIdx - 1); });
      lbNext.addEventListener('click', (e) => { e.stopPropagation(); _setPhoto(_photoIdx + 1); });

      // Close on backdrop click
      lb.addEventListener('click', (e) => { if (e.target === lb) close(); });

      // Keyboard
      document.addEventListener('keydown', (e) => {
        if (!lb.classList.contains('active')) return;
        if (e.key === 'Escape')     close();
        if (e.key === 'ArrowLeft')  _setPhoto(_photoIdx - 1);
        if (e.key === 'ArrowRight') _setPhoto(_photoIdx + 1);
      });

      // Touch swipe
      lb.addEventListener('touchstart', (e) => {
        _touchStartX = e.changedTouches[0].screenX;
      }, { passive: true });
      lb.addEventListener('touchend', (e) => {
        const diff = _touchStartX - e.changedTouches[0].screenX;
        if (Math.abs(diff) > 50) diff > 0 ? _setPhoto(_photoIdx + 1) : _setPhoto(_photoIdx - 1);
      }, { passive: true });
    }

    return { init: _init, open };
  })();

  /* ══════════════════════════════════════════════════════
     4. NAVBAR – scroll state + active link highlighting
  ══════════════════════════════════════════════════════ */
  const NavbarModule = (function () {
    const navbar   = document.getElementById('navbar');
    const navLinks = document.querySelectorAll('.nav-link');
    const sections = document.querySelectorAll('section[id]');

    function _onScroll () {
      // Glassmorphism intensify
      navbar.classList.toggle('scrolled', window.scrollY > 30);

      // Active link
      let current = '';
      sections.forEach(sec => {
        if (window.scrollY >= sec.offsetTop - 130) current = sec.id;
      });
      navLinks.forEach(link => {
        link.classList.toggle(
          'active',
          link.getAttribute('href') === '#' + current
        );
      });
    }

    function init () {
      if (!navbar) return;
      window.addEventListener('scroll', _onScroll, { passive: true });
      _onScroll(); // run once on load
    }

    return { init };
  })();

  /* ══════════════════════════════════════════════════════
     5. MOBILE DRAWER – hamburger toggle
  ══════════════════════════════════════════════════════ */
  const DrawerModule = (function () {
    const btn    = document.getElementById('hamburger');
    const drawer = document.getElementById('mobile-drawer');
    let isOpen   = false;

    function _setOpen (state) {
      isOpen = state;
      btn.classList.toggle('open', isOpen);
      drawer.classList.toggle('open', isOpen);
      btn.setAttribute('aria-expanded', String(isOpen));
      drawer.setAttribute('aria-hidden', String(!isOpen));
      // inert: remove when open so keyboard/AT can reach links,
      // add back when closed so nothing inside is focusable
      if (isOpen) {
        drawer.removeAttribute('inert');
      } else {
        drawer.setAttribute('inert', '');
      }
    }

    function init () {
      if (!btn || !drawer) return;

      btn.addEventListener('click', () => _setOpen(!isOpen));

      // Close on link click
      drawer.querySelectorAll('a').forEach(a => {
        a.addEventListener('click', () => _setOpen(false));
      });

      // Close on outside click
      document.addEventListener('click', (e) => {
        if (isOpen && !btn.contains(e.target) && !drawer.contains(e.target)) {
          _setOpen(false);
        }
      });
    }

    return { init };
  })();

  /* ══════════════════════════════════════════════════════
     6. SMOOTH SCROLL – native anchor override
  ══════════════════════════════════════════════════════ */
  function initSmoothScroll () {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        const target = document.querySelector(this.getAttribute('href'));
        if (!target) return;
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      });
    });
  }

  /* ══════════════════════════════════════════════════════
     7. SCROLL REVEAL – IntersectionObserver
     Exposed on window._revealObserver so Gallery module
     can register dynamically injected cards.
  ══════════════════════════════════════════════════════ */
  function initScrollReveal () {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

    document.querySelectorAll('[data-reveal]').forEach(el => observer.observe(el));

    // Expose globally so Gallery module can register late-injected cards
    window._revealObserver = observer;
  }

  /* ══════════════════════════════════════════════════════
     8. NUMBER COUNTER – animated stat counters
  ══════════════════════════════════════════════════════ */
  function initCounters () {
    const els = document.querySelectorAll('.stat-num[data-target]');
    if (!els.length) return;

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        const el     = entry.target;
        const target = parseInt(el.dataset.target, 10);
        const dur    = 1200; // ms
        let start    = 0;
        const step   = Math.ceil(target / (dur / 16));

        el.classList.add('pop');
        const timer = setInterval(() => {
          start += step;
          if (start >= target) {
            el.textContent = target.toLocaleString('id-ID') + '+';
            clearInterval(timer);
          } else {
            el.textContent = start.toLocaleString('id-ID');
          }
        }, 16);

        observer.unobserve(el);
      });
    }, { threshold: 0.5 });

    els.forEach(el => observer.observe(el));
  }

  /* ══════════════════════════════════════════════════════
     9. FINANCE MODULE – year tab switcher
        Updates Google Sheets link per active tab only.
  ══════════════════════════════════════════════════════ */
  const FinanceModule = (function () {

    /* Link per tahun */
    const FINANCIAL_DATA = {
      '2025': { link: 'https://docs.google.com/spreadsheets/d/1UNQHkdTMbynuqTb_5Qg9orZiToI9YjSq/edit?gid=2048541512#gid=2048541512' },
      '2024': { link: 'https://docs.google.com/spreadsheets/d/1thUDKymj0jzIj1vEtIa7hfh1W_kf_4wD/edit?gid=2048541512#gid=2048541512' },
      '2023': { link: 'https://docs.google.com/spreadsheets/d/1tWINMCBIMeupJIGIy31suE5r2BOkAV3M/edit?gid=2048541512#gid=2048541512' },
      '2022': { link: 'https://docs.google.com/spreadsheets/d/1JgwrUP_37KwBHnb9-J6dIUpAS3dAaHB8/edit?gid=1538165019#gid=1538165019' },
    };

    function _switchYear (year) {
      const d = FINANCIAL_DATA[year];
      if (!d) return;

      /* Update CTA link & aria-label */
      const sheetsLink = document.getElementById('sheets-link');
      if (sheetsLink) {
        sheetsLink.href = d.link;
        sheetsLink.setAttribute(
          'aria-label',
          `Lihat detail laporan keuangan ${year} di Google Sheets (membuka tab baru)`
        );
        /* Restart fade animation */
        sheetsLink.classList.remove('finance-panel-fade');
        void sheetsLink.offsetWidth;
        sheetsLink.classList.add('finance-panel-fade');
      }

      /* Update tab ARIA state */
      document.querySelectorAll('.fin-tab').forEach(btn => {
        const active = btn.dataset.year === year;
        btn.setAttribute('aria-selected', String(active));
        btn.classList.toggle('fin-tab--active', active);
      });
    }

    function init () {
      const tabs = document.querySelectorAll('.fin-tab');
      if (!tabs.length) return;

      tabs.forEach(btn => {
        /* Click */
        btn.addEventListener('click', () => _switchYear(btn.dataset.year));

        /* Arrow-key navigation (WCAG tablist pattern) */
        btn.addEventListener('keydown', (e) => {
          const all  = Array.from(tabs);
          const idx  = all.indexOf(btn);
          let target = null;
          if (e.key === 'ArrowRight') target = all[(idx + 1) % all.length];
          if (e.key === 'ArrowLeft')  target = all[(idx - 1 + all.length) % all.length];
          if (e.key === 'Home')       target = all[0];
          if (e.key === 'End')        target = all[all.length - 1];
          if (target) { target.focus(); target.click(); e.preventDefault(); }
        });
      });

      /* Init with default year */
      _switchYear('2025');
    }

    return { init };
  })();

  /* ══════════════════════════════════════════════════════
     BOOTSTRAP – run all modules after DOM is ready
  ══════════════════════════════════════════════════════ */
  function boot () {
    initSmoothScroll();
    initScrollReveal();
    initCounters();
    NavbarModule.init();
    DrawerModule.init();
    LightboxModule.init();
    GalleryModule.init(); // last – injects DOM, then observes
    FinanceModule.init(); // finance dashboard
  }

  // DOMContentLoaded is already past when defer scripts run,
  // but guard for safety.
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', boot);
  } else {
    boot();
  }

})(); // end IIFE
