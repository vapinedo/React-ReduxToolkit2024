import { useSelector, useDispatch } from 'react-redux'
import { ordered, restocked } from './icecreamSlice';
import { useState } from 'react';

export default function IcecreamView() {

  const [value, setValue] = useState(1);
  const numOfIcecreams = useSelector((state) => state.icecream.numOfIcecreams);
  const dispatch = useDispatch();

  return (
    <article>
      <h2>Number of ice creams - {numOfIcecreams}</h2>
      <button onClick={() => dispatch(ordered())}>Order ice creams</button>
      <input 
        type="text" 
        value={value} 
        onChange={(event) => setValue(parseInt(event.target.value))} 
      />
      <button onClick={() => dispatch(restocked(value))}>Restocke ice creams</button>
    </article>
  )
}