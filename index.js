/**
 * @file        : index.js
 * @description : handlebars的helper
 * @author      : YanXianPing
 * @creatTime   : 2020/11/3 17:50
 */
const Handlebars = require('handlebars');

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
    },
    /**-----------------------------------------------
     *                   块级helper
     *----------------------------------------------*/
    color: (context, options) => {
        const colorMap = {
            success: '#67C23A',
            warning: '#E6A23C',
            danger: '#F56C6C',
            info: '#909399'
        };
        let color = colorMap[context];
        let attrs = Object.keys(options.hash).map(key => {
            return `${key}="${options.hash[key]}"`;
        }).join(' ');
        let result = `<span ${attrs} style="color: ${color}">${options.fn(this)}</span>`;
        return new Handlebars.SafeString(result);
    }
};

module.exports = hbHelpers;
