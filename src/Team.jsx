import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Player from './Player';

const Team = ({ onPlayersChange }) => {
  const [players, setPlayers] = useState([]);
  const [loading, setLoading] = useState(false);
  const location = useLocation();
  
  // Extract team code from URL
  const teamCode = location.pathname === '/' ? null : location.pathname.slice(1);
  const colors = ['#60a5fa', '#ff5c44', '#58d434',
    '#d0cccc', '#ff8cc4', '#68fce4', '#ffa404', '#ffec4c','#0894fc','#88848c', '#ff3c94', 
    '#bfdbfe', '#84fc4c', '#f4e89c'
  ];

  
  useEffect(() => {
    if (!teamCode) {
      setPlayers([]);
      return;
    }
    
    const fetchPlayers = async () => {
      setLoading(true);
      try {
        const response = await fetch(`/api/players/team?code=${teamCode}`); // Using Vite proxy
        if (response.ok) {
          const data = await response.json();
          setPlayers(data);
        } else {
          console.error('Failed to fetch players');
          setPlayers([]);
        }
      } catch (error) {
        console.error('Error fetching players:', error);
        setPlayers([]);
      } finally {
        setLoading(false);
      }
    };
    
    fetchPlayers();
  }, [teamCode]);
  
  // Notify parent component when players change (only filtered players)
  useEffect(() => {
    if (onPlayersChange) {
      const filteredPlayers = players.filter(player => player.salary >= 1000000);
      onPlayersChange(filteredPlayers);
    }
  }, [players, onPlayersChange]);
  
  if (!teamCode) return null;
  if (loading) return <div className="text-center p-4">Loading players...</div>;
  
  // Filter out players making less than $1M and sort from highest to lowest salary
  const filteredPlayers = players.filter(player => player.salary >= 1000000);
  const sortedPlayers = [...filteredPlayers].sort((a, b) => b.salary - a.salary);

  // Use the exact same positioning logic as the grid
  const getGridPosition = (salary) => {
    // Grid generates 24 lines from $230M to $0
    // $0 is at index 23 (last line)
    // $10M is at index 22
    // $20M is at index 21, etc.
    
    const salaryInMillions = salary / 10000000;
    const index = 23 - salaryInMillions; // $0 = index 23, $10M = index 22, etc.
    const topPosition = (index / 23) * 100; // Same as grid: (index / (length-1)) * 100

    return topPosition + (0.4 / 23) * 100;
  };
  
  const zeroPosition = getGridPosition(0); // This will be 100%
  
  return (
    <div 
      className="absolute left-1/2"
      style={{
        top: `${zeroPosition}%`,
        transform: 'translate(-50%, -100%)',
        zIndex: 40
      }}
    >
      <div className="flex justify-center">
        {colors.map((color, index) => (
          <div 
            key={index} 
            className="w-4 h-4 rounded-full" 
            style={{ backgroundColor: color }} 
          />
        ))}
        
      </div>
      <div className="flex flex-col" style={{minHeight: '0px'}}>
        {sortedPlayers.map((player) => (
          <Player
            key={player.id}
            name={player.name}
            salary={player.salary}
            image={player.salary >= 10000000 ? (player.headshotUrl || null) : null}
          />
        ))}
      </div>
    </div>
  );
};

export default Team;