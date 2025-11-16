import React from 'react'

const Button = ({ onClick, children, variant = 'primary', type = 'button' }) => {
  const variantClasses = {
    primary: 'btn-primary',
    error: 'btn-error',
    secondary: 'btn-secondary',
    ghost: 'btn-ghost'
  }

  const variantClass = variantClasses[variant] || 'btn-primary'

  return (
    <div className="flex justify-end">
      <button 
        onClick={onClick} 
        type={type} 
        className={`btn ${variantClass}`}
      >
        {children}
      </button>
    </div>
  )
}

export default Button
