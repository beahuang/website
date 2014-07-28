'use strict';
/* globals module */

module.exports = function( grunt ){
    return {

        clean: {
            dist: {
                files: [
                {
                    dot: true,
                    src: [
                    '.tmp',
                    '<%= paths.dist %>/*',
                    '!<%= paths.dist %>/.git*'
                    ]
                }
                ]
            },
            server: '.tmp',
        }
    };
};