"use strict";(self.webpackChunkE_comerce=self.webpackChunkE_comerce||[]).push([[396],{9396:(Z,s,c)=>{c.r(s),c.d(s,{CartModule:()=>C});var u=c(6895),a=c(3128),t=c(8256),l=c(5174);function m(r,n){if(1&r){const e=t.EpF();t.TgZ(0,"tr")(1,"td"),t._uU(2),t.qZA(),t.TgZ(3,"td"),t._uU(4),t.qZA(),t.TgZ(5,"td"),t._uU(6),t.qZA(),t.TgZ(7,"td"),t._uU(8),t.qZA(),t.TgZ(9,"td")(10,"button",3),t.NdJ("click",function(){const h=t.CHM(e).$implicit,g=t.oxw();return t.KtG(g.removeItem(h))}),t._uU(11,"Remove"),t.qZA()()()}if(2&r){const e=n.$implicit;t.xp6(2),t.Oqu(null==e.item?null:e.item.name),t.xp6(2),t.Oqu(e.item.price),t.xp6(2),t.Oqu(e.quantity),t.xp6(2),t.Oqu(e.total)}}const p=[{path:"",component:(()=>{class r{constructor(e,o){this.cartService=e,this.orderService=o,this.carItems=[],this.cartSum=0}ngOnInit(){this.getCarts()}getCarts(){this.cartService.getCarts().pipe().subscribe(e=>{this.carItems=e,this.cartSum=this.carItems.reduce((o,i)=>o+i.total,0)})}removeItem(e){this.cartService.deleteItem(e.id).pipe().subscribe(o=>{this.getCarts()})}checkout(){this.orderService.createOrder().pipe().subscribe(e=>{this.getCarts()})}}return r.\u0275fac=function(e){return new(e||r)(t.Y36(l.Ni),t.Y36(l.px))},r.\u0275cmp=t.Xpm({type:r,selectors:[["app-cart"]],decls:21,vars:2,consts:[[1,"table"],[4,"ngFor","ngForOf"],[1,"btn","btn-outline-success",3,"click"],[1,"btn","btn-outline-danger",3,"click"]],template:function(e,o){1&e&&(t.TgZ(0,"div")(1,"div")(2,"table",0)(3,"thead")(4,"tr")(5,"th"),t._uU(6,"Product"),t.qZA(),t.TgZ(7,"th"),t._uU(8,"Price"),t.qZA(),t.TgZ(9,"th"),t._uU(10,"Quantity"),t.qZA(),t.TgZ(11,"th"),t._uU(12,"Total Price"),t.qZA(),t._UZ(13,"th"),t.qZA()(),t.TgZ(14,"tbody"),t.YNc(15,m,12,4,"tr",1),t.qZA()()(),t.TgZ(16,"div")(17,"h4"),t._uU(18),t.qZA(),t.TgZ(19,"button",2),t.NdJ("click",function(){return o.checkout()}),t._uU(20,"Checkout"),t.qZA()()()),2&e&&(t.xp6(15),t.Q6J("ngForOf",o.carItems),t.xp6(3),t.hij("Total Price:",o.cartSum,""))},dependencies:[u.sg]}),r})()}];let d=(()=>{class r{}return r.\u0275fac=function(e){return new(e||r)},r.\u0275mod=t.oAB({type:r}),r.\u0275inj=t.cJS({imports:[a.Bz.forChild(p),a.Bz]}),r})(),C=(()=>{class r{}return r.\u0275fac=function(e){return new(e||r)},r.\u0275mod=t.oAB({type:r}),r.\u0275inj=t.cJS({imports:[u.ez,d]}),r})()}}]);