'use strict';
/* globals module */

module.exports = function( grunt ){
    return {

        compass: {
            options: {
                sassDir: '<%= paths.src %>/scss',
                cssDir: '<%= paths.src %>/public/assets/css',
                generatedImagesDir: '<%= paths.src %>/public/assets/images/generated',
                imagesDir: '<%= paths.src %>/public/assets/images',
                javascriptsDir: '<%= paths.src %>/public/assets/js',
                fontsDir: '<%= paths.src %>/public/assets/fonts',
                importPath: '<%= paths.src %>/public/assets/js/libs',
                httpImagesPath: 'assets/images/',
                httpGeneratedImagesPath: 'assets/images/generated',
                httpFontsPath: 'assets/fonts',
                relativeAssets: false,
                assetCacheBuster: false
            },
            clean: {
                options: {
                    clean: true
                }
            },
            dist: {
                options: {
                    generatedImagesDir: '<%= paths.dist %>/public/assets/images/generated',
                    debugInfo: false
                }
            },
            server: {
                options: {
                    debugInfo: true
                }
            }
        }
    };
};