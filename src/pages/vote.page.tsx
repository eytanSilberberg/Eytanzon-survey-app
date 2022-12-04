import { useRef } from "react"
import { useState } from "react"
import { VotingPlatform } from '../cmps/vote/voting-platform'

const categories: string[] = ['food', 'hi tec', 'professions', 'comics']


export const VotePage = () => {

    const [isVotingPlatformOpen, setIsVotingPlatformOpen] = useState<boolean>(false)
    const [isVoting, setIsVoting] = useState<boolean>(false)
    const [currSurveyNum, setCurrSurveyNum] = useState<number>(0)


    const onCloseVotingPlatform = (): void => {
        setIsVotingPlatformOpen(false)
        setTimeout(() => {
            setIsVoting(false)
            setCurrSurveyNum(0)
        }, 500)
    }

    return <>
        <h1 className="begin-votes-header">Let's begin voting!</h1>
        <div className="vote-by-general">
            <p>Let's see if you courage enough to vote in the general section. Check your vocabulary and you knowledge of words.</p>
            <button>Begin voting</button>
        </div>
        <div className="categories">
            <p> Vote and influence by category</p>
            <div className='categories-wrapper'>
                {categories.map((category, idx) => <button onClick={() => setIsVotingPlatformOpen(true)} key={idx}>{category}</button>)}
            </div>
        </div>
        <section onClick={() => onCloseVotingPlatform()} className={`voting-platform-wrapper ${isVotingPlatformOpen ? 'open' : ''} `}>
            <VotingPlatform currSurveyNum={currSurveyNum} setCurrSurveyNum={setCurrSurveyNum} isVoting={isVoting} setIsVoting={setIsVoting} onCloseVotingPlatform={onCloseVotingPlatform} isVotingPlatformOpen={isVotingPlatformOpen} />
        </section>

    </>
}