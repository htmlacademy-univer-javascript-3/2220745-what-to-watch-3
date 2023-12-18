import Star from '../star/star.tsx';
import { ChangeEventHandler } from 'react';

type RatingProps = {
  onChange: ChangeEventHandler<HTMLInputElement>;
};

export default function Rating({ onChange }: RatingProps) {
  return (
    <div className="rating">
      <div className="rating__stars">
        {Array(10)
          .fill(0)
          .map((_item, index) => (
            <Star key={`star-${index + 1}`} value={index + 1} onChange={onChange} />
          ))
          .reverse()}
      </div>
    </div>
  );
}
