var techs = {
        // essential
        fileProvider: require('enb/techs/file-provider'),
        fileMerge: require('enb/techs/file-merge'),
        fileCopy: require('enb/techs/file-copy'),

        // optimization
        borschik: require('enb-borschik/techs/borschik'),

        // css
        stylus: require('enb-stylus/techs/stylus'),

        // js
        browserJs: require('enb-js/techs/browser-js'),

        // bemtree
        // bemtree: require('enb-bemxjst/techs/bemtree'),

        // bemhtml
        bemhtml: require('enb-bemxjst/techs/bemhtml'),
        bemjsonToHtml: require('enb-bemxjst/techs/bemjson-to-html')
    },
    enbBemTechs = require('enb-bem-techs'),
    beautify = require('enb-beautify/techs/enb-beautify-html'),
    levels = [
        { path: 'node_modules/bem-core/common.blocks', check: false },
        { path: 'node_modules/bem-core/desktop.blocks', check: false },
        { path: 'node_modules/bem-components/common.blocks', check: false },
        { path: 'node_modules/bem-components/desktop.blocks', check: false },
        { path: 'node_modules/bem-components/design/common.blocks', check: false },
        { path: 'node_modules/bem-components/design/desktop.blocks', check: false },
        { path: 'node_modules/bem-font-awesome', check: false },
        'common.blocks',
        'desktop.blocks'
    ],

    pages = [
        'desktop.bundles/index',
        'desktop.bundles/list',
        'desktop.bundles/post'
    ],

    fse = require('fs-extra'),
    path = require('path'),
    glob = require('glob'),

    rootDir = path.join(__dirname, '..');

module.exports = function(config) {
    var isProd = process.env.YENV === 'production';

    config.task('dist', function (task) {

        // build targets and copy it to 'dist' folder
        function copyTargets(buildInfo) {
            buildInfo.builtTargets.forEach(function (target) {
                var src = path.join(rootDir, target),
                    dst = path.join(rootDir, 'dist', path.basename(target));

                fse.copySync(src, dst);
            });
        }

        return task.buildTargets(pages)
            .then(function (buildInfo) {
                copyTargets(buildInfo);
                task.log('Dist was created.');
            });
    });

    config.nodes('*.bundles/*', function(nodeConfig) {
        nodeConfig.addTechs([
            // essential
            [enbBemTechs.levels, { levels: levels }],
            [techs.fileProvider, { target: '?.bemjson.js' }],
            [enbBemTechs.bemjsonToBemdecl],
            [enbBemTechs.deps],
            [enbBemTechs.files],

            // css
            [techs.stylus, {
              target: '?.css', // there is the changed target
              sourcemap: false,
              autoprefixer: {
                browsers: ['ie >= 10', 'last 2 versions', 'opera 12.1', '> 2%']
              }
            }],

            // [require('sharps').enb, {
            //   config: {
            //     maxWidth: '1100px',
            //     gutter: '10px',
            //     flex: 'flex'
            //   },
            //   source: '?.no-grid.css' // there is the source
            // }],

            // bemtree
            // [techs.bemtree, { sourceSuffixes: ['bemtree', 'bemtree.js'] }],

            // bemhtml
            [techs.bemhtml, {
                sourceSuffixes: ['bemhtml', 'bemhtml.js'],
                forceBaseTemplates: true,
                engineOptions : { elemJsInstances : true }
            }],

            // html
            [techs.bemjsonToHtml, { target: '?.pre.html' }],

            // client bemhtml
            [enbBemTechs.depsByTechToBemdecl, {
                target: '?.bemhtml.bemdecl.js',
                sourceTech: 'js',
                destTech: 'bemhtml'
            }],
            [enbBemTechs.deps, {
                target: '?.bemhtml.deps.js',
                bemdeclFile: '?.bemhtml.bemdecl.js'
            }],
            [enbBemTechs.files, {
                depsFile: '?.bemhtml.deps.js',
                filesTarget: '?.bemhtml.files',
                dirsTarget: '?.bemhtml.dirs'
            }],
            [techs.bemhtml, {
                target: '?.browser.bemhtml.js',
                filesTarget: '?.bemhtml.files',
                sourceSuffixes: ['bemhtml', 'bemhtml.js'],
                engineOptions : { elemJsInstances : true }
            }],

            // js
            [techs.browserJs, { includeYM: true }],
            [techs.fileMerge, {
                target: '?.js',
                sources: ['?.browser.js', '?.browser.bemhtml.js']
            }],

            // borschik
            [techs.borschik, { source: '?.js', target: '?.min.js', minify: isProd }],
            [techs.borschik, { source: '?.css', target: '?.min.css', minify: isProd }],
            [techs.borschik, { source: '?.pre.html', target: '_?.borschik.html' }]
        ]);

        nodeConfig.addTargets([/* '?.bemtree.js', */ '?.html', '?.min.css', '?.min.js']);
    });

    config.mode('development', function() {
        config.nodes('*.bundles/*', function(nodeConfig) {
            nodeConfig.addTechs([
                [techs.fileCopy, { sourceTarget: '_?.borschik.html', destTarget: '?.html' }]
            ]);
        });
    });

    config.mode('production', function() {
        config.nodes('*.bundles/*', function(nodeConfig) {
            nodeConfig.addTechs([
                // html beautify
                [beautify, { htmlFile: '_?.borschik.html', target: '?.html' }]
            ]);
        });
    });
};
