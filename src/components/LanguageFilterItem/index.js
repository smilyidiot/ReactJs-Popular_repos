// Write your code here
import './index.css'

const LanguageFilterItem = props => {
  const {content, updatedTabId, activeTab} = props
  const {id, language} = content

  const runningTab = activeTab === id ? 'blue-circle' : ''

  const onClickTab = () => {
    updatedTabId(id)
  }

  return (
    <li className="tab-container">
      <button
        className={`tab ${runningTab}`}
        type="button"
        onClick={onClickTab}
      >
        {language}
      </button>
    </li>
  )
}

export default LanguageFilterItem
