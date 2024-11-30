import parse from "html-react-parser";
import sanitizeHtml from "sanitize-html";

export function capitalize(str: string) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

export function firstLetters(text: string) {
  return text
    .split(" ")
    .map((word) => word[0])
    .join("");
}

export const htmlFrom = (htmlString: string | undefined) => {
  const cleanHtmlString = sanitizeHtml(htmlString || "");
  const html = parse(cleanHtmlString, {});
  return html;
};

export const replaceNewLines = (str: string) => str.replace(/\n/g, "");
