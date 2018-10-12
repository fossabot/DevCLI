#! /usr/bin/env node

//
//  Generated by https://www.npmjs.com/package/amd-bundle
//
(function (factory) {

    if ((typeof define === 'function')  &&  define.amd)
        define('install', ["@tech_query/node-toolkit"], factory);
    else if (typeof module === 'object')
        return  module.exports = factory(require('@tech_query/node-toolkit'));
    else
        return  this['install'] = factory(this['@tech_query/node-toolkit']);

})(function (_tech_query_node_toolkit) {

function merge(base, path) {
  return (base + '/' + path).replace(/\/\//g, '/').replace(/[^/.]+\/\.\.\//g, '').replace(/\.\//g, function (match, index, input) {
    return input[index - 1] === '.' ? match : '';
  });
}

function outPackage(name) {
  return /^[^./]/.test(name);
}

    if (typeof require !== 'function')
        require = function (name) {

            if (self[name] != null)  return self[name];

            throw ReferenceError('Can\'t find "' + name + '" module');
        };

    var _include_ = include.bind(null, './');

    function include(base, path) {

        path = outPackage( path )  ?  path  :  ('./' + merge(base, path));

        var module = _module_[path], exports;

        if (! module)  return require(path);

        if (! module.exports) {

            module.exports = { };

            var dependency = module.dependency;

            for (var i = 0;  dependency[i];  i++)
                module.dependency[i] = _include_( dependency[i] );

            exports = module.factory.apply(
                null,  module.dependency.concat(
                    include.bind(null, module.base),  module.exports,  module
                )
            );

            if (exports != null)  module.exports = exports;

            delete module.dependency;  delete module.factory;
        }

        return module.exports;
    }

var _module_ = {
    './install': {
        base: '.',
        dependency: [],
        factory: function factory(require, exports, module) {
            var _nodeToolkit = require('@tech_query/node-toolkit');

            var browser;
            var _arr = ['chrome', 'firefox'];

            for (var _i = 0; _i < _arr.length; _i++) {
                var name = _arr[_i];

                if ((0, _nodeToolkit.getNPMConfig)(name)) {
                    browser = name;
                    break;
                }
            }

            if ((browser = browser || (process.platform === 'win32' && 'IE')))
                (0, _nodeToolkit.setNPMConfig)('PUPPETEER_BROWSER', browser);
        }
    },
    '@tech_query/node-toolkit': {
        exports: _tech_query_node_toolkit
    }
};

    return _include_('./install');
});