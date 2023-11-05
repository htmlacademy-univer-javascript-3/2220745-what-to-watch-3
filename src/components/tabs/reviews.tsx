import UserReview from './review.tsx';
import { useAppSelector } from '../../redux/hooks.ts';

export default function Reviews() {
  const comments = useAppSelector((state) => state.comments);
  return (
    <div className="film-card__reviews-col">
      {comments.map((comment) => (
        <UserReview key={comment.id} comment={comment} />
      ))}
    </div>
  );
}
