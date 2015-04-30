/**
 * Created by chrisday on 1/05/15.
 */
var gulp = require("gulp");
var taskDir = require('./shared/js/dev-tasks');
var consoleLog = console.log;

// loop through the tasks in the directory
var taskName;
for (taskName in taskDir) {
    gulp.task(taskName, taskDir[taskName].deps, taskDir[taskName].func);
}



