import { getTimeLeft } from '../../utils/utils.ts';
import React from 'react';

type PlayButtonProps = {
  duration: number;
  currentTime: number;
};

function ProgressBarComponent({ duration, currentTime }: PlayButtonProps) {
  return (
    <div className="player__controls-row">
      <div className="player__time">
        <progress className="player__progress" value={currentTime} max={duration} />
        <div
          className="player__toggler"
          style={{
            left: `${(currentTime / duration) * 100}%`,
          }}
        >
          Toggler
        </div>
      </div>
      <div className="player__time-value">{getTimeLeft(duration - currentTime)}</div>
    </div>
  );
}

export const ProgressBar = React.memo(ProgressBarComponent);
