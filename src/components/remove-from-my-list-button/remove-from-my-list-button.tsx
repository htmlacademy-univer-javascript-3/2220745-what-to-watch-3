import { useAppDispatch, useAppSelector } from '../../redux/hooks.ts';
import { setFilmStatus } from '../../redux/api-actions.ts';
import { FilmStatus } from '../../const.ts';

type AddToMyListButtonProps = {
  filmId: string;
};

export default function RemoveToMyListButton({
  filmId,
}: AddToMyListButtonProps) {
  const myFilms = useAppSelector((state) => state.myList);
  const dispatch = useAppDispatch();

  const handleRemoveButtonClick = () => {
    dispatch(setFilmStatus({ id: filmId, filmStatus: FilmStatus.Vied }));
  };

  return (
    <button
      className="btn btn--list film-card__button"
      type="button"
      onClick={handleRemoveButtonClick}
    >
      <svg viewBox="0 0 19 20" width="19" height="20">
        <use xlinkHref="#in-list"></use>
      </svg>
      <span>My list</span>
      <span className="film-card__count">{myFilms.length}</span>
    </button>
  );
}
