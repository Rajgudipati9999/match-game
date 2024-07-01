
import './index.css'

const Header = ({score, timer}) => {
  // console.log(score)
  return (
    <nav className="navbar">
      <div className="logo-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/match-game-website-logo.png"
          alt="website logo"
          className="logo"
        />
      </div>
      <div className="score-timer">
        <p className='score'>Score : {score}</p>
        <div className='timer-container'>
          <img
            src="https://assets.ccbp.in/frontend/react-js/match-game-timer-img.png"
            alt="timer"
            className="timer"
          />
          <p>{timer}</p>
        </div>
      </div>
    </nav>
  )
}
export default Header
