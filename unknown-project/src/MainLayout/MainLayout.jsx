import { Outlet } from 'react-router-dom'
import { Navbar } from '../components/Navbar/Navbar'
import { Footer } from  '../components/Footer/Footer'
import './MainLayout.module.scss';


export function MainLayout() {


    return (

        <>
        <header>
        <Navbar />
        </header>
       
        <main>
            <Outlet />
        </main>
        <footer>
        <Footer />
        </footer>
      
        </>
    )
}