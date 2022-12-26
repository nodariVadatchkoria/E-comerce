"use strict";(self.webpackChunkE_comerce=self.webpackChunkE_comerce||[]).push([[104],{4104:(A,l,c)=>{c.r(l),c.d(l,{ProductsModule:()=>M});var s=c(6895),u=c(3128),t=c(8256),a=c(5174),g=c(6851),i=c(433);const m=function(){return["/products"]},h=function(o){return{category:o}};function f(o,n){if(1&o&&(t.TgZ(0,"a",9),t._uU(1),t.qZA()),2&o){const e=n.$implicit;t.Q6J("routerLink",t.DdM(3,m))("queryParams",t.VKq(4,h,e.id)),t.xp6(1),t.Oqu(e.name)}}function P(o,n){1&o&&t._UZ(0,"app-product-card",10),2&o&&t.Q6J("product",n.$implicit)}function y(o,n){if(1&o&&(t.TgZ(0,"div",9),t._uU(1),t.qZA()),2&o){const e=t.oxw();t.xp6(1),t.hij(" ",e.message," ")}}function C(o,n){1&o&&t._UZ(0,"app-product-card",10),2&o&&t.Q6J("product",n.$implicit)}const Z=[{path:"",component:(()=>{class o{constructor(e,r,d){this.productsService=e,this.categoriesService=r,this.route=d,this.products=[],this.categories$=this.categoriesService.getAll()}ngOnInit(){this.route.queryParams.subscribe(e=>{this.categoryId=e.category,this.search=e.search,this.getProducts()})}getProducts(){this.productsService.getProducts({categoryId:this.categoryId||null,search:this.search||null}).pipe().subscribe(r=>{this.products=r})}searchHandle(e){e.length>2?(this.search=e,this.getProducts()):0===e.length&&(this.search=null,this.getProducts())}}return o.\u0275fac=function(e){return new(e||o)(t.Y36(a.su),t.Y36(a.GD),t.Y36(u.gz))},o.\u0275cmp=t.Xpm({type:o,selectors:[["app-products"]],decls:12,vars:7,consts:[[1,"d-flex","gap-4"],[1,"manager"],[1,"list-group"],[1,"list-group-item","list-group-item-action",3,"routerLink"],["routerLinkActive","active","class","list-group-item list-group-item-action",3,"routerLink","queryParams",4,"ngFor","ngForOf"],[1,"flex-fill"],["type","search","placeholder","Filter",1,"form-control",3,"ngModel","ngModelChange"],[1,"products"],[3,"product",4,"ngFor","ngForOf"],["routerLinkActive","active",1,"list-group-item","list-group-item-action",3,"routerLink","queryParams"],[3,"product"]],template:function(e,r){1&e&&(t.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"a",3),t._uU(4,"All"),t.qZA(),t.YNc(5,f,2,6,"a",4),t.ALo(6,"async"),t.qZA()(),t.TgZ(7,"div",5)(8,"div")(9,"input",6),t.NdJ("ngModelChange",function(p){return r.searchHandle(p)}),t.qZA()(),t.TgZ(10,"div",7),t.YNc(11,P,1,1,"app-product-card",8),t.qZA()()()),2&e&&(t.xp6(3),t.Q6J("routerLink",t.DdM(6,m)),t.xp6(2),t.Q6J("ngForOf",t.lcZ(6,4,r.categories$)),t.xp6(4),t.Q6J("ngModel",r.search),t.xp6(2),t.Q6J("ngForOf",r.products))},dependencies:[s.sg,u.yS,u.Od,g.Y,i.Fj,i.JJ,i.On,s.Ov],styles:[".products[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(auto-fill,minmax(300px,1fr));gap:20px;padding:20px 0;justify-content:center;align-content:center}.manager[_ngcontent-%COMP%]{width:250px}"]}),o})()},{path:":id",component:(()=>{class o{constructor(e,r,d){this.route=e,this.productService=r,this.cartService=d,this.quantity=1,this.similarProducts=[]}ngOnInit(){this.route.params.subscribe(e=>{this.productId=e.id,this.getProduct()})}getProduct(){this.productService.getOne(this.productId).pipe().subscribe(e=>{this.product=e,this.getProducts()})}addToCart(){this.cartService.addToCart({productId:this.product.id,quantity:this.quantity}).pipe().subscribe(()=>{this.message="Product added to cart!",setTimeout(()=>{this.message=void 0},1600)})}getProducts(){this.productService.getProducts({limit:5,categoryId:this.product.category.id,similar:this.product.id}).pipe().subscribe(e=>{this.similarProducts=e})}}return o.\u0275fac=function(e){return new(e||o)(t.Y36(u.gz),t.Y36(a.su),t.Y36(a.Ni))},o.\u0275cmp=t.Xpm({type:o,selectors:[["app-product-detail"]],decls:19,vars:9,consts:[[1,"d-flex"],[1,"flex-initial","me-4"],["width","900px",3,"src"],[1,"flex-fill"],["type","number","min","0","max","20",1,"mr-3",3,"ngModel","ngModelChange"],[1,"btn","btn-outline-success",3,"click"],["class","alert alert-success message",4,"ngIf"],[1,"products"],[3,"product",4,"ngFor","ngForOf"],[1,"alert","alert-success","message"],[3,"product"]],template:function(e,r){1&e&&(t.TgZ(0,"div",0)(1,"div",1),t._UZ(2,"img",2),t.qZA(),t.TgZ(3,"div",3)(4,"h3"),t._uU(5),t.qZA(),t.TgZ(6,"p"),t._uU(7),t.qZA(),t.TgZ(8,"p"),t._uU(9),t.ALo(10,"currency"),t.qZA(),t.TgZ(11,"div")(12,"input",4),t.NdJ("ngModelChange",function(p){return r.quantity=p}),t.qZA(),t.TgZ(13,"button",5),t.NdJ("click",function(){return r.addToCart()}),t._uU(14,"Add to cart"),t.qZA()(),t.TgZ(15,"div"),t.YNc(16,y,2,1,"div",6),t.qZA()()(),t.TgZ(17,"div",7),t.YNc(18,C,1,1,"app-product-card",8),t.qZA()),2&e&&(t.xp6(2),t.Q6J("src",r.product.image,t.LSH),t.xp6(3),t.Oqu(r.product.name),t.xp6(2),t.Oqu(r.product.description),t.xp6(2),t.Oqu(t.lcZ(10,7,r.product.price)),t.xp6(3),t.Q6J("ngModel",r.quantity),t.xp6(4),t.Q6J("ngIf",r.message),t.xp6(2),t.Q6J("ngForOf",r.similarProducts))},dependencies:[s.sg,s.O5,g.Y,i.Fj,i.wV,i.JJ,i.qQ,i.Fd,i.On,s.H9],styles:[".mr-3[_ngcontent-%COMP%]{margin-right:1rem}.message[_ngcontent-%COMP%]{margin-top:1rem;width:-moz-fit-content;width:fit-content;padding:1rem}.products[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(4,minmax(300px,1fr));gap:20px;padding:20px 0;justify-content:center;align-content:center}"]}),o})()}];let T=(()=>{class o{}return o.\u0275fac=function(e){return new(e||o)},o.\u0275mod=t.oAB({type:o}),o.\u0275inj=t.cJS({imports:[u.Bz.forChild(Z),u.Bz]}),o})();var _=c(7938);let M=(()=>{class o{}return o.\u0275fac=function(e){return new(e||o)},o.\u0275mod=t.oAB({type:o}),o.\u0275inj=t.cJS({imports:[s.ez,T,_.$,i.u5]}),o})()}}]);