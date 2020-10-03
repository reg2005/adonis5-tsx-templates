import React from "react";
import { TsxComponentPropsInterface } from "Contracts/jsxContract";

export default ({
  children,
  ctx,
  withoutHeader = false,
}: TsxComponentPropsInterface) => {
  return (
    <html lang="ru">
      <head>
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        <title>Home page</title>

        <meta name="keywords" content="" />
        <meta name="descriptdion" content="" />
        <link
          rel="stylesheet"
          href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css"
          integrity="sha384-JcKb8q3iqJ61gNV9KGb8thSsNjpSL0n8PARn9HuZOnIxN0hoP+VmmDGMN5t9UJ0Z"
          crossOrigin="anonymous"
        />
      </head>
      <body>
        <style id="custom-styles"></style>
        {!withoutHeader ? (
          <div className="d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-3 bg-white border-bottom shadow-sm">
            <h5 className="my-0 mr-md-auto font-weight-normal">
              current route: {ctx.request.method()} {ctx.request.url()}
            </h5>
            <nav className="my-2 my-md-0 mr-md-3">
              <a className="p-2 text-dark" href="#">
                Item 1
              </a>
              <a className="p-2 text-dark" href="#">
                Item 2
              </a>
              <a className="p-2 text-dark" href="#">
                Item 3
              </a>
              <a className="p-2 text-dark" href="#">
                Item 4
              </a>
            </nav>
            <a className="btn btn-outline-primary" href="#">
              Sign up
            </a>
          </div>
        ) : null}
        <div>
          <div className="container">
            {children}
            <footer className="pt-4 my-md-5 pt-md-5 border-top">
              <div className="row">
                <div className="col-12 col-md">
                  <small className="d-block mb-3 text-muted">
                    &copy; 2017-2020
                  </small>
                </div>
                <div className="col-6 col-md">
                  <h5>Features</h5>
                  <ul className="list-unstyled text-small">
                    <li>
                      <a className="text-muted" href="#">
                        Cool stuff
                      </a>
                    </li>
                    <li>
                      <a className="text-muted" href="#">
                        Random feature
                      </a>
                    </li>
                    <li>
                      <a className="text-muted" href="#">
                        Team feature
                      </a>
                    </li>
                    <li>
                      <a className="text-muted" href="#">
                        Stuff for developers
                      </a>
                    </li>
                    <li>
                      <a className="text-muted" href="#">
                        Another one
                      </a>
                    </li>
                    <li>
                      <a className="text-muted" href="#">
                        Last time
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="col-6 col-md">
                  <h5>Resources</h5>
                  <ul className="list-unstyled text-small">
                    <li>
                      <a className="text-muted" href="#">
                        Resource
                      </a>
                    </li>
                    <li>
                      <a className="text-muted" href="#">
                        Resource name
                      </a>
                    </li>
                    <li>
                      <a className="text-muted" href="#">
                        Another resource
                      </a>
                    </li>
                    <li>
                      <a className="text-muted" href="#">
                        Final resource
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="col-6 col-md">
                  <h5>About</h5>
                  <ul className="list-unstyled text-small">
                    <li>
                      <a className="text-muted" href="#">
                        Team
                      </a>
                    </li>
                    <li>
                      <a className="text-muted" href="#">
                        Locations
                      </a>
                    </li>
                    <li>
                      <a className="text-muted" href="#">
                        Privacy
                      </a>
                    </li>
                    <li>
                      <a className="text-muted" href="#">
                        Terms
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </footer>
          </div>
        </div>

        <script
          src="https://code.jquery.com/jquery-3.5.1.slim.min.js"
          integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj"
          crossOrigin="anonymous"
        ></script>
        <script
          src="https://cdn.jsdelivr.net/npm/popper.js@1.16.1/dist/umd/popper.min.js"
          integrity="sha384-9/reFTGAW83EW2RDu2S0VKaIzap3H66lZH81PoYlFhbGU+6BZp6G7niu735Sk7lN"
          crossOrigin="anonymous"
        ></script>
        <script
          src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"
          integrity="sha384-B4gt1jrGC7Jh4AgTPSdUtOBvfO8shuf57BaghqFfPlYxofvL8/KUEfYiJOMMV+rV"
          crossOrigin="anonymous"
        ></script>
      </body>
    </html>
  );
};
