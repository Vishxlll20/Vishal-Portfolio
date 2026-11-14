import './styles/story.css';
import { VISHAL_DATA } from './data/vishalData.js';
import { StoryScene } from './scene/StoryScene.js';
import { initStoryScroll } from './motion/storyScroll.js';
import { renderStoryUI } from './ui/storyUI.js';

function runLoaderSequence(onDone) {
  const preloader = document.getElementById('preloader');
  const bar = document.getElementById('preloader-bar');
  const percentEl = document.getElementById('preloader-percent');
  const stageEl = document.getElementById('preloader-stage');

  const stages = [
    { at: 0, text: 'Building 3D world & architectural path...' },
    { at: 38, text: 'Preparing bicycle & campus landmarks...' },
    { at: 72, text: 'Booting developer studio monitors...' },
    { at: 95, text: 'Ready to begin journey.' },
  ];

  let progress = 0;
  let sceneReady = false;

  const tick = setInterval(() => {
    const cap = sceneReady ? 100 : 88;
    const step = sceneReady ? 6 : 3;
    progress = Math.min(cap, progress + step);

    if (bar) bar.style.width = `${progress}%`;
    if (percentEl) percentEl.textContent = `${String(progress).padStart(2, '0')}%`;

    const currentStage = [...stages].reverse().find((s) => progress >= s.at);
    if (stageEl && currentStage) stageEl.textContent = currentStage.text;

    if (progress >= 100 && sceneReady) {
      clearInterval(tick);
      setTimeout(() => {
        if (preloader) preloader.classList.add('is-hidden');
        if (onDone) onDone();
      }, 280);
    }
  }, 32);

  return {
    markSceneReady() {
      sceneReady = true;
    },
  };
}

function bootstrap() {
  const canvas = document.getElementById('story-canvas');
  const loader = runLoaderSequence();

  let scene = null;
  let scrollApi = null;
  let uiApi = null;

  uiApi = renderStoryUI(VISHAL_DATA, {
    onSelectChapter: (chapterId) => {
      if (scrollApi) scrollApi.scrollToChapter(chapterId);
    },
    onToggleAutoPlay: () => {
      if (scrollApi) scrollApi.toggleAutoPlay();
    },
    onFocusMonolith: (id) => {
      if (scene) scene.focusMonolith(id);
    },
  });

  scene = new StoryScene(canvas, VISHAL_DATA, {
    onReady: () => {
      loader.markSceneReady();
    },
    onMonolithClick: (id) => {
      if (uiApi) uiApi.openModalById(id);
    },
  });

  scrollApi = initStoryScroll(scene, (progress) => {
    if (uiApi) uiApi.updateActiveChapter(progress);
  });
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', bootstrap);
} else {
  bootstrap();
}
