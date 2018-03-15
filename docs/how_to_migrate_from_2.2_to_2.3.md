# Migration from ngeo 2.2 to ngeo 2.3

The version 2.3 of ngeo was adapted to prepare your aplication to to use [webpack](https://webpack.js.org/).
That force us to redesign our manner to organize the code. The following "how to" will help you to
understand what we have changed, why and will help you to report these changes in your project. This will
be explained in two sections. One before the switch to ngeo 2.3, and one to complete the work after
the upgrade to ngeo 2.3.

Note:
You must know that now in ngeo, the code is organized in modules. There is no more `directive` or `service`
folder. Instead we have a folder for each module. A module is a part of the application. For instance, the
`authentication` folder will contains the component, the partial and the service related to
the authentication. The folder will also contains a `module.js` file that can be include in your
application to load directly all what is require for this module to work.


## Main steps to prepare your code for ngeo 2.3 (on ngeo 2.2)

There is some steps to complete before to try to use ngeo 2.3. We encourage you to build and test
your application after each step. You should see any difference on the use of your application.

 1. [Remove dependencies to the goog library](#remove-dependencies-to-the-goog-library)
 1. [Use only one goog.provide per file](#one-googprovide-per-file)
 1. [Integrate eslint googshift and activate check](#integrate-eslint-googshift-and-activate-check)
 1. [Transformation of the code via googshift](#transformation-of-the-code-via-googshift)

If you have **no custom component** in you application you may **start directly with the third point**.

### Remove dependencies to the goog library

If in one of your .js file you refer to a `goog`function. You should replace it because we don't
use anymore this library (we will stop to use google closure to build our code). Excepted for the following
function: `goog.asserts`, `goog.require` and `goog.provide` (and `goog.module` but you should not have any
one in your code for now). We can ignors theme because we will manage them within a script, later.

To search occurences of `goog` function (without above exceptions) you can use this command (unix):

```
git grep goog <path_to_apps_folder> | grep -v 'require' | grep -v 'provide' | grep -v 'asserts' | grep -v 'google'
```

In a GeoMapFish project, `path_to_apps_folder` will be the path to your `static-ngeo` folder.

To know how to replace a goog function, you can help you by searching the same function in ngeo
2.1 and by comparing the line with the same line in ngeo 2.2 or upper. Examples:

 - `goog.getUid` become `ol.getUi`.
 - `goog.object.extend` become `ol.obj.assign`.
 - ...

Test, then commit your changes.

### Use only one goog.provide per file

Webpack expect only one export per file. If a file contains more than one `goog.provide`, simply remove one.
Ensure that the removed value is not required (by a `goog.require`) in another file. If you find
one, replace the required value by the one still provided.

You must provide only what you declare as provided. So rename your provided class to what you
effectively provides. For instance, if you provide an `an_app_name.module.component`, you must only
have an `an_app_name.module.component` in your file. (you can have an entity assigned to this
component, like `app.module.component.myObjec`, but not a new entity, like `app.module.Service`.)
We will see later what `an_app_name` means, we encourage you to simply name it `app`.

Also the path and the name of the file must match with what you provide. On the example above, it will
be expected that the path to your file is `<a_folder>/module/component.js`. (We will configure
the `<a_folder>` value later.)

If you have multiple differents entities in one file you can:

 - Split your file to have one class (and provide) per file.
 - Or if you don't use this entity out of the file, assign this entity to a variable inside the
   file (typically for a controllers of a component).

To help you, you can see how components, service, factory, etc. are made in ngeo 2.3.

Note for GeoMapFish:
Your application main controllers (files in static-ngeo/js/<application>.js). Are also concerned.
But as the build expect to find the inteface name in the 'goog.provide', you must potentialy rename
your file like the interface.
Example: you have a `ngeodesktop` interface, that means that your file must be named `ngeodesktop.js` and the
file must provide `<an_app_name>_ngeodesktop`. You may have to exceptionnaly adapt this line in your
CONST_Makefile: https://github.com/camptocamp/c2cgeoportal/blob/97eb3dcb4d6dda719cba69d7d62ecb7ebbbc72bd/c2cgeoportal/scaffolds/update/CONST_Makefile_tmpl#L911
Where `$(PACKAGE)` is `<an_app_name>` and `$*` is one of your interface (like `ngeodesktop`).

Test, then commit your changes.

### Integrate eslint googshift and activate check

To ensure that the code will work with webpack, we use [eslint](https://eslint.org/). You must add the new
configuration for the linter. Create a file: `.eslintrc.yaml` in your js folder (For GeoMapfish, in
`<project>/static-ngeo/apps` and `<project>/static-ngeo/components`). And copy paste this content:

```
plugins:
  - googshift

rules:
  googshift/no-duplicate-requires: error

  googshift/no-missing-requires:
    - error
    - prefix: []

  googshift/no-unused-requires: warn

  googshift/one-provide-or-module:
    - error
    - entryPoints: [<an_app_name>]
      root: <an_app_name>

  googshift/requires-first: error

  googshift/valid-provide-and-module:
    - warn
    - entryPoints: [<an_app_name>]
      root: src/module
      replace: ../../<path_to_this_folder/><a_folder>|<an_app_name>

  googshift/valid-requires: error

  no-unused-vars: warn
```

Where `an_app_name` match with what you choose in the previous step for the same value.
and for the path on the line `replace` : 

  - `../../` is because the script will be read from `node_modules/eslint-plugin-googshift`.
  - `<path_to_this_folder/>` for the path to the top folder of this file.
  - `a_folder` is the top folder of this file.
  - `|<an_app_name>` to refers this path at this name. This final value will be used as base name for what
    you provide in your .js files (the `<an_app_name>` part in `<an_app_name>.module.component`).

Then run the linter, and fix the errors (and warnings when it's possible). The mains errors will be missing
or unused `goog-provide` values.

To run the linter in GeoMapFish, run `rm -f .build/eslint.timestamp && make -f <instance>.mk lint-ngeo`.

Test, then commit your changes.

### Transformation of the code via googshift

To achieve this preparation phase, run this script:

```
./node_modules/.bin/jscodeshift --transform=node_modules/googshift/transforms/goog_provide_to_goog_module.js --legacy true <path_to_your_js_folder>
```

In Geompafish, the `<path_to_your_js_folder>` will be `<application>/static-ngeo/apps/ <application>/static-ngeo/components/`.

The script will make your js files ready for webpack. If the previous steps was well done, your application
should work. Otherwise you can adapt your code now or revert the changes, correct your files and
run the script again.

Test, then commit your changes.


## Use ngeo 2.3

At this point you can update your application to use ngeo 2.3. It's recommanded to work on a branch, because
the changes can't be easily tested before the end of the transformation.

### Summary

 1. [Transforms your components to modules](#transforms-your-components-to-modules)
 1. [Transforms your applications to modules](#transforms-your-applications-to-modules)
 1. [Test your application](#test-your-application)

### Transforms your components to modules

To do

### Transforms your applications to modules

To do

### Test your application

To do
