
const Toggle = ({ handleChange, isChecked }) => {
  return (
    <div className="toggle-container">
        <input
            type="checkbox"
            id="check"
            className="toggle"
            onChange={handleChange}
            checked={isChecked}
        />
        <label htmlFor="check" id="toggle-label">
            {isChecked ? 'Dark' : 'Light'}
        </label>
      
    </div>
  )
}

export default Toggle
