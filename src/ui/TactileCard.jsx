import React from 'react';
import { useCardTilt } from './hooks/useCardTilt';

export const TactileCard = ({
  children,
  className = '',
  maxTilt = 6,
  onClick
}) => {
  const { tiltProps } = useCardTilt(maxTilt);

  return (
    <div
      {...tiltProps}
      onClick={onClick}
      className={`bg-[#0d2844] border border-[#224c75] hover:border-[#dfcca8]/60 rounded-2xl p-6 transition-colors shadow-lg shadow-black/25 ${className}`}
    >
      {children}
    </div>
  );
};