import { Survey } from '../../data/survey'
import { SurveyPreview } from './survey.preview'



export const ChartList = (props: { surveys: Survey[] }) => {
    const { surveys } = props

    return <>

        <div className='chart-list full'>
            {surveys.map((survey, idx: number) => {
                return <SurveyPreview key={idx} survey={survey} />
            })}
        </div>
    </>
}