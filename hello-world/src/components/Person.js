import React from "react"

function Person({person}) {
    return (
        <h2>I am {person.name} age {person.age} with job as {person.job}</h2>
    )
}

export default Person