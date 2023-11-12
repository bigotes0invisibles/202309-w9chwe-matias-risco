interface ButtonPropsStructure {
  innerText: string;
  className: string;
  onClick?: () => void;
}

const Button = ({
  innerText,
  className,
  onClick,
}: ButtonPropsStructure): React.ReactElement => {
  return (
    <button className={className} onClick={onClick}>
      {innerText}
    </button>
  );
};

export default Button;
