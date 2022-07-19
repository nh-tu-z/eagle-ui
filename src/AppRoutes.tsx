import { ReactElement } from 'React'
import { Routes, Route, Link } from 'react-router-dom'
import Home from './pages/Home'
import Detail from './pages/Detail'
import News from './pages/News'

function AppRoutes(): ReactElement {
    return (
        <div>
            <nav>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/news">News</Link>
                    </li>
                    <li>
                        <Link to="/detail">Detail</Link>
                    </li>
                </ul>
            </nav>

            <Routes>
                <Route path="/" element={<Home />}/>
                <Route path="/news" element={<News />}/>
                <Route path="/detail" element={<Detail />}/>
            </Routes>
        </div>
    )
}

export default AppRoutes