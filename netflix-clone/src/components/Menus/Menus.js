import { FaHome, FaHotjar, FaStar } from "react-icons/fa";
import { MdTheaterComedy } from "react-icons/md";
import {
    GiNinjaHeroicStance,
    GiRomanToga,
    GiGhost,
    GiBandageRoll,
} from "react-icons/gi";
import styled from "styled-components";
import MenuItem from "./MenuItem";

function Menus(props) {
    return (
        <MenusPane>
            <MenuItem name="Home" Icon={FaHome}/>
            <MenuItem name="Trending" Icon={FaHotjar}/>
            <MenuItem name="Top rate" Icon={FaStar}/>
            <MenuItem name="Actions Movies" Icon={MdTheaterComedy}/>
            <MenuItem name="Comedy Movies" Icon={GiNinjaHeroicStance}/>
            <MenuItem name="Horror Movies" Icon={GiRomanToga}/>
            <MenuItem name="Romance Movies" Icon={GiGhost}/>
            <MenuItem name="Documentaries" Icon={GiBandageRoll}/>
        </MenusPane>
    )
}
export default Menus;

const MenusPane = styled.div`
    position: fixed;
    left: 0;
    top: 20%;
    width: 46px;
    padding: 4px 0;
    background: rgba(220, 220, 220, 0.3);
    z-index: 100;
    display: flex;
    flex-direction: column;
    transform-origin: left center;
    transition: all 0.3s linear;
    overflow: hidden;
    &:hover {
        width: 180px;
        background-color: background: rgba(220, 220, 220, 0.5);
    }

    .subMenu {
        display: flex;
        align-items: center;
        width: max-content;
        margin-left: 2px;
        padding: 4px 6px;
        cursor: pointer;

        .icon {
            font-size: 30px;
            margin-right: 8px;
        }

        span {
            font-size: 16px;
            font-weight: 400;
            color: rgba(255, 255, 255, 0.6);
            &:hover {
                color: #fff;
            }
        }
    }

`;