"use strict";
/*global module:false*/
module.exports = function(grunt) {

// show elapsed time at the end

require("time-grunt")(grunt);

// Load all grunt tasks

require("load-grunt-tasks")(grunt);

// Global congig variables.

var config = {

	pkg: grunt.file.readJSON("package.json"),

	paths: {
		src          : "src",
		dist         : "release",
	}
};

grunt.file.recurse("./gruntTasks/", function callback(abspath) {
	var tasks = require("./" + abspath)(grunt, config);

	for(var key in tasks){
		config[key] = tasks[key];
	}
});

grunt.initConfig(config);

grunt.registerTask("serve", function (target) {

	if (target === "dist") {
		return grunt.task.run(["build", "connect:dist:keepalive"]);
	}

	grunt.task.run([
		"clean:server",
		"concurrent:server",
		"connect:livereload",
		"watch"
		]);
});

grunt.registerTask("server", function (target) {
	grunt.log.warn("The `server` task has been deprecated. Use `grunt serve` to start a server.");
	grunt.task.run(["serve:"+target]);

});

grunt.registerTask("_watch", [
	"compass:clean",
	"compass:server"
	]);

grunt.registerTask( "test", [
	"clean:server",
	"connect:test",
	]);

grunt.registerTask("build", [
	"clean:dist",
	"useminPrepare",
	"copy:dist",
	"compass:clean",
	"compass:dist",
	"concat",
	"usemin",
	"concurrent:dist",
	]);

grunt.registerTask("default", [
	"build"
	]);

};
