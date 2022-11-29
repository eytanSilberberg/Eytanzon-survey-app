import { ResponsiveContainer, PieChart, Legend, Pie, Cell } from 'recharts'
import { Survey } from '../../data/survey';
export const SurveyPreview = (props: { survey: Survey }) => {
    const { survey } = props
    const RADIAN: number = Math.PI / 180;
    const renderCustomizedLabel = ({
        cx,
        cy,
        midAngle,
        innerRadius,
        outerRadius,
        percent,
        index
    }: any) => {
        const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
        const x = cx + radius * Math.cos(-midAngle * RADIAN);
        const y = cy + radius * Math.sin(-midAngle * RADIAN);

        return (
            <text
                x={x}
                y={y}
                fill="white"
                textAnchor={x > cx ? "start" : "end"}
                dominantBaseline="central"
            >
                {`${(percent * 100).toFixed(0)}%`}
            </text>
        );
    };
    return <article className='hero-survey-preview'>

        <div className='hero-text'>
        </div>
        <div className='hero-chart'>
            <div className='chart-wrapper' style={{ width: 300, height: 340 }}>
                <ResponsiveContainer width={'100%'} height={340}>
                    <PieChart >
                        <Legend />
                        <Pie
                            data={survey.words}
                            labelLine={false}
                            label={renderCustomizedLabel}
                            fill="#8884d8"
                            dataKey="value"
                        >
                            {survey.words.map((word, index) => (
                                <Cell key={`cell-${index}`} fill={word.color} />
                            ))}
                        </Pie>
                    </PieChart>
                </ResponsiveContainer>
            </div>
        </div>
    </article>
}