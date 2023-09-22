import Rating from './Rating.tsx';
import { ChangeEvent, useState } from 'react';

export type FormValues = {
  rating: string;
  review: string;
};

export default function ReviewForm() {
  const [formData, setFormData] = useState<FormValues>({
    rating: '',
    review: '',
  });

  const handleFieldChange = (
    evt: ChangeEvent<HTMLFormElement | HTMLTextAreaElement>,
  ) => {
    // Код для обновления состояния
    const { name, value } = evt.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <div className="add-review">
      <form action="#" className="add-review__form">
        <Rating setRating={handleFieldChange} />

        <div className="add-review__text">
          <textarea
            onChange={handleFieldChange}
            className="add-review__textarea"
            name="review-text"
            id="review-text"
            placeholder="Review text"
          />
          <div className="add-review__submit">
            <button className="add-review__btn" type="submit">
              Post
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
