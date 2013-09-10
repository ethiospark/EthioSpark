Ext.define('EthioSpark.view.Profile', {
    extend: 'Ext.Container',
    xtype: 'profile',
    config: {
        title: StrRes.Profile[locale],
        layout: {
            type: 'vbox',
            pack: 'center',
            align: 'center'
        },
        items: [
                    {
                        xtype: 'panel',
                        pack:'center',
                        html: 'User profile content...'
                    },
                    {
                        xtype: 'button',
                        action: 'goToEditProfile',
                        text: StrRes.EditProfile[locale]
                    }   
              ]
        }
});
