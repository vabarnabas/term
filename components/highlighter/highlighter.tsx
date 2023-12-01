import React from "react";

interface Props {
  line: string;
}

export default function Highlighter({ line }: Props) {
  const segments = line.split(/(\$\w+\([^)]+\))/);

  return (
    <pre className="w-max">
      {segments.map((segment, idx) => {
        const matches = segment.match(/\$(\w+)\(([^)]+)\)/);
        if (matches) {
          const [, format, content] = matches;
          switch (format) {
            case "pink":
              return (
                <span key={idx} className="text-[#ff79c6]">
                  {content}
                </span>
              );
            case "blue":
              return (
                <span key={idx} className="text-[#8be9fd]">
                  {content}
                </span>
              );
            case "green":
              return (
                <span key={idx} className="text-[#50fa7b]">
                  {content}
                </span>
              );
            case "red":
              return (
                <span key={idx} className="text-[#ff5555]">
                  {content}
                </span>
              );
            case "purple":
              return (
                <span key={idx} className="text-[#bd93f9]">
                  {content}
                </span>
              );
            case "icon":
              return <i key={idx} className={content}></i>;
            case "url":
              return (
                <a
                  className="underline"
                  key={idx}
                  href={content}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {content}
                </a>
              );
          }
        }
        return <span key={idx}>{segment}</span>;
      })}
    </pre>
  );
}
