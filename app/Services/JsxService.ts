import { renderToStaticMarkup } from "react-dom/server";
import { ServerStyleSheet } from "styled-components";

import { ParentComponentInterface } from "Contracts/jsxContract";
export const JsxRender = (component: any): ParentComponentInterface => {
  const sheet = new ServerStyleSheet();
  try {
    const html = renderToStaticMarkup(sheet.collectStyles(component));
    const styles = sheet.getStyleTags();
    return { html, styles };
  } catch (error) {
    // handle error
    console.error(error);
    return { html: "", styles: "" };
  } finally {
    sheet.seal();
  }
};

export const mergeStylesWithHtml = (data: ParentComponentInterface) => {
  return data?.html.replace('<style id="custom-styles"></style>', data.styles);
};
