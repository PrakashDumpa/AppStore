// Write your code here
import './index.css'

const AppItem = props => {
  const {appsItemList} = props
  const {appName, imageUrl} = appsItemList

  return (
    <li className="p-3 listItem mt-3 mr-3">
      <img src={imageUrl} alt={appName} className="w-50" />
      <p>{appName}</p>
    </li>
  )
}

export default AppItem
