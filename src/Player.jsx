import React, { useState, useEffect } from 'react';

const Player = ({ name, salary, image }) => {

  const [cardHeight, setCardHeight] = useState(0);

  // Calculate height based on salary percentage of grid height
  const calculateHeight = () => {
    const gridHeight = Math.max(89 * window.innerHeight / 100, 590);
    const salaryPercentage = salary / 230000000; // $0 to $230M range
    return salaryPercentage * gridHeight;
  };

  // Update height on mount and window resize
  useEffect(() => {
    const updateHeight = () => {
      setCardHeight(calculateHeight());
    };

    // Set initial height
    updateHeight();

    // Add resize event listener
    window.addEventListener('resize', updateHeight);

    // Cleanup event listener on unmount
    return () => {
      window.removeEventListener('resize', updateHeight);
    };
  }, [salary]);
  
  // Determine layout based on salary
  const isVeryLowSalary = salary < 3000000; // < $3M
  const isLowSalary = salary < 14000000; // < $14M
  
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
      className="shadow-lg"
      style={{
        height: `${cardHeight}px`,
        width: '30vw',
        minWidth: '150px',
        minHeight: '0px',
        backgroundColor: '#ff5c44',
        background: '#ff5c44',
        border: cardHeight > 10 ? '0.1px solid #3b82f6' : '0.1px solid #3b82f6',
        zIndex: 40,
        position: 'relative',
        flexShrink: 0
      }}
    >
      {isVeryLowSalary ? (
        // Very low salary players with tiny text
        <div className="flex items-center justify-between h-full px-2">
          <div className="font-bold text-black" style={{fontSize: '4px'}}>
            {name}
          </div>
          <div className="text-black" style={{fontSize: '4px'}}>
            {formatSalary(salary)}
          </div>
        </div>
      ) : isLowSalary ? (
        // Layout for $1.5M - $10M: name left, salary right
        <div className="flex items-center justify-between h-full px-4">
          <div className="text-xs font-bold text-black" style={{fontSize: '10px'}}>
            {name}
          </div>
          <div className="text-xs text-black" style={{fontSize: '10px'}}>
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
            <div className="text-xl font-bold text-black">
              {name}
            </div>
            <div className="text-xs text-black" style={{marginTop: '-2px'}}>
              {formatSalary(salary)}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Player;