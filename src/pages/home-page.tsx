import { Hero } from '../cmps/home/hero'
import { ChartList } from '../cmps/shared/survey.list'
import { Survey } from '../data/survey';
import { useAppSelector } from '../store/hooks';
import { selectUser } from '../store/user/userSlice';
export const HomePage = () => {
    const user = useAppSelector(selectUser)
    console.log(user);


    const data: Survey[] = [
        { _id: 'bsejbsdojbf', words: [{ name: "Strong", value: 200, color: '#E6D690' }, { name: "Mighty", value: 20, color: '#955F20' }] },
        { _id: 'sdlkdfnfv', words: [{ name: "Poop", value: 400, color: '#641C34' }, { name: "Kaki", value: 500, color: '#A52019' }] },
        { _id: 'sdlkdfnfv', words: [{ name: "Poop", value: 1000, color: '#E55137' }, { name: "Kaki", value: 300, color: '#FFA420' }] },
        { _id: 'sdlkdfnfv', words: [{ name: "Poop", value: 20, color: '#E4A010' }, { name: "Kaki", value: 100, color: '#F75E25' }] },
        { _id: 'sdlkdfnfv', words: [{ name: "Poop", value: 35, color: '#231A24' }, { name: "Kaki", value: 999, color: '#403A3A' }] },
        { _id: 'akfffd', words: [{ name: "Wealthy", value: 40, color: '#015D52' }, { name: "Rich", value: 100, color: '#3B83BD' }] }

    ];

    return <>
        <Hero surveys={data} />
        <h2>New Surveys</h2>
        <ChartList surveys={data} />
        <h2>Hot Topics</h2>
        <ChartList surveys={data} />
    </>
}
