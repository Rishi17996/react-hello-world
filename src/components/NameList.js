import React from 'react'
import Person from './Person'

function NameList() {

    const names = ['Clint', 'Wanda', 'Vision', 'Clint']
    const nameList = names.map((name, index) => <h2 key={index}>{index} {name}</h2>)
    return <div>{nameList}</div>

    // const persons = [
    //   {
    //     id: 1,
    //     name: 'Clint',
    //     age: 30,
    //     color: 'Red'
    //   },
    //   {
    //     id: 2,
    //     name: 'Wanda',
    //     age: 25,
    //     color: 'Purple'
    //   },
    //   {
    //     id: 3,
    //     name: 'Vision',
    //     age: 5,
    //     color: 'Blue'
    //   }
    // ]
    //
    // const personList = persons.map(person => (
    //   <Person key={person.id} person={person}></Person>
    // ))
    // return <div>{personList}</div>
}

export default NameList
