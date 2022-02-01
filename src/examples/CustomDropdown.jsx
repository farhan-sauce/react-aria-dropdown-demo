import React from 'react';
import { Item } from '@react-stately/collections';
import ListBox from '../components/ListBox';
import DropdownItem from '../components/DropdownItem';
import Dropdown from '../components/Dropdown';
import DropdownToggle from '../components/DropdownToggle';
import DropdownMenu from '../components/DropdownMenu';

function CustomDropdown() {
  return (
    <div>
      <Dropdown type="checkbox" isSearchEnabled onSelect={(value) => console.log('----owners---', value)}>
        <DropdownToggle>
          Owners
        </DropdownToggle>
        <DropdownMenu>
          <Item value="hello-1">
            Hello 1
          </Item>
          <Item value="hello-2">
            Hello 2
          </Item>
        </DropdownMenu>
      </Dropdown>

      <Dropdown type="checkbox" isSearchEnabled onSelect={(value) => console.log('----browsers---', value)}>
        <DropdownToggle>
          Browsers
        </DropdownToggle>
        <DropdownMenu>
          <Item value="chrome">
            Chrome
          </Item>
          <Item value="firefox">
            Firefox
          </Item>
          <Item value="safari">
            Safari
          </Item>
        </DropdownMenu>
      </Dropdown>
    </div>
  );
}

export default CustomDropdown;
