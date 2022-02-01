import React from 'react';
import { useListBox } from '@react-aria/listbox';
import { useListState } from '@react-stately/list';
import Option from './Option';

function ListBox(props) {
  const { label, children } = props;
  console.log('---children---', children);
  // Create state based on the incoming props
  const state = useListState(props);
  console.log('------statee-----', [...state.collection]);

  // Get props for the listbox element
  const ref = React.useRef();
  const { listBoxProps, labelProps } = useListBox(props, state, ref);

  return (
    <>
      <div {...labelProps}>{label}</div>
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
          <Option
            key={item.key}
            item={item}
            state={state}
          />
        ))}
      </ul>
    </>
  );
}

export default ListBox;
