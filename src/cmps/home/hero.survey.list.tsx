import { useState } from 'react';
import { Survey } from '../../data/survey';
import { LeftArrow } from '../icons/left.arrow';
import { RightArrow } from '../icons/right.arrow';
import { HeroSurveyPreview } from './hero.survey.preview'

export const HeroChartList = (props: { surveys: Survey[] }) => {
    const { surveys } = props

    const [currentSurveyNum, setCurrentSurveyNum] = useState<number>(0)
    const length = surveys.length

    const getNextSurvey = () => {
        setCurrentSurveyNum(currentSurveyNum === length - 1 ? 0 : currentSurveyNum + 1)
    }
    const getPrevSurvey = () => {
        setCurrentSurveyNum(currentSurveyNum === 0 ? length - 1 : currentSurveyNum - 1)
    }
    console.log(currentSurveyNum);


    return <>
        <div className='hero-arrows'>
            <span onClick={getPrevSurvey}><LeftArrow /></span>
            <span onClick={getNextSurvey}><RightArrow /></span>
        </div>
        <div className='hero-survey-list'>
            {surveys.map((survey, idx) => {
                return <div style={{ display: idx === currentSurveyNum ? 'block' : 'none' }} className={`hero-survey-preview ${idx === currentSurveyNum ? 'active' : ''}`}> <HeroSurveyPreview key={survey._id} survey={survey} /></div>
                // return <div className={`hero-survey-preview ${idx === currentSurveyNum ? 'active' : ''}`}> <HeroSurveyPreview key={survey._id} survey={survey} /></div>
            })}
        </div>
    </>
}