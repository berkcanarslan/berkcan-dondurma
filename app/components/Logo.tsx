import React from 'react';

interface LogoProps {
  className?: string;
}

const Logo: React.FC<LogoProps> = ({ className = "" }) => {
  return (
    <div className={`flex items-center ${className}`}>
      <svg
        width="40"
        height="40"
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="mr-2"
      >
        {/* Ice Cream Scoop */}
        <circle cx="20" cy="15" r="12" fill="#FFC0CB" />
        <circle cx="24" cy="12" r="4" fill="#FFE4E1" opacity="0.7" />
        
        {/* Cone */}
        <path
          d="M10 25L20 40L30 25"
          fill="#D4A76A"
        />
        <path
          d="M12 27L20 38L28 27"
          fill="#B38B4D"
        />
        
        {/* Drips */}
        <path
          d="M18 8C18 8 16 12 20 12C24 12 22 8 22 8"
          stroke="#FFE4E1"
          strokeWidth="1.5"
          fill="none"
        />
      </svg>
      <span className="text-2xl font-bold bg-gradient-to-r from-pink-500 to-pink-700 bg-clip-text text-transparent">
        Berkcan
      </span>
    </div>
  );
};

export default Logo; 