import React from 'react';
import { useCheckbox } from '@react-aria/checkbox';
import { useToggleState } from '@react-stately/toggle';

function Checkbox(props) {
  const {
    children,
    isFocusVisible,
  } = props;
  const state = useToggleState(props);
  const ref = React.useRef();
  const { inputProps } = useCheckbox(props, state, ref);

  const setFocus = () => {
    if (ref?.current) {
      ref.current.focus();
    }
  };

  React.useEffect(() => {
    if (isFocusVisible) {
      setFocus();
    }
  }, [isFocusVisible]);

  return (
    <label style={{ display: 'block' }}>
      <input {...inputProps} ref={ref} />
      {children}
    </label>
  );
}

export default Checkbox;
