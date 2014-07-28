'use strict';
/* globals module */

module.exports = function( grunt ){
    return {

        concurrent: {
            server: [
                'copy:styles',
                'compass:clean',
                'compass:server',
            ],
            dist: [
                'copy:styles',
                'imagemin',
                'svgmin'
            ],
            test: [
                'copy:styles'
            ]
        }
    };
};
