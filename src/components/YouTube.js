import React from 'react';
import styles from './YouTube.module.css';

// Принимает либо id ролика, либо любую ссылку на YouTube
// (youtu.be/ID, youtube.com/watch?v=ID, youtube.com/embed/ID).
function extractId(value) {
  if (!value) {
    return null;
  }
  if (!value.includes('/')) {
    return value;
  }
  const match = value.match(
    /(?:youtu\.be\/|youtube\.com\/(?:embed\/|shorts\/|live\/|watch\?(?:.*&)?v=))([\w-]{11})/,
  );
  return match ? match[1] : null;
}

export default function YouTube({id, url, title = 'YouTube video', start}) {
  const videoId = extractId(id ?? url);

  if (!videoId) {
    throw new Error(`YouTube: не удалось определить id ролика из "${id ?? url}"`);
  }

  const src = `https://www.youtube-nocookie.com/embed/${videoId}${
    start ? `?start=${start}` : ''
  }`;

  return (
    <div className={styles.wrapper}>
      <iframe
        className={styles.frame}
        src={src}
        title={title}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      />
    </div>
  );
}
