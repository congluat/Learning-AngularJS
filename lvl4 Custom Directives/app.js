(function(){
	
	var app = angular.module('store',[]);
	
	app.directive('productTitle',function(){	
		return {
			restrict: 'E', //Element . A for Attribute
			templateUrl:'product-title.html'
		};
	});
		
	app.controller("ReviewController",function(){
		this.review={};
		
		this.addReview = function(product){
			product.reviews.push(this.review);
			this.review={};
		};
	});
	
	
	app.controller('StoreController',function(){
		this.products=[
		{
			name:'Awesome Multi-touch Keyboard',
			price: 250.00,
			description:'adasdasdasdas',
			images:[
				
			],
			reviews:[
				{
					stars: 5,
					body: "I love this product!",
					author: "congluat27@gmail.com"
				},
				{
					stars: 1,
					body: "This product is sucks",
					author: "abc@gmail.com"
				}
			]
		}
		];
	});

	app.controller('PannelControler',function(){
		
		this.tab=1;
		
		this.selectTab = function(setTab){			
			this.tab = setTab;
		};
		
		this.isSelected = function(checkTab){
			return this.tab === checkTab;
		};
	});
	
})();
