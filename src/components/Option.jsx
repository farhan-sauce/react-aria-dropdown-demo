import React from 'react';
import { useOption } from '@react-aria/listbox';
import { useFocusRing } from '@react-aria/focus';
import { mergeProps } from '@react-aria/utils';

function Option({ item, state }) {
  const ref = React.useRef();
  const {
    optionProps, labelProps, descriptionProps, isSelected,
  } = useOption({ key: item.key }, state, ref);
  console.log('------labelProps-----', labelProps);
  const { isFocusVisible, focusProps } = useFocusRing();

  // Pull out the two expected children. We will clone them
  // and add the necessary props for accessibility.
  const [title, description] = item.rendered;

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
      {React.cloneElement(title, labelProps)}
      {React.cloneElement(description, descriptionProps)}
    </li>
  );
}

export default Option;
