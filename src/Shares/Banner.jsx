import { FaArrowRight } from "react-icons/fa";
import sajek from '../assets/Sajek.png';
import sundorban from '../assets/sundorbon.png';
import shremongol from '../assets/Sreemongol.png'
import { Link } from "react-router-dom";

const Banner = () => {
    return (
        <div className="flex justify-between">
            <div className="space-y-4">
                <h2 className="text-[77.68px] font-normal">Cox's bazar</h2>
                <p className="w-[450px]">Cox's Bazar is a city, fishing port, tourism centre and district headquarters in southeastern Bangladesh. It is famous mostly for its long natural sandy beach, and it ...</p>
                <Link to='/login'>
                <button className="flex items-center justify-center w-28 text-black gap-2 h-[38px] bg-amber-600">Booking <FaArrowRight /> </button>
                </Link>
            </div>
            <div className="flex gap-6">
                <img className="w-[240px] h-[416px]" src={sajek} alt="" />
                <img className="w-[240px] h-[416px]" src={sundorban} alt="" />
                <img className="w-[240px] h-[416px]" src={shremongol} alt="" />
            </div>
        </div>
    );
};

export default Banner;