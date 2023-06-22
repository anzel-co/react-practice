const Form = ({
    formData: {
      firstnamePlaceholder,
      lastnamePlaceholder,
      emailPlaceholder,
      buttonText,
      
    }, 
    handleMouseEnter,
    handleClick,
    changePosition
  }) => (
    <div className='form'>
      <input className='personalInfo' placeholder={firstnamePlaceholder}></input>
      <input className='personalInfo' placeholder={lastnamePlaceholder}></input>
      <input className='personalInfo' placeholder={emailPlaceholder}></input>
      <button className='sub' onMouseEnter={handleMouseEnter} onClick={handleClick} style={changePosition}>{buttonText}</button>
    </div>
  )

export default Form