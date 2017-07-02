define('modules.manageui.module', [
    'app.application',
    'modules.manageui.configs.provide',
    'modules.manageui.configs.state',
    'modules.manageui.configs.routes',
    'modules.manageui.configs.linkManager',
    'modules.manageui.configs.tab',
    'modules.manageui.configs.httpConfig'
], function (application) {
    'use strict';

    application.requires.push('modules.manageui');

    return angular
        .module('modules.manageui', [
            'ui.router',
            'modules.manageui.configs'
        ])
        .config([
            '$sceDelegateProvider',
            function ($sceDelegateProvider) {
                $sceDelegateProvider
                    .resourceUrlWhitelist([
                        'self',
                        'http://www.baidu.com/**'
                    ]);
            }
        ]);
});