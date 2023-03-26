
export function MovieList({data , deleteMovie}) {
    return <ul>{
        data.map(el => {
            return <li key={el.id}>
                <p>{el.title}</p>
                <span>{el.vote_count}</span>
                <button type="button"  onClick={()=> deleteMovie(el.id)}>Delete</button>
            </li>
        }
        )}
    </ul>
}