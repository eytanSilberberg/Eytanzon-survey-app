
const categories: string[] = ['food', 'hi tec', 'professions', 'comics']

export const VotePage = () => {
    return <>
        <h1 className="begin-votes-header">Let's begin voting!</h1>
        <div className="vote-by-general">
            <p>Let's see if you courage enough to vote in the general section. Check your vocabulary and you knowledge of words.</p>
            <button>Begin voting</button>
        </div>
        <div className="categories">
            <p> Vote and influence by category</p>
            <div className='categories-wrapper'>
                {categories.map((category, idx) => <button key={idx}>{category}</button>)}
            </div>
        </div>
    </>
}