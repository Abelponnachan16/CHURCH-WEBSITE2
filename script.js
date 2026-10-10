/**
 * ============================================================================
 * ST. GEORGE SALEM ORTHODOX CHURCH, IYPPALLOOR, KERALA
 * Primary JavaScript: script.js
 * Clean, lightweight, fully self-contained (no external libraries needed)
 * ============================================================================
 */

document.addEventListener('DOMContentLoaded', () => {

  // --------------------------------------------------------------------------
  // 1. DYNAMIC FOOTER YEAR
  // --------------------------------------------------------------------------
  const currentYearSpan = document.getElementById('current-year');
  if (currentYearSpan) {
    currentYearSpan.textContent = new Date().getFullYear();
  }

  // --------------------------------------------------------------------------
  // 2. HEADER SCROLL SHADOW EFFECT
  // --------------------------------------------------------------------------
  const header = document.getElementById('header');
  const handleScrollHeader = () => {
    if (window.scrollY > 40) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  };
  window.addEventListener('scroll', handleScrollHeader, { passive: true });
  handleScrollHeader();

  // --------------------------------------------------------------------------
  // 3. MOBILE DRAWER NAVIGATION
  // --------------------------------------------------------------------------
  const mobileToggle = document.getElementById('mobile-toggle');
  const mobileDrawer = document.getElementById('mobile-drawer');
  const drawerClose = document.getElementById('drawer-close');
  const drawerBackdrop = document.getElementById('drawer-backdrop');
  const drawerLinks = document.querySelectorAll('.drawer-link');

  const openDrawer = () => {
    mobileDrawer.classList.add('open');
    drawerBackdrop.classList.add('active');
    mobileToggle.setAttribute('aria-expanded', 'true');
    mobileDrawer.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden'; // Prevent background scrolling
  };

  const closeDrawer = () => {
    mobileDrawer.classList.remove('open');
    drawerBackdrop.classList.remove('active');
    mobileToggle.setAttribute('aria-expanded', 'false');
    mobileDrawer.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  };

  if (mobileToggle && mobileDrawer) {
    mobileToggle.addEventListener('click', openDrawer);
    if (drawerClose) drawerClose.addEventListener('click', closeDrawer);
    if (drawerBackdrop) drawerBackdrop.addEventListener('click', closeDrawer);

    drawerLinks.forEach(link => {
      link.addEventListener('click', closeDrawer);
    });
  }

  // --------------------------------------------------------------------------
  // 4. ACTIVE NAVIGATION LINK ON SCROLL (SCROLL SPY)
  // --------------------------------------------------------------------------
  const sections = document.querySelectorAll('section[id], header[id]');
  const desktopNavLinks = document.querySelectorAll('.desktop-nav .nav-link');

  const updateActiveNavLink = () => {
    const scrollPos = window.scrollY + 180;

    sections.forEach(sec => {
      const top = sec.offsetTop;
      const height = sec.offsetHeight;
      const id = sec.getAttribute('id');

      if (scrollPos >= top && scrollPos < top + height) {
        desktopNavLinks.forEach(link => {
          link.classList.remove('active');
          if (link.getAttribute('href') === `#${id}`) {
            link.classList.add('active');
          }
        });
      }
    });
  };
  window.addEventListener('scroll', updateActiveNavLink, { passive: true });

  // --------------------------------------------------------------------------
  // 5. SCROLL REVEAL ANIMATIONS (INTERSECTION OBSERVER)
  // --------------------------------------------------------------------------
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const revealElements = document.querySelectorAll('.reveal-on-scroll');

  if (!prefersReducedMotion && 'IntersectionObserver' in window) {
    const revealObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed');
          observer.unobserve(entry.target);
        }
      });
    }, {
      rootMargin: '0px 0px -60px 0px',
      threshold: 0.1
    });

    revealElements.forEach(el => revealObserver.observe(el));
  } else {
    // If reduced motion is preferred or observer unsupported, reveal immediately
    revealElements.forEach(el => el.classList.add('revealed'));
  }

  // --------------------------------------------------------------------------
  // 6. DAILY SCRIPTURE & PATRISTIC MEDITATION CYCLER
  // --------------------------------------------------------------------------
  const dailyVerses = [
    {
      text: "“Lord, I love the house where you dwell, the place where your glory resides.”",
      citation: "— Psalm 26:8"
    },
    {
      text: "“Pray without ceasing. In everything give thanks: for this is the will of God in Christ Jesus concerning you.”",
      citation: "— 1 Thessalonians 5:17-18"
    },
    {
      text: "“Prayer is the light of the soul, giving us true knowledge of God. It is a bridge between God and man.”",
      citation: "— St. John Chrysostom"
    },
    {
      text: "“The righteous shall flourish like a palm tree; he shall grow like a cedar in Lebanon.”",
      citation: "— Psalm 92:12"
    },
    {
      text: "“He who has love in his heart has God within him. For God is love.”",
      citation: "— St. Gregorios of Parumala (Parumala Thirumeni)"
    },
    {
      text: "“Blessed is the place wherein the memory of Thy holy martyrs is celebrated with devotion.”",
      citation: "— West Syriac Liturgical Prayer"
    }
  ];

  let currentVerseIdx = 0;
  const verseTextEl = document.getElementById('daily-verse-text');
  const verseCiteEl = document.getElementById('daily-verse-cite');
  const nextVerseBtn = document.getElementById('next-verse-btn');

  if (nextVerseBtn && verseTextEl && verseCiteEl) {
    nextVerseBtn.addEventListener('click', () => {
      currentVerseIdx = (currentVerseIdx + 1) % dailyVerses.length;
      
      verseTextEl.style.opacity = '0';
      verseCiteEl.style.opacity = '0';
      
      setTimeout(() => {
        verseTextEl.textContent = dailyVerses[currentVerseIdx].text;
        verseCiteEl.textContent = dailyVerses[currentVerseIdx].citation;
        verseTextEl.style.opacity = '1';
        verseCiteEl.style.opacity = '1';
      }, 200);
    });
  }

  // --------------------------------------------------------------------------
  // 7. PHOTO GALLERY FILTERING
  // --------------------------------------------------------------------------
  const filterBtns = document.querySelectorAll('.filter-btn');
  const galleryItems = document.querySelectorAll('.gallery-item');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filterValue = btn.getAttribute('data-filter');

      galleryItems.forEach(item => {
        const itemCategory = item.getAttribute('data-category');
        if (filterValue === 'all' || itemCategory === filterValue) {
          item.classList.remove('hidden');
        } else {
          item.classList.add('hidden');
        }
      });
    });
  });

  // --------------------------------------------------------------------------
  // 8. GALLERY LIGHTBOX MODAL
  // --------------------------------------------------------------------------
  const modal = document.getElementById('gallery-modal');
  const modalImg = document.getElementById('modal-img');
  const modalTitle = document.getElementById('modal-title');
  const modalDesc = document.getElementById('modal-desc');
  const modalClose = document.getElementById('modal-close');
  const modalBackdrop = document.getElementById('modal-backdrop');
  const viewBtns = document.querySelectorAll('.btn-gallery-view');

  const openModal = (src, title, desc) => {
    if (!modal) return;
    modalImg.src = src;
    modalImg.alt = title;
    modalTitle.textContent = title;
    modalDesc.textContent = desc;
    modal.classList.add('active');
    modal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    if (!modal) return;
    modal.classList.remove('active');
    modal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  };

  viewBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const src = btn.getAttribute('data-img');
      const title = btn.getAttribute('data-title');
      const desc = btn.getAttribute('data-desc');
      openModal(src, title, desc);
    });
  });

  if (modalClose) modalClose.addEventListener('click', closeModal);
  if (modalBackdrop) modalBackdrop.addEventListener('click', closeModal);

  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal && modal.classList.contains('active')) {
      closeModal();
    }
  });

  // --------------------------------------------------------------------------
  // 9. INTERACTIVE PRAYER REQUEST FORM
  // --------------------------------------------------------------------------
  const prayerForm = document.getElementById('prayer-form');
  const nameInput = document.getElementById('sender-name');
  const emailInput = document.getElementById('sender-email');
  const messageInput = document.getElementById('prayer-message');
  const successBanner = document.getElementById('form-success-banner');

  if (prayerForm) {
    prayerForm.addEventListener('submit', (e) => {
      e.preventDefault();
      let isValid = true;

      // Validate Name
      const nameGroup = nameInput.closest('.form-group');
      if (!nameInput.value.trim()) {
        nameGroup.classList.add('has-error');
        isValid = false;
      } else {
        nameGroup.classList.remove('has-error');
      }

      // Validate Email
      const emailGroup = emailInput.closest('.form-group');
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailInput.value.trim() || !emailRegex.test(emailInput.value.trim())) {
        emailGroup.classList.add('has-error');
        isValid = false;
      } else {
        emailGroup.classList.remove('has-error');
      }

      // Validate Message
      const messageGroup = messageInput.closest('.form-group');
      if (!messageInput.value.trim()) {
        messageGroup.classList.add('has-error');
        isValid = false;
      } else {
        messageGroup.classList.remove('has-error');
      }

      if (isValid) {
        // Show gentle confirmation banner
        if (successBanner) {
          successBanner.style.display = 'block';
          successBanner.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        }
        prayerForm.reset();

        // Hide success banner after 10 seconds
        setTimeout(() => {
          if (successBanner) successBanner.style.display = 'none';
        }, 10000);
      }
    });

    // Clear error states on input
    [nameInput, emailInput, messageInput].forEach(input => {
      if (input) {
        input.addEventListener('input', () => {
          input.closest('.form-group').classList.remove('has-error');
        });
      }
    });
  }

  // --------------------------------------------------------------------------
  // 10. SACRED CHURCH BELL CHIME (SYNTHESIZED WEB AUDIO API)
  // --------------------------------------------------------------------------
  const chimeToggle = document.getElementById('chime-toggle');
  let audioCtx = null;

  const playPeacefulBellChime = () => {
    try {
      const AudioContext = window.AudioContext || window.webkitAudioContext;
      if (!AudioContext) return;
      if (!audioCtx) audioCtx = new AudioContext();

      if (audioCtx.state === 'suspended') {
        audioCtx.resume();
      }

      const now = audioCtx.currentTime;

      // Orthodox bell harmonics frequencies (Fundamental ~ 520Hz with soft church overtones)
      const harmonics = [
        { freq: 523.25, gain: 0.35, decay: 3.2 },  // C5
        { freq: 1046.50, gain: 0.15, decay: 2.4 }, // C6
        { freq: 1567.98, gain: 0.08, decay: 1.8 }, // G6
        { freq: 2093.00, gain: 0.04, decay: 1.2 }  // C7
      ];

      harmonics.forEach(h => {
        const osc = audioCtx.createOscillator();
        const gainNode = audioCtx.createGain();

        osc.type = 'sine';
        osc.frequency.setValueAtTime(h.freq, now);

        gainNode.gain.setValueAtTime(0, now);
        gainNode.gain.linearRampToValueAtTime(h.gain, now + 0.02);
        gainNode.gain.exponentialRampToValueAtTime(0.0001, now + h.decay);

        osc.connect(gainNode);
        gainNode.connect(audioCtx.destination);

        osc.start(now);
        osc.stop(now + h.decay);
      });

      // Visual feedback on button
      if (chimeToggle) {
        chimeToggle.style.transform = 'scale(1.2) rotate(15deg)';
        setTimeout(() => {
          chimeToggle.style.transform = '';
        }, 350);
      }
    } catch (err) {
      console.log('Audio chime info:', err);
    }
  };

  if (chimeToggle) {
    chimeToggle.addEventListener('click', playPeacefulBellChime);
  }

  // --------------------------------------------------------------------------
  // 11. THEME TOGGLE (MIDNIGHT NAVY <-> WARM IVORY DAWN)
  // --------------------------------------------------------------------------
  const themeToggle = document.getElementById('theme-toggle');
  const savedTheme = localStorage.getItem('palli-theme') || 'midnight';

  document.body.setAttribute('data-theme', savedTheme);

  if (themeToggle) {
    themeToggle.addEventListener('click', () => {
      const currentTheme = document.body.getAttribute('data-theme');
      const nextTheme = currentTheme === 'midnight' ? 'ivory' : 'midnight';

      document.body.setAttribute('data-theme', nextTheme);
      localStorage.setItem('palli-theme', nextTheme);
    });
  }

  // --------------------------------------------------------------------------
  // 12. BACK TO TOP BUTTON
  // --------------------------------------------------------------------------
  const backToTopBtn = document.getElementById('back-to-top');
  const handleScrollTopBtn = () => {
    if (window.scrollY > 400) {
      backToTopBtn.classList.add('show');
    } else {
      backToTopBtn.classList.remove('show');
    }
  };

  window.addEventListener('scroll', handleScrollTopBtn, { passive: true });
  if (backToTopBtn) {
    backToTopBtn.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  // --------------------------------------------------------------------------
  // 13. AMBIENT CANDLELIGHT / SACRED STARLIGHT PARTICLES CANVAS
  // --------------------------------------------------------------------------
  const canvas = document.getElementById('ambient-canvas');
  if (canvas && !prefersReducedMotion) {
    const ctx = canvas.getContext('2d');
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    window.addEventListener('resize', () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    }, { passive: true });

    // Create 35 delicate, slow drifting golden motes
    const particles = [];
    const count = 32;

    for (let i = 0; i < count; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        radius: Math.random() * 1.6 + 0.6,
        alpha: Math.random() * 0.5 + 0.2,
        speedX: (Math.random() - 0.5) * 0.25,
        speedY: -Math.random() * 0.35 - 0.1, // Gently ascends like incense
        pulse: Math.random() * 0.02 + 0.008
      });
    }

    const animateParticles = () => {
      ctx.clearRect(0, 0, width, height);

      particles.forEach(p => {
        p.x += p.speedX;
        p.y += p.speedY;
        p.alpha += Math.sin(Date.now() * p.pulse * 0.05) * 0.005;

        // Wrap around screen
        if (p.y < 0) {
          p.y = height + 10;
          p.x = Math.random() * width;
        }
        if (p.x < 0) p.x = width;
        if (p.x > width) p.x = 0;

        // Draw soft golden particle
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(224, 186, 94, ${Math.max(0.1, Math.min(0.65, p.alpha))})`;
        ctx.shadowBlur = 8;
        ctx.shadowColor = '#d4af37';
        ctx.fill();
      });

      requestAnimationFrame(animateParticles);
    };

    animateParticles();
  }

});
