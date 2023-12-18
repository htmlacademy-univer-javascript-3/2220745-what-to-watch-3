import { getFormattedDate, getFormattedRating } from '../../utils/utils.ts';
import { CommentType } from '../../types.ts';

type ReviewProps = {
  comment: CommentType;
};

export default function ReviewItem({ comment }: ReviewProps) {
  return (
    <div className="review" data-testid={'review'}>
      <blockquote className="review__quote">
        <p className="review__text">{comment.comment}</p>

        <footer className="review__details">
          <cite className="review__author">{comment.user}</cite>
          <time className="review__date" dateTime={comment.date}>
            {getFormattedDate(comment.date)}
          </time>
        </footer>
      </blockquote>

      <div className="review__rating">{getFormattedRating(comment.rating)}</div>
    </div>
  );
}
