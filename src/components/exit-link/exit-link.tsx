import React from 'react';
import { Link } from 'react-router-dom';
import { AppRoute } from '../../const.ts';

function ExitLinkComponent() {
  return (
    <Link
      to={AppRoute.Main()}
      style={{ textDecoration: 'none' }}
      type="button"
      className="player__exit"
    >
      Exit
    </Link>
  );
}

export const ExitLink = React.memo(ExitLinkComponent);
