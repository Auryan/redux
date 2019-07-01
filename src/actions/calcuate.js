// export const num0 = 0;
// export const num1 = 1;
// export const num2 = 2;
// export const num3 = 3;
// export const num4 = 4;
// export const num5 = 5;
// export const num6 = 6;
// export const num7 = 7;
// export const num8 = 8;
// export const num9 = 9;

export const totalNum = (result) => {
    return {
        type: 'Total_CAL',
        result,
    }
};

export const previousNum = (result, pre_num) => {
    return{
        type: 'Current_CAL',
        pre_num:result,
    }
};

export const add = (result) => {
    return {
        type: 'ADD_CAL',
        result,
    };
};

export const minus = (result) => {

    // document.write("Debug");
    return {
        type: 'MINUS_CAL',
        result,
    };
};
