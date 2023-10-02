import React from "react";
import Searchbar from "./searchbar";

const Navbar = () => {
    return (
        <div className="bg-white py-3 items-center border-b-[1px] shadow-md border-[#D9D9D9] grid grid-cols-3">
            <div className="flex items-center">
                <p className="text-[#1A181E] font-medium text-[20px] mx-6">
                    Payouts
                </p>
                <img
                    className="h-[14px] w-[14px] mr-1.5 ml-10"
                    src="/navbar/help.svg"
                />
                <p className="text-[12px] font-normal text-[#4D4D4D] hover:underline cursor-pointer">
                    How it works
                </p>
            </div>
            <Searchbar />
            <div className="flex items-center justify-end mr-10 gap-3">
                <div className="h-[40px] w-[40px] flex items-center justify-center bg-[#E6E6E6] rounded-full">
                    <img
                        className="h-[20px] w-[20px]"
                        src="/navbar/group.svg"
                    />
                </div>
                <div>
                    <img src="/navbar/menu.svg" />
                </div>
            </div>
        </div>
    );
};

export default Navbar;