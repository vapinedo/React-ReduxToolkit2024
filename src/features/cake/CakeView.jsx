import { useSelector } from 'react-redux'

export default function CakeView() {

  const numOfCakes = useSelector((state) => state.cake.numOfCakes);
  
  return (
    <article>
        <h2>Number of Cakes - {numOfCakes}</h2>
        <button>Order cake</button>
        <button>Restocke cakes</button>
    </article>
  )
}
