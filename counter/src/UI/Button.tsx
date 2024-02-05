
interface ButtonProps {
    sum:number,
    typeOfChange: string,
    onClick: any,
}

const Button = ({sum, typeOfChange, onClick}: ButtonProps) => {

    const handleButtonClick = () => {
      onClick((s:any) => typeOfChange === '+' ? s + sum : s - sum)
    }

    return (
      <button onClick={handleButtonClick}>{typeOfChange}</button>
    )
  }

export default Button