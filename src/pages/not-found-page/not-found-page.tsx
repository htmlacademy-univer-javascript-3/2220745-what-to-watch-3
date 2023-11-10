import { useAppDispatch } from '../../redux/hooks.ts';
import { fetchFilmsAction } from '../../redux/api-actions.ts';

function ErrorScreen() {
  const dispatch = useAppDispatch();

  const handleTryAgain = () => {
    dispatch(fetchFilmsAction());
  };

  return (
    <>
      <p className="error__text">
        Что-то пошло не так. Пожалуйста, попробуйте снова
      </p>
      <button
        onClick={handleTryAgain}
        className="replay replay--error"
        type="button"
      >
        Попробовать ещё раз
      </button>
    </>
  );
}

export default ErrorScreen;
