import React from "react";
import MoviesRow from "./MoviesRow";

const movies = [
    "https://vnw-img-cdn.popsww.com/api/v2/containers/file2/cms_topic/op_t_p_m_i_xem_ngay-1a1e3e59a6ad-1667555559385-o6LY52Wb.png?v=0&maxW=260&format=webp",
    "https://vnw-img-cdn.popsww.com/api/v2/containers/file2/cms_topic/naruto_shippuden-91164845f933-1669280136982-ok2DcxZa.png?v=0&maxW=260&format=webp",
    "https://vnw-img-cdn.popsww.com/api/v2/containers/file2/cms_topic/vertical_poster_revised-8aa987cbb35e-1665398555193-4KHCstN6.jpg?v=0&maxW=260&format=webp",
    "https://vnw-img-cdn.popsww.com/api/v2/containers/file2/cms_topic/vertical_poster-41caa2d58074-1673596993014-atXjGWZD.jpg?v=0&maxW=260&format=webp",
    "https://vnw-img-cdn.popsww.com/api/v2/containers/file2/cms_topic/vertical_poster-2a780db5f359-1665398691229-mROlK0Ue.jpg?v=0&maxW=260&format=webp",
    "https://vnw-img-cdn.popsww.com/api/v2/containers/file2/cms_topic/doraemon_t_p_m_i_xem_ngay-1152f671c7e3-1667616000071-RwrJYn8Z.png?v=0&maxW=260&format=webp",
    "https://vnw-img-cdn.popsww.com/api/v2/containers/file2/cms_topic/vertical_poster-d87f9c73eae6-1654076410828-by4TNV1a.png?v=0&maxW=260&format=webp",
    "https://vnw-img-cdn.popsww.com/api/v2/containers/file2/cms_topic/vertical_poster-2ca42178218e-1673596834117-vBrhWd9u.png?v=0&maxW=260&format=webp",
    "https://vnw-img-cdn.popsww.com/api/v2/containers/file2/cms_topic/vertical_poster-2c497db02b65-1668137015798-fk5ixUJS.png?v=0&maxW=260&format=webp",
    "https://vnw-img-cdn.popsww.com/api/v2/containers/file2/cms_topic/vertical_poster-71c7e6974e57-1631519882314-ioJtMRJW.png?v=0&maxW=260&format=webp",
    "https://vnw-img-cdn.popsww.com/api/v2/containers/file2/cms_thumbnails/poster_d_c_640x960-a464828705fe-1588909881743-ofBGrnKr.png?v=0&maxW=260&format=webp",
]

function Contents(props) {
    return (
        <div>
            <MoviesRow movies={movies} title="Netflix Originals" isNetflix={true}/>
            <MoviesRow movies={movies} title="Trending Movies"/>
            <MoviesRow movies={movies} title="Top Rated Movies"/>
            <MoviesRow movies={movies} title="Action Movies"/>
            <MoviesRow movies={movies} title="Comedy Movies"/>
            <MoviesRow movies={movies} title="Romance Movies"/>
            <MoviesRow movies={movies} title="Documentaries Movies"/>
        </div>
    );
}

export default Contents;