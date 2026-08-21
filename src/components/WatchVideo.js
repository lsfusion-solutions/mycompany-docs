import React from 'react';
import Translate from '@docusaurus/Translate';
import styles from './WatchVideo.module.css';

// Ссылка в начале статьи, ведущая к прикреплённому плееру.
// Якорь #video проставляется у заголовка раздела вручную: ## Video {#video}
export default function WatchVideo({href = '#video', children}) {
  return (
    <a className={styles.link} href={href}>
      <svg
        className={styles.icon}
        viewBox="0 0 24 24"
        width="18"
        height="18"
        fill="currentColor"
        aria-hidden="true">
        <path d="M21.6 7.2a3 3 0 0 0-2.1-2.1C17.7 4.6 12 4.6 12 4.6s-5.7 0-7.5.5A3 3 0 0 0 2.4 7.2C1.9 9 1.9 12 1.9 12s0 3 .5 4.8a3 3 0 0 0 2.1 2.1c1.8.5 7.5.5 7.5.5s5.7 0 7.5-.5a3 3 0 0 0 2.1-2.1c.5-1.8.5-4.8.5-4.8s0-3-.5-4.8ZM10.1 15.4V8.6l5.9 3.4-5.9 3.4Z" />
      </svg>
      {children ?? (
        <Translate
          id="video.watchLink.label"
          description="Label of the link leading to the video section of the article">
          Watch video
        </Translate>
      )}
    </a>
  );
}
