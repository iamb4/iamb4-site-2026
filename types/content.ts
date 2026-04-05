export type HTag = {
  type: "text";
  text: string;
};

export type TextContent = {
  type: "text";
  text: string;
};

export type ListItemContent = {
  type: "li";
  text: string;
};

export type ContentBlock = {
  type: "paragraph" | "ul" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  content: (HTag | TextContent | ListItemContent)[];
};
