import { commands } from "@/data/commands";
import React from "react";
interface Props {
  line: string;
}

export default function CommandHighlighter({ line }: Props) {
  const segments = line.split(/(\w+)/);

  return (
    <pre className="w-max absolute">
      {segments.map((segment, idx) => {
        const matches = segment.match(/(\w+)/);
        if (matches) {
          const [format] = matches;
          return (
            <span
              key={idx}
              className={
                idx === 1
                  ? commands.includes(format)
                    ? "text-[#50fa7b]"
                    : "text-[#ff5555]"
                  : "text-[#8be9fd]"
              }
            >
              {format}
            </span>
          );
        }
        return <span key={idx}>{segment}</span>;
      })}
    </pre>
  );
}
