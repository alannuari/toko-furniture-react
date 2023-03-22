import { useState, useCallback } from 'react';

const defaultState = {
    data: null,
    status: 'idle',
    error: null,
};

const useAsync = (initialState) => {
    const [{ data, status, error }, setState] = useState({ ...defaultState, ...initialState });

    const run = useCallback(
        (promise) => {
            setState({ status: 'pending' });
            return promise
                .then((data) => {
                    setState({ data, status: 'resolved' });
                })
                .catch((error) => {
                    setState({ status: 'rejected', error: error });
                });
        },
        [setState]
    );

    return { data, status, error, run, isLoading: status === 'idle' || status === 'pending' };
};

export default useAsync;
