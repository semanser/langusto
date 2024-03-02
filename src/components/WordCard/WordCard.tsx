import { useLocalStorage } from "@uidotdev/usehooks";
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
  generateNewWord: () => void;
};

type Answer = "yes" | "no";

export const WordCard = ({ word, generateNewWord }: WordCardProps) => {
  const [selectedAnswer, setSelectedAnswer] = useState<Answer>();
  const [learned, saveLearned] = useLocalStorage<Word[]>("learned-words", []);

  const handleAnswer = (answer: "yes" | "no") => {
    if (answer === selectedAnswer && answer === "yes") {
      saveLearned([...learned, word]);

      generateNewWord();
      setSelectedAnswer(undefined);
      return;
    }

    if (answer === selectedAnswer && answer === "no") {
      generateNewWord();
      setSelectedAnswer(undefined);
      return;
    }

    setSelectedAnswer(answer);
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
        <button className={buttonVariant.No} onClick={() => handleAnswer("no")}>
          {selectedAnswer === "no" ? "Confirm" : "No"}
        </button>
      </div>
    </div>
  );
};
