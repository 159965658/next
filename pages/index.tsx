import * as React from "react"
import Link from "next/link"
// import Layout from "../components/Layout"
import { NextPage } from "next"
// const backgroundColor = "red"
// import styleCss from "./index.css"
const IndexPage: NextPage = () => {
  return (
    <div title="Home | Next.js + TypeScript Example">
      <h1>Hello Next.js 👋</h1>
      <h1>Hello Next.js 👋</h1>
      <p className="pa">
        <Link href="/about">
          <a className="a">About</a>
        </Link>
      </p>
      <style jsx global>
        {`
          .pa {
            display: flex;
            font: 15px Helvetica, Arial, sans-serif;
            background: var(--color-blue);
            padding: 50px;
            text-align: center;
            transition: 100ms ease-in background;
            .a {
              color: red;
            }
          }
          .hello:hover {
            background: #ccc;
          }
        `}
      </style>
    </div>
  )
}

export default IndexPage
