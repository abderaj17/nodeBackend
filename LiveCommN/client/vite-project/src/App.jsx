import React, { useMemo, useState } from 'react'


const App = () => {
  
  const socket = useMemo(()=> io('http://localhost:3000'), []);

  const [socketId, setSocketId] = useState('');
  return (
    <div>

    <form onSubmit={handleSubmit}></form>
    
    </div>

    
  )
}

export default App