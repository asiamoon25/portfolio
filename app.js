const contactHref = 'mailto:issuecracker@gmail.com?subject=%ED%8F%AC%ED%8A%B8%ED%8F%B4%EB%A6%AC%EC%98%A4%20%EB%AC%B8%EC%9D%98';

function element(tag, className, value) {
  const node = document.createElement(tag);
  if (className) node.className = className;
  if (value !== undefined) node.textContent = value;
  return node;
}

const themeToggle = document.getElementById('theme-toggle');
function syncThemeToggle() {
  const isDark = document.documentElement.dataset.theme === 'dark';
  themeToggle.setAttribute('aria-pressed', String(isDark));
  themeToggle.setAttribute('aria-label', isDark ? '라이트모드 켜기' : '다크모드 켜기');
}
syncThemeToggle();
themeToggle.addEventListener('click', () => {
  const nextTheme = document.documentElement.dataset.theme === 'dark' ? 'light' : 'dark';
  document.documentElement.dataset.theme = nextTheme;
  try { localStorage.setItem('portfolio-theme', nextTheme); } catch {}
  syncThemeToggle();
});

function renderGallery(project) {
  const gallery = element('div', 'gallery');
  project.gallery.forEach((item, index) => {
    const frame = element('div', `gallery-frame${index === 0 ? ' main' : ''}`);
    const image = element('img');
    image.src = item.src;
    image.alt = item.alt;
    image.loading = 'lazy';
    frame.append(image);
    gallery.append(frame);
  });
  return gallery;
}

function renderVideo(project, body, dialog) {
  if (!project.video) return;
  const stages = project.video.stages || [];
  const wrap = element('div', 'video-wrap');
  const video = element('video');
  video.controls = true;
  video.muted = true;
  video.playsInline = true;
  video.preload = 'metadata';
  video.poster = project.video.poster;
  video.setAttribute('aria-label', project.video.alt);
  const source = element('source');
  source.src = project.video.src;
  source.type = 'video/mp4';
  video.append(source);
  wrap.append(video);

  const overlay = element('div', 'video-stage');
  overlay.setAttribute('aria-live', 'polite');
  const stageTitle = element('b', '', stages[0]?.title || '시연 영상');
  const stageDetail = element('span', '', stages[0]?.detail || '');
  overlay.append(stageTitle, stageDetail);
  wrap.append(overlay);
  body.append(wrap);

  const expand = element('button', 'video-expand', '설명과 함께 크게 보기 ↗');
  expand.type = 'button';
  expand.addEventListener('click', () => wrap.requestFullscreen?.());
  body.append(expand);

  const chapters = element('div', 'video-chapters');
  chapters.setAttribute('aria-label', '영상 장면 이동');
  const buttons = stages.map(stage => {
    const button = element('button', '', stage.button);
    button.type = 'button';
    button.addEventListener('click', () => {
      video.currentTime = stage.at;
      updateStage();
      video.play().catch(() => {});
    });
    chapters.append(button);
    return button;
  });
  body.append(chapters);

  let currentStage = -1;
  function updateStage() {
    if (!stages.length) return;
    let index = 0;
    for (let i = 1; i < stages.length; i++) {
      if (video.currentTime >= stages[i].at) index = i;
    }
    if (index === currentStage) return;
    currentStage = index;
    stageTitle.textContent = stages[index].title;
    stageDetail.textContent = stages[index].detail;
    buttons.forEach((button, i) => button.setAttribute('aria-current', String(i === index)));
  }
  video.addEventListener('timeupdate', updateStage);
  video.addEventListener('seeked', updateStage);
  video.addEventListener('loadedmetadata', updateStage);
  updateStage();
  dialog.addEventListener('close', () => {
    video.pause();
    if (document.fullscreenElement === wrap) document.exitFullscreen();
  });
}

function renderDetails(project) {
  const dialog = element('dialog');
  const titleId = `project-title-${project.id}`;
  dialog.setAttribute('aria-labelledby', titleId);
  const head = element('div', 'dialog-head');
  head.append(element('strong', '', '작업물 상세'));
  const close = element('button', '', '×');
  close.type = 'button';
  close.setAttribute('aria-label', '닫기');
  close.addEventListener('click', () => dialog.close());
  head.append(close);
  dialog.append(head);

  const body = element('div', 'dialog-body');
  body.append(element('small', '', project.badge));
  const title = element('h2', '', project.title);
  title.id = titleId;
  body.append(title, element('p', '', project.intro));

  if (project.changes?.length || project.metrics?.length) {
    const changes = element('div', 'demo-changes');
    changes.append(element('h3', '', project.video ? '영상에서 바꾼 값' : '작업 내용'));
    if (project.changes?.length) {
      const list = element('ul');
      project.changes.forEach(change => list.append(element('li', '', change)));
      changes.append(list);
    }
    if (project.metrics?.length) {
      const metrics = element('div', 'demo-compare');
      project.metrics.forEach(metric => {
        const item = element('div');
        item.append(element('b', '', metric.label), element('span', '', metric.value));
        metrics.append(item);
      });
      changes.append(metrics);
    }
    body.append(changes);
  }

  renderVideo(project, body, dialog);

  if (project.detailImage) {
    const link = element('a', 'dialog-image-link');
    link.href = project.detailImage.src;
    link.target = '_blank';
    link.rel = 'noopener';
    const image = element('img');
    image.src = project.detailImage.src;
    image.alt = project.detailImage.alt;
    image.loading = 'lazy';
    link.append(image);
    body.append(link, element('p', 'image-caption', '클릭하면 원본 크기로 볼 수 있습니다'));
  }

  const facts = element('div', 'facts');
  const price = element('div');
  price.append(element('b', '', project.priceLabel), element('p', '', project.price));
  const tech = element('div');
  tech.append(element('b', '', '사용 기술'), element('p', '', project.technologies));
  facts.append(price, tech);
  body.append(facts);
  (project.notices || []).forEach(notice => body.append(element('p', 'legal', notice)));
  const contact = element('a', 'pill-link primary', '비슷한 작업 문의 ↗');
  contact.href = contactHref;
  body.append(contact);
  dialog.append(body);
  dialog.addEventListener('click', event => { if (event.target === dialog) dialog.close(); });
  return dialog;
}

function renderProject(project) {
  const article = element('article', 'project');
  article.append(renderGallery(project));
  const info = element('div', 'case-info');
  const description = element('div');
  description.append(element('small', '', project.badge), element('h3', '', project.title), element('p', '', project.summary));
  const side = element('div', 'case-side');
  side.append(element('small', '', project.priceLabel), element('strong', '', project.price));
  const detailButton = element('button', 'plain-button', '자세히 보기 ↗');
  detailButton.type = 'button';
  const dialog = renderDetails(project);
  detailButton.addEventListener('click', () => dialog.showModal());
  side.append(detailButton);
  info.append(description, side);
  article.append(info);
  document.getElementById('project-dialogs').append(dialog);
  return article;
}

const projectList = document.getElementById('project-list');
const projects = window.PORTFOLIO_PROJECTS;
if (Array.isArray(projects) && projects.length) {
  projects.forEach(project => projectList.append(renderProject(project)));
} else {
  projectList.append(element('p', '', '작업물을 불러오지 못했습니다.'));
}
