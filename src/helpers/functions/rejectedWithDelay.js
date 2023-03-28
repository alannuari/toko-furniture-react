const rejectedWithDelay = (msg, delay = 1) => {
    return new Promise((resolve, reject) => setTimeout(() => reject(msg), delay * 2000));
};

export default rejectedWithDelay;
