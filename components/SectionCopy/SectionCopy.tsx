import { ContentBlock } from "@/types/content";
import RenderText from "@/utils/renderText";

type SectionCopyType = {
  text?: ContentBlock[];
};

export function SectionCopy({ text }: SectionCopyType) {
  return (
    <div className="mb-11">
      <RenderText text={text} />
    </div>
  );
}
