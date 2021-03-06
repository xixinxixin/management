define([
    'modules/manageui/configs'
], function (configs) {
    'use strict';

    configs
        .config([
            '$stateProvider',
            '$appStates',
            function ($stateProvider, $appStates) {
                var stateFn = $stateProvider.state;

                $stateProvider.state = function (state, options) {
                    stateFn(state, options);
                    $appStates[state] = options;
                };
            }
        ])
        .run([
            '$rootScope',
            '$tabStore',
            function ($rootScope, $tabStore) {
                $rootScope.$on('$stateChangeStart', function (event, toState, toParams, fromState, fromParams) {
                    // 跳转到不是首页的界面清除所有tab
                    if (fromState.name === 'main' || fromState.name.indexOf('main.') === 0) {
                        $.each($tabStore, function (idx, item) {
                            item.dismiss();
                            delete $tabStore[idx];
                        });
                    }
                });
            }
        ]);
});