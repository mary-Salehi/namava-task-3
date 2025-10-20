import { useState } from "react";
import ClosedEye from "../../components/icons/ClosedEye";
import OpenEye from "../../components/icons/OpenEye";
import { useStyles } from "./styles";

function TextField({
  label,
  name,
  type = "text",
  value,
  placeholder,
  onChange,
  className,
  phoneIcon = false,
  passwordIcon = false,
}) {
  const classes = useStyles()
  const [isPasswordShown,setIspasswordShown] = useState(false);

  const handleShowPassword = () => {
    setIspasswordShown(!isPasswordShown)
  }

  const isPhoneNumber = value.length > 8 && value.startsWith('09') && phoneIcon;


  return (
    <div className={className}>
      <label>{label}</label>
      <div className={classes.inputWrapper} dir="ltr">
        {isPhoneNumber && <span className={classes.phoneIcon}>+98</span>}
        <input
          
          type={passwordIcon ? (isPasswordShown ? "text" : "password") : type}
          placeholder={placeholder}
          value={value}
          name={name}
          onChange={onChange}
        />
        {value.length > 0 && passwordIcon && <span onClick={handleShowPassword} className={classes.showPassBtn}>
          {isPasswordShown ? <ClosedEye/> : <OpenEye/>}
          </span>}
      </div>
    </div>
  );
}

export default TextField;
