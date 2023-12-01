import CommandHighlighter from "@/components/highlighter/command-highlighter";
import Highlighter from "@/components/highlighter/highlighter";
import { commandHandler } from "@/data/commands";
import { welcomeText } from "@/data/text";
import { useState, useEffect, useRef, useCallback } from "react";

export default function Home() {
  const [lines, setLines] = useState<string[]>(welcomeText);
  const [history, setHistory] = useState<string[]>([]);
  const [inputValue, setInputValue] = useState("");
  const [historyIndex, setHistoryIndex] = useState(-1);

  const inputRef = useRef<HTMLInputElement>(null);

  const handleKeyPress = useCallback(
    (event: KeyboardEvent) => {
      if (event.ctrlKey && event.key.toLowerCase() === "l") {
        event.preventDefault();
        setLines([]);
      }

      if (event.key === "Enter") {
        commandHandler(inputValue, lines, setLines);
        setHistory([inputValue, ...history]);
        setInputValue("");
      }

      if (event.key === "ArrowUp") {
        if (historyIndex >= history.length) return;

        if (historyIndex + 1 === history.length) return;

        setInputValue(history[historyIndex + 1]);
        setHistoryIndex((prevState) => prevState + 1);
      }

      if (event.key === "ArrowDown") {
        if (historyIndex < 0) return;

        if (historyIndex === 0) {
          setInputValue("");
          setHistoryIndex(-1);
          return;
        }

        setInputValue(history[historyIndex - 1]);
        setHistoryIndex((prevState) => prevState - 1);
      }
    },
    [history, inputValue, lines, historyIndex]
  );

  useEffect(() => {
    window.addEventListener("keydown", handleKeyPress);
    if (inputRef.current) {
      inputRef.current.focus();
    }

    return () => {
      window.removeEventListener("keydown", handleKeyPress);
    };
  }, [handleKeyPress]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  return (
    <div
      className="bg-[#282a36] text-[#f8f8f2] selection:bg-[#44475a] w-screen min-h-screen p-4"
      onClick={() => inputRef.current?.focus()}
    >
      {lines.map((line, idx) => (
        <Highlighter key={line + idx} line={line} />
      ))}
      <div className="inline-flex w-full">
        <Highlighter line="$pink(user@term.barnabee.studio):$blue(~)$ " />
        <div className="relative flex items-center">
          <CommandHighlighter line={inputValue} />
          <input
            type="text"
            className="bg-transparent outline-none w-full flex text-transparent caret-[#f8f8f2]"
            value={inputValue}
            onChange={handleInputChange}
            ref={inputRef}
          />
        </div>
      </div>
    </div>
  );
}
