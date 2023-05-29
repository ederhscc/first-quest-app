import './button.css';

const Button = ({label, showLabel}) => {
    return <button className="btn" onClick={() => showLabel(label)}>{label}</button>
}

Button.defaultProps = {
    label: 'Baixar CV'
}

export default Button;