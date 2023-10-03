const Button = ({ text, onClick, variant, buttonType }) => {
  const getButtonStyle = () => {
    switch (variant) {
      case "primary":
        return "bg-blue-500 hover:bg-blue-600 text-white";
      case "secondary":
        return "bg-gray-500 hover:bg-gray-600 text-white";
      case "tulip":
        return "bg-tulip hover:bg-tulip text-white";
      case "transparent":
        return "bg-transparent border hover:bg-transparent text-gray-500 hover:text-gray-600";
      case "dark":
        return "bg-[#060D27] border hover:bg-[#060D27] text-white hover:text-white";
      default:
        return "bg-gray-500 hover:bg-gray-600 text-white";
    }
  };

  return (
    <button
      onClick={onClick}
      className={`px-4 py-3 w-full text-xs md:text-sm rounded font-bold ${getButtonStyle()} focus:outline-none focus:shadow-outline`}
      type={buttonType}
    >
      {text}
    </button>
  );
};

export default Button;
