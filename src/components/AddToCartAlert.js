import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

const AddToCartAlert = () => {
    const MySwal = withReactContent(Swal);

    const Toast = MySwal.mixin({
        toast: true,
        position: 'bottom-end',
        showConfirmButton: false,
        timer: 2000,
        timerProgressBar: true,
        didOpen: (toast) => {
            toast.addEventListener('mouseenter', MySwal.stopTimer);
            toast.addEventListener('mouseleave', MySwal.resumeTimer);
        },
    });

    return Toast.fire({
        icon: 'success',
        title: 'Added to cart successfully',
    });

    // return MySwal.fire({
    //     icon: 'success',
    //     title: 'Successfully added to cart!',
    //     showConfirmButton: false,
    //     timer: 1500,
    // });

    // MySwal.fire({
    // title: <p>Hello World</p>,
    // didOpen: () => {
    // `MySwal` is a subclass of `Swal` with all the same instance & static methods
    // MySwal.showLoading();
    // },
    // }).then(() => {
    //     return MySwal.fire(<p>Shorthand works too</p>);
    // });
};

export default AddToCartAlert;
