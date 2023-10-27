import UserReview from './Review.tsx';
import { CommentType } from '../types.ts';

type ReviewsProps = {
  comments: CommentType[];
};

export default function Reviews({ comments }: ReviewsProps) {
  return (
    <div className="film-card__reviews-col">
      {comments.map((comment) => (
        <UserReview key={comment.id} comment={comment} />
      ))}
    </div>
  );
}
