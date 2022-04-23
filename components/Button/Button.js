import React from 'react';

import Styles from './styles.module.css'

function Button ({children, label, ...props})  {
  return (
        <button className={Styles.button}>
            {label}
           {children}
        </button>
  )
}

export default Button