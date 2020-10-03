import React from "react";

import { TsxComponentPropsInterface } from "Contracts/jsxContract";

import Layout from "./layout";
import { JsxRender } from "App/Services/JsxService";

export default ({ ctx }: TsxComponentPropsInterface) => {
  return JsxRender(
    <Layout ctx={ctx} withoutHeader={true}>
      <div className="text-center mb-4">
        <h1>404 error</h1>
      </div>
    </Layout>
  );
};
