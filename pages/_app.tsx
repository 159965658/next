import App, { AppContext } from "next/app";
import { Router } from "next/dist/client/router";
import "antd/lib/style/index.less";
import "@/styles/index.css";
import { ConfigProvider } from "antd";

import { composeWithDevTools } from "redux-devtools-extension";
import zhCN from "antd/lib/locale/zh_CN";
import { Provider } from "react-redux";
import { createStore } from "redux";
import reducers from "@/store/reducers";

// 1、创建 store
const store = createStore(reducers, composeWithDevTools());
export default class MyApp extends App {
  static async getInitialProps({ Component, ctx }: AppContext) {
    let pageProps = {};
    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    return { pageProps };
  }

  componentDidMount() {
    console.log(process.env.NODE_ENV, process.env.API_ROOT);
    Router.events.on("routeChangeComplete", () => {
      console.log("complete");
    });
    Router.events.on("routeChangeStart", () => {
      console.log("routeChangeStart");

      if (process.env.NODE_ENV !== "production") {
        // const els = document.querySelectorAll(
        //   'link[href*="/_next/static/css/styles.chunk.css"]'
        // )
        // const timestamp = new Date().valueOf()
        // els[0].href = "/_next/static/css/styles.chunk.css?v=" + timestamp
      }
    });
    // Router.beforePopState(({ url, as, opts }) => {
    // //   console.log("_app.js beforePopState")
    // //   console.log(url, as, opts)
    //   return true
    // })
  }
  render() {
    const { Component, pageProps } = this.props;
    // console.log(pageProps, title)

    return (
      /* Here we call NextSeo and pass our default configuration to it  */
      <Provider store={store}>
        <ConfigProvider {...{ componentSize: "middle", locale: zhCN }}>
          {/* <Button>登录</Button> */}
          <Component {...pageProps} />
        </ConfigProvider>
      </Provider>
    );
  }
}
