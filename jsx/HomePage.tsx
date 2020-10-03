import React from "react";
import styled from "styled-components";

import { TsxComponentPropsInterface } from "Contracts/jsxContract";

import Layout from "./layout";
import { JsxRender } from "App/Services/JsxService";

const CardDeck = () => (
  <div className="card-deck mb-3 text-center">
    <div className="card mb-4 shadow-sm">
      <div className="card-header">
        <h4 className="my-0 font-weight-normal">Free</h4>
      </div>
      <div className="card-body">
        <h1 className="card-title pricing-card-title">
          $0 <small className="text-muted">/ mo</small>
        </h1>
        <ul className="list-unstyled mt-3 mb-4">
          <li>10 users included</li>
          <li>2 GB of storage</li>
          <li>Email support</li>
          <li>Help center access</li>
        </ul>
        <button
          type="button"
          className="btn btn-lg btn-block btn-outline-primary"
        >
          Sign up for free
        </button>
      </div>
    </div>
    <div className="card mb-4 shadow-sm">
      <div className="card-header">
        <h4 className="my-0 font-weight-normal">Pro</h4>
      </div>
      <div className="card-body">
        <h1 className="card-title pricing-card-title">
          $15 <small className="text-muted">/ mo</small>
        </h1>
        <ul className="list-unstyled mt-3 mb-4">
          <li>20 users included</li>
          <li>10 GB of storage</li>
          <li>Priority email support</li>
          <li>Help center access</li>
        </ul>
        <button type="button" className="btn btn-lg btn-block btn-primary">
          Get started
        </button>
      </div>
    </div>
    <div className="card mb-4 shadow-sm">
      <div className="card-header">
        <h4 className="my-0 font-weight-normal">Enterprise</h4>
      </div>
      <div className="card-body">
        <h1 className="card-title pricing-card-title">
          $29 <small className="text-muted">/ mo</small>
        </h1>
        <ul className="list-unstyled mt-3 mb-4">
          <li>30 users included</li>
          <li>15 GB of storage</li>
          <li>Phone and email support</li>
          <li>Help center access</li>
        </ul>
        <button type="button" className="btn btn-lg btn-block btn-primary">
          Contact us
        </button>
      </div>
    </div>
  </div>
);

const MyStyledH5 = styled.h5`
  margin: auto;
  font-size: 50px;
  width: calc(100% - 40px);
`;

export default ({ ctx }: TsxComponentPropsInterface) => {
  return JsxRender(
    <Layout ctx={ctx}>
      <div className="text-center mb-4">
        <MyStyledH5 className="my-4">Use jsx in your Adonis 5 app</MyStyledH5>
        <h5>With Typescript autocomplete</h5>
      </div>
      <CardDeck />
    </Layout>
  );
};
