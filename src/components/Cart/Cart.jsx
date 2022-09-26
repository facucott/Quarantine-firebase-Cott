import './Cart.scss';
import { CartContext } from '../CartContext/CartContext';
import { useContext } from 'react';
import ItemCart from '../ItemCart/ItemCart';
import { Link } from 'react-router-dom';

const Cart = () => {
    const { items, totalPrice } = useContext(CartContext);
    // const ctx =  useContext(CartContext)

    if (items.length === 0) {

        return(
            <>
                <h5 className='carritovacio'>NO HAY ELEMENTOS EN EL CARRITO</h5>
                <br /><br />
                    
                    <div className='iracomprar'>
                    <Link to = '/shop'>
                        <button className='comprar'>IR A COMPRAR</button>
                    </Link>
                    </div>

            </>
            )
    }

    return(
        <>
            <div className="cart-container">
            <h1>CARRITO</h1>
            </div>

            {
            items.map(product => <ItemCart key={product.id} product={product} />)
            }

            <h4 className='carritovacio'>
                TOTAL: ${totalPrice()}
            </h4>
            <br /><br />
        </>
        )
}

export default Cart;




// return(
        
//     <>
//     {
//                 items.map(item => (
//                     <ItemCart 
//                     key={item.id}
//                     id={item.id}
//                     img={item.img}
//                     title={item.title}
//                     description={item.description}
//                     price={item.price} 
//                     stock = {item.stock} 
//                     categoryId={item.categoryId} />
//                     ))

//             }
//             </>

//     )
// }