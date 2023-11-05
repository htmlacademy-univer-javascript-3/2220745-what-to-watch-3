import Rating from '../rating/rating.tsx';
import { ChangeEventHandler, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../redux/hooks.ts';
import { sendComment } from '../../redux/api-actions.ts';
import { CommentLength } from '../../const.ts';

export type CommentFormValues = {
  rating: number;
  comment: string;
};

export default function ReviewForm() {
  const filmCard = useAppSelector((state) => state.filmCard);
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState('');
  const dispatch = useAppDispatch();

  const validate = () =>
    rating !== 0 &&
    comment.length >= CommentLength.MIN &&
    comment.length <= CommentLength.MAX;

  const handleRatingChange: ChangeEventHandler<HTMLInputElement> = (evt) => {
    setRating(parseInt(evt.target.value));
  };

  const handleCommentChange: ChangeEventHandler<HTMLTextAreaElement> = (
    evt
  ) => {
    setComment(evt.target.value);
  };

  const handleSubmit = () => {
    if (filmCard?.id) {
      dispatch(sendComment({ comment, rating, id: filmCard.id }));
    }
  };

  return (
    <div className="add-review">
      <form action="#" className="add-review__form">
        <Rating setRating={handleRatingChange} />

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
