Ext.define('EthioSpark.controller.Home', {
    extend: 'Ext.app.Controller',
    config: {
        control: {
            dvHomeSiteMap: {
                itemtap: 'switchToView'
            }
        },
        refs: {
            dvHomeSiteMap: 'dataview#dvHomeSiteMap'
        }
    },

    switchToView: function (dataView, index, target, record, e, eOpts)
    {
        if (record != null)
        {
            var viewIndex = record.get("viewIndex");
            switch (viewIndex)
            {
                case 1:
                    //Profile
                    NvgView.push(Ext.create('EthioSpark.view.Profile'));
                    break;
                case 2:
                    //settings
                    NvgView.push(Ext.create('EthioSpark.view.Setting'));
                    break;
                default:
                    UserMessageBox.showPrompt('Sorry mate! Under construction!');
                    break;

            }
        }
    }
});