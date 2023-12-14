import './index.css'

const Tab = props => {
  const {item, TabChange, isActive} = props
  const {tabId, displayText} = item
  const changeTab = () => {
    TabChange(tabId)
  }
  const Classname = isActive ? 'button active' : 'button'
  return (
    <li className="list">
      <button className={`${Classname}`} onClick={changeTab}>
        {displayText}
      </button>
    </li>
  )
}

export default Tab
