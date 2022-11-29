import { Survey } from '../../data/survey'
import { SurveyPreview } from './survey.preview'



export const ChartList = ({ surveys }: { surveys: Survey[] }) => {

    return <>

        <div className='chart-list full'>
            {surveys.map((survey, idx: number) => {
                return <SurveyPreview key={idx} survey={survey} />
            })}
        </div>
    </>
}