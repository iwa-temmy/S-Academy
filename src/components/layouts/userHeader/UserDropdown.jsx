import { useState } from "react";

// core components
import UserDropdownTrigger from "./UserDropdownTrigger";
import UserDropdownMenu from "./UserDropdownMenu";

const UserDropdown = () => {
  const [dropdownVisible, setDropdownVisible] = useState(false);

  // functions
  const showDropdown = () => setDropdownVisible(true);
  const hideDropdown = () => setDropdownVisible(false);

  return (
    <>
      <UserDropdownTrigger showDropdown={showDropdown} />
      <UserDropdownMenu menuOpen={dropdownVisible} handleClose={hideDropdown} />
    </>
  );
};

export default UserDropdown;
