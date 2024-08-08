import AccordionItem, { Accordion } from "@/components/Accordion";
import CodeBlock from "@/components/CodeBlock";

function AccordionPage() {
  return (
    <div className="flex flex-col gap-4">
      <Accordion>
        <AccordionItem title="Accordion Item 1" activeColor="bg-blue-600 text-white">
          <p>
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which don't look even slightly
            believable. If you are going to use a passage of Lorem Ipsum, you
            need to be sure there isn't anything embarrassing hidden in the
            middle of text. All the Lorem Ipsum.
          </p>
        </AccordionItem>
        <AccordionItem title="Accordion Item 2">
          <p>
            Content to use a passage of Lorem Ipsum, you need to be sure there
            isn't anything embarrassing hidden in the middle of text. All the
            Lorem Ipsum. for the second accordion item.
          </p>
        </AccordionItem>
        <AccordionItem title="Accordion Item 3">
          <p>
            Content for the alteration in some form, by injected humour, or
            randomised words which don't look even slightly believable. If you
            are going to use third accordion item.
          </p>
        </AccordionItem>
      </Accordion>
      <CodeBlock language="javascript">
        {`import React, { ReactNode, useEffect, useRef, useState } from "react";

interface AccordionProps {
  title: string;
  children: ReactNode;
}

const Accordion: React.FC<AccordionProps> = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [height, setHeight] = useState<string | number>("0px");
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (contentRef.current) {
      setHeight(isOpen ? \`\${contentRef.current.scrollHeight}px\` : "0px");
    }
  }, [isOpen]);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="border-gray-200 border-b w-full">
      <button
        className={\`p-4 flex justify-between items-center w-full text-left focus:outline-none transition-opacity ease-in-out \${isOpen ? "bg-green-50 border-b" : ""}\`}
        onClick={toggleAccordion}
      >
        <span className="font-medium">{title}</span>
        <span className="text-xl">{isOpen ? '-' : '+'}</span>
      </button>
      <div
        ref={contentRef}
        style={{ maxHeight: height }}
        className="overflow-hidden transition-all duration-500 ease-in-out"
      >
        <div className="p-4">{children}</div>
      </div>
    </div>
  );
};

export default Accordion;
`}
      </CodeBlock>
    </div>
  );
}

export default AccordionPage;
