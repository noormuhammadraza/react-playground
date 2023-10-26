import { useState } from "react"

const ShowAlertButton = ({ onClick }) => {
    
  return (
    <div>
        <button className="btn btn-primary" onClick={onClick}>Click Me</button>
    </div>
  )
}

export default ShowAlertButton