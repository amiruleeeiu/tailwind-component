import { faCheck, faCopy } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { tomorrow } from "react-syntax-highlighter/dist/esm/styles/prism";

interface CodeBlockProps {
  language: string;
  children: string;
}

const CodeBlock: React.FC<CodeBlockProps> = ({ language, children }) => {
  const [copied, setCopied] = useState(false);
  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(children);
      setCopied(true);
    } catch (err) {
      alert("Failed to copy text.");
    }
  };

  useEffect(() => {
    if (copied) {
      setTimeout(() => {
        setCopied(false);
      }, 1000);
    }
  }, [copied]);

  return (
    <div className="bg-gray-800 rounded-lg">
      <div className="flex items-center relative text-token-text-secondary bg-token-main-surface-secondary px-4 py-2 text-xs font-sans justify-between rounded-t-md">
        <p className="text-white text-base">{language}</p>

        <button className="text-white text-base" onClick={handleCopy}>
          <div className="flex items-center gap-1">
            <FontAwesomeIcon
              icon={copied ? faCheck : faCopy}
              color="white"
              size="sm"
            />{" "}
            {copied ? "Copied!" : "Copy"}
          </div>
        </button>
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
