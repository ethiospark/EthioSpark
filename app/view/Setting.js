Ext.define('EthioSpark.view.Setting', {
    extend: 'Ext.Container',
    xtype: 'setting',
    config: {
        title: StrRes.Settings[locale],
        layout: {
            type: 'vbox',
            pack: 'center',
            align: 'center'
        },
        items: [
            {
                xtype: 'button',
                action: 'logOut',
                text: 'Logout'
            }
        ]
    }
});
