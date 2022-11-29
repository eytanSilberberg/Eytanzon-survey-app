import { Pie, PieChart, Cell, Legend, ResponsiveContainer } from 'recharts'
import { Survey } from '../../data/survey';

export const HeroSurveyPreview = (props: { survey: Survey }) => {
    const { survey } = props
    const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

    const RADIAN = Math.PI / 180;

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
    return <>
        <div className='hero-survey-text'>
            <p><span style={{ color: survey.words[0].color }}>{survey.words[0].name}</span><span>VS</span><span style={{ color: survey.words[1].color }}>{survey.words[1].name}</span></p>
        </div>
        <div>

            <ResponsiveContainer width={'100%'} height={340}>
                <PieChart >
                    <Legend wrapperStyle={{ paddingBottom: '10px', display: 'flex', justifyContent: 'center', alignItems: 'flex-end' }} />
                    <Pie
                        data={survey.words}
                        labelLine={false}
                        label={renderCustomizedLabel}
                        fill="#8884d8"
                        dataKey="value"
                        outerRadius={130}
                    >
                        {survey.words.map((word, index) => (
                            <Cell key={`cell-${index}`} fill={word.color} />
                        ))}
                    </Pie>
                </PieChart>
            </ResponsiveContainer>
        </div>
    </>
}