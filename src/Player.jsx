import React from 'react';

const Player = ({ name, salary, image }) => {
  // Calculate height based on salary percentage of grid height
  const gridHeight = Math.min(89 * window.innerHeight / 100, 590);
  const salaryPercentage = salary / 230000000; // $0 to $230M range
  const cardHeight = salaryPercentage * gridHeight;
  
  // Determine layout based on salary
  const isVeryLowSalary = salary < 1500000; // < $1.5M
  const isLowSalary = salary < 10000000; // < $10M
  
  // Format salary for display
  const formatSalary = (salary) => {
    if (salary >= 1000000) {
      return `$${(salary / 1000000).toFixed(1)}M`;
    } else if (salary >= 1000) {
      return `$${(salary / 1000).toFixed(0)}K`;
    } else {
      return `$${salary.toFixed(0)}`;
    }
  };
  
  return (
    <div 
      className="border-2 border-blue-500 shadow-lg"
      style={{
        height: `${cardHeight}px`,
        width: '30vw',
        minWidth: '200px',
        backgroundColor: 'white',
        background: 'white',
        zIndex: 40,
        position: 'relative'
      }}
    >
      {isVeryLowSalary ? (
        // Empty block for very low salary players
        <div className="w-full h-full" />
      ) : isLowSalary ? (
        // Layout for $1.5M - $10M: name left, salary right
        <div className="flex items-center justify-between h-full px-4">
          <div className="text-xs font-bold text-gray-800">
            {name}
          </div>
          <div className="text-xs text-gray-600">
            {formatSalary(salary)}
          </div>
        </div>
      ) : (
        // Layout for ≥$10M: image left, name and salary stacked right
        <div className="flex items-center h-full p-3">
          {/* Left side - Player image */}
          <div className="flex items-center justify-center pr-3">
            {image && (
              <img 
                src={image} 
                alt={name}
                className="w-12 h-12 rounded-full"
              />
            )}
          </div>
          
          {/* Right side - Name and salary stacked */}
          <div className="flex flex-col justify-center flex-1">
            <div className="text-sm font-bold text-gray-800 mb-1">
              {name}
            </div>
            <div className="text-xs text-gray-600">
              {formatSalary(salary)}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Player;