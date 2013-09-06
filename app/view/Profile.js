Ext.define('EthioSpark.view.Profile', {
    extend: 'Ext.Container',
    xtype: 'profile',
    config: {
        title: StrRes.Settings[locale],
        layout: {
            type: 'vbox',
            pack: 'center',
            align: 'center'
        },
        html: 'Profile content ....'
    }
});
