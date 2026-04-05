import { ContentBlock } from "@/types/content";

export function ContentBlocks({ blocks }: { blocks: ContentBlock[] }) {
  return blocks.map((block, i) => {
    const blockText = block.content.map((c) => c.text).join("");
    if (block.type === "paragraph") return <p key={i}>{blockText}</p>;
    if (block.type === "ul")
      return (
        <ul key={i}>
          {block.content.map((c, j) => (
            <li key={j}>{c.text}</li>
          ))}
        </ul>
      );
    const HTag = block.type as "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
    return <HTag key={i}>{blockText}</HTag>;
  });
}
