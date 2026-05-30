import { ContentBlock } from "@/types/content";

const headingClasses: Record<string, string> = {
  h1: "scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl",
  h2: "scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0",
  h3: "scroll-m-20 text-2xl font-semibold tracking-tight",
  h4: "scroll-m-20 text-xl font-semibold tracking-tight",
  h5: "scroll-m-20 text-lg font-semibold tracking-tight",
  h6: "scroll-m-20 text-base font-semibold tracking-tight",
};

export default function RenderText({ text }: { text?: ContentBlock[] }) {
  if (!text || !Array.isArray(text)) return null;

  return text.map((block, blockIndex) => {
    if (
      block.type === "h1" ||
      block.type === "h2" ||
      block.type === "h3" ||
      block.type === "h4" ||
      block.type === "h5" ||
      block.type === "h6"
    ) {
      const Tag = block.type;
      return (
        <Tag key={blockIndex} className={headingClasses[block.type]}>
          {block.content.map((item, i) => (
            <span key={i}>{item.text}</span>
          ))}
        </Tag>
      );
    }

    if (block.type === "paragraph") {
      return (
        <p key={blockIndex} className="leading-7 [&:not(:first-child)]:mt-6">
          {block.content.map((item, i) => (
            <span key={i}>{item.text}</span>
          ))}
        </p>
      );
    }

    if (block.type === "ul") {
      return (
        <ul key={blockIndex} className="my-6 ml-6 list-disc [&>li]:mt-2">
          {block.content.map((item, i) => (
            <li key={i}>{item.text}</li>
          ))}
        </ul>
      );
    }

    return null;
  });
}
