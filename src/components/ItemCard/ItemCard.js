
import { useState } from "react";
import '../ItemListContainer/ItemListContainer.css';



export const ItemCard = (props) =>{
  const { title, sub, price, image, onAddCard } = props
  const stock = 5

   const [count, setCount] = useState(0);

     const sumar = () => {
         if(count < stock){
             setCount(count+1);
         } else {
             alert('No hay stock!')
         }
   
         
     }
    
     const restar = () => {
         if (count > 1){
         setCount(count-1);
         }
     }

     const onAdd = () => {
         const params = {
             count, title
         }
        onAddCard(params)
     }

     
   

    return(
        <div style={{textAlign:'center'}} className="itemUno">
            <h1 style={{fontSize: '1.6rem'}}> {title}</h1>
            <p style={{fontSize: '1rem', paddingBottom:'8px'}}> {sub}</p>
            <p style={{fontSize: '1rem', paddingBottom:'8px'}}> {price}</p>
            <div style={{textAlign:'center'}}>
            <div>
                <p style={{fontSize: '1rem', paddingTop:'8px'}}>Cantidad: {count} </p>
                <button className="botonModif" onClick={restar}>-</button>
                 <button className="botonAgregar" onClick={onAdd}>Agregar</button> 
                <button className="botonModif" onClick={sumar}>+</button>
            </div>
            </div>
        </div>
    )
}
