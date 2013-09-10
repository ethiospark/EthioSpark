Ext.define('EthioSpark.view.Home', {
    extend: 'Ext.Container',
    xtype: 'home',
    requires: [
        'Ext.dataview.DataView'
    ],
    config: {
        layout: 'fit',
        items: [{
            xtype: 'dataview',
            inline: true,
            itemId: 'dvHomeSiteMap',
            itemTpl: '<div style="margin:16px"><image src="{image}"/><div style="text-align: center" class="esSmallText">{name}</div></div>',
            store: {
              fields: [{name: 'viewIndex', type: 'int' }, "name", "image"],
              data: [
                       //TODO: there should be a better way to handle icons - possibly SASS(style based on theme) or pictos fonts(vectors instead of pngs)?
                       { viewIndex: 0, name: 'Messages', image: 'touch\\resources\\themes\\images\\default\\pictos\\mail.png' },
                       { viewIndex: 1, name: StrRes.Profile[locale], image: 'touch\\resources\\themes\\images\\default\\pictos\\user.png' },
                       { viewIndex: 2, name: StrRes.Settings[locale], image: 'touch\\resources\\themes\\images\\default\\pictos\\settings.png' }   
                    ]
            }
        }]
    }
});