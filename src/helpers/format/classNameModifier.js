export const addClass = (e, classes) => {
    e.classList && e.classList.add(...classes.split(' '));
};

export const removeClass = (e, classes) => {
    e.classList && e.classList.remove(...classes.split(' '));
};
