import React from 'react';

import Styles from './styles.module.css'

function PageTitle ({children,title, tag, ...props})  {
  return (
        <header className={Styles.pageTitle}> 
          <h1>{title || "Summit Website"}</h1>
          <p>{tag || "tagline"}</p>
        </header>
  )
}

export default PageTitle