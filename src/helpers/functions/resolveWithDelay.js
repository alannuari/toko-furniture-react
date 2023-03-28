const resolveWithDelay = (result, delay = 1) => {
    return new Promise((resolve) => setTimeout(() => resolve(result), delay * 2000));
};

export default resolveWithDelay;
