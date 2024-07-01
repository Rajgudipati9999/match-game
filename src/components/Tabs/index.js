import './index.css'

const Tabs = ({tabsList, activeTab, setActiveTab}) => {
  // console.log(setActiveTab)
  return (
    <div className="tabs">
      {tabsList.map(tab => (
        <button
          type="submit"
          key={tab.tabId}
          onClick={() => setActiveTab(tab.tabId)}
          className={activeTab === tab.tabId ? 'button active-tab':'button'}
        >
          {tab.displayText}
        </button>
      ))}
    </div>
  )
}
export default Tabs