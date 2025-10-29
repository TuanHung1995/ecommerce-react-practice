import dayjs from 'dayjs';

// import DeliveryOptions from './DeliveryOptions.jsx';
import CartItemDetailsGrid from './CartItemDetailsGrid.jsx';

function OrderSummary({ cart, deliveryOptions, loadCart }) {
    return (
        <div className="order-summary">

            {deliveryOptions.length > 0 && cart.map((cartItem) => {
                const selectedDeliveryOption = deliveryOptions.find((deliveryOption) => {
                    return deliveryOption.id === cartItem.deliveryOptionId;
                });

                return (
                    <div key={cartItem.productId} className="cart-item-container">
                        <div className="delivery-date">
                            Delivery date: {dayjs(selectedDeliveryOption.estimatedDeliveryTimeMs).format('dddd, MMMM D')}
                        </div>

                        <CartItemDetailsGrid
                            cartItem={cartItem}
                            deliveryOptions={deliveryOptions}
                            loadCart={loadCart} />
                    </div>
                )
            })}
        </div>
    )
}

export default OrderSummary;