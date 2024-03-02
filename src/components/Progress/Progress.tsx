import {
  progressBarStyles,
  progressBarWrapperStyles,
  wrapperStyles,
} from "./Progress.css";

type ProgressProps = {
  total: number;
  learned: number;
};

export const Progress = ({ total = 0, learned = 0 }: ProgressProps) => {
  return (
    <div className={wrapperStyles}>
      You learned {learned} out of {total} words
      <div className={progressBarWrapperStyles}>
        <div className={progressBarStyles}></div>
      </div>
    </div>
  );
};
