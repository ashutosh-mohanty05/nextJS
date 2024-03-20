import React from 'react'
import Script from 'next/script'
const contact = () => {
  return (
    <div>
        <Script>
            {`
            alert("welcome to contact page")
            `}
        </Script>
        Contact me
        </div>
  )
}

export default contact