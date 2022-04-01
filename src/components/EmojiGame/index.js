/* 
Quick Tip 

- Use the below function in the EmojiGame Component to shuffle the emojisList every time when an emoji is clicked.

const shuffledEmojisList = () => {
  const {emojisList} = this.props
  return emojisList.sort(() => Math.random() - 0.5)
}

*/

// Write your code here.

import {Component} from 'react'

import NavBar from '../NavBar'
import EmojiCard from '../EmojiCard'
import WinOrLossCard from '../WinOrLoseCard'
import './index.css'

class EmojiGame extends Component {
  state = {isGameInProgress: true, topScore: 0, clickedEmojisList: []}

  finishGameAndSetTopScore = currentScore => {
    const {topScore} = this.state
    let newTopScore = topScore
    if (currentScore > topScore) {
      newTopScore = currentScore
    }
    this.setState({topScore: newTopScore, isGameInProgress: false})
  }

  clickEmoji = id => {
    const {emojisList} = this.props
    const {clickedEmojisList} = this.state
    const checkIsEmojiInclude = clickedEmojisList.includes(id)
    const clickedEmojisLength = clickedEmojisList.length

    if (checkIsEmojiInclude) {
      this.finishGameAndSetTopScore(clickedEmojisLength)
    } else {
      if (emojisList.length - 1 === clickedEmojisLength) {
        this.finishGameAndSetTopScore(emojisList.length)
      }
      this.setState(prevState => ({
        clickedEmojisList: [...prevState.clickedEmojisList, id],
      }))
    }
  }

  getshuffledEmojisList = () => {
    const {emojisList} = this.props
    return emojisList.sort(() => Math.random() - 0.5)
  }

  resetGame = () => {
    this.setState({clickedEmojisList: [], isGameInProgress: true})
  }

  renderWinOrLossCard = () => {
    const {clickedEmojisList} = this.state
    const {emojisList} = this.props

    return (
      <div>
        <WinOrLossCard
          clickedEmojisList={clickedEmojisList}
          emojisList={emojisList}
          resetGame={this.resetGame}
        />
      </div>
    )
  }

  renderEmojisList = () => {
    const shuffledEmojisList = this.getshuffledEmojisList()

    return (
      <ul className="emojiListCard">
        {shuffledEmojisList.map(eachEmoji => (
          <EmojiCard
            key={eachEmoji.id}
            emojiDetails={eachEmoji}
            clickEmoji={this.clickEmoji}
          />
        ))}
      </ul>
    )
  }

  render() {
    const {isGameInProgress, topScore, clickedEmojisList} = this.state
    return (
      <div className="mainBgContainer">
        <NavBar
          isGameInProgress={isGameInProgress}
          topScore={topScore}
          currentScore={clickedEmojisList.length}
        />
        <div className="EmojiGameContainer">
          {isGameInProgress
            ? this.renderEmojisList()
            : this.renderWinOrLossCard()}
        </div>
      </div>
    )
  }
}

export default EmojiGame
