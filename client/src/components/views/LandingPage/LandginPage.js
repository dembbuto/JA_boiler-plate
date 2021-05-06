import React, { useEffect } from 'react'
import axios from 'axios'

function LandginPage() {

  useEffect(() => {
    axios.get('/api/hello')
    .then(response => {
      console.log(response)
    })
  }, [])

  return (
    <div>
      LandginPage
    </div>
  )
}

export default LandginPage
