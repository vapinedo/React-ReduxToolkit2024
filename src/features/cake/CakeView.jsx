import { useSelector, useDispatch } from 'react-redux'
import { ordered, restocked } from './cakeSlice';

export default function CakeView() {

  const numOfCakes = useSelector((state) => state.cake.numOfCakes);
  const dispatch = useDispatch();
  
  return (
    <article>
        <h2>Number of Cakes - {numOfCakes}</h2>
        <button onClick={() => dispatch(ordered())}>Order cake</button>
        <button onClick={() => dispatch(restocked(5))}>Restocke cakes</button>
    </article>
  )
}
