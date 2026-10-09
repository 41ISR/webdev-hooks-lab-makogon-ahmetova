const Button = ({className, ...rest}) => {
    return (
        <button {...rest} className={`btn` + " " + className}>
              Добавить на полку
        </button>
    )
}

export default Button