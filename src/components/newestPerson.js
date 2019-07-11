import React, { useEffect, useContext } from 'react'
import PeopleCount from './peopleCount'
import PeopleContext from '../context/peopleContext'

const NewestPerson = () => {
    const context = useContext(PeopleContext);

    const newestPerson = context.people[context.people.length - 1];
    useEffect(() => {
        const newestPersonName = `${newestPerson.firstName} 
        ${newestPerson.lastName}`;
        console.log('useEffect');
        return () => {
            console.log('UnMounted')
        }
    })
    return (
        <div className="col col-sm-12">
            <h2 className="mt-4 text-center">
                NewestPerson:{`${newestPerson.firstName} ${newestPerson.lastName}`}
            </h2>
            <PeopleCount  />
        </div>
    )
}
export default NewestPerson