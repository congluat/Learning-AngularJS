(function(){
	
	var app = angular.module('store',[]);
	
	app.controller('StoreController',function(){
		this.products=gems;
	});
	
	var gems =[
	{
		name:'Dedocahedron',
		price: 2.95,
		description:'dasdasdasdasdasdasfhserysertgyer',
		canPurchase: true,
		soldOut: true
	},
	{
		name:'Gem gem gem',
		price: 7.95,
		description:'dasdawerbsegsgaw',
		canPurchase: true,
		soldOut: true
	},
	]
	
})();
