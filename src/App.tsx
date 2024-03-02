import { useLocalStorage } from "@uidotdev/usehooks";
import { useEffect, useState } from "react";

import { Progress } from "./components/Progress/Progress";
import { Word, WordCard } from "./components/WordCard/WordCard";
import "./font.css";
import "./global.css";
import { words } from "./languages/spanish";

function App() {
  const [learned] = useLocalStorage<Word[]>("learned-words", []);
  const [currentWord, setCurrentWord] = useState<Word>(
    words[Math.floor(Math.random() * words.length)],
  );
  const [notLearned, setNotLearned] = useState(words);

  useEffect(() => {
    const newNotLearned = words.filter(
      (word) => !learned.find((w) => w.word === word.word),
    );
    setNotLearned(newNotLearned);
  }, [learned]);

  const generateCurrentWord = () => {
    const newCurrentWord =
      notLearned[Math.floor(Math.random() * notLearned.length)];
    setCurrentWord(newCurrentWord);
  };

  return (
    <>
      <WordCard word={currentWord} generateNewWord={generateCurrentWord} />
      <Progress total={words.length} learned={learned.length} />
    </>
  );
}

export default App;
