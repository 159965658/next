import App from "next/app"
import { Router } from "next/dist/client/router"

import "@/styles/index.css"
export default class MyApp extends App {
  componentDidMount() {
    console.log(process.env.NODE_ENV, process.env.API_ROOT)
    Router.events.on("routeChangeComplete", () => {
      console.log("complete")
    })
    Router.events.on("routeChangeStart", () => {
      console.log("routeChangeStart")

      if (process.env.NODE_ENV !== "production") {
        // const els = document.querySelectorAll(
        //   'link[href*="/_next/static/css/styles.chunk.css"]'
        // )
        // const timestamp = new Date().valueOf()
        // els[0].href = "/_next/static/css/styles.chunk.css?v=" + timestamp
      }
    })
    // Router.beforePopState(({ url, as, opts }) => {
    // //   console.log("_app.js beforePopState")
    // //   console.log(url, as, opts)
    //   return true
    // })
  }
  render() {
    const { Component, pageProps } = this.props
    // console.log(pageProps, title)

    return <Component {...pageProps} />
  }
}
