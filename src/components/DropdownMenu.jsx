import React from 'react';
import { useListBox } from '@react-aria/listbox';
import { useListState } from '@react-stately/list';
import Option from './Option';
import DropdownItem from './DropdownItem';

function DropdownMenu(props) {
  const { children } = props;
  const state = useListState(props);

  // Get props for the listbox element
  const ref = React.useRef();
  const { listBoxProps } = useListBox(props, state, ref);
  React.useEffect(() => {
    if (ref.current) {
      ref.current.focus();
    }
  }, []);

  return (
    <ul
      {...listBoxProps}
      ref={ref}
      style={{
        padding: 0,
        margin: '5px 0',
        listStyle: 'none',
        border: '1px solid gray',
        maxWidth: 250,
      }}
    >
      {[...state.collection].map((item) => (
        <DropdownItem
          key={item.key}
          item={item}
          state={state}
        />
      ))}
    </ul>
  );
}

export default DropdownMenu;
