export const incNumber = (num) => {
  return {
    type: "INCREMENT",
    payload: num,
  };
};

export const decNumber = () => {
  return {
    type: "DECREMENT",
  };
};
export const add = () => {
  return {
    type: "ADD_USER",
  };
};
