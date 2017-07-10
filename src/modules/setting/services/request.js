/**
 * Created by fyl08 on 2017/1/4.
 */
define('modules.setting.services.request', [
    'modules.setting.module'
], function (module) {
    'use strict';

    module.service('modules.setting.services.request', [
        function () {
            this.登录 = '';
            this.退出 = '';

            this.人员类别列表 = '/data/人员类别列表.json';
            this.用户列表 = '/data/用户列表.json';

            this.楼栋列表 = '/data/楼栋列表.json';
            this.楼栋明细 = '/data/楼栋明细.json';
            this.房间状态列表 = '/data/房间状态列表.json';
        }
    ]);
});