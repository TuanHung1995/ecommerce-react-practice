import CartitemDetails from './CartItemDetails.jsx';
import DeliveryOptions from './DeliveryOptions.jsx';

function CartItemDetailsGrid({ cartItem, deliveryOptions, loadCart }) {
    return (
        <div className="cart-item-details-grid">
            <img className="product-image"
                src={cartItem.product.image} />

            <CartitemDetails cartItem={cartItem} loadCart={loadCart} />

            <DeliveryOptions
                deliveryOptions={deliveryOptions}
                cartItem={cartItem}
                loadCart={loadCart} />
        </div>
    )
}

export default CartItemDetailsGrid;