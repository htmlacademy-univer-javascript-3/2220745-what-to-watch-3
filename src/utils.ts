import { Grade } from './const.ts';

const getFormattedTime = (time: number) => {
  const hours = Math.floor(time / 60);
  const minutes = time % 60;
  return `${hours}h ${minutes}m`;
};

const getFormattedDate = (date: string) => {
  return new Date(date).toLocaleString('en-US', {
    month: 'long',
    day: '2-digit',
    year: 'numeric',
  });
};

const getFormattedRating = (rating: number) => {
  return rating.toFixed(1);
};

const getFilmGrade = (rating: number) => {
  if (rating <= 3) {
    return Grade.Bad;
  } else if (rating <= 5) {
    return Grade.Normal;
  } else if (rating <= 8) {
    return Grade.Good;
  } else if (rating < 10) {
    return Grade.VeryGood;
  } else {
    return Grade.Awesome;
  }
};

export { getFormattedTime, getFormattedDate, getFilmGrade, getFormattedRating };