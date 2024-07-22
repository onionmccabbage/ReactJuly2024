const Label = ({person}:{person:any})=>{
    return (
        <>
        <h4>{person.n}</h4>
        <p>Age: {person.a} Status: {person.status}</p>
        </>
    )
}

export default Label