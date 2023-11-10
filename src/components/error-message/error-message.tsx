import { useAppDispatch, useAppSelector } from '../../redux/hooks.ts';
import './error-message.css';
import { getHasError } from '../../redux/films-slice/selectors.ts';
import { dropError } from '../../redux/films-slice/films-slice.ts';

export default function ErrorMessage() {
  const hasError = useAppSelector(getHasError);
  const dispatch = useAppDispatch();

  return hasError ? (
    <div className="error-message">
      Произошла ошибка. Пожалуйста, попробуйте позже
      <button className="close-button" onClick={() => dispatch(dropError())}>
        Close
      </button>
    </div>
  ) : null;
}
