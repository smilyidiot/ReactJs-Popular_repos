// Write your code here
import './index.css'

// avatar_url: "https://avatars.githubusercontent.com/u/9892522?v=4"
// forks_count: 30348
// id: 28457823
// issues_count: 178
// name: "freeCodeCamp"
// stars_count: 356482

// avatarUrl: "https://avatars.githubusercontent.com/u/9892522?v=4"
// forksCount: 30348
// id: 28457823
// issuesCount: 178
// name: "freeCodeCamp"
// starsCount: 356482

const RepositoryItem = props => {
  const {content} = props
  const {avatarUrl, forksCount, issuesCount, name, starsCount} = content

  console.log('item', content)
  return (
    <li className="card">
      <img src={avatarUrl} alt={name} className="image" />
      <h1 className="head">{name}</h1>
      <div className="cont">
        <img
          src="https://assets.ccbp.in/frontend/react-js/stars-count-img.png"
          alt="stars"
          className="icons"
        />
        <p className="para">{starsCount}</p>
      </div>
      <div className="cont">
        <img
          src="https://assets.ccbp.in/frontend/react-js/forks-count-img.png"
          alt="forks"
          className="icons"
        />
        <p className="para">{forksCount}</p>
      </div>
      <div className="cont">
        <img
          src="https://assets.ccbp.in/frontend/react-js/issues-count-img.png"
          alt="open issues"
          className="icons"
        />
        <p className="para">{issuesCount}</p>
      </div>
    </li>
  )
}

export default RepositoryItem
