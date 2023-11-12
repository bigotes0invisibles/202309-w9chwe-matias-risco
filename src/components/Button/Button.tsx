import ButtonStyled from "./ButtonStyled";

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
    <ButtonStyled className={className} onClick={onClick}>
      {innerText}
    </ButtonStyled>
  );
};

export default Button;
