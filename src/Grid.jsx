import React from 'react';

export default function Grid() {
  // Generate 24 lines from $230M to $0 in $10M increments (reversed)
  const salaryLines = Array.from({ length: 24 }, (_, index) => {
    const amount = (23 - index) * 10000000; // Start from $230M and go down to $0
    return {
      amount,
      formattedAmount: amount === 0 ? '$0' : `$${(amount / 1000000).toFixed(0)}M`
    };
  });

  return (
    <div className="w-full flex justify-center items-center">
      <div className="relative w-full h-[85vh] min-h-[650px]">
        {/* Container for the grid lines - centered */}
        <div className="relative w-full h-full flex justify-center">
          <div className="w-full">
            {salaryLines.map((line, index) => {
              // Calculate vertical position: evenly distribute 24 lines across 85vh
              // First line at top (0), last line at bottom (85vh)
              const topPosition = (index / (salaryLines.length - 1)) * 100;
              
              return (
                <div
                  key={index}
                  className="absolute w-full flex items-center"
                  style={{ top: `${topPosition}%` }}
                >
                  {/* Three-container layout with proper centering */}
                  <div className="w-full flex justify-center ">
                    <div className="flex items-center w-[60%]">
                      {/* Left container - Money amount */}
                      <div className="w-[5%] flex justify-end"
                      style={{ fontSize: '14px' , paddingRight: '10px'}}>
                        <span className="text-sm font-medium text-gray-700 whitespace-nowrap">
                          {line.formattedAmount}
                        </span>
                      </div>
                      
                      {/* Middle container - Line */}
                      <div className="w-[90%] flex justify-center">
                        <div className="w-full h-px bg-[#000000]" />
                      </div>
                      
                      {/* Right container - Placeholder */}
                      <div className="w-[5%] flex justify-start pl-2">
                        {/* Placeholder content can go here */}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

