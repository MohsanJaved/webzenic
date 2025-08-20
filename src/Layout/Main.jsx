import { Outlet } from 'react-router-dom';
import Header2 from '../Components/Header/Header2';
import Footer2 from '../Components/Footer/Footer2';

const Main = () => {
    return (
        <div className='main-page-area'>
            <Header2></Header2>
            <Outlet></Outlet>
           <Footer2></Footer2>
        </div>
    );
};

export default Main;
