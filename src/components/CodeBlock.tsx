import React from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { tomorrow } from "react-syntax-highlighter/dist/esm/styles/prism";

interface CodeBlockProps {
  language: string;
  children: string | string[];
}

const CodeBlock: React.FC<CodeBlockProps> = ({ language, children }) => {
  return (
    <div className="bg-gray-800 rounded-lg">
      <div className="flex items-center relative text-token-text-secondary bg-token-main-surface-secondary px-4 py-3 text-xs font-sans justify-between rounded-t-md">
        <p className="text-white text-xl">{language}</p>
        <button className="text-white text-lg">Copy code</button>
      </div>
      <div className="h-[700px] overflow-y-auto">
        <SyntaxHighlighter language={language} style={tomorrow} showLineNumbers>
          {children}
        </SyntaxHighlighter>
      </div>
    </div>
  );
};

export default CodeBlock;
