export const Button = ({ name, color }) => {
  return (
    <button className={`bg-${color}-500 p-2 rounded shadow text-white`}>
      {name}
    </button>
  );
};

export default Button;
