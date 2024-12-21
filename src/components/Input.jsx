import React from 'react'

function Input({label,id,error, ...props}) {
  return (
    <div className="control no-margin">
    <label htmlFor={id}>Email</label>
    <input id={id} type="email" name="email" />
    <div className="control-error">
      {error && <p>{error}</p> }
    </div>
  </div>
  )
}

export default Input