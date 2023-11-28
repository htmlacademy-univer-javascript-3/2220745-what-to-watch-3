import ReviewItem from '../review-item/review-item.tsx';
import { useAppSelector } from '../../redux/hooks.ts';
import { getComments } from '../../redux/films-slice/selectors.ts';

export default function TabReviews() {
  const comments = useAppSelector(getComments);
  return (
    <div className="film-card__reviews film-card__row">
      <div className="film-card__reviews-col">
        {comments.slice(0, comments.length / 2).map((comment) => (
          <ReviewItem key={comment.id} comment={comment} />
        ))}
      </div>
      <div className="film-card__reviews-col">
        {comments.slice(comments.length / 2, comments.length).map((comment) => (
          <ReviewItem key={comment.id} comment={comment} />
        ))}
      </div>
    </div>
  );
}
