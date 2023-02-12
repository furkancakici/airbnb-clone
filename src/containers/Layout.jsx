import Footer from "./Footer"
import Header from "./Header"
import { Inter } from '@next/font/google';

const inter = Inter({ subsets: ['latin'] });

const Layout = ({children}) => {
  return (
    <div className={inter.className}>
    <Header/>
    {children}
    <Footer/>
    </div>
  )
}

export default Layout