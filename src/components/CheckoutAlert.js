import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

const CheckoutAlert = () => {
    const MySwal = withReactContent(Swal);

    return MySwal.fire({
        icon: 'success',
        title: 'Checkout successfully!',
    });
};

export default CheckoutAlert;
