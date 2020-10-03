import { HttpContextContract } from "@ioc:Adonis/Core/HttpContext";
export interface ParentComponentInterface {
  html: string;
  styles: string;
}
export interface TsxComponentPropsInterface {
  children?: any;
  ctx: HttpContextContract;
  withoutHeader?: boolean;
}
