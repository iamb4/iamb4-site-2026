import { ContentBlock } from "@/types/content";
import { HeadlineAndCopy } from "@/components/sections/HeadlineCopy";
import { ContentBlocks } from "@/components/sections/ContentBlocks";

type ContentSectionProps = {
  title: string;
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  blocks: ContentBlock[];
};

export function ContentSection({ title, as = "h2", blocks }: ContentSectionProps) {
  return (
    <section>
      <HeadlineAndCopy title={title} as={as}>
        <ContentBlocks blocks={blocks} />
      </HeadlineAndCopy>
    </section>
  );
}
