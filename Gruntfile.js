module.exports =function(grunt){
    grunt.initConfig({
        concat:{
            js:{
                src:['public/javascripts/angular.min.js','public/javascripts/angular-route.min.js'],
                dest:'public/javascripts/scripts.js'
            }
        }
    });
    grunt.loadNpmTasks('grunt-contrib-concat');
}