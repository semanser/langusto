import { useLocalStorage } from "@uidotdev/usehooks";
import { useCallback, useEffect, useState } from "react";

import { Progress } from "./components/Progress/Progress";
import { Word, WordCard } from "./components/WordCard/WordCard";
import "./font.css";
import "./global.css";
import { words } from "./languages/spanish.json";

function App() {
  const [learned] = useLocalStorage<Word[]>("learned-words", []);
  const [currentLevel, setCurrentLevel] = useLocalStorage("current-level", 1);
  const [currentWord, setCurrentWord] = useState<Word>();

  const generateCurrentWord = useCallback(() => {
    let level = currentLevel;
    const notLearned = words.filter(
      (word) => !learned.find((w) => w.word === word.word),
    );

    const wordsOnLevel = notLearned.filter((word) => word.l === currentLevel);

    if (wordsOnLevel.length === 0) {
      level = currentLevel + 1;
      setCurrentLevel(level);
    }

    // Depending on the level, we will generate the next word
    //
    // 80% of the time, the next word will be from the level or below
    let notLearnedOnLevel: Word[] = [];

    if (Math.random() < 0.8) {
      notLearnedOnLevel = notLearned.filter((word) => word.l <= level);
    } else {
      notLearnedOnLevel = notLearned.filter((word) => word.l >= level);
    }

    const newCurrentWord =
      notLearnedOnLevel[Math.floor(Math.random() * notLearnedOnLevel.length)];

    setCurrentWord(newCurrentWord);
  }, [currentLevel, setCurrentLevel, learned]);

  useEffect(() => {
    generateCurrentWord();
  }, []);

  return (
    <>
      <WordCard word={currentWord} generateNewWord={generateCurrentWord} />
      <Progress total={words.length} learned={learned.length} />
    </>
  );
}

export default App;
