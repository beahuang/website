'use strict';
/* globals module */

   module.exports = function( grunt ){
    return {
     connect: {
      options: {
        port: 9000,
        // Change this to '0.0.0.0' to access the server from outside.
        hostname: 'localhost',
        livereload: 35729
      },
      livereload: {
        options: {
          open: true,
          base: [
          '.tmp',
          '<%= paths.src %>/public'
          ]
        }
      },
      test: {
        options: {
          port: 9001,
          base: '<%= paths.test %>/',
        }
      },
      dist: {
        options: {
          base: '<%= paths.dist %>/public'
        }
      }
    }
  };
};
