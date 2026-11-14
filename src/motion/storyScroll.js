import Lenis from 'lenis';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export function initStoryScroll(scene, onProgressChange) {
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  const lenis = new Lenis({
    duration: prefersReducedMotion ? 0 : 1.15,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    smoothWheel: !prefersReducedMotion,
    touchMultiplier: 1.4,
  });

  lenis.on('scroll', ScrollTrigger.update);

  gsap.ticker.add((time) => {
    lenis.raf(time * 1000);
  });
  gsap.ticker.lagSmoothing(0);

  // Master ScrollTrigger across the full story container
  ScrollTrigger.create({
    trigger: '#story-track',
    start: 'top top',
    end: 'bottom bottom',
    scrub: true,
    onUpdate: (self) => {
      scene.setStoryProgress(self.progress);
      if (onProgressChange) onProgressChange(self.progress);
    },
  });

  // Top progress bar
  gsap.to('#scroll-progress-bar', {
    scaleX: 1,
    ease: 'none',
    scrollTrigger: {
      trigger: '#story-track',
      start: 'top top',
      end: 'bottom bottom',
      scrub: true,
    },
  });

  // Card reveal animations
  if (!prefersReducedMotion) {
    gsap.utils.toArray('.story-panel').forEach((panel) => {
      gsap.fromTo(
        panel,
        { y: 26, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.75,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: panel,
            start: 'top 85%',
            once: true,
          },
        }
      );
    });
  }

  // Auto-Play Cinematic Tour helper
  let isAutoPlaying = false;
  let autoPlayTween = null;

  const stopAutoPlay = () => {
    if (!isAutoPlaying) return;
    isAutoPlaying = false;
    if (autoPlayTween) autoPlayTween.kill();
    const btn = document.getElementById('autoplay-btn');
    if (btn) btn.textContent = '▶ Auto-Play Journey';
  };

  window.addEventListener('wheel', stopAutoPlay, { passive: true });
  window.addEventListener('touchstart', stopAutoPlay, { passive: true });

  const toggleAutoPlay = () => {
    const btn = document.getElementById('autoplay-btn');
    if (isAutoPlaying) {
      stopAutoPlay();
      return;
    }

    isAutoPlaying = true;
    if (btn) btn.textContent = '❚❚ Pause Journey';

    const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
    const currentScroll = window.scrollY;
    const remainingRatio = Math.max(0.05, 1 - currentScroll / Math.max(maxScroll, 1));
    const duration = 26 * remainingRatio;

    const proxy = { y: currentScroll };
    autoPlayTween = gsap.to(proxy, {
      y: maxScroll,
      duration,
      ease: 'none',
      onUpdate: () => {
        window.scrollTo(0, proxy.y);
      },
      onComplete: () => {
        isAutoPlaying = false;
        if (btn) btn.textContent = '▶ Replay Journey';
      },
    });
  };

  const scrollToChapter = (chapterId) => {
    stopAutoPlay();
    const el = document.getElementById(`chapter-${chapterId}`);
    if (el) {
      lenis.scrollTo(el, { offset: -60 });
    }
  };

  // Subtle custom pointer cursor on desktop fine pointers
  const isFine = window.matchMedia('(pointer: fine)').matches;
  const dot = document.getElementById('cursor-dot');
  const ring = document.getElementById('cursor-ring');
  if (isFine && dot && ring && !prefersReducedMotion) {
    let mx = window.innerWidth / 2;
    let my = window.innerHeight / 2;
    let rx = mx;
    let ry = my;

    window.addEventListener(
      'pointermove',
      (e) => {
        mx = e.clientX;
        my = e.clientY;
        dot.style.transform = `translate3d(${mx}px, ${my}px, 0)`;
      },
      { passive: true }
    );

    const loopCursor = () => {
      rx += (mx - rx) * 0.16;
      ry += (my - ry) * 0.16;
      ring.style.transform = `translate3d(${rx}px, ${ry}px, 0)`;
      requestAnimationFrame(loopCursor);
    };
    requestAnimationFrame(loopCursor);

    document.addEventListener('pointerover', (e) => {
      const interactive = e.target.closest('a, button, input, textarea, .project-box');
      ring.classList.toggle('is-active', Boolean(interactive));
    });
  }

  return { lenis, scrollToChapter, toggleAutoPlay };
}
