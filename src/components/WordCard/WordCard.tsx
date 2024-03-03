import { useLocalStorage } from "@uidotdev/usehooks";
import { useState } from "react";
import { useKeyPressEvent } from "react-use";

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
  l: number;
  emoji: string;
  translation: string;
};

type WordCardProps = {
  word?: Word;
  onAnswer?: (word: Word, answer: "yes" | "no") => void;
};

type Answer = "yes" | "no";

export const WordCard = ({ word, onAnswer }: WordCardProps) => {
  const [selectedAnswer, setSelectedAnswer] = useState<Answer>();
  const [learned, saveLearned] = useLocalStorage<Word[]>("learned-words", []);

  useKeyPressEvent("1", () => handleAnswer("yes"));
  useKeyPressEvent("2", () => handleAnswer("no"));

  const handleAnswer = (answer: "yes" | "no") => {
    if (!word) return;

    if (answer === selectedAnswer && answer === "yes") {
      saveLearned([...learned, word]);

      setSelectedAnswer(undefined);
      onAnswer?.(word, "yes");
      return;
    }

    if (answer === selectedAnswer && answer === "no") {
      setSelectedAnswer(undefined);
      onAnswer?.(word, "no");
      return;
    }

    setSelectedAnswer(answer);
  };

  if (!word) {
    return null;
  }

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
          {selectedAnswer === "yes" ? "Confirm(1)" : "Yes(1)"}
        </button>
        <button className={buttonVariant.No} onClick={() => handleAnswer("no")}>
          {selectedAnswer === "no" ? "Confirm(2)" : "No(2)"}
        </button>
      </div>
    </div>
  );
};
