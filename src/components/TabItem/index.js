// Write your code here
import './index.css'

const TabItem = props => {
  const {tabsListItems, updateActivatedId, Active} = props
  const {displayText, tabId} = tabsListItems

  const onButtonClick = () => {
    updateActivatedId(tabId)
  }

  const addClassName = Active && 'add_style'

  return (
    <li className="mr-4">
      <button
        type="button"
        className={`${addClassName} button`}
        onClick={onButtonClick}
      >
        {displayText}
      </button>
    </li>
  )
}

export default TabItem
