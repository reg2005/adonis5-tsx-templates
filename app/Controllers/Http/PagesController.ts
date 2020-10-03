import { HttpContextContract } from "@ioc:Adonis/Core/HttpContext";
import { mergeStylesWithHtml } from "App/Services/JsxService";
import HomePage from "Jsx/HomePage";
import ErrorPage from "Jsx/ErrorPage";

export default class PagesController {
  homePage(ctx: HttpContextContract) {
    return mergeStylesWithHtml(HomePage({ ctx }));
  }
  errorPage(ctx: HttpContextContract) {
    return mergeStylesWithHtml(ErrorPage({ ctx }));
  }
}
