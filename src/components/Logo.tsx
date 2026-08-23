import React from 'react';

interface LogoProps {
  variant?: 'primary' | 'horizontal' | 'icon-only' | 'stacked' | 'badge';
  theme?: 'dark' | 'light' | 'monochrome-white' | 'monochrome-black';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  showTagline?: boolean;
  className?: string;
}

/**
 * Exact Vector Reproduction of the FLOW Monogram Emblem from the reference image
 * Features the signature interwoven 'f'-loop in the stadium/pill capsule with the top hook
 */
export const FlowMonogram: React.FC<{
  size?: number;
  color?: string;
  className?: string;
}> = ({
  size = 38,
  color = '#FFFFFF',
  className = ''
}) => {
  // Height-to-width ratio is ~ 1.38:1
  const width = size;
  const height = size * 1.38;

  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 120 166"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`shrink-0 ${className}`}
      aria-label="FLOW Emblem"
    >
      <g
        stroke={color}
        strokeWidth="6.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      >
        {/* Continuous Interwoven Path of the Emblem */}
        <path
          d="M 74 25 L 74 18 C 70 18 57 18 50 28 C 47 34 47 44 47 54 L 47 100 C 47 114 41 124 28 124 C 18 124 14 114 14 100 L 14 68 C 14 42 30 34 50 34 C 70 34 86 42 86 68 L 86 104 C 86 128 70 140 50 140 C 30 140 18 130 16 116"
        />

        {/* 'f' sharp crossbar */}
        <line
          x1="36"
          y1="56"
          x2="60"
          y2="56"
          strokeWidth="5.5"
        />
      </g>
    </svg>
  );
};

/**
 * Modern, High-Legibility Typography for "flow"
 * Uses elegant serif styling with high contrast and optimal tracking
 */
export const FlowWordmark: React.FC<{
  height?: number;
  color?: string;
  className?: string;
}> = ({
  height = 26,
  color = '#FFFFFF',
  className = ''
}) => {
  return (
    <span
      className={`font-['Playfair_Display',serif] tracking-normal font-bold lowercase leading-none select-none ${className}`}
      style={{
        fontSize: `${height * 1.15}px`,
        color: color,
        letterSpacing: '-0.02em',
        display: 'inline-block'
      }}
    >
      flow
    </span>
  );
};

export const LogoSymbol: React.FC<{
  size?: number;
  theme?: 'dark' | 'light' | 'monochrome-white' | 'monochrome-black';
  className?: string;
}> = ({
  size = 38,
  theme = 'light',
  className = ''
}) => {
  const isDarkBg = theme === 'dark' || theme === 'monochrome-white';
  const color = isDarkBg ? '#FFFFFF' : '#07090C';

  return (
    <FlowMonogram size={size} color={color} className={className} />
  );
};

export const Logo: React.FC<LogoProps> = ({
  variant = 'horizontal',
  theme = 'light',
  size = 'md',
  showTagline = false,
  className = ''
}) => {
  const isDarkBg = theme === 'dark' || theme === 'monochrome-white';
  const color = isDarkBg ? '#FFFFFF' : '#07090C';
  const subTextColor = isDarkBg ? 'text-zinc-400' : 'text-zinc-600';

  const pixelSizes = {
    sm: { symbol: 26, wordmark: 20 },
    md: { symbol: 32, wordmark: 24 },
    lg: { symbol: 46, wordmark: 34 },
    xl: { symbol: 64, wordmark: 48 }
  };

  const currentSize = pixelSizes[size];

  if (variant === 'icon-only') {
    return <FlowMonogram size={currentSize.symbol} color={color} className={className} />;
  }

  if (variant === 'stacked') {
    return (
      <div className={`flex flex-col items-center text-center select-none ${className}`}>
        <FlowMonogram size={currentSize.symbol * 1.4} color={color} className="mb-2" />
        <FlowWordmark height={currentSize.wordmark * 1.3} color={color} />
        <span className={`text-xs font-semibold tracking-wide ${subTextColor} mt-2.5 font-heading`}>
          توريد البالتات والتوريدات الصناعية
        </span>
        {showTagline && (
          <span className="text-[11px] text-[#22C55E] font-medium mt-1">
            توريد موثوق. حلول مرنة.
          </span>
        )}
      </div>
    );
  }

  // Default: Horizontal Logo (Emblem + "flow" Text + Arabic Designation)
  return (
    <div className={`flex items-center gap-3 select-none ${className}`}>
      {/* Exact Monogram Emblem */}
      <FlowMonogram size={currentSize.symbol} color={color} />

      {/* Wordmark + Arabic Designation */}
      <div className="flex flex-col justify-center text-right">
        <div className="flex items-center gap-2.5">
          <FlowWordmark height={currentSize.wordmark} color={color} />
          <span className={`h-3.5 w-[1.5px] ${isDarkBg ? 'bg-white/20' : 'bg-zinc-300'}`}></span>
          <span className={`text-[12px] sm:text-[13px] font-bold leading-tight ${subTextColor} font-heading whitespace-nowrap`}>
            توريد البالتات والتوريدات الصناعية
          </span>
        </div>
        {showTagline && (
          <span className="text-[10.5px] text-[#22C55E] font-medium mt-0.5">
            توريد موثوق. حلول مرنة.
          </span>
        )}
      </div>
    </div>
  );
};
