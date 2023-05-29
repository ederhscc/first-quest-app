import './text-colored.css';
const TextColored = ({colorText, textUppercase}) => {
    return (
        <div className="container-paragraph">
            <p className="paragraph" style={{ color: colorText, textTransform: textUppercase}}>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Temporibus dolore neque expedita quisquam? Velit consectetur natus quod laboriosam aliquid eaque eveniet minus dolore impedit! Dolores dolor doloremque amet ex harum.Lorem ipsum dolor sit, amet consectetur adipisicing elit. Temporibus dolore neque expedita quisquam? Velit consectetur natus quod laboriosam aliquid eaque eveniet minus dolore impedit! Dolores dolor doloremque amet ex harum.Lorem ipsum dolor sit, amet consectetur adipisicing elit. Temporibus dolore neque expedita quisquam? Velit consectetur natus quod laboriosam aliquid eaque eveniet minus dolore impedit! Dolores dolor doloremque amet ex harum.
            </p>
        </div>
    )
}

TextColored.defaultProps = {
    colorText: 'blue',
    textUppercase: 'uppercase'
}

export default TextColored;