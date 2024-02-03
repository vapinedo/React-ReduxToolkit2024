import { useSelector } from 'react-redux'

export default function IcecreamView() {

  const numOfIcecreams = useSelector((state) => state.icecream.numOfIcecreams);
  
  return (
    <article>
        <h2>Number of ice creams - { numOfIcecreams }</h2>
        <button>Order ice creams</button>
        <button>Restocke ice creams</button>
    </article>
  )
}