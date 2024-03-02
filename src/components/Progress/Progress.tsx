import {
  progressBarStyles,
  progressBarWrapperStyles,
  wrapperStyles,
} from "./Progress.css";

export const Progress = () => {
  return (
    <div className={wrapperStyles}>
      You learned 367 out of 1000 words
      <div className={progressBarWrapperStyles}>
        <div className={progressBarStyles}></div>
      </div>
    </div>
  );
};
