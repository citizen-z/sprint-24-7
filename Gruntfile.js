/**
 * Created by Pavlo on 19-09-14.
 */
module.exports = function(grunt) {

    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        concat: {
            options: {

            },
            dist: {
                src: ['css/bootstrap.min.css','css/bootstrap-rtl.css','css/sprint.css','css/callout.css'],
                dest: 'css/sprint-css.css'
            }
        }
    });

    // Load the plugin that provides the "uglify" task.
    grunt.loadNpmTasks('grunt-contrib-concat');

    // Default task(s).
    grunt.registerTask('default', ['concat']);

};