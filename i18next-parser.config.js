

module.exports = {
    createOldCatalogs: false, // save previous translation catalogs to the \_old folder

    lexers: {
        js: ['JsxLexer'], // we're writing jsx inside .js files
        default: ['JavascriptLexer'],
    },

    locales: ['en', 'fa'],
    // An array of the locales in your applications
    identatin: 2,

    namespaceSeparator: '.',
    // Namespace separator used in your translation keys
    // If you want to use plain english keys, separators such as `.` and `:` will conflict. You might want to set `keySeparator: false` and `namespaceSeparator: false`. That way, `t('Status: Loading...')` will not think that there are a namespace and three separator dots for instance.

    output: 'public/locales/$LOCALE/$NAMESPACE.json',
    // Supports $LOCALE and $NAMESPACE injection
    // Supports JSON (.json) and YAML (.yml) file formats
    // Where to write the locale files relative to process.cwd()

    input: [
        'src/**/*.js',
    ],
    // An array of globs that describe where to look for source files
    // relative to the location of the configuration file
    // Globs syntax: https://github.com/isaacs/node-glob#glob-primer
}

// var fs = require('fs');
// var chalk = require('chalk');

// module.exports = {
//     input: [
//         'src/**/*.{js,jsx}',
//         // Use ! to filter out files or directories
//         // '!app/**/*.spec.{js,jsx}',
//         // '!app/i18n/**',
//         '!**/node_modules/**',
//     ],
//     output: 'public/assets/locales/$LOCALE/$NAMESPACE.json',
//     options: {
//         debug: true,
//         func: {
//             list: ['i18next.t', 'i18n.t'],
//             extensions: ['.js', '.jsx']
//         },
//         trans: {
//             component: 'Trans',
//             i18nKey: 'i18nKey',
//             defaultsKey: 'defaults',
//             extensions: ['.js', '.jsx'],
//             fallbackKey: function(ns, value) {
//                 return value;
//             },
//             acorn: {
//                 ecmaVersion: 2020,
//                 sourceType: 'module', // defaults to 'module'
//                 // Check out https://github.com/acornjs/acorn/tree/master/acorn#interface for additional options
//             }
//         },
//         lngs: ['en','de'],
//         ns: [
//             'locale',
//             'resource'
//         ],
//         defaultLng: 'en',
//         defaultNs: 'resource',
//         defaultValue: '__STRING_NOT_TRANSLATED__',
//         resource: {
//             loadPath: 'public/assets/locales/{{lng}}/{{ns}}.json',
//             savePath: 'public/assets/locales/{{lng}}/{{ns}}.json',
//             jsonIndent: 2,
//             lineEnding: '\n'
//         },
//         nsSeparator: false, // namespace separator
//         keySeparator: false, // key separator
//         interpolation: {
//             prefix: '{{',
//             suffix: '}}'
//         }
//     },
//     transform: function customTransform(file, enc, done) {
//         "use strict";
//         const parser = this.parser;
//         const content = fs.readFileSync(file.path, enc);
//         let count = 0;

//         parser.parseFuncFromString(content, { list: ['i18next._', 'i18next.__'] }, (key, options) => {
//             parser.set(key, Object.assign({}, options, {
//                 nsSeparator: false,
//                 keySeparator: false
//             }));
//             ++count;
//         });

//         if (count > 0) {
//             console.log(`i18next-scanner: count=${chalk.cyan(count)}, file=${chalk.yellow(JSON.stringify(file.relative))}`);
//         }

//         done();
//     }
// };
