import { useRef, useState } from "react"
import { useAppDispatch, useAppSelector } from "../../store/hooks"
import { selectUser } from '../../store/user/user.slice'
import { User } from '../../interface/user.interface'
import { saveNewAnswers } from "../../store/survey/survey.actions"
import { selectSurvey } from "../../store/survey/survey.slice"

interface Vote {
    surveyId: string
    word: string
}

export interface RegisteredVote {
    by: User
    answers: Vote[]
}

export const VotingPlatform = ({ onCloseVotingPlatform, isVotingPlatformOpen, setIsVoting, isVoting, currSurveyNum, setCurrSurveyNum }:
    { onCloseVotingPlatform: Function, isVotingPlatformOpen: boolean, setIsVoting: Function, isVoting: boolean, currSurveyNum: number, setCurrSurveyNum: Function }) => {

    const user = useAppSelector(selectUser)
    const surveys = useAppSelector(selectSurvey)
    const dispatch = useAppDispatch()

    const votingAreaRef = useRef<HTMLDivElement>(null)
    const votingWrapperRef = useRef<HTMLDivElement>(null)
    const answers = useRef<Vote[]>([])

    if (!isVotingPlatformOpen) answers.current = []

    const saveAnswers = () => {

        if (user) {
            const vote: RegisteredVote = { answers: answers.current, by: user }
            dispatch(saveNewAnswers(vote))
        }

    }



    const setVote = (surveyId: string, word: string) => {
        console.log(surveyId);

        const newVote: Vote = { surveyId, word }
        answers.current.push(newVote)
        setCurrSurveyNum(currSurveyNum + 1)
    }

    const beginVoting = () => {
        setIsVoting(true)
    }
    return <>
        <div ref={votingWrapperRef} onClick={(ev) => ev.stopPropagation()} className={`voting-platform ${isVotingPlatformOpen ? 'open' : ''} ${isVoting ? 'started' : ''}`}>
            <span className='close-button' onClick={() => onCloseVotingPlatform()}>X</span>
            <div className="h2-wrapper">
                <p><span className={`${isVoting ? '' : 'open'}`}>Are you ready?</span><span className={`${!isVoting ? '' : 'open'}`}>Your words are</span></p>
            </div>
            <div className={`voting-introduction ${isVoting ? 'close' : ''}`}>
                <p>
                    <span>While choosing your preferred word, please try to choose as quickly as possible.</span>
                    <span>This way will help you to choose staying true to yourself.</span>
                    <span>If you don't know the words you are able to click to skip button. If your'e done with answering you may click the "done" button </span>
                </p>
                <button onClick={beginVoting}>Begin voting!</button>
            </div>
            <div ref={votingAreaRef} className={`voting-area ${isVoting ? 'open' : ''}`}>
                <div className="questions-wrapper">
                    <div className="questions">
                        {surveys.map((survey, idx) => {
                            const { words } = survey
                            return <div key={survey._id} className={`voting-buttons ${currSurveyNum === idx ? 'show' : ''} `}>
                                <button style={{ backgroundColor: `${survey.words[0].color}` }} onClick={() => setVote(survey._id, words[0].name)}>{words[0].name}</button>
                                <button style={{ backgroundColor: `${survey.words[1].color}` }} onClick={() => setVote(survey._id, words[1].name)}>{words[1].name}</button>
                            </div>
                        })}
                    </div>

                </div>
                <div className="voting-platform-action-buttons">
                    <button>Next</button>
                    <button onClick={saveAnswers}>Submit</button>
                </div>
            </div>
        </div>
    </>
}