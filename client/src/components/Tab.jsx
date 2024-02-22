import { useSnapshot } from "valtio";
import state from "../store";

const Tab = ({ tab, handleClick, isFilterTab, isActiveTab }) => {
  const snap = useSnapshot(state);

  const activeStyle = isFilterTab && isActiveTab ? { backgroundColor: snap.color, opacity: 0.5 } : {backgroundColor: 'transparent', opacity:1}

  return <>
    <div key={tab.name} className={`tab-btn ${isFilterTab? 'rounded-full glassmorphism' : 'rounded-md'}`} onClick={handleClick} style={activeStyle}>

      <img src={tab.icon} alt={tab.name} className={`${isFilterTab? 'w-2/3 h-2/3' : 'w-11/12 h-11/12 object-contain'}`} />

    </div>
  </>;
};

export default Tab;