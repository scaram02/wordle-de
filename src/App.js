import React, {useState} from 'react'

import Row from './components/Row'

const App = () => {

  const [row, setRow] = useState(1)
  const [word, setWord] = useState('wordle')
  
  return (
    <div>
      ROW: {row}
      <Row row={row} word={word} setWord={setWord} setRow={setRow}/>
    </div>
  );
}

export default App;