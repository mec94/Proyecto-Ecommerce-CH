import { NavLink } from "react-router-dom";

export default function Brand({name}) {
    return (
        <h1 className="">
            <NavLink to="/">
                {name}
            </NavLink>
            
        </h1>
    )
}