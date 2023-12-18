import { useParams } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../redux/hooks.ts';
import { getFilmCard } from '../../redux/films-slice/selectors.ts';
import { useCallback, useEffect, useRef, useState } from 'react';
import { fetchFilmDataAction } from '../../redux/api-actions.ts';
import { PlayPauseButton } from '../../components/play-pause-button/play-pause-button.tsx';
import { ExitLink } from '../../components/exit-link/exit-link.tsx';
import { ProgressBar } from '../../components/progress-bar/progress-bar.tsx';
import { FullScreenButton } from '../../components/full-screen-button/full-screen-button.tsx';
import { Helmet } from 'react-helmet-async';

export default function PlayerPage() {
  const { id } = useParams();
  const dispatch = useAppDispatch();
  const film = useAppSelector(getFilmCard);

  const playerRef = useRef<HTMLVideoElement>(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);

  const handleDataLoaded = () => {
    setIsLoaded(true);
  };

  const handlePlayPauseClick = useCallback(() => {
    setIsPlaying((prevState) => !prevState);
  }, []);

  const handleFullScreenClick = useCallback(() => {
    const playerElement = playerRef.current;
    if (!playerElement || !isLoaded) {
      return;
    }
    playerElement.requestFullscreen();
  }, [isLoaded]);

  const getFilmDuration = () => {
    const playerElement = playerRef.current;
    if (!playerElement || !isLoaded) {
      return 0;
    }
    return playerElement.duration;
  };

  const getFilmCurrentTime = () => {
    const playerElement = playerRef.current;
    if (!playerElement || !isLoaded) {
      return 0;
    }
    return playerElement.currentTime;
  };

  const handleTimeChange = () => {
    setCurrentTime(getFilmCurrentTime());
  };

  useEffect(() => {
    const playerElement = playerRef.current;
    if (!playerElement || !isLoaded) {
      return;
    }

    if (isPlaying) {
      playerElement.play();
    } else {
      playerElement.pause();
    }
  }, [isPlaying, isLoaded]);

  useEffect(() => {
    if (id && id !== film?.id) {
      dispatch(fetchFilmDataAction(id));
    }

    const playerElement = playerRef.current;
    if (!playerElement) {
      return;
    }

    playerElement.addEventListener('loadeddata', handleDataLoaded);
    return () => playerElement.removeEventListener('loadeddata', handleDataLoaded);
  }, [isLoaded, dispatch, id, film]);

  if (!film) {
    return null;
  }

  return (
    <div className="player">
      <Helmet>
        <title>{film.name} | Проигрыватель</title>
      </Helmet>
      <video
        ref={playerRef}
        src={film.videoLink}
        className="player__video"
        poster={film.backgroundImage}
        onTimeUpdate={handleTimeChange}
      />
      <ExitLink />

      <div className="player__controls">
        <ProgressBar duration={getFilmDuration()} currentTime={currentTime} />

        <div className="player__controls-row">
          <PlayPauseButton isPlaying={isPlaying} onClick={handlePlayPauseClick} />
          <div className="player__name">{film.name}</div>
          <FullScreenButton onClick={handleFullScreenClick} />
        </div>
      </div>
    </div>
  );
}
