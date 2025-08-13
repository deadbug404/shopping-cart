import { Link } from "react-router-dom";

export default function Header(){
    return(
        <div>
            <h1><Link to="/homepage">Evil Corp</Link></h1>
            <div>
                <Link to="/shop">Shop</Link>
                <a href="">Profile</a>
                <a href="">Settings</a>
            </div>
        </div>
    )
}