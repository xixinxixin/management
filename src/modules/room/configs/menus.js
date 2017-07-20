define('modules.room.configs.menus', [
    'modules.room.configs'
], function (configs) {
    'use strict';

    configs.config([
        'modules.manageui.configs.linkManagerProvider',
        function (linkManagerProvider) {
            linkManagerProvider
                .add({
                    id: 'roomstate',
                    text: '房态显示',
                    icon: 'fa fa-camera fa-fw',
                    templateUrl: 'views/room/State.html',
                    dependencies: ['modules.room.requires']
                });

            linkManagerProvider
                .add({
                    id: 'roommanage',
                    text: '信息管理',
                    icon: 'fa fa-comments fa-fw'
                })
                .add({
                    id: 'roommanage_search',
                    text: '事件查询',
                    templateUrl: 'views/room/manage/EventLog.html',
                    dependencies: ['modules.room.requires']
                })
                .add({
                    id: 'roommanage_infomanage',
                    text: '消息管理',
                    templateUrl: 'views/room/manage/Message.html',
                    dependencies: ['modules.room.requires']
                });

            linkManagerProvider
                .add({
                    id: 'roomsettings',
                    text: '房间管理',
                    icon: 'fa fa-building fa-fw'
                })
                .add({
                    id: 'roomsettings_build',
                    text: '楼栋',
                    templateUrl: 'views/room/manage/Build.html',
                    dependencies: ['modules.room.requires']
                })
                .add({
                    id: 'roomsettings_category',
                    text: '房间类型',
                    templateUrl: 'views/room/manage/RoomTypes.html',
                    dependencies: ['modules.room.requires']
                })
                .add({
                    id: 'roomsettings_no',
                    text: '房间设置',
                    templateUrl: 'views/room/manage/Room.html',
                    dependencies: ['modules.room.requires']
                })
                .add({
                    id: 'roomsettings_mode',
                    text: '设备模式',
                    src: 'test.html'
                });

            linkManagerProvider
                .add({
                    id: 'rcusettings',
                    text: 'RCU设置',
                    icon: 'fa fa-server fa-fw'
                })
                .add({
                    id: 'rcusettings_project',
                    text: '工程设置',
                    templateUrl: 'views/room/rcu/Project.html',
                    dependencies: ['modules.room.requires']
                })
                .add({
                    id: 'rcusettings_parameters',
                    text: '参数设置',
                    src: 'test.html'
                })
                .add({
                    id: 'rcusettings_time',
                    text: '时间设置',
                    src: 'test.html'
                })
                .add({
                    id: 'rcusettings_resetupdate',
                    text: '复位升级',
                    src: 'test.html'
                });

            linkManagerProvider
                .add({
                    id: 'systemSettings',
                    text: '系统设置',
                    icon: 'fa fa-cog fa-fw'
                })
                .add({
                    id: 'systemSettings_role',
                    text: '人员类别管理',
                    templateUrl: 'views/room/personal/Roles.html',
                    dependencies: ['modules.room.requires']
                })
                .add({
                    id: 'systemSettings_user',
                    text: '人员管理',
                    templateUrl: 'views/room/personal/Users.html',
                    dependencies: ['modules.room.requires']
                })
                .add({
                    id: 'systemSettings_identity',
                    text: '身份设置',
                    src: 'test.html'
                })
                .add({
                    id: 'systemSettings_icon',
                    text: '图标设置',
                    src: 'test.html'
                })
                .add({
                    id: 'systemSettings_call',
                    text: '呼叫设置',
                    src: 'test.html'
                })
                .add({
                    id: 'systemSettings_interface',
                    text: '接口设置',
                    src: 'test.html'
                })
                .add({
                    id: 'systemSettings_theme',
                    text: '主题选择',
                    src: 'test.html'
                });

            linkManagerProvider
                .add({
                    id: 'help',
                    text: '系统帮助',
                    icon: 'fa fa-question-circle fa-fw'
                })
                .add({
                    id: 'help_register',
                    text: '注册信息',
                    src: 'test.html'
                })
                .add({
                    id: 'help_tl',
                    text: '图例说明',
                    src: 'test.html'
                })
                .add({
                    id: 'help_help',
                    text: '使用帮助',
                    src: 'test.html'
                })
                .add({
                    id: 'help_interface',
                    text: '接口说明',
                    src: 'test.html'
                });
        }
    ]);
});