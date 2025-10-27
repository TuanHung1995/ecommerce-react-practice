import dayjs from 'dayjs';
import { formatMoney } from '../../utils/money.js'

// import DeliveryOptions from './DeliveryOptions.jsx';
import CartItemDetailsGrid from './CartItemDetailsGrid.jsx';

function OrderSummary({ cart, deliveryOptions }) {
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
                            deliveryOptions={deliveryOptions} />
                    </div>
                )
            })}
        </div>
    )
}

export default OrderSummary;