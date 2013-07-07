Ext.application({
	requires: ['Ext.container.Viewport'],
	name:'AM',
	appFolder:'js/siscli/app',
	
	controllers:[
	    'Users'
	],
	
	launch: function(){
		Ext.create('Ext.container.Viewport',{
			layout:'fit',
			items:[
			       {
			    	   xtype:'userlist'
			       }
			]		
		});
	}
});