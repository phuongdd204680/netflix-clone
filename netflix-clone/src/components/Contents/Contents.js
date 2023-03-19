import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import MoviesRow from "./MoviesRow";
import * as ACTIONS from "../store/actions"

function Contents(props) {
    const dispatch = useDispatch();
    const { 
        NetflixOriginals, 
        TrendingMovies,
        TopRatedMovies,
        ActionMovies,
        ComedyMovies,
        HorrorMovies,
        RomanceMovies,
        Documentaries
    } = useSelector(state => state.infoMovies);
    
    useEffect(() => {
        dispatch(ACTIONS.getNetflixOriginals());
        dispatch(ACTIONS.getTrendingMovies());
        dispatch(ACTIONS.getTopRatedMovies());
        dispatch(ACTIONS.getActionMovies());
        dispatch(ACTIONS.getComedyMovies());
        dispatch(ACTIONS.getHorrorMovies());
        dispatch(ACTIONS.getRomanceMovies());
        dispatch(ACTIONS.getDocumentariesMovies());
    }, [dispatch])

    return (
        <div>
            <MoviesRow movies={NetflixOriginals} title="Netflix Originals" isNetflix={true}/>
            <MoviesRow movies={TrendingMovies} title="Trending Movies"/>
            <MoviesRow movies={TopRatedMovies} title="Top Rated Movies"/>
            <MoviesRow movies={ActionMovies} title="Action Movies"/>
            <MoviesRow movies={ComedyMovies} title="Comedy Movies"/>
            <MoviesRow movies={HorrorMovies} title="Horror Movies"/>
            <MoviesRow movies={RomanceMovies} title="Romance Movies"/>
            <MoviesRow movies={Documentaries} title="Documentaries Movies"/>
        </div>
    );
}

export default Contents;