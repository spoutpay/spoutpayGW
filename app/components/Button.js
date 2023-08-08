const Button = ({ text, onClick, variant }) => {
  const getButtonStyle = () => {
    switch (variant) {
      case "primary":
        return "bg-blue-500 hover:bg-blue-600";
      case "secondary":
        return "bg-gray-500 hover:bg-gray-600";
      case "tulip":
        return "bg-tulip hover:bg-tulip";
      default:
        return "bg-gray-500 hover:bg-gray-600";
    }
  };

  return (
    <button
      onClick={onClick}
      className={`px-4 py-3 w-full text-xs md:text-sm rounded text-white font-bold ${getButtonStyle()} focus:outline-none focus:shadow-outline`}
    >
      {text}
    </button>
  );
};

export default Button;
