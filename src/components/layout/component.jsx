import Header from '../header/component';
import Footer from '../footer/component';

const Layout = ({ children }) => {
    return (
        <div>
        <Header/>
        <div>{children}</div>
        <Footer/>
        </div>
    );
};

export default Layout
