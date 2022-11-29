import "./SuspendedList.css"

const SuspendedList = (props) => {
    return (
        <div className="supended-list">
            <label>{props.label}</label>
            <select required={props.required}>
                {props.itens.map(item => <option key={item}>{item}</option>)}
            </select>
        </div>
    )
}

export default SuspendedList;