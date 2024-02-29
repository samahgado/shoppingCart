
import "./Layout.css"
import Header from "./Header/Header"
import Footer from "./Footer/Footer"
const Layout = ({children}:any) => {
  return (
    <div className="layout">
    <Header/>
    
     {children}
    
    <Footer/>
   </div>
  )
}

export default Layout