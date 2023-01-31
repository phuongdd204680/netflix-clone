import styled from "styled-components";
import {FiChevronLeft, FiChevronRight} from 'react-icons/fi';

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
];

function Contents (props) {
    return (
        <MoviesRowContainer>
            <h1 className="heading">Netflix Originals</h1>
            <MoviesSlider>
                {
                    movies.map((movie, index) => (
                    <div key={index} className="movieItem">
                        <img src={movie} alt="" />
                        <div className="movieName">Movie Name</div>
                    </div>
                    ))
                }
            </MoviesSlider>
            <div className="btnLeft">
                <FiChevronLeft />
            </div>
            <div className="btnRight">
                <FiChevronRight />
            </div>
        </MoviesRowContainer>
    )
}
export default Contents;

const  MoviesRowContainer = styled.div`
    background-color: var(--color-background);
    color: var(--color-white);
    padding: 20px 20px 0;
    position: relative;
    width: 100%;
    height: 100%;

    .heading {
        font-size: 18px;
        user-select: none;
    }

    .btnLeft {
        position: absolute;
        top: 50%;
        left: 30px;
        z-index: 20;
        transform-origin: center;
        cursor: pointer;
        background-color: rgba(0, 0, 0, 0.5);
        height: 100px;
        width: 50px;
        border-radius: 4px;
        display: flex;
        align-items: center;
        transform: translateY(-50%); // transform: translateY(-30%); 
        &:hover {
            background-color: rgba(0, 0, 0, 0.8);
        }
        &:hover svg {
            opacity: 1;
            transform: scale(1.2);
        }

        svg {
            opacity: 0.7;
            font-size: 50px;
            transition: all 0.3 linear;
        }
    }
    .btnRight {
        position: absolute;
        top: 50%;
        right: 30px;
        z-index: 20;
        transform-origin: center;
        cursor: pointer;
        background-color: rgba(0, 0, 0, 0.5);
        height: 100px;
        width: 50px;
        border-radius: 4px;
        display: flex;
        align-items: center;
        transform: translateY(-50%); // transform: translateY(-30%); 
        &:hover {
            background-color: rgba(0, 0, 0, 0.8);
        }
        &:hover svg {
            opacity: 1;
            transform: scale(1.2);
        }

        svg {
            opacity: 0.7;
            font-size: 50px;
            transition: all 0.3 linear;
        }
    }
`;
const MoviesSlider = styled.div`
    display: grid;
    gap: 6px;
    grid-template-columns: repeat(${movies.length}, 300px);
    transition: all 0.3s linear;
    user-select: none;
    overflow-y: hidden;
    overflow: auto;
    overflow: hidden;
    padding-top: 28px;
    padding-bottom: 28px;
    scroll-behavior: smooth;

    &:hover .movieItem {
        opacity: 0.5;
    }

    .movieItem {
        transform scale(1);
        max-width: 400px;
        max-height: 500px;
        width: 88%; // width: 100%;
        height: 100%;
        transition: all 0.3s linear;
        user-select: none;
        overflow: hidden;
        border-radius: 6px;
        transform: center left;
        position: relative;

        &:hover {
            opacity: 1;
            transform: scale(1.1);
            z-index: 10;
        }

        img {
            with: 100%;
            height: 100%;
            object-fit: cover;
        }

        .movieName {
            position: absolute;
            left: 0;
            right: 0;
            bottom: 0;
            padding: 4px;
            text-align: center;
            font-size: 14px;
            background-color: rgba(0, 0, 0, 0.65);
        }
    }

`;