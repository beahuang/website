'use strict';
/* globals module */

// watch your files for changes
// https://github.com/gruntjs/grunt-contrib-watch
module.exports = function( grunt ){
    return {

        watch: {
            compass: {
                files: [
                    '<%= paths.src %>/scss/*.{scss,sass}',
                    '<%= paths.src %>/scss/**/*.{scss,sass}'
                ],
                tasks: [ 'compass:server' ],
                options: {
                    livereload: false
                }
            },

            inject: {
                files : [
                    '<%= paths.src %>/public/assets/css/*.css',
                    '<%= paths.src %>/public/assets/css/**/*.css',
                    '<%= paths.src %>/public/assets/images/{,*/}*.{png,jpg,jpeg,gif,webp,svg}'
                ],

                options: {
                    livereload: '<%= connect.options.livereload %>',
                    spawn: false
                }
            },

            reload: {
                files: [
                    '<%= paths.src %>/public/*.html',
                    '<%= paths.src %>/public/assets/js/libs/*.js',
                    '<%= paths.src %>/public/assets/js/*.js'
                ],
                options: {
                    livereload: '<%= connect.options.livereload %>',
                    spawn: false
                }
            },
        }
    };
};
