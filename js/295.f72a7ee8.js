"use strict";(self["webpackChunksave_world_web_admin"]=self["webpackChunksave_world_web_admin"]||[]).push([[295],{6228:function(e,l,a){a.d(l,{A:function(){return r}});var t=a(6768),u=a(4232),n=(0,t.pM)({__name:"PageHeader",props:{title:String},setup(e){const l=e;return(e,a)=>((0,t.uX)(),(0,t.CE)("header",null,[(0,t.Lk)("h2",null,(0,u.v_)(l.title),1),a[0]||(a[0]=(0,t.Lk)("hr",null,null,-1))]))}}),o=a(1241);const s=(0,o.A)(n,[["__scopeId","data-v-fdf185d6"]]);var r=s},4993:function(e,l,a){a.d(l,{A:function(){return m}});var t=a(6768),u=a(4232),n=a(5130),o=a.p+"img/stats.f45aedf8.svg",s=a.p+"img/tasks.e3cb952a.svg",r=a.p+"img/workers.6e116a74.svg",i=a.p+"img/users.d8de7515.svg",k=a.p+"img/messages.87e9422c.svg",p=a(144);const d={class:"side-menu__content"};var c=(0,t.pM)({__name:"SideMenu",setup(e){const l=(0,p.KR)("side-menu"),a=(0,p.KR)("side-menu-bg"),c=(0,p.KR)(!1),v=(0,p.KR)("nav"),L=()=>{a.value="side-menu-bg--open",l.value="side-menu--open",c.value=!0,v.value="nav--open"},m=()=>{a.value="side-menu-bg",l.value="side-menu",c.value=!1,v.value="nav"};return(e,p)=>{const b=(0,t.g2)("router-link");return(0,t.uX)(),(0,t.CE)("div",{class:(0,u.C4)(a.value),onClick:m},[(0,t.Lk)("aside",{class:(0,u.C4)(l.value),onClick:[p[0]||(p[0]=(0,n.D$)((()=>{}),["stop"])),L]},[p[6]||(p[6]=(0,t.Lk)("h1",null,"Save World Web",-1)),p[7]||(p[7]=(0,t.Lk)("hr",null,null,-1)),(0,t.Lk)("div",d,[(0,t.Lk)("nav",{class:(0,u.C4)(v.value)},[(0,t.bF)(b,{to:"/stats",class:"nav-item"},{default:(0,t.k6)((()=>[p[1]||(p[1]=(0,t.Lk)("img",{src:o,alt:""},null,-1)),(0,t.bo)((0,t.Lk)("p",null,"Мониторинг",512),[[n.aG,c.value]])])),_:1}),(0,t.bF)(b,{to:"/tasks",class:"nav-item"},{default:(0,t.k6)((()=>[p[2]||(p[2]=(0,t.Lk)("img",{src:s,alt:""},null,-1)),(0,t.bo)((0,t.Lk)("p",null,"Задания",512),[[n.aG,c.value]])])),_:1}),(0,t.bF)(b,{to:"/workers",class:"nav-item"},{default:(0,t.k6)((()=>[p[3]||(p[3]=(0,t.Lk)("img",{src:r,alt:""},null,-1)),(0,t.bo)((0,t.Lk)("p",null,"Воркеры",512),[[n.aG,c.value]])])),_:1}),(0,t.bF)(b,{to:"/users",class:"nav-item"},{default:(0,t.k6)((()=>[p[4]||(p[4]=(0,t.Lk)("img",{src:i,alt:""},null,-1)),(0,t.bo)((0,t.Lk)("p",null,"Пользователи",512),[[n.aG,c.value]])])),_:1}),(0,t.bF)(b,{to:"/messages",class:"nav-item"},{default:(0,t.k6)((()=>[p[5]||(p[5]=(0,t.Lk)("img",{src:k,alt:""},null,-1)),(0,t.bo)((0,t.Lk)("p",null,"Рассылки",512),[[n.aG,c.value]])])),_:1})],2)])],2)],2)}}}),v=a(1241);const L=(0,v.A)(c,[["__scopeId","data-v-0d399154"]]);var m=L},7867:function(e,l,a){a.r(l),a.d(l,{default:function(){return ae}});var t=a(6768),u=a(4993),n=a(6228),o=a(144),s=a(5130),r=a(4232);const i={class:"container"},k={class:"titles"},p=["onUpdate:modelValue"],d={class:"descriptions"},c=["onUpdate:modelValue"],v={class:"input-wrapper input-wrapper--long"},L={class:"levels"},m={class:"table-levels"},b=["onUpdate:modelValue"],h=["onUpdate:modelValue"];var g=(0,t.pM)({__name:"CreateWorkerForm",props:{modelValue:{type:Boolean}},emits:["update:modelValue"],setup(e,{emit:l}){const a=l,u=()=>{a("update:modelValue",!1)},n=(0,o.KR)({1:{price:NaN,power:NaN}}),g=()=>{const e=Object.keys(n.value).length+1;n.value[e]={price:NaN,power:NaN}},w=()=>{const e=Object.keys(n.value).length;console.log("Создана карточка"),console.log(e)},_=(0,o.KR)(["ru","en"]),y={ru:"Русский",en:"Английский"},C=(0,o.KR)(_.value.map((e=>({language:e,title:"",displayLanguage:y[e]})))),V=(0,o.KR)(_.value.map((e=>({language:e,description:"",displayLanguage:y[e]})))),K=(0,o.KR)(!1);return(e,l)=>e.modelValue?((0,t.uX)(),(0,t.CE)("div",{key:0,class:"create-modal-bg",onClick:u},[(0,t.Lk)("div",i,[(0,t.Lk)("div",{class:"create-modal",onClick:l[2]||(l[2]=(0,s.D$)((()=>{}),["stop"]))},[(0,t.Lk)("form",{action:"",onSubmit:l[1]||(l[1]=(0,s.D$)((()=>{}),["prevent"]))},[l[5]||(l[5]=(0,t.Lk)("h3",null,"Создание карточки",-1)),l[6]||(l[6]=(0,t.Lk)("h4",null,"Названия",-1)),(0,t.Lk)("div",k,[((0,t.uX)(!0),(0,t.CE)(t.FK,null,(0,t.pI)(C.value,((e,l)=>((0,t.uX)(),(0,t.CE)("div",{key:l,class:"input-wrapper"},[(0,t.Lk)("label",null,(0,r.v_)(e.displayLanguage),1),(0,t.bo)((0,t.Lk)("input",{type:"text","onUpdate:modelValue":l=>e.title=l},null,8,p),[[s.Jo,e.title]])])))),128))]),l[7]||(l[7]=(0,t.Lk)("h4",null,"Описания",-1)),(0,t.Lk)("div",d,[((0,t.uX)(!0),(0,t.CE)(t.FK,null,(0,t.pI)(V.value,((e,l)=>((0,t.uX)(),(0,t.CE)("div",{key:l,class:"input-wrapper"},[(0,t.Lk)("label",null,(0,r.v_)(e.displayLanguage),1),(0,t.bo)((0,t.Lk)("textarea",{"onUpdate:modelValue":l=>e.description=l},null,8,c),[[s.Jo,e.description]])])))),128))]),l[8]||(l[8]=(0,t.Lk)("div",{class:"input-wrapper"},[(0,t.Lk)("label",null,"Цвет"),(0,t.Lk)("input",{type:"text"})],-1)),(0,t.Lk)("div",v,[l[3]||(l[3]=(0,t.Lk)("label",null,"Является базовой",-1)),(0,t.bo)((0,t.Lk)("input",{type:"checkbox","onUpdate:modelValue":l[0]||(l[0]=e=>K.value=e)},null,512),[[s.lH,K.value]])]),l[9]||(l[9]=(0,t.Lk)("h4",null,"Уровни",-1)),(0,t.Lk)("div",L,[(0,t.Lk)("table",m,[l[4]||(l[4]=(0,t.Lk)("thead",null,[(0,t.Lk)("tr",null,[(0,t.Lk)("th",{width:"20%"},"Уровень"),(0,t.Lk)("th",{width:"40%"},"Стоимость"),(0,t.Lk)("th",{width:"40%"},"Доход")])],-1)),(0,t.Lk)("tbody",null,[((0,t.uX)(!0),(0,t.CE)(t.FK,null,(0,t.pI)(n.value,((e,l)=>((0,t.uX)(),(0,t.CE)("tr",{key:l},[(0,t.Lk)("th",null,(0,r.v_)(l),1),(0,t.Lk)("th",null,[(0,t.bo)((0,t.Lk)("input",{type:"number","onUpdate:modelValue":l=>e.price=l},null,8,b),[[s.Jo,e.price,void 0,{number:!0}]])]),(0,t.Lk)("th",null,[(0,t.bo)((0,t.Lk)("input",{type:"number","onUpdate:modelValue":l=>e.power=l},null,8,h),[[s.Jo,e.power,void 0,{number:!0}]])])])))),128))])]),(0,t.Lk)("button",{type:"button",onClick:g},"Добавить")]),(0,t.Lk)("button",{onClick:w},"Создать карточку")],32),l[10]||(l[10]=(0,t.Lk)("div",{class:"image-input"},null,-1))])])])):(0,t.Q3)("",!0)}}),w=a(1241);const _=(0,w.A)(g,[["__scopeId","data-v-7c5f3b22"]]);var y=_;const C={class:"container"},V={class:"titles"},K=["onUpdate:modelValue"],E={class:"descriptions"},X=["onUpdate:modelValue"],f={class:"input-wrapper input-wrapper--long"},F={class:"levels"},R={class:"table-levels"},U=["onUpdate:modelValue"],I=["onUpdate:modelValue"];var N=(0,t.pM)({__name:"EditWorkerForm",props:{modelValue:{type:Boolean},worker:{}},emits:["update:modelValue"],setup(e,{emit:l}){const a=l,u=()=>{a("update:modelValue",!1)},n=(0,o.KR)({1:{price:NaN,power:NaN}}),i=()=>{const e=Object.keys(n.value).length+1;n.value[e]={price:NaN,power:NaN}},k=()=>{const e=Object.keys(n.value).length;console.log("Изменена карточка"),console.log(e)},p=(0,o.KR)(["ru","en"]),d={ru:"Русский",en:"Английский"},c=(0,o.KR)(p.value.map((e=>({language:e,title:"",displayLanguage:d[e]})))),v=(0,o.KR)(p.value.map((e=>({language:e,description:"",displayLanguage:d[e]})))),L=(0,o.KR)(!1);return(e,l)=>e.modelValue?((0,t.uX)(),(0,t.CE)("div",{key:0,class:"edit-modal-bg",onClick:u},[(0,t.Lk)("div",C,[(0,t.Lk)("div",{class:"edit-modal",onClick:l[2]||(l[2]=(0,s.D$)((()=>{}),["stop"]))},[(0,t.Lk)("form",{action:"",onSubmit:l[1]||(l[1]=(0,s.D$)((()=>{}),["prevent"]))},[l[5]||(l[5]=(0,t.Lk)("h3",null,"Изменение карточки",-1)),l[6]||(l[6]=(0,t.Lk)("h4",null,"Названия",-1)),(0,t.Lk)("div",V,[((0,t.uX)(!0),(0,t.CE)(t.FK,null,(0,t.pI)(c.value,((e,l)=>((0,t.uX)(),(0,t.CE)("div",{key:l,class:"input-wrapper"},[(0,t.Lk)("label",null,(0,r.v_)(e.displayLanguage),1),(0,t.bo)((0,t.Lk)("input",{type:"text","onUpdate:modelValue":l=>e.title=l},null,8,K),[[s.Jo,e.title]])])))),128))]),l[7]||(l[7]=(0,t.Lk)("h4",null,"Описания",-1)),(0,t.Lk)("div",E,[((0,t.uX)(!0),(0,t.CE)(t.FK,null,(0,t.pI)(v.value,((e,l)=>((0,t.uX)(),(0,t.CE)("div",{key:l,class:"input-wrapper"},[(0,t.Lk)("label",null,(0,r.v_)(e.displayLanguage),1),(0,t.bo)((0,t.Lk)("textarea",{"onUpdate:modelValue":l=>e.description=l},null,8,X),[[s.Jo,e.description]])])))),128))]),l[8]||(l[8]=(0,t.Lk)("div",{class:"input-wrapper"},[(0,t.Lk)("label",null,"Цвет"),(0,t.Lk)("input",{type:"text"})],-1)),(0,t.Lk)("div",f,[l[3]||(l[3]=(0,t.Lk)("label",null,"Является базовой",-1)),(0,t.bo)((0,t.Lk)("input",{type:"checkbox","onUpdate:modelValue":l[0]||(l[0]=e=>L.value=e)},null,512),[[s.lH,L.value]])]),l[9]||(l[9]=(0,t.Lk)("h4",null,"Уровни",-1)),(0,t.Lk)("div",F,[(0,t.Lk)("table",R,[l[4]||(l[4]=(0,t.Lk)("thead",null,[(0,t.Lk)("tr",null,[(0,t.Lk)("th",{width:"20%"},"Уровень"),(0,t.Lk)("th",{width:"40%"},"Стоимость"),(0,t.Lk)("th",{width:"40%"},"Доход")])],-1)),(0,t.Lk)("tbody",null,[((0,t.uX)(!0),(0,t.CE)(t.FK,null,(0,t.pI)(n.value,((e,l)=>((0,t.uX)(),(0,t.CE)("tr",{key:l},[(0,t.Lk)("th",null,(0,r.v_)(l),1),(0,t.Lk)("th",null,[(0,t.bo)((0,t.Lk)("input",{type:"number","onUpdate:modelValue":l=>e.price=l},null,8,U),[[s.Jo,e.price,void 0,{number:!0}]])]),(0,t.Lk)("th",null,[(0,t.bo)((0,t.Lk)("input",{type:"number","onUpdate:modelValue":l=>e.power=l},null,8,I),[[s.Jo,e.power,void 0,{number:!0}]])])])))),128))])]),(0,t.Lk)("button",{type:"button",onClick:i},"Добавить")]),(0,t.Lk)("button",{onClick:k},"Изменить карточку")],32),l[10]||(l[10]=(0,t.Lk)("div",{class:"image-input"},null,-1))])])])):(0,t.Q3)("",!0)}});const x=(0,w.A)(N,[["__scopeId","data-v-00bbe356"]]);var A=x,M=a(8761),W=a(1620);const J={class:"inner-table"},O={class:"buttons-column"},B={class:"buttons"};var D=(0,t.pM)({__name:"WorkerListItem",props:{worker:{},workerKey:{}},emits:["open-edit-modal"],setup(e,{emit:l}){const a=l,u=e;return(e,l)=>((0,t.uX)(),(0,t.CE)("tr",null,[(0,t.Lk)("th",null,(0,r.v_)(u.workerKey+1),1),(0,t.Lk)("th",null,(0,r.v_)(u.worker.title),1),(0,t.Lk)("th",null,[(0,t.Lk)("table",J,[l[1]||(l[1]=(0,t.Lk)("thead",{class:"inner-table__header"},[(0,t.Lk)("tr",null,[(0,t.Lk)("th",{width:"20%"},"LVL"),(0,t.Lk)("th",{width:"40%"},"Стоимость"),(0,t.Lk)("th",{width:"40%"},"Доход")])],-1)),((0,t.uX)(!0),(0,t.CE)(t.FK,null,(0,t.pI)(Object.keys(u.worker.levels),(e=>((0,t.uX)(),(0,t.CE)("tr",{key:e},[(0,t.Lk)("th",null,(0,r.v_)(e),1),(0,t.Lk)("th",null,(0,r.v_)(u.worker.levels[Number(e)].price),1),(0,t.Lk)("th",null,(0,r.v_)(u.worker.levels[Number(e)].power),1)])))),128))])]),(0,t.Lk)("th",O,[(0,t.Lk)("div",B,[(0,t.Lk)("button",{onClick:l[0]||(l[0]=e=>a("open-edit-modal",u.worker))},l[2]||(l[2]=[(0,t.Lk)("img",{src:M,alt:"Edit"},null,-1)])),l[3]||(l[3]=(0,t.Lk)("button",null,[(0,t.Lk)("img",{src:W,alt:"Delete"})],-1))]),l[4]||(l[4]=(0,t.Lk)("div",{class:"checkbox"},[(0,t.eW)(" Базовая "),(0,t.Lk)("input",{type:"checkbox"})],-1))])]))}});const S=(0,w.A)(D,[["__scopeId","data-v-66babe48"]]);var j=S;const G={class:"container"},$={class:"tasks-list"};var H=(0,t.pM)({__name:"WorkersList",setup(e){const l=(0,o.KR)(!1),a=(0,o.KR)(!1),u=(0,o.KR)(),n=()=>{l.value=!0},s=e=>{u.value=e,a.value=!0},r=(0,o.KR)([{title:"Builder",levels:{1:{price:100,power:50},2:{price:200,power:75}},maxLevel:2},{title:"Builder",levels:{1:{price:100,power:50}},maxLevel:1}]);return(e,o)=>((0,t.uX)(),(0,t.CE)("section",null,[(0,t.bF)(y,{modelValue:l.value,"onUpdate:modelValue":o[0]||(o[0]=e=>l.value=e)},null,8,["modelValue"]),(0,t.bF)(A,{modelValue:a.value,worker:u.value,"onUpdate:modelValue":o[1]||(o[1]=e=>a.value=e)},null,8,["modelValue","worker"]),(0,t.Lk)("div",G,[(0,t.Lk)("div",$,[o[3]||(o[3]=(0,t.Lk)("h3",null,"Воркеры",-1)),(0,t.Lk)("button",{class:"create-task-btn",onClick:n}," Создать "),(0,t.Lk)("table",null,[o[2]||(o[2]=(0,t.Lk)("thead",null,[(0,t.Lk)("tr",null,[(0,t.Lk)("th",null,"№"),(0,t.Lk)("th",null,"Наименование"),(0,t.Lk)("th",null,"Бонус"),(0,t.Lk)("th")])],-1)),((0,t.uX)(!0),(0,t.CE)(t.FK,null,(0,t.pI)(r.value,((e,l)=>((0,t.uX)(),(0,t.Wv)(j,{onOpenEditModal:s,key:l,worker:e,workerKey:l},null,8,["worker","workerKey"])))),128))])])])]))}});const Q=(0,w.A)(H,[["__scopeId","data-v-75aa96c0"]]);var P=Q;const q={class:"container"},z={class:"tasks-list"};var T=(0,t.pM)({__name:"WorkersStats",setup(e){const l=(0,o.KR)(!1),a=(0,o.KR)(!1),u=(0,o.KR)(),n=()=>{l.value=!0},s=e=>{u.value=e,a.value=!0},r=(0,o.KR)([{title:"Builder",levels:{1:{price:100,power:50},2:{price:200,power:75}},maxLevel:2},{title:"Builder",levels:{1:{price:100,power:50}},maxLevel:1}]);return(e,o)=>((0,t.uX)(),(0,t.CE)("section",null,[(0,t.bF)(y,{modelValue:l.value,"onUpdate:modelValue":o[0]||(o[0]=e=>l.value=e)},null,8,["modelValue"]),(0,t.bF)(A,{modelValue:a.value,worker:u.value,"onUpdate:modelValue":o[1]||(o[1]=e=>a.value=e)},null,8,["modelValue","worker"]),(0,t.Lk)("div",q,[(0,t.Lk)("div",z,[o[3]||(o[3]=(0,t.Lk)("h3",null,"Воркеры",-1)),(0,t.Lk)("button",{class:"create-task-btn",onClick:n}," Создать "),(0,t.Lk)("table",null,[o[2]||(o[2]=(0,t.Lk)("thead",null,[(0,t.Lk)("tr",null,[(0,t.Lk)("th",null,"№"),(0,t.Lk)("th",null,"Наименование"),(0,t.Lk)("th",null,"Бонус"),(0,t.Lk)("th")])],-1)),((0,t.uX)(!0),(0,t.CE)(t.FK,null,(0,t.pI)(r.value,((e,l)=>((0,t.uX)(),(0,t.Wv)(j,{onOpenEditModal:s,key:l,worker:e,workerKey:l},null,8,["worker","workerKey"])))),128))])])])]))}});const Y=(0,w.A)(T,[["__scopeId","data-v-7f05fa3b"]]);var Z=Y,ee=(0,t.pM)({__name:"WorkersView",setup(e){return(e,l)=>((0,t.uX)(),(0,t.CE)(t.FK,null,[(0,t.bF)(u.A),(0,t.Lk)("main",null,[(0,t.bF)(n.A,{title:"Управление воркерами"}),(0,t.bF)(P),(0,t.bF)(Z)])],64))}});const le=(0,w.A)(ee,[["__scopeId","data-v-75252e0a"]]);var ae=le},1620:function(e,l,a){e.exports=a.p+"img/delete.b24960d4.svg"},8761:function(e,l,a){e.exports=a.p+"img/edit.7b7b2e2e.svg"}}]);
//# sourceMappingURL=295.f72a7ee8.js.map