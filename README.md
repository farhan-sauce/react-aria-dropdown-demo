## DropdownItem

```
interface DropdownItemProps {
  value?: string | number,
  searchValue?: string | number,
  isSelected?: boolean,
  prefixIcon?: JSX.Element
  postfixIcon?: JSX.Element
  divider?: 'top' | 'bottom'
  isActionItem?: boolean
  className?: string
  disabled?: boolean
  children?: JSX.Element,
  onClick?: (value: string | number) => void
}
```

## DropdownToggle

```
interface DropdownToggleProps {
  children?: JSX.Element,
  className?: string
  onChange?: (value: boolean) => void
}
```

## DropdownMenu

```
interface DropdownMenuProps {
  className?: string
}
```

## Dropdown

```
type DropdownProps = {
  type: 'text' | 'checkbox' | 'radio' | 'link' | 'href',
  isClearEnabled?: boolean
  isSearchEnabled?: boolean
  autoClose?: boolean
  onChange?: (value: string | number | (string | number)[]) => void
  onToggle?: (value: boolean) => void
  onSearch?: (value: string | number) => void
  onClear?: () => void
}
```

## Example

### Checkbox List
```
<Dropdown type="checkbox" isSearchEnabled={true}>
  <DropdownToggle>
    Owners
  </DropdownToggle>
  <DropdownMenu>
    <DropdownItem
      value="user-id-x"
      searchValue="User X"
    >
      User X
    </DropdownItem>
    <DropdownItem
      value="user-id-y"
      searchValue="User Y"
    >
      User Y
    </DropdownItem>
    <DropdownItem
      value="user-id-z"
      searchValue="User Z"
    >
      User Z
    </DropdownItem>
  </DropdownMenu>
</Dropdown>
```

### Checkbox List
```
<Dropdown type="text">
  <DropdownToggle>
    Frameworks
  </DropdownToggle>
  <DropdownMenu>
    <DropdownItem
      value="framework-a"
      searchValue="Framework Android A"
    >
      Framework A
    </DropdownItem>
    <DropdownItem
      value="framework-b"
      searchValue="Framework Android B"
    >
      Framework B
    </DropdownItem>
  </DropdownMenu>
</Dropdown>
```
