'use strict';
/* globals module */

module.exports = function( grunt ){
    return {

        useminPrepare: {
            options: {
                dest: '<%= paths.dist %>/public'
            },
            html: '<%= paths.src %>/public/index.html'
        },

        usemin: {
            options: {
                dirs: [
                    '<%= paths.dist %>/public'
                ]
            },
            html: [
                '<%= paths.dist %>/public/{,*/}*.html'
            ],
            css: [
                '<%= paths.dist %>/public/assets/css/{,*/}*.css'
            ]
        },

        imagemin: {
            dist: {
                files: [
                    {
                        expand: true,
                        cwd: '<%= paths.src %>/public/assets/images',
                        src: '{,*/}*.{png,jpg,jpeg}',
                        dest: '<%= paths.dist %>/public/assets/images'
                    }
                ]
            }
        },

        svgmin: {
            dist: {
                files: [
                    {
                        expand: true,
                        cwd: '<%= paths.src %>/public/assets/images',
                        src: '{,*/}*.svg',
                        dest: '<%= paths.dist %>/public/assets/images'
                    }
                ]
            }
        },

        cssmin: {
            dist: {
                files: {
                    '<%= paths.dist %>/public/assets/css/main.css': [
                        '.tmp/assets/css/{,*/}*.css',
                        '<%= paths.src %>/public/assets/css/{,*/}*.css'
                    ]
                }
            }
        },
    };
};