import { useAppDispatch } from '../redux/hooks.ts';
import { addShowedFilms } from '../redux/action.ts';

export default function ShowMoreButton() {
  const dispatch = useAppDispatch();
  const handleMoreClick = () => {
    dispatch(addShowedFilms());
  };
  return (
    <div className="catalog__more">
      <button
        className="catalog__button"
        type="button"
        onClick={handleMoreClick}
      >
        Show more
      </button>
    </div>
  );
}
