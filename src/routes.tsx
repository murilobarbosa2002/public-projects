import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { HomePage } from './screens/Home'
import { DocsPage } from './screens/Docs'
export function AppRoutes(){
    return(
        <Router>
            <Routes>
                <Route path='public-projects/' element={<HomePage />} />
                <Route path='public-projects/docs' element={<DocsPage />} />
            </Routes>
        </Router>
    )
}