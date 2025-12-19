export type EventContentBlock =
  | {
      type: "paragraph";
      value: string;
    }
  | {
      type: "image";
      src: string;
      caption?: string;
    }
  | {
      type: "list";
      items: string[];
    };
