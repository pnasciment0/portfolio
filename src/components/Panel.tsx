// src/components/Panel.tsx
import React, { ReactNode } from 'react';

interface PanelProps {
  children: ReactNode;
}

function Panel({ children }: PanelProps) {
  return (
    <div className="bg-gray-800 p-10">
      <div className="container mx-auto">
        {children}  {/* Render the children prop here */}
      </div>
    </div>
  );
}

export default Panel;
