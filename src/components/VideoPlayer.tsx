import { Film } from '../const.ts';
import { useEffect, useRef, useState } from 'react';

type VideoPlayerProps = {
  film: Film;
  activeFilm: string | null;
};

export default function VideoPlayer({ film, activeFilm }: VideoPlayerProps) {
  const playerRef = useRef<HTMLVideoElement | null>(null);
  const [isLoaded, setIsLoaded] = useState(false);

  const handleDataLoaded = () => {
    setIsLoaded(true);
  };

  useEffect(() => {
    const playerElement = playerRef.current;
    if (!playerElement) {
      return;
    }

    playerElement.addEventListener('loadeddata', handleDataLoaded);
    return () =>
      playerElement.removeEventListener('loadeddata', handleDataLoaded);
  }, []);

  useEffect(() => {
    const playerElement = playerRef.current;

    if (!playerElement || !isLoaded) {
      return;
    }

    if (activeFilm === film.id) {
      playerElement.play();
      return;
    }

    playerElement.pause();
    playerElement.src = film.previewVideoLink;
  }, [activeFilm]);

  return (
    <video
      style={{ borderRadius: '5px' }}
      width="280"
      height="175"
      poster={film.previewImage}
      ref={playerRef}
      src={film.previewVideoLink}
      muted
    />
  );
}
