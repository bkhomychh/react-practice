import { Component } from "react";
import { fetchMovies } from "../services/movesAPI";
import { Button } from "./Button/Button";
import { MovieList } from "./MovieList/MovieList";

export class App extends Component {
    state = {
        isListShown: false,
        movies: [],
        page: 1,
        isLoading: false,
    }
    componentDidUpdate(_,prevState) {
        const { isListShown, page } = this.state;
        if ((prevState.page !== page || prevState.isListShown !== isListShown) && isListShown) {
            this.getMovies();
        };
        if (prevState.isListShown !== isListShown && !isListShown) {
            this.setState({
                movies:[],
                page:1,
            })
        };
    }
    getMovies = () => {
        const { page } = this.state;
        this.setState({ isLoading: true })
        fetchMovies(page).then(res => {
            console.log(res)
            this.setState(prev => {
                return { movies: [...prev.movies, ...res.data.results] }
            })
        })
            .catch(error => console.log(error))
            .finally(() => this.setState({ isLoading: false }));
    }
    heandleButton = () => {
        this.setState((prev) => {
            return {isListShown: !prev.isListShown}
        })
    }
    loadMore = () => {
        const { page } = this.state;
        this.setState(prev => {
            return { page:prev.page+1 }
        })
    }

    render() {
        const { isListShown,movies } = this.state;
        return (<div>
            <Button
                textContent={isListShown ? "Hide move list" : "Show moves list"}
                heandleButton={this.heandleButton}
            />
            {isListShown &&
                <>
                    <MovieList data={movies} />
                <Button textContent="Load More" heandleButton={this.loadMore} />
                </>
            }
            
        </div>)
    }
}