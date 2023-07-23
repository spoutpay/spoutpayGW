const InputField = ({ label, type, placeholder, wrapClass }) => {
  return (
    <div className={wrapClass}>
      <label className="block text-gray-700 mb-2 absolute start-2.5 top-2 text-xs uppercase">
        {label}
      </label>
      <input
        type={type}
        placeholder={placeholder}
        className="w-full border px-2.5 pt-6 pb-2.5 rounded text-sm text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
      />
    </div>
  );
};

export default InputField;
