import React from 'react';
import Video from './Video';

// Оставлен для совместимости с разметкой <YouTube id="..." />.
// Вся логика в Video, который умеет ещё и ВК.
export default function YouTube(props) {
  return <Video {...props} />;
}
