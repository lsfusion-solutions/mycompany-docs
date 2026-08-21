import React, {useCallback, useEffect, useState} from 'react';
import clsx from 'clsx';
import {translate} from '@docusaurus/Translate';
import styles from './Video.module.css';

// Выбранный источник запоминается в браузере и действует на всех страницах.
const STORAGE_KEY = 'docs-video-source';
// Событие синхронизирует все плееры, открытые на одной странице.
const SYNC_EVENT = 'docs-video-source-change';

const SOURCES = [
  {key: 'youtube', label: 'YouTube'},
  {
    key: 'vk',
    label: translate({
      id: 'video.source.vk',
      message: 'VK',
      description: 'Label of the VK tab in the video source switcher',
    }),
  },
];

// Принимает либо id ролика, либо любую ссылку на YouTube
// (youtu.be/ID, youtube.com/watch?v=ID, youtube.com/embed/ID).
export function extractYouTubeId(value) {
  if (!value) {
    return null;
  }
  if (!value.includes('/')) {
    return value;
  }
  const match = value.match(
    /(?:youtu\.be\/|youtube(?:-nocookie)?\.com\/(?:embed\/|shorts\/|live\/|watch\?(?:.*&)?v=))([\w-]{11})/,
  );
  return match ? match[1] : null;
}

// Принимает ссылку на видео ВК в любом виде:
// vk.com/video-12345_67890, vkvideo.ru/video-12345_67890,
// ссылку на плейлист с параметром z=video<oid>_<id>,
// готовый video_ext.php?oid=...&id=... или просто "<oid>_<id>".
export function extractVkIds(value) {
  if (!value) {
    return null;
  }

  const embed = value.match(/[?&]oid=(-?\d+)&(?:amp;)?id=(\d+)/);
  if (embed) {
    return {oid: embed[1], id: embed[2]};
  }

  let decoded = value;
  try {
    decoded = decodeURIComponent(value);
  } catch {
    // Ссылка с некорректным percent-кодированием — разбираем как есть.
  }

  const link = decoded.match(/video(-?\d+)_(\d+)/);
  if (link) {
    return {oid: link[1], id: link[2]};
  }

  const bare = value.trim().match(/^(-?\d+)_(\d+)$/);
  return bare ? {oid: bare[1], id: bare[2]} : null;
}

export default function Video({youtube, vk, id, url, title, start}) {
  const youtubeId = extractYouTubeId(youtube ?? id ?? url);
  const vkIds = extractVkIds(vk);

  if (!youtubeId && !vkIds) {
    throw new Error(
      `Video: не удалось определить ролик из youtube="${youtube ?? id ?? url}", vk="${vk}"`,
    );
  }

  // На сервере всегда YouTube, сохранённый выбор применяется после монтирования,
  // иначе разметка не совпадёт с серверной при гидратации.
  const [source, setSource] = useState('youtube');

  useEffect(() => {
    const read = () => {
      let saved = null;
      try {
        saved = window.localStorage.getItem(STORAGE_KEY);
      } catch {
        // localStorage недоступен (приватный режим, запрет cookies) — остаётся YouTube.
      }
      if (SOURCES.some((s) => s.key === saved)) {
        setSource(saved);
      }
    };

    read();
    window.addEventListener(SYNC_EVENT, read);
    return () => window.removeEventListener(SYNC_EVENT, read);
  }, []);

  const choose = useCallback((next) => {
    setSource(next);
    try {
      window.localStorage.setItem(STORAGE_KEY, next);
    } catch {
      // Выбор не сохранится, но текущий плеер переключится.
    }
    window.dispatchEvent(new Event(SYNC_EVENT));
  }, []);

  // Если у ролика указан только один источник, показываем его без переключателя.
  const available = SOURCES.filter((s) =>
    s.key === 'youtube' ? youtubeId : vkIds,
  );
  const active = available.some((s) => s.key === source)
    ? source
    : available[0].key;

  const src =
    active === 'vk'
      ? `https://vk.com/video_ext.php?oid=${vkIds.oid}&id=${vkIds.id}${
          start ? `&t=${start}` : ''
        }`
      : `https://www.youtube-nocookie.com/embed/${youtubeId}${
          start ? `?start=${start}` : ''
        }`;

  const frameTitle =
    title ??
    translate({
      id: 'video.frame.title',
      message: 'Video',
      description: 'Default title of the video player iframe',
    });

  return (
    <div className={styles.container}>
      {available.length > 1 && (
        <div
          className={styles.switcher}
          role="group"
          aria-label={translate({
            id: 'video.switcher.ariaLabel',
            message: 'Video source',
            description: 'ARIA label of the video source switcher',
          })}>
          {available.map((s) => (
            <button
              key={s.key}
              type="button"
              className={clsx(styles.tab, active === s.key && styles.tabActive)}
              aria-pressed={active === s.key}
              onClick={() => choose(s.key)}>
              {s.label}
            </button>
          ))}
        </div>
      )}
      <div className={styles.wrapper}>
        <iframe
          // key заставляет пересоздать iframe при смене источника,
          // иначе предыдущий плеер продолжит играть.
          key={active}
          className={styles.frame}
          src={src}
          title={frameTitle}
          loading="lazy"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        />
      </div>
    </div>
  );
}
