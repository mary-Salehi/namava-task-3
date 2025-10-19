function TextField({
  label,
  name,
  type = "text",
  value,
  placeholder,
  onChange,
  className,
}) {
  return (
    <div className={className}>
      <label>{label}</label>
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        name={name}
        onChange={onChange}
      />
    </div>
  );
}

export default TextField;
