'use strict';
/* globals module */

module.exports = function( grunt ){
    return {

        concat: {
            thirdparty: {
                src: [
                    '<%= paths.src %>/public/assets/js/thirdparty/*.js'
                ],
                dest: '<%= paths.dist %>/public/assets/js/thirdparty.js',
            }
        }
    };
};