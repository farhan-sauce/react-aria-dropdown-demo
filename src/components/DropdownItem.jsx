import React from 'react';
import { useOption } from '@react-aria/listbox';
import { useFocusRing, FocusScope } from '@react-aria/focus';
import { mergeProps } from '@react-aria/utils';
import { DropdownContext } from './Dropdown';
import Checkbox from './Checkbox';

function DropdownItem({ item, state }) {
  const ref = React.useRef();
  const { optionProps, isSelected } = useOption({ key: item.key }, state, ref);
  const { isFocusVisible, focusProps } = useFocusRing({ within: true });
  const contextInfo = React.useContext(DropdownContext);

  const { value } = item.props;
  const handleChange = (isChecked) => {
    contextInfo.onItemSelect({ payload: { isSelected: isChecked, value } });
  };

  return (
    <li
      {...mergeProps(optionProps, focusProps)}
      ref={ref}
      style={{
        background: isSelected ? 'blueviolet' : 'transparent',
        color: isSelected ? 'white' : null,
        padding: '2px 5px',
        outline: isFocusVisible ? '2px solid orange' : 'none',
      }}
    >
      <Checkbox
        value={value}
        isFocusVisible={isFocusVisible}
        onChange={handleChange}
      >
        {item.rendered}
      </Checkbox>
    </li>
  );
}

export default DropdownItem;
