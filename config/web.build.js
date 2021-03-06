require.config({
    removeCombined: true,
    fileExclusionRegExp: /^\./,
    paths: {
        'api-check': '../bower_components/api-check/dist/api-check.min',
        'ng-table': 'js/ng-table.min',
        'metisMenu': 'js/metisMenu.min',
        'cropper': '../bower_components/cropper/dist/cropper.min',
        'angularjs-slider': '../bower_components/angularjs-slider/dist/rzslider.min',
        'angular': '../bower_components/angular/angular.min',
        'jquery': '../bower_components/jquery/dist/jquery.min',
        'jquery-ui': '../bower_components/jquery-ui/jquery-ui.min',
        'bootstrap': '../bower_components/bootstrap/dist/js/bootstrap.min',
        'ui-bootstrap-tpls': '../bower_components/angular-bootstrap/ui-bootstrap-tpls.min',
        'angular-ui-router': '../bower_components/angular-ui-router/release/angular-ui-router.min',
        'smalot-bootstrap-datetimepicker': '../bower_components/smalot-bootstrap-datetimepicker/js/bootstrap-datetimepicker',
        'smalot-bootstrap-datetimepicker-zhcn': '../bower_components/smalot-bootstrap-datetimepicker/js/locales/bootstrap-datetimepicker.zh-CN',
        'ui-switch': 'js/angular-ui-switch.min',
        'app/application': 'js/app.application.min'
    },
    shim: {},
    exclude: [
        'api-check',
        'ng-table',
        'metisMenu',
        'cropper',
        'angularjs-slider',
        'smalot-bootstrap-datetimepicker',
        'smalot-bootstrap-datetimepicker-zhcn',
        'angular',
        'jquery',
        'jquery-ui',
        'bootstrap',
        'ui-bootstrap-tpls',
        'angular-ui-router',
        'ui-switch',
        'app/application'
    ]
});