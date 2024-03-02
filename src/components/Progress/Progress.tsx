import { assignInlineVars } from "@vanilla-extract/dynamic";

import {
  progressBarStyles,
  progressBarWrapperStyles,
  sizeVar,
  wrapperStyles,
} from "./Progress.css";

type ProgressProps = {
  total: number;
  learned: number;
};

export const Progress = ({ total = 0, learned = 0 }: ProgressProps) => {
  const progress = (learned / total) * 100;

  return (
    <div className={wrapperStyles}>
      You learned {learned} out of {total} words
      <div className={progressBarWrapperStyles}>
        <div
          className={progressBarStyles}
          style={assignInlineVars({
            [sizeVar]: `${progress}%`,
          })}
        />
      </div>
    </div>
  );
};
