Ext.define('AM.controller.Users',{
	extend:'Ext.app.Controller',
	
	views: [
	    'user.List'
	],
	
	init:function(){
		this.control({
			'userlist':{
				itemdblclick : this.editUser
			}
		});
	},

	onPanelRendered:function(){
		console.log('the panel was rendered');
	},
	
	editUser:function(grid, record){
		console.log('Double clicked on ' + record.get('name'));
	}

});