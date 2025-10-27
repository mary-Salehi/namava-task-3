const formatPhoneNumber = (phoneNumber) => {
  if (!phoneNumber) return "";

  if (phoneNumber.startsWith("09") && phoneNumber.length === 11)
    return phoneNumber.replace("0", "+98");
  else return phoneNumber;
};
export default formatPhoneNumber;
