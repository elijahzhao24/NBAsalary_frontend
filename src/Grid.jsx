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
    <div style={{width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
      <div style={{position: 'relative', width: '100%', height: '89vh', minHeight: '590px'}}>
        {/* Container for the grid lines - centered */}
        <div style={{position: 'relative', width: '100%', height: '100%', display: 'flex', justifyContent: 'center'}}>
          <div style={{width: '100%'}}>
            {salaryLines.map((line, index) => {

              // First line at top (0), last line at bottom (85vh)

              const topPosition = (index / (salaryLines.length - 1)) * 100;
              
              return (
                <div
                  key={index}
                  style={{ position: 'absolute', width: '100%', display: 'flex', alignItems: 'center', top: `${topPosition}%` }}
                >
                  {/* Three-container layout with proper centering */}
                  <div style={{width: '100%', display: 'flex', justifyContent: 'center'}}>
                    <div style={{display: 'flex', alignItems: 'center', width: '60%'}}>
                      {/* Left container - Money amount */}
                      <div style={{width: '5%', display: 'flex', justifyContent: 'flex-end', fontSize: '14px', paddingRight: '10px'}}>
                        <span style={{fontSize: '14px', fontWeight: '500', color: '#374151', whiteSpace: 'nowrap'}}>
                          {line.formattedAmount}
                        </span>
                      </div>
                      
                      {/* Middle container - Line */}
                      <div style={{width: '90%', display: 'flex', justifyContent: 'center'}}>
                        <div style={{width: '100%', height: '1px', backgroundColor: '#000000'}} />
                      </div>
                      
                      {/* Right container - Placeholder */}
                      <div style={{width: '5%', display: 'flex', justifyContent: 'flex-start', paddingLeft: '8px'}}>
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

