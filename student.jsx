function Student (props) {
    return ( 
        <div> <h1> name: {props.name}</h1> 
        <h1> age: {props.age}</h1> 
        <h1> Student: { props.isStudent ?"yes" :"no " }</h1> 
        </div>
    )
}
export default Student