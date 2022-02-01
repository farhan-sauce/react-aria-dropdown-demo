import React from 'react';
import { Item } from '@react-stately/collections';
import ListBox from '../components/ListBox';
import DropdownItem from '../components/DropdownItem';

function SimpleDropdown() {
  return (
    <div>
      <input type="text" placeholder="hello world" />
      <ListBox label="Choose an option" selectionMode="single">
        {/* <Item>One</Item>
        <Item>Two</Item>
        <Item>Three</Item> */}
        <Item textValue="Align Left">
          <div>
            <strong>Align Left</strong>
          </div>
          <div>Align the selected text to the left</div>
        </Item>
        <Item textValue="Align Center">
          <div>
            <strong>Align Center</strong>
          </div>
          <div>Align the selected text center</div>
        </Item>
        <Item textValue="Align Right">
          <div>
            <strong>Align Right</strong>
          </div>
          <div>Align the selected text to the right</div>
        </Item>
      </ListBox>
    </div>
  );
}

export default SimpleDropdown;
