// Write your code here.
import './index.css'

const LOSE_IMAGE = 'https://assets.ccbp.in/frontend/react-js/lose-game-img.png'
const WON_IMAGE = 'https://assets.ccbp.in/frontend/react-js/won-game-img.png'

const WinOrLossCard = props => {
  const {clickedEmojisList, emojisList, resetGame} = props
  const WinOrLoss = clickedEmojisList.length === emojisList.length
  const imageUrl = WinOrLoss ? WON_IMAGE : LOSE_IMAGE
  const gameStatus = WinOrLoss ? 'You Won' : 'You Lose'
  const scoreLabel = WinOrLoss ? 'Best Score' : 'Score'
  const finalScore = WinOrLoss ? emojisList.length : clickedEmojisList.length

  const onClickPlayAgain = () => {
    resetGame()
  }

  return (
    <div className="win-or-lose-card">
      <div className="details-section">
        <h1 className="game-status">{gameStatus}</h1>
        <p className="current-score-label">{scoreLabel}</p>
        <p className="current-score-value">
          {finalScore}/{emojisList.length}
        </p>
        <button
          type="button"
          className="play-again-button"
          onClick={onClickPlayAgain}
        >
          Play Again
        </button>
      </div>
      <div className="image-section">
        <img className="win-or-lose-image" src={imageUrl} alt="win or lose" />
      </div>
    </div>
  )
}

export default WinOrLossCard
