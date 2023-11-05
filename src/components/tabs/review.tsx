import { getFormattedDate, getFormattedRating } from '../../utils.ts';
import { CommentType } from '../../types.ts';

type ReviewProps = {
  comment: CommentType;
};

export default function UserReview({ comment }: ReviewProps) {
  return (
    <div className="review">
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
