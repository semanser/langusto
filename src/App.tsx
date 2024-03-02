import { useLocalStorage } from "@uidotdev/usehooks";
import { useState } from "react";

import { Progress } from "./components/Progress/Progress";
import { Word, WordCard } from "./components/WordCard/WordCard";
import "./font.css";
import "./global.css";
import { words } from "./languages/spanish";

function App() {
  const [learned, saveLearned] = useLocalStorage("learned-words", []);
  const [currentWord, setCurrentWord] = useState<Word>(
    words[Math.floor(Math.random() * words.length)],
  );

  return (
    <>
      <WordCard word={currentWord} />
      <Progress total={words.length} learned={learned.length} />
    </>
  );
}

export default App;
