(function () {
  'use strict';

  // ---------- SENSITIVE DATA REVEAL ----------
  document.querySelectorAll('[data-sensitive]').forEach(container => {
    const btn = container.querySelector('.reveal-btn');
    const blurEl = container.querySelector('.blur');
    if (btn && blurEl) {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        blurEl.classList.toggle('revealed');
        btn.textContent = blurEl.classList.contains('revealed') ? 'Hide' : 'Reveal';
      });
    }
  });

  // ---------- PROJECT CARD EXPAND ----------
  document.querySelectorAll('[data-project]').forEach(card => {
    card.addEventListener('click', (e) => {
      if (e.target.closest('a')) return;
      card.classList.toggle('expanded');
    });
  });

  // ---------- SKILL PILL GLOW ----------
  document.querySelectorAll('.skill-pill').forEach(pill => {
    pill.addEventListener('mousemove', (e) => {
      const rect = pill.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 100;
      const y = ((e.clientY - rect.top) / rect.height) * 100;
      pill.style.setProperty('--x', x + '%');
      pill.style.setProperty('--y', y + '%');
    });
  });

  // ---------- HERO PORTRAIT PARALLAX ----------
  const heroPortrait = document.getElementById('heroPortrait');
  if (heroPortrait && window.matchMedia('(pointer: fine)').matches) {
    window.addEventListener('mousemove', (e) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 14;
      const y = (e.clientY / window.innerHeight - 0.5) * 14;
      heroPortrait.style.transform = `translate(${x}px, ${y}px)`;
    });
  }

  // ---------- TECH NODES PARALLAX ----------
  if (window.matchMedia('(pointer: fine)').matches) {
    const techNodes = document.querySelectorAll('.tech-node');
    window.addEventListener('mousemove', (e) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 2;
      const y = (e.clientY / window.innerHeight - 0.5) * 2;
      techNodes.forEach((node, i) => {
        const depth = (i % 3) * 2 - 2;
        node.style.transform = `translate(${x * depth}px, ${y * depth}px)`;
      });
    });
  }
})();