import Rating from '../rating/rating.tsx';
import { ChangeEventHandler, useState } from 'react';
import { useAppDispatch } from '../../redux/hooks.ts';
import { sendCommentAction } from '../../redux/api-actions.ts';
import { CommentLength } from '../../const.ts';
import { useNavigate } from 'react-router-dom';

export type ReviewFormProps = {
  id: string;
};

export default function ReviewForm({ id }: ReviewFormProps) {
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState('');
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const validate = () =>
    rating !== 0 && comment.length >= CommentLength.MIN && comment.length <= CommentLength.MAX;

  const handleRatingChange: ChangeEventHandler<HTMLInputElement> = (evt) => {
    setRating(parseInt(evt.target.value, 10));
  };

  const handleCommentChange: ChangeEventHandler<HTMLTextAreaElement> = (evt) => {
    setComment(evt.target.value);
  };

  const handleSubmit = () => {
    dispatch(sendCommentAction({ comment, rating, id }));
    navigate(`/films/${id}`);
  };

  return (
    <div className="add-review">
      <form action="#" className="add-review__form">
        <Rating onChange={handleRatingChange} />

        <div className="add-review__text">
          <textarea
            onChange={handleCommentChange}
            className="add-review__textarea"
            name="comment"
            id="comment"
            placeholder="Review text"
          />
          <div className="add-review__submit">
            <button
              className="add-review__btn"
              type="button"
              onClick={handleSubmit}
              disabled={!validate()}
            >
              Post
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
