import React from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { tomorrow } from "react-syntax-highlighter/dist/esm/styles/prism";

interface CodeBlockProps {
  language: string;
  children: string;
}

const CodeBlock: React.FC<CodeBlockProps> = ({ language, children }) => {
  return (
    <div className="bg-gray-800 rounded-lg">
      <div className="flex items-center relative text-token-text-secondary bg-token-main-surface-secondary px-4 py-2 text-xs font-sans justify-between rounded-t-md">
        <p className="text-white text-xl">{language}</p>
        <CopyToClipboard text={children}>
          <button className="text-white text-base">Copy</button>
        </CopyToClipboard>
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
