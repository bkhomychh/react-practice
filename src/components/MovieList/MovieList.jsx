
export function MovieList({data}) {
    return <ul>{
        data.map(el => {
            return <li key={el.id}>
                <p>{el.title}</p>
                <span>{el.vote_count}</span>
            </li>
        }
        )}
    </ul>
}