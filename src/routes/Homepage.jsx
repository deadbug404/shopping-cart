import "./Homepage.css"
import { Link } from "react-router-dom"

export default function Homepage(){
    return(
        <div id="homepage">
            <div className="hero">
                <div>
                    <h1>Evil Corp</h1>
                    <h2>Building better worlds</h2>
                </div>
                <p className="description">Here in Evil Corp, We provide reliable services for a one-stop online store that delivers a 
                    wide range of products straight to your door. From everyday essentials to unique finds, 
                    we make shopping simple, fast, and reliable. All in one place.</p>
                <Link to="/shop"><button>Shop now</button></Link>
            </div>
        </div>
    )
}