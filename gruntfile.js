module.exports = function(grunt) {
  "use strict";

  grunt.initConfig({
    copy: {
      build: {
        files: [
          {
            expand: true,
            cwd: "./src/server/wcnexus",
            src: ["**"],
            dest: "./dist/server/wcnexus"
          }
        ]
      }
    },
    ts: {
      app: {
        files: [{
          src: ["src/server/\*\*/\*.ts", "!src/server/.baseDir.ts"],
          dest: "./dist/server"
        }],
        options: {
          module: "commonjs",
          target: "es6",
          sourceMap: false
        }
      }
    },
    watch: {
      ts: {
        files: ["src/server/\*\*/\*.ts"],
        tasks: ["ts"]
      },
      // views: {
      //   files: ["views/**/*.pug"],
      //   tasks: ["copy"]
      // }
    }
  });

  grunt.loadNpmTasks("grunt-contrib-copy");
  grunt.loadNpmTasks("grunt-contrib-watch");
  grunt.loadNpmTasks("grunt-ts");

  grunt.registerTask("default", [
    "copy",
    "ts"
  ]);

};