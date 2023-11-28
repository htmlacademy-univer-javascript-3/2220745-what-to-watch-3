import { FilmCardType, PromoFilmType } from '../../types.ts';
import { setFilmStatusAction } from '../../redux/api-actions.ts';
import { FilmStatus } from '../../const.ts';
import { useAppDispatch, useAppSelector } from '../../redux/hooks.ts';
import { getMyList } from '../../redux/films-slice/selectors.ts';

type MyListButtonProps = {
  filmCard: FilmCardType | PromoFilmType;
};

export default function MyListButton({ filmCard }: MyListButtonProps) {
  const dispatch = useAppDispatch();
  const myFilms = useAppSelector(getMyList);

  const handleAddButtonClick = () => {
    dispatch(
      setFilmStatusAction({
        id: filmCard.id,
        filmStatus: filmCard.isFavorite ? FilmStatus.Vied : FilmStatus.ToView,
      })
    );
  };

  return (
    <button
      className="btn btn--list film-card__button"
      type="button"
      onClick={handleAddButtonClick}
    >
      <svg viewBox="0 0 19 20" width="19" height="20">
        <use xlinkHref={filmCard.isFavorite ? '#in-list' : '#add'}></use>
      </svg>
      <span>My list</span>
      <span className="film-card__count">{myFilms.length}</span>
    </button>
  );
}
