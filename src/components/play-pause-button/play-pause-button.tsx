import React from 'react';

type PauseButtonProps = {
  isPlaying: boolean;
  onClick: () => void;
};

function PlayPauseButtonComponent({ onClick, isPlaying }: PauseButtonProps) {
  return (
    <button type="button" className="player__play" onClick={onClick}>
      <svg viewBox="0 0 20 20" width="20" height="20">
        <use xlinkHref={isPlaying ? '#pause' : '#play-s'}></use>
      </svg>
      <span>{isPlaying ? 'Pause' : 'Play'}</span>
    </button>
  );
}

export const PlayPauseButton = React.memo(PlayPauseButtonComponent);
