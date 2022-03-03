import React from "react"

// https://dev.to/provish/flattening-a-javascript-object-2fo6
function ObjectFlatten() {
    let user = {
        name: "Saurabh",
        address: {
          primary: {
            house: "109",
            street: {             
              main: "21",
              cross: "32"
            }
          }
        }
    }

    // {
    //     user_name: "Vishal",
    //     user_address_primary_house: "109",
    //     user_address_primary_street_main: "21",
    //     user_address_primary_street_cross: "32",
    // }

    let flatObject = {}
    const flattenObject = (obj, keyName) => {
        Object.keys(obj).forEach((key) => {
            const newKey = `${keyName}_${key}`
            if(typeof obj[key] === 'object') {
                flattenObject(obj[key], newKey)
            } else {
                flatObject[newKey] = obj[key]
            }
        })
    }
    

    flattenObject(user, 'user')
    console.log(flatObject)
    return (
        <div>ObjectFlatten</div>
    )
}

export default ObjectFlatten