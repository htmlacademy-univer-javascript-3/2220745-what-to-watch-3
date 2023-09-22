type StarProps = {
  value: number;
};

export default function Star({ value }: StarProps) {
  return (
    <>
      <input
        className="rating__input"
        id={`star-${value}`}
        type="radio"
        name="rating"
        value={value}
      />
      <label className="rating__label" htmlFor={`star-${value}`}>
        Rating {value}
      </label>
    </>
  );
}
