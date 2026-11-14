import Lenis from 'lenis';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export function initScrollChoreography(scene) {
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  // 1. Lenis Smooth Inertial Scroller synced with GSAP
  const lenis = new Lenis({
    duration: prefersReducedMotion ? 0 : 1.2,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    smoothWheel: !prefersReducedMotion,
    touchMultiplier: 1.4,
  });

  lenis.on('scroll', ScrollTrigger.update);

  gsap.ticker.add((time) => {
    lenis.raf(time * 1000);
  });
  gsap.ticker.lagSmoothing(0);

  // 2. Smooth anchor link scrolling via Lenis
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener('click', (e) => {
      const targetId = anchor.getAttribute('href');
      if (!targetId || targetId === '#') return;
      const targetEl = document.querySelector(targetId);
      if (targetEl) {
        e.preventDefault();
        lenis.scrollTo(targetEl, { offset: -40 });
      }
    });
  });

  // 3. Scroll-driven 3D Camera & Stage Choreography
  const camRig = {
    px: 0.6,
    py: 0.15,
    pz: 6.4,
    lx: 0.4,
    ly: 0.0,
    lz: 0.0,
    skillsSpread: 0,
    worksVis: 0,
  };

  const applyRig = () => {
    scene.setCameraChoreography(
      { x: camRig.px, y: camRig.py, z: camRig.pz },
      { x: camRig.lx, y: camRig.ly, z: camRig.lz }
    );
    scene.setSkillsSpread(camRig.skillsSpread);
    scene.setWorksVisibility(camRig.worksVis);
  };

  // Hero -> About / Capabilities transition
  gsap
    .timeline({
      scrollTrigger: {
        trigger: '#about',
        start: 'top bottom',
        end: 'center center',
        scrub: 1.1,
      },
      onUpdate: applyRig,
    })
    .fromTo(
      camRig,
      { px: 0.6, py: 0.15, pz: 6.4, lx: 0.4, ly: 0.0, skillsSpread: 0, worksVis: 0 },
      {
        px: -1.6,
        py: -0.65,
        pz: 7.4,
        lx: 0.8,
        ly: 0.15,
        skillsSpread: 1,
        worksVis: 0,
        ease: 'power2.inOut',
        immediateRender: false,
      }
    );

  // About -> Selected Works transition (reveal 3D Holo-Stage)
  gsap
    .timeline({
      scrollTrigger: {
        trigger: '#works',
        start: 'top 85%',
        end: 'top 25%',
        scrub: 1.0,
      },
      onUpdate: applyRig,
    })
    .fromTo(
      camRig,
      { px: -1.6, py: -0.65, pz: 7.4, lx: 0.8, ly: 0.15, skillsSpread: 1, worksVis: 0 },
      {
        px: -0.5,
        py: 0.2,
        pz: 6.8,
        lx: 0.9,
        ly: 0.0,
        worksVis: 1,
        ease: 'power2.out',
        immediateRender: false,
      }
    );

  // Works -> WebGL Lab & Contact transition (pull back to deep-space vista)
  gsap
    .timeline({
      scrollTrigger: {
        trigger: '#lab',
        start: 'top 85%',
        end: 'center center',
        scrub: 1.1,
      },
      onUpdate: applyRig,
    })
    .fromTo(
      camRig,
      { px: -0.5, py: 0.2, pz: 6.8, lx: 0.9, ly: 0.0, worksVis: 1, skillsSpread: 1 },
      {
        px: 0.0,
        py: 0.85,
        pz: 8.6,
        lx: 0.0,
        ly: -0.1,
        worksVis: 0,
        skillsSpread: 0.45,
        ease: 'power2.inOut',
        immediateRender: false,
      }
    );

  // 4. Scroll progress indicator bar
  gsap.to('#scroll-progress-bar', {
    scaleX: 1,
    ease: 'none',
    scrollTrigger: {
      trigger: document.body,
      start: 'top top',
      end: 'bottom bottom',
      scrub: true,
    },
  });

  // 5. Editorial Reveal Animations
  if (!prefersReducedMotion) {
    gsap.utils.toArray('[data-reveal]').forEach((el) => {
      gsap.fromTo(
        el,
        { y: 28, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.85,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: el,
            start: 'top 88%',
            once: true,
          },
        }
      );
    });
  } else {
    document.querySelectorAll('[data-reveal]').forEach((el) => {
      el.style.opacity = '1';
      el.style.transform = 'none';
    });
  }

  // 6. Custom Cursor + Magnetic Buttons (Desktop fine pointer only)
  const isFinePointer = window.matchMedia('(pointer: fine)').matches;
  const cursorDot = document.getElementById('cursor-dot');
  const cursorRing = document.getElementById('cursor-ring');

  if (isFinePointer && cursorDot && cursorRing && !prefersReducedMotion) {
    let mx = window.innerWidth / 2;
    let my = window.innerHeight / 2;
    let rx = mx;
    let ry = my;

    window.addEventListener(
      'pointermove',
      (e) => {
        mx = e.clientX;
        my = e.clientY;
        cursorDot.style.transform = `translate3d(${mx}px, ${my}px, 0)`;
      },
      { passive: true }
    );

    const tickCursor = () => {
      rx += (mx - rx) * 0.16;
      ry += (my - ry) * 0.16;
      cursorRing.style.transform = `translate3d(${rx}px, ${ry}px, 0)`;
      requestAnimationFrame(tickCursor);
    };
    requestAnimationFrame(tickCursor);

    document.addEventListener('pointerover', (e) => {
      const target = e.target.closest('a, button, input, [data-cursor]');
      if (target) {
        cursorRing.classList.add('is-active');
      } else {
        cursorRing.classList.remove('is-active');
      }
    });

    // Subtle magnetic pull on primary buttons
    document.querySelectorAll('.magnetic-btn').forEach((btn) => {
      btn.addEventListener('pointermove', (e) => {
        const rect = btn.getBoundingClientRect();
        const relX = (e.clientX - rect.left - rect.width / 2) * 0.22;
        const relY = (e.clientY - rect.top - rect.height / 2) * 0.22;
        btn.style.transform = `translate3d(${relX}px, ${relY}px, 0)`;
      });
      btn.addEventListener('pointerleave', () => {
        btn.style.transform = 'translate3d(0, 0, 0)';
      });
    });
  }

  return { lenis };
}

export function playHeroIntro() {
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (prefersReducedMotion) return;

  gsap.fromTo(
    '.hero-stagger',
    { y: 24, opacity: 0 },
    {
      y: 0,
      opacity: 1,
      duration: 0.9,
      stagger: 0.1,
      ease: 'power3.out',
      clearProps: 'transform',
    }
  );
}
