
import Banner from '../Shares/Banner';
import Navbar from '../Shares/Navbar';
import BackGroundImage from '../assets/Rectangle 1.png'

const Home = () => {
    return (
        <div style={{backgroundImage :`url(${BackGroundImage})`}}
        className='h-full relative bg-center bg-cover bg-[#C4C4C4]'>
            <div className='bg-linear-65 h-screen from-[#000000] to-[#00000000]'>
            <Navbar></Navbar>
            <div className='mt-20'>
            <Banner></Banner>
            </div>
            </div>
        </div>
    );
};

export default Home;