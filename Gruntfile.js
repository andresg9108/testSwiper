module.exports = function(grunt) {
    // Route
    var aRoute = [
        './web/*'
    ];
    
    // Js
    var aRouteJs = ['./src/js/*'];

    // CSS
    var aRouteCSS = ['./src/css/*'];

    // load all grunt tasks
    require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        watch: {
            options: {
                nospawn: true,
                livereload: true
            },
            load_route: {
                files: aRoute
            },
            load_js: {
                files: aRouteJs
            },
            load_css: {
                files: aRouteCSS
            }
        }
        
    });
    
    grunt.registerTask('default', ['watch']);
    grunt.loadNpmTasks('grunt-contrib');
    grunt.loadNpmTasks('grunt-contrib-handlebars');
};