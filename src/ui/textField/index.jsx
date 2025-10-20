import { useState } from "react";
import ClosedEye from "../../components/icons/ClosedEye";
import OpenEye from "../../components/icons/OpenEye";
import { useStyles } from "./styles";
import { convertToPersianNumbers } from "../../utils/convertNumbers";
import { isOnlyNumbers } from "../../utils/validation";

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
  const classes = useStyles();
  const [isPasswordShown, setIspasswordShown] = useState(false);

  const handleShowPassword = () => {
    setIspasswordShown(!isPasswordShown);
  };

  const isPhoneNumber = isOnlyNumbers(value) && phoneIcon;

  return (
    <div className={className}>
      <label>{label}</label>
      <div className={classes.inputWrapper} dir="ltr">
        {isPhoneNumber && value.length > 8 && (
          <span className={classes.phoneIcon}>
            +{convertToPersianNumbers(98)}
          </span>
        )}
        <input
          type={passwordIcon ? (isPasswordShown ? "text" : "password") : type}
          placeholder={placeholder}
          value={isPhoneNumber ? convertToPersianNumbers(value) : value}
          name={name}
          onChange={onChange}
          maxLength={isPhoneNumber ? 11 : undefined}
        />
        {value.length > 0 && passwordIcon && (
          <span onClick={handleShowPassword} className={classes.showPassBtn}>
            {isPasswordShown ? <ClosedEye /> : <OpenEye />}
          </span>
        )}
      </div>
    </div>
  );
}

export default TextField;
