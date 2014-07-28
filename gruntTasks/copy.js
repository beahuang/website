'use strict';
/* globals module */

module.exports = function( grunt ){
    return {

        copy: {
            dist: {
                files: [
                    {
                        expand: true,
                        dot: true,
                        cwd: '<%= paths.src %>/public',
                        dest: '<%= paths.dist %>/public',
                        src: [
                            '*.{ico,png,txt}',
                            '{,*/}*.html',
                            '.htaccess',
                            'assets/images/{,*/}*.{webp,gif}',
                            'assets/fonts/{,*/}*.*'
                        ]
                    }
                ]
            },
            styles: {
                expand: true,
                dot: true,
                cwd: '<%= paths.src %>/public/assets/css',
                dest: '<%= paths.dist %>/public/assets/css/',
                src: '{,*/}*.css'
            }
        }
    };
};