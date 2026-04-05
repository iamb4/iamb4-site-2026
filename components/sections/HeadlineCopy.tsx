import { ReactNode } from "react";

type HeadlineAndCopyType = {
  title: string;
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  text?: string;
  children?: ReactNode;
};

export function HeadlineAndCopy({
  title,
  as = "h2",
  text,
  children,
}: HeadlineAndCopyType) {
  const Tag = as;

  return (
    <div className="mb-11">
      <Tag className="mb-5">{title}</Tag>
      {text && <p>{text}</p>}
      {children}
    </div>
  );
}
