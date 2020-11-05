function Form(props) {
    return(
        <div>
            <input onChange={props.onItemInputChange} placeholder="to do item" type='text'/>
            <br></br>
            <input type="date" onChange={props.onDate}></input>
            <br></br>
            <label for="dayofWeek"></label>
            <select onChange={props.onSelect} name="dayOfWeek">
                <option value="Sunday">Sunday</option>
                <option value="Monday">Monday</option>
                <option value="Tuesday">Tuesday</option>
                <option value="Wednesday">Wednesday</option>
                <option value="Thursday">Thursday</option>
                <option value="Friday">Friday</option>
                <option value="Saturday">Saturday</option>
            </select>
            <br></br>
            <button onClick={props.onAdd}>Add</button>
        </div>
    )
}

export default Form


