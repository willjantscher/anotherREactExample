function Checker(props) {
    return(
        <div>
            <input type="date" onChange={props.checkDate}></input>
            {/* <input onChange={props.onItemInputChange} type='text'/>
            <input type="date" onChange={props.onDate}></input>
            <button onClick={props.onAdd}>Add</button> */}
            {/* {props.resultList.item} */}
            {/* <input type="button" onClick={props.searchDate}>Search</input> */}
            <button onClick={props.searchDate}>Search</button>
            {/* {props.resultList} */}

            <ul>
                {props.resultList.map((item) => (
                    <li>{item.item}</li>
                ))}
            </ul>
            {/* {console.log(props.resultList)} */}

        </div>
    )
}

export default Checker






