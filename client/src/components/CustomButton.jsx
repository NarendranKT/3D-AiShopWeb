import { useSnapshot } from "valtio";
import state from "../store";
import { getContrastingColor } from "../config/helpers";


const CustomButton = (prop) => {
    const { type, title, handleClick, customStyles } = prop;
    const snap = useSnapshot(state);
    const generateSyle = (type) => {
        if (type === 'filled') {
            return {
                backgroundColor: snap.color,
                color: getContrastingColor(snap.color),
            }
        } else if (type === 'outline') {
            return {
                borderWidth: '1px',
                borderColor: snap.color,
                color: snap.color,
            }
        }
    }

  return (
    <button className={`px-2 py-1.5 flex-1 rounded-md ${customStyles}`} style={generateSyle(type)} onClick={handleClick}>
        {title}
    </button>
  )
};

export default CustomButton;
