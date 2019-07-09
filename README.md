# vue-test-utils-issue

```shell
➜  vue-test-utils-issue git:(master) npm run unit

> test-admin@ unit /Users/joe223/git/vue-test-utils-issue
> jest --config test/unit/jest.conf.js

 FAIL  test/unit/specs/configurationValidator.spec.js
  ● Test suite failed to run

    /Users/joe223/git/vue-test-utils-issue/test/unit/setup.js:1
    ({"Object.<anonymous>":function(module,exports,require,__dirname,__filename,global,jest){import Vue from 'vue';
                                                                                                    ^^^
    
    SyntaxError: Unexpected identifier
      
      at ScriptTransformer._transformAndBuildScript (node_modules/jest-runtime/build/script_transformer.js:316:17)

 FAIL  test/unit/specs/routesFormatter.spec.js
  ● Test suite failed to run

    /Users/joe223/git/vue-test-utils-issue/test/unit/setup.js:1
    ({"Object.<anonymous>":function(module,exports,require,__dirname,__filename,global,jest){import Vue from 'vue';
                                                                                                    ^^^
    
    SyntaxError: Unexpected identifier
      
      at ScriptTransformer._transformAndBuildScript (node_modules/jest-runtime/build/script_transformer.js:316:17)

Test Suites: 2 failed, 2 total
Tests:       0 total
Snapshots:   0 total
Time:        0.675s
Ran all test suites.
npm ERR! code ELIFECYCLE
npm ERR! errno 1
npm ERR! test-admin@ unit: `jest --config test/unit/jest.conf.js`
npm ERR! Exit status 1
npm ERR! 
npm ERR! Failed at the test-admin@ unit script.
npm ERR! This is probably not a problem with npm. There is likely additional logging output above.

npm ERR! A complete log of this run can be found in:
