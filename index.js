/**
 * @file        : index.js
 * @description : handlebars的helper
 * @author      : YanXianPing
 * @creatTime   : 2020/11/3 17:50
 */
const hbHelpers = {
    /**-----------------------------------------------
     *                   简单helper
     *----------------------------------------------*/
    /**
     * 转换value为小写
     * @param value <string|number|boolean>
     * @return {string}
     */
    toLowerCase: (value) => {
        let _value = value + '';
        return _value.toLowerCase();
    },

    /**
     * 转换value为大写写
     * @param value <string|number|boolean>
     * @return {string}
     */
    toUpperCase: (value) => {
        let _value = value + '';
        return _value.toUpperCase();
    }
    /**-----------------------------------------------
     *                   块级helper
     *----------------------------------------------*/
};

module.exports = hbHelpers;
