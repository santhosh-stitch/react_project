export const setAuth = (data) =>{
    return {
        type: 'SET_AUTH',
        payload: data,
    };
}

export const removeAuth = () => {
    return {
        type: 'REMOVE_AUTH',
        payload: null,
    };
}