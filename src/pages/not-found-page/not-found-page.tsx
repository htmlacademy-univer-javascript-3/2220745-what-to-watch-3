import { useNavigate } from 'react-router-dom';
import { AppRoute } from '../../const.ts';
import { Helmet } from 'react-helmet-async';

function ErrorScreen() {
  const navigate = useNavigate();

  const handleTryAgain = () => {
    navigate(AppRoute.Main);
  };

  return (
    <>
      <Helmet>
        <title>404</title>
      </Helmet>
      <p className="error__text">404. Page not found</p>
      <button onClick={handleTryAgain} className="replay replay--error" type="button" data-testid={'go-back'}>
        Back to main page
      </button>
    </>
  );
}

export default ErrorScreen;
