import CartitemDetails from './CartItemDetails.jsx';
import DeliveryOptions from './DeliveryOptions.jsx';

function CartItemDetailsGrid({ cartItem, deliveryOptions }) {
    return (
        <div className="cart-item-details-grid">
            <img className="product-image"
                src={cartItem.product.image} />

            <CartitemDetails cartItem={cartItem} />

            <DeliveryOptions
                deliveryOptions={deliveryOptions}
                cartItem={cartItem} />
        </div>
    )
}

export default CartItemDetailsGrid;