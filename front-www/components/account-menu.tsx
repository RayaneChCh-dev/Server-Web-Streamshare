import React from "react";
import { CiLogout } from "react-icons/ci";
import { useUser } from "@/context/UserContext"; // Import the UserContext

interface AccountMenuProps {
    visible?: boolean;
    
}

const AccountMenu: React.FC<AccountMenuProps> = ({ visible }) => {
    const { logout, user } = useUser(); // Get logout function from context

    if (!visible) {
        return null;
    }

    return ( 
        <div className="bg-black w-56 absolute top-14 right-0 py-5 px-2 flex-col border-2 border-transparent flex">
            <div className="flex flex-col gap-3">
                <div className="px-3 group/item flex flex-row gap-3 items-center w-full">
                    <img className="w-8 rounded-md" src={user?.thumbnail || '/goku-pp.jpg'} alt="profile picture" /> {/* Default image if none */}
                    <p className="text-white text-sm group-hover/item:underline">
                        {user?.name || 'Guest'} {/* Use user name or default */}
                    </p>
                </div>
                <hr className="bg-gray-600 border-0 h-px my-4" />
                <div 
                    className="flex flex-row items-center justify-center gap-3 px-3 text-center text-white hover:underline cursor-pointer" 
                    onClick={logout}
                >
                    <CiLogout />
                    <span>Logout</span>
                </div>
            </div>
        </div>
    );
}

export default AccountMenu;
