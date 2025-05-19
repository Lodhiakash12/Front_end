import React from "react";

function Hello() {
    let name = "Harsh"
    // console.log(name)

    let list=<ul>
        <li>1 name :- {name}</li>
        <li>2 name :- {name}</li>
        <li>3 name :- {name}</li>
    </ul>

    let a=10+20
   

    

    return (
        <div>
            <h1>jkjsajkaskjsak</h1>

            <h1>name :- {name}</h1>
            <h1>{list} </h1>
            {5+5}<br></br>
            {a}
        </div>
    )


}


export default Hello;