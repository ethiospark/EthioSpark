Ext.define('EthioSpark.view.EditProfile', {
    extend: 'Ext.Container',
    xtype: 'editprofile',
    config: {
        title: StrRes.EditProfile[locale],
        layout: {
            type: 'vbox',
            pack: 'center',
            align: 'center'
        },
        items: [
                    {
                        xtype: 'panel',
                        pack:'center',
                        html: 'Edit profile content...'
                    }   
              ]
        }
});
