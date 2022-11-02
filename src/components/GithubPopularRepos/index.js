import {Component} from 'react'
import Loader from 'react-loader-spinner'

import LanguageFilterItem from '../LanguageFilterItem'
import RepositoryItem from '../RepositoryItem'

import './index.css'

const languageFiltersData = [
  {id: 'ALL', language: 'All'},
  {id: 'JAVASCRIPT', language: 'Javascript'},
  {id: 'RUBY', language: 'Ruby'},
  {id: 'JAVA', language: 'Java'},
  {id: 'CSS', language: 'CSS'},
]

// Write your code here

class GithubPopularRepos extends Component {
  state = {
    activeTabId: languageFiltersData[0].id,
    showContent: '',
    isLoading: true,
    contentFailed: false,
  }

  componentDidMount() {
    this.getDetails()
  }

  getDetails = async () => {
    const {activeTabId} = this.state
    const response = await fetch(
      `https://apis.ccbp.in/popular-repos?language=${activeTabId}`,
    )
    const data = await response.json()
    // console.log(data)

    if (response.ok === true) {
      this.successView(data.popular_repos)
    } else {
      this.failureView()
    }
  }

  successView = show => {
    const convertedData = show.map(each => ({
      avatarUrl: each.avatar_url,
      forksCount: each.forks_count,
      id: each.id,
      issuesCount: each.issues_count,
      name: each.name,
      starsCount: each.stars_count,
    }))

    this.setState({showContent: convertedData, isLoading: false})
    // console.log(show)
  }

  failureView = () => {
    this.setState({contentFailed: true, isLoading: true})
  }

  updatedTabId = id => {
    this.setState(
      {
        activeTabId: id,
        isLoading: true,
        contentFailed: false,
      },
      this.getDetails,
    )
  }

  render() {
    const {activeTabId, showContent, isLoading, contentFailed} = this.state

    console.log('main', showContent)
    console.log('isLoading', isLoading)
    console.log('contentFailed', contentFailed)

    return (
      <div className="main-container">
        <h1 className="heading">Popular</h1>
        <ul className="tabItems">
          {languageFiltersData.map(eachTab => (
            <LanguageFilterItem
              key={eachTab.id}
              content={eachTab}
              updatedTabId={this.updatedTabId}
              activeTab={activeTabId}
            />
          ))}
        </ul>
        {isLoading && (
          <>
            {!contentFailed && (
              <div testid="loader">
                <Loader
                  type="ThreeDots"
                  color="#0284c7"
                  height={80}
                  width={80}
                />
              </div>
            )}
            {contentFailed && (
              <>
                <img
                  src="https://assets.ccbp.in/frontend/react-js/api-failure-view.png"
                  className="f-image"
                  alt="failure view"
                />
                <h1 className="error-msg">Something Went Wrong</h1>
              </>
            )}
          </>
        )}
        {!isLoading && (
          <ul className="content">
            {showContent.map(each => (
              <RepositoryItem key={each.id} content={each} />
            ))}
          </ul>
        )}
      </div>
    )
  }
}

export default GithubPopularRepos
