import React, { useContext } from 'react';
import { DropdownContext } from './Dropdown';

function DropdownToggle({ children }) {
  const contextInfo = useContext(DropdownContext);

  return (
    <div
      role="button"
      tabIndex={0}
      className="toggle"
      onClick={contextInfo.onToggleChange}
      onKeyPress={contextInfo.onToggleChange}
    >
      {children}
    </div>
  );
}

export default DropdownToggle;
