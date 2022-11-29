import { useEffect, useState } from 'react'
import { Hero } from '../cmps/home/hero'
import { ChartList } from '../cmps/shared/survey.list'
import { Survey } from '../data/survey'

import { userService } from '../servicesJs/user.service'
import { User } from '../interface/user.interface'
import { useAppDispatch, useAppSelector } from '../store/hooks'
import { selectUser } from '../store/user/userSlice'
import { setLoggedinUser } from '../store/user/userActions'

export const HomePage = () => {
    const dispatch = useAppDispatch()

    const surveys: Survey[] = [
        { _id: 'bsejbsdojbf', words: [{ name: "Strong", value: 200, color: '#E6D690' }, { name: "Mighty", value: 20, color: '#955F20' }] },
        { _id: 'sdlkdfnfv4', words: [{ name: "Poop", value: 400, color: '#641C34' }, { name: "Kaki", value: 500, color: '#A52019' }] },
        { _id: 'sdlkdfnfv3', words: [{ name: "Poop", value: 1000, color: '#E55137' }, { name: "Kaki", value: 300, color: '#FFA420' }] },
        { _id: 'sdlkdfnfv2', words: [{ name: "Poop", value: 20, color: '#E4A010' }, { name: "Kaki", value: 100, color: '#F75E25' }] },
        { _id: 'sdlkdfnfv1', words: [{ name: "Poop", value: 35, color: '#231A24' }, { name: "Kaki", value: 9999, color: '#403A3A' }] },
        { _id: 'akfffd', words: [{ name: "Wealthy", value: 40, color: '#015D52' }, { name: "Rich", value: 100, color: '#3B83BD' }] }

    ]




    const user: User | null = useAppSelector(selectUser)



    useEffect(() => {
        if (!user) dispatch(setLoggedinUser())
    })


    return <>
        <Hero surveys={surveys} />
        <h2>New Surveys</h2>
        <ChartList surveys={surveys} />
        {user && <>
            <h2>My Words</h2>
            <ChartList surveys={surveys} />
        </>}
        <h2>Hot Topics</h2>
        <ChartList surveys={surveys} />
    </>
}
