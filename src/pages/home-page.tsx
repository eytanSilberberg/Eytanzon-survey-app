import { useEffect } from 'react'
import { Hero } from '../cmps/home/hero'
import { ChartList } from '../cmps/shared/survey.list'
import { Survey } from '../data/survey'

import { User } from '../interface/user.interface'
import { useAppDispatch, useAppSelector } from '../store/hooks'
import { selectUser } from '../store/user/user.slice'
import { setLoggedinUser } from '../store/user/user.actions'
import { loadSurveys } from '../store/survey/survey.actions'
import { selectSurvey } from '../store/survey/survey.slice'

export const HomePage = () => {
    const dispatch = useAppDispatch()

    const user: User | null = useAppSelector(selectUser)
    const surveys: Survey[] = useAppSelector(selectSurvey)
    console.log(user);




    useEffect(() => {
        if (!user) dispatch(setLoggedinUser())
    })
    useEffect(() => {
        dispatch(loadSurveys())
    }, [])


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
