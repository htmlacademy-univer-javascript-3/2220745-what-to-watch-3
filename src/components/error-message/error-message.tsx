import { useAppDispatch, useAppSelector } from '../../redux/hooks.ts';
import './error-message.css';
import { setError } from '../../redux/action.ts';

export default function ErrorMessage() {
  const error = useAppSelector((state) => state.error);
  const dispatch = useAppDispatch();

  return error ? (
    <div className="error-message">
      {error}
      <button className="close-button" onClick={() => dispatch(setError(null))}>
        Close
      </button>
    </div>
  ) : null;
}
