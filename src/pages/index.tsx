import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"
import Game2048 from "../components/Game2048"
import "../styles/game.css"

const IndexPage: React.FC<PageProps> = () => {
  return (
    <main>
      <Game2048 />
    </main>
  )
}

export default IndexPage

export const Head: HeadFC = () => <title>2048 游戏</title>
