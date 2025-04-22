import room from '../assets/Rectangle 26.png';
import room2 from '../assets/Rectangle 27.png';
import senari from '../assets/Rectangle 28.png';
import BackGroundImage from '../assets/Rectangle 1.png'
import Navbar from '../Shares/Navbar';

const Content = () => {
    return (
        
        <div style={{backgroundImage :`url(${BackGroundImage})`}}
                className='h-full relative bg-center bg-cover bg-[#C4C4C4]'>
       <div className='bg-linear-65 h-screen from-[#000000] to-[#00000000]'>
       <Navbar></Navbar>
       <div className="flex justify-between pt-20">
        <div className="space-y-4">
            <h2 className="text-[77.68px] font-normal">Cox's bazar</h2>
            <p className="w-[450px]">Cox's Bazar is a city, fishing port, tourism centre and district headquarters in southeastern Bangladesh. It is famous mostly for its long natural sandy beach, and it ...</p>
           
        </div>
        <div className="flex gap-6">
            <img className="w-[250px] h-[336px]" src={room} alt="" />
            <img className="w-[250px] h-[336px]" src={room2} alt="" />
            <img className="w-[250px] h-[336px]" src={senari} alt="" />
        </div>
    </div>
       </div>
    </div>
    );
};

export default Content;