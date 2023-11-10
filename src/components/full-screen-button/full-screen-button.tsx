import React from 'react';

type FullScreenProps = {
  onClick: () => void;
};

function FullScreen({ onClick }: FullScreenProps) {
  return (
    <button type="button" className="player__full-screen" onClick={onClick}>
      <svg viewBox="0 0 27 27" width="27" height="27">
        <use xlinkHref="#full-screen"></use>
      </svg>
      <span>Full screen</span>
    </button>
  );
}

export default React.memo(FullScreen);
