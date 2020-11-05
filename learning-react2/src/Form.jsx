function Form(props) {
    return(
        <div>
            <input onChange={props.onItemInputChange} type='text'/>
            <button onClick={props.onAdd}>Add</button>
        </div>
    )
}

export default Form


