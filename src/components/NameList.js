import React from 'react'

function NameList() {
    const names = ['Shahanshah', 'Ali', 'Aladeen', 'Shahanshah']
    const nameList = names.map((name, index) => <h2>key={index} and name {name}</h2>)
    return (
        <div>{nameList}</div>
    )
}

export default NameList