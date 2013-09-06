Ext.define('EthioSpark.view.Home', {
    extend: 'Ext.TabPanel',
    xtype: 'home',
    requires: [
         'EthioSpark.view.Profile',
         'EthioSpark.view.Setting'
     ],
    config: {
        tabBarPosition: 'bottom',
        items: [
                    {
                        title: 'Profile',
                        xtype: 'profile',
                        iconCls:'user'
                    },
                    {
                        title: 'Settings',
                        xtype: 'setting',
                        iconCls: 'settings'
                    } 
              ]
        }
});
