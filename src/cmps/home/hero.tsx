import { Survey } from '../../data/survey';
import { HeroChartList } from './hero.survey.list'



export const Hero = (props: { surveys: Survey[] }) => {
    const { surveys } = props

    return <>
        <section className='hero full'>
            <h1>What word would you use?</h1>
            <HeroChartList surveys={surveys} />
        </section>

    </>
}