import React from "react"
import Person from "./Person"

function NameList() {
    const names = ['Saurabh', 'Tulika', 'Raushan']
    const persons = [
        {
            name: 'Saurabh',
            age: 35,
            job: 'Software Developer' 
        },
        {
            name: 'Tulika',
            age: 30,
            job: 'Human Resource'
        }
    ]
    //const personList = persons.map(person => <Person person={person}/>)
    const nameList = names.map(name => <h2>{name}</h2>)
    return (<div>{nameList}</div>)
}

export default NameList