Ext.define('EthioSpark.controller.Profile', {
    extend: 'Ext.app.Controller',
    requires: ['EthioSpark.view.EditProfile'],
    config: {
        control: {
            goToEditProfileButton: {
                tap: 'goToEditProfile'
            }
        },

        refs: {
            goToEditProfileButton: 'button[action=goToEditProfile]'
        }
    },

    goToEditProfile: function ()
    {
        NvgView.push(Ext.create('EthioSpark.view.EditProfile'));
    }
});