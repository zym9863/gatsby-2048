import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"
import Game2048 from "../components/Game2048"
import "../styles/game.css"

const pageStyles = {
  color: "#776e65",
  padding: "20px",
  fontFamily: "Clear Sans, Helvetica Neue, Arial, sans-serif",
  background: "#faf8ef",
  minHeight: "100vh",
}

const IndexPage: React.FC<PageProps> = () => {
  return (
    <main style={pageStyles}>
      <Game2048 />
    </main>
  )
}

export default IndexPage

export const Head: HeadFC = () => <title>2048 游戏</title>
