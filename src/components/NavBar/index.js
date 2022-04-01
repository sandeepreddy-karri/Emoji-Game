// Write your code here.

import './index.css'

const NavBar = props => {
  const {isGameInProgress, topScore, currentScore} = props

  return (
    <div className="navbarContainer">
      <div className="leftNavbar">
        <img
          src="https://assets.ccbp.in/frontend/react-js/game-logo-img.png"
          alt="emoji logo"
          className="logo"
        />
        <h1 className="navTitle">Emoji Game</h1>
      </div>
      <div className="rightNavbar">
        {isGameInProgress ? (
          <>
            <p className="navPara">Score: {currentScore}</p>
            <p className="navPara">Top Score: {topScore}</p>
          </>
        ) : (
          ''
        )}
      </div>
    </div>
  )
}

export default NavBar
