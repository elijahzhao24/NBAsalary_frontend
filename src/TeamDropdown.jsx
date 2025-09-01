import React from 'react';

const teams = [
  { id: 1, code: "GSW", name: "Golden State Warriors" },
  { id: 2, code: "PHI", name: "Philadelphia 76ers" },
  { id: 3, code: "DEN", name: "Denver Nuggets" },
  { id: 4, code: "MIL", name: "Milwaukee Bucks" },
  { id: 5, code: "DAL", name: "Dallas Mavericks" },
  { id: 6, code: "BOS", name: "Boston Celtics" },
  { id: 7, code: "HOU", name: "Houston Rockets" },
  { id: 8, code: "PHX", name: "Phoenix Suns" },
  { id: 9, code: "NYK", name: "New York Knicks" },
  { id: 10, code: "LAL", name: "Los Angeles Lakers" },
  { id: 11, code: "LAC", name: "Los Angeles Clippers" },
  { id: 12, code: "DET", name: "Detroit Pistons" },
  { id: 13, code: "UTA", name: "Utah Jazz" },
  { id: 14, code: "CLE", name: "Cleveland Cavaliers" },
  { id: 15, code: "SAC", name: "Sacramento Kings" },
  { id: 16, code: "ATL", name: "Atlanta Hawks" },
  { id: 17, code: "MIN", name: "Minnesota Timberwolves" },
  { id: 18, code: "IND", name: "Indiana Pacers" },
  { id: 19, code: "MEM", name: "Memphis Grizzlies" },
  { id: 20, code: "NOP", name: "New Orleans Pelicans" },
  { id: 21, code: "TOR", name: "Toronto Raptors" },
  { id: 22, code: "ORL", name: "Orlando Magic" },
  { id: 23, code: "OKC", name: "Oklahoma City Thunder" },
  { id: 24, code: "BKN", name: "Brooklyn Nets" },
  { id: 25, code: "CHA", name: "Charlotte Hornets" },
  { id: 26, code: "MIA", name: "Miami Heat" },
  { id: 27, code: "SAS", name: "San Antonio Spurs" },
  { id: 28, code: "WAS", name: "Washington Wizards" },
  { id: 29, code: "POR", name: "Portland Trail Blazers" },
  { id: 30, code: "CHI", name: "Chicago Bulls" }
];

export default function TeamDropdown({ isOpen, onSelectTeam, onClose }) {
  if (!isOpen) return null;

  const handleTeamSelect = (team) => {
    onSelectTeam(team);
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black z-50 flex items-start justify-end pt-20 pr-6 ">
      <div className="bg-white rounded-lg shadow-xl w-[70%] max-w-6xl max-h-[80vh] overflow-y-auto border">
        <div className="p-6">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold text-gray-800">Select a Team</h2>
            <button 
              onClick={onClose}
              className="text-gray-500 hover:text-gray-700 text-2xl font-bold w-8 h-8 flex items-center justify-center"
            >
              ×
            </button>
          </div>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {teams.map((team) => (
              <button
                key={team.id}
                onClick={() => handleTeamSelect(team)}
                className="p-4 border border-gray-200 rounded-lg hover:bg-blue-50 hover:border-[#999999] transition-all duration-200 text-center group"
              >
                <div className="font-bold text-lg text-gray-800 group-hover:text-blue-600">
                  {team.code}
                </div>
                <div className="text-sm text-gray-600 mt-1 group-hover:text-blue-500">
                  {team.name}
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
