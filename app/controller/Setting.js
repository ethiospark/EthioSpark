Ext.define('EthioSpark.controller.Setting', {
    extend: 'Ext.app.Controller',

    config: {
        control: {
            cmdLogOut: {
                tap: 'logOut'
            }
        },

        refs: {
            cmdLogOut: 'button[action=logOut]'
        }
    },

    logOut: function () {
        Ext.Ajax.request({
            url: 'Account/LogOff',
            scope: this,
            successJson: function (response) {
                NvgView.replaceView(Ext.create('EthioSpark.view.Main'), true);
            }
        });
    }
});