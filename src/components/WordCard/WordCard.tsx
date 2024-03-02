import { useState } from "react";

import {
  answerStyles,
  buttonVariant,
  buttonsStyles,
  emojiStyles,
  questionStyles,
  wordStyles,
  wrapperStyles,
} from "./WordCard.css";

export type Word = {
  word: string;
  complexity: number;
  emoji: string;
  translation: string;
};

type WordCardProps = {
  word: Word;
};

type Answer = "yes" | "no" | "maybe";

export const WordCard = ({ word }: WordCardProps) => {
  const [selectedAnswer, setSelectedAnswer] = useState<Answer>();

  const handleAnswer = (anwer: "yes" | "no" | "maybe") => {
    setSelectedAnswer(anwer);

    if (anwer === "yes") {
      console.log("Yes");
    } else if (anwer === "no") {
      console.log("No");
    } else {
      console.log("Maybe");
    }
  };

  return (
    <div className={wrapperStyles}>
      <div className={questionStyles}>Do you know this word?</div>
      <div className={wordStyles}>
        {word.word}
        {selectedAnswer && (
          <span className={answerStyles}>
            <span className={emojiStyles}>{word.emoji}</span>
            {word.translation}
          </span>
        )}
      </div>

      <div className={buttonsStyles}>
        <button
          className={buttonVariant.Yes}
          onClick={() => handleAnswer("yes")}
        >
          {selectedAnswer === "yes" ? "Confirm" : "Yes"}
        </button>
        <button
          className={buttonVariant.Maybe}
          onClick={() => handleAnswer("maybe")}
        >
          {selectedAnswer === "maybe" ? "Confirm" : "Maybe"}
        </button>
        <button className={buttonVariant.No} onClick={() => handleAnswer("no")}>
          {selectedAnswer === "no" ? "Confirm" : "No"}
        </button>
      </div>
    </div>
  );
};
