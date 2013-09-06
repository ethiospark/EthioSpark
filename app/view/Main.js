Ext.define('EthioSpark.view.Main', {
    extend: 'Ext.Panel',
    xtype: 'main',
    config: {    
        title: StrRes.CompanySite[locale],
        layout: {
            type: 'vbox',
            pack: 'center',
            align:'center'
        },
        items: [
                    {
                        xtype: 'panel',
                        pack:'center',
                        html: 'Some content will be added here...'
                    },
                    {
                        xtype: 'button',
                        action: 'goToLoginView',
                        text: 'Go to Login'
                    }   
              ]
        }
});
