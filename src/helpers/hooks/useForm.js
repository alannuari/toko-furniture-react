import { useState } from 'react';

const useForm = (initialState) => {
    const [state, setstate] = useState(initialState);

    const fnUpdateState = (e) => {
        setstate((prev) => ({
            ...prev,
            [e.target.name]: e.target.value,
        }));
    };
    return { state, fnUpdateState };
};

export default useForm;
