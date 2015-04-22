# grunt-validate-webapp

> Grunt task to validate a webapp manifest file

## Getting Started
This plugin requires Grunt `~0.4.5`

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```shell
npm install grunt-validate-webapp --save-dev
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-validate-webapp');
```

## The "validatewebapp" task

### Overview
In your project's Gruntfile, add a section named `validatewebapp` to the data object passed into `grunt.initConfig()`.

```js
grunt.initConfig({
  validatewebapp: {
    options: {
      absolute: false,
      packaged: false
    },
    your_target: {
      files: { src: /* list the manifests */ }
    },
  },
});
```

### Options

#### options.absolute
Type: `Bool`
Default value: `false`

Determines if icon URLs in the webapp manifest are assumed to be relative to the
manifest's location or absolutely to the path the task is run from.

#### options.packaged
Type: `Bool`
Default value: `false`

If `true` a packaged app instead of a webapp are expected. Doesn't currently actually
work, as the task expects .webapp files and the icon validation doesn't work
with packaged apps yet. But the option is there...

## Contributing
In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code using [Grunt](http://gruntjs.com/).

