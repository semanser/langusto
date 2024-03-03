import { useLocalStorage } from "@uidotdev/usehooks";
import { useCallback, useEffect, useState } from "react";

import { wrapperStyles } from "./App.css";
import { LangSelector } from "./components/LangSelector/LangSelector";
import { Progress } from "./components/Progress/Progress";
import { Word, WordCard } from "./components/WordCard/WordCard";
import "./font.css";
import "./global.css";
import { words } from "./languages.json";
import { Language } from "./utils";

const MAX_LEARNING_QUEUE = 7;

function App() {
  const [studyLang] = useLocalStorage<Language>("study-lang", "es");
  const [learned] = useLocalStorage<number[]>("learned-words-" + studyLang, []);
  const [currentLevel, setCurrentLevel] = useLocalStorage("current-level", 1);

  const [currentWord, setCurrentWord] = useState<Word>();

  const [wordsToPractice, setWordsToPractice] = useState<Word[]>([]);

  const generateCurrentWord = useCallback(() => {
    let level = currentLevel;
    const notLearned = words.filter(
      (word) => !learned.find((w) => w === word.id),
    );

    const wordsOnLevel = notLearned.filter(
      (word) => word.level === currentLevel,
    );

    if (wordsOnLevel.length === 0) {
      level = currentLevel + 1;
      setCurrentLevel(level);
    }

    // Depending on the level, we will generate the next word
    //
    // 80% of the time, the next word will be from the level or below
    let notLearnedOnLevel: Word[] = [];

    if (Math.random() < 0.8) {
      notLearnedOnLevel = notLearned.filter((word) => word.level <= level);
    } else {
      notLearnedOnLevel = notLearned.filter((word) => word.level >= level);
    }

    let newCurrentWord;

    if (wordsToPractice.length === MAX_LEARNING_QUEUE) {
      // Get a word from the wordsToPractice
      newCurrentWord =
        wordsToPractice[Math.floor(Math.random() * wordsToPractice.length)];
    } else {
      newCurrentWord =
        notLearnedOnLevel[Math.floor(Math.random() * notLearnedOnLevel.length)];
    }

    setCurrentWord(newCurrentWord);
  }, [currentLevel, setCurrentLevel, learned]);

  const handleAnswer = (word: Word, answer: "yes" | "no") => {
    if (answer === "no") {
      if (wordsToPractice.length < MAX_LEARNING_QUEUE) {
        setWordsToPractice([...wordsToPractice, word]);
      }
    }

    if (answer === "yes") {
      // If the word is in the wordsToPractice, we remove it

      const newWordsToPractice = wordsToPractice.filter(
        (w) => w.id !== word.id,
      );
      setWordsToPractice(newWordsToPractice);
    }

    generateCurrentWord();
  };

  useEffect(() => {
    generateCurrentWord();
  }, []);

  return (
    <div className={wrapperStyles}>
      <LangSelector />
      <WordCard word={currentWord} onAnswer={handleAnswer} />
      <Progress total={words.length} learned={learned.length} />
    </div>
  );
}

export default App;
