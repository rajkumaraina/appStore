import './index.css'

const AppObject = props => {
  const {item} = props
  const {appId, appName, imageUrl, category} = item
  return (
    <div className="listContainer">
      <li>
        <img src={imageUrl} alt={appName} className="appImg" />
        <p className="para">{appName}</p>
      </li>
    </div>
  )
}
export default AppObject
