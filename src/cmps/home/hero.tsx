import { Survey } from '../../data/survey';
import { LeftArrow } from '../icons/left.arrow';
import { RightArrow } from '../icons/right.arrow';
import { HeroChartList } from './hero.survey.list'



export const Hero = (props: { surveys: Survey[] }) => {
    const { surveys } = props

    return <>
        <section className='hero full'>
            <h1>What word would you use?</h1>

            <HeroChartList surveys={surveys} />
        </section>
        {/* <section className='hero full' style={{ height: 500 }}>
            <div className='hero-text'>
                <h1>What word would you use?</h1>
                <p><span style={{ color: COLORS[0] }}>Strong</span><span>VS</span><span style={{ color: COLORS[1] }}>Mighty</span></p>
            </div>
            <div className='hero-chart'>
                <div className='chart-wrapper' style={{ width: 300, height: 340 }}>
                    {surveys.map((chart, idx) => {
                        return <HeroChart key={idx} chart={chart} />
                    })}
                </div>
                <div className='sentences-wrapper'>
                    <article>
                        <ul>
                            <li>I am strong</li>
                            <li>Strong position</li>
                        </ul>
                    </article>
                    <article >
                        <ul>
                            <li>I am Mighty</li>
                            <li>Mighty position</li>
                        </ul>
                    </article>
                </div>
            </div>
        </section>
    */}
    </>
}