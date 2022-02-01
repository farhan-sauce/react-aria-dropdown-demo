import React, { useMemo, useState } from 'react';
import PropTypes from 'prop-types';

export const DropdownContext = React.createContext();

function Dropdown(props) {
  const {
    children,
    type,
    onSelect,
    onToggle,
  } = props;
  const [Toggle, Menu] = children;
  const [isActive, setIsActive] = useState(false);
  const [selected, setSelected] = useState([]);

  const handleToggleChange = () => {
    const newToggleValue = !isActive;
    setIsActive(newToggleValue);
    onToggle(newToggleValue);
  };

  const updateSelection = (selectedValue) => {
    setSelected(selectedValue);
    onSelect(selectedValue);
  };

  const handleItemSelect = ({ payload }) => {
    const { isSelected, value } = payload;
    if (type === 'checkbox') {
      const newSelectedValue = isSelected
        ? [...selected, value]
        : selected.filter((selectedVal) => selectedVal !== value);
      return updateSelection(newSelectedValue);
    }
    return updateSelection([value]);
  };

  const value = useMemo(() => ({
    dropdownProps: { type },
    onToggleChange: handleToggleChange,
    onItemSelect: handleItemSelect,
  }), [isActive, type, selected]);

  return (
    <DropdownContext.Provider value={value}>
      {Toggle}
      {isActive && Menu}
    </DropdownContext.Provider>
  );
}

Dropdown.propTypes = {
  type: PropTypes.oneOf(['text', 'checkbox', 'radio', 'link', 'href']),
  isClearEnabled: PropTypes.bool,
  isSearchEnabled: PropTypes.bool,
  autoClose: PropTypes.bool,
  onSelect: PropTypes.func,
  onToggle: PropTypes.func,
  onSearch: PropTypes.func,
  onClear: PropTypes.func,
};

Dropdown.defaultProps = {
  type: 'text',
  isClearEnabled: false,
  isSearchEnabled: false,
  autoClose: true,
  onSelect: () => {},
  onToggle: () => {},
  onSearch: () => {},
  onClear: () => {},
};

export default Dropdown;
