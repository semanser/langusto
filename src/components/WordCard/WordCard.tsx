import {
  buttonVariant,
  buttonsStyles,
  questionStyles,
  wordStyles,
  wrapperStyles,
} from "./WordCard.css";

export const WordCard = () => {
  return (
    <div className={wrapperStyles}>
      <div className={questionStyles}>Do you know this word?</div>
      <div className={wordStyles}>pijama</div>
      <div className={buttonsStyles}>
        <button className={buttonVariant.Yes}>Yes</button>
        <button className={buttonVariant.Maybe}>Maybe</button>
        <button className={buttonVariant.No}>No</button>
      </div>
    </div>
  );
};
