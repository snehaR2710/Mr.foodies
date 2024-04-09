import { Link } from "react-router-dom"


function Offline() {
    return (
        <div className='offline'>
        <div className="offline-wrapper">
            <h1>YOU ARE OFFLINE</h1>
            <h4>Please check your internet connection</h4>
            <Link to="/">RETRY</Link>
        </div>
        </div>
    )
}

export {Offline}