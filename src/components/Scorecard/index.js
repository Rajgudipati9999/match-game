import './index.css'

const Scorecard = ({ score, onPlayAgain }) => (
  <div className="scorecard-container">
    <div className='scorecard'>
    <img
      src="https://assets.ccbp.in/frontend/react-js/match-game-trophy.png"
      alt="trophy"
      className="trophy"
    />
    <h1 className="final-score-heading">Your Score</h1>
    <p className="final-score">{score}</p>
    <div className="play-again-button">
    <img src='https://assets.ccbp.in/frontend/react-js/match-game-play-again-img.png' alt='reset'/>
    <button type="button" className='button' onClick={onPlayAgain}>
      Play Again
    </button>
    </div>
    </div>
  </div>
)
export default Scorecard
