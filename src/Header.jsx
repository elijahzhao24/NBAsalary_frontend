import React, { useState } from 'react';
import Logo from './assets/Logo.png';
import LogoText from './assets/fulllogo.png';
import { FiGithub, FiChevronDown } from 'react-icons/fi';
import TeamDropdown from './TeamDropdown';

export default function Header() {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [selectedTeam, setSelectedTeam] = useState(null);

    const handleTeamSelect = (team) => {
        setSelectedTeam(team);
        console.log('Selected team:', team); // You can replace this with your logic
    };

    return (    
    <>
        <div className="flex items-center justify-between px-6 h-[8vh] min-h-[50px] relative">
            
            <div className="flex-0 flex">
                <img src={LogoText} alt="Logo" className="h-[8vh]" />
            </div>
            
            <div className="flex-1 flex justify-end items-center gap-4">
                <button 
                    onClick={() => setIsDropdownOpen(true)}
                    className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                >
                    {selectedTeam ? selectedTeam.code : 'Select Team'}
                    <FiChevronDown className="w-4 h-4" />
                </button>

                <button 
                    onClick={() => window.open('https://github.com/elijahzhao24')}
                    className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
                        <FiGithub className="text-[#bbbbbb] hover:text-[#999999] transition-colors w-6 h-6"/>
                </button>
            </div>
        </div>
        
        
        <div className='flex justify-end p-2'>
        <TeamDropdown 
            className="border-1" 
            isOpen={isDropdownOpen}
            onSelectTeam={handleTeamSelect}
            onClose={() => setIsDropdownOpen(false)}
        />
        </div>
    </>
    )
}
