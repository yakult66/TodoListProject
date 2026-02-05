import{s as pe,f as B,a as A,b as ae,c as Oe,d as ke,e as Ie,C as Ce,O as Se}from"./index-Bky_6eJE.js";import{B as Z,m as h,o as s,c as f,s as ce,r as $,d as _,a as fe,b as g,w as C,e as a,f as T,u as y,g as O,h as S,i as he,F as E,j as N,k as j,l as Y,n as V,t as M,T as me,p as Le,q as oe,v as W,R as $e,M as X,z as Me,x as P,y as Te,Y as Ke,I as De,A as Ve,D as Ae,C as ee,S as ze,E as Pe,G as U,H as F,J as Fe,K as Ee,L as Re,N as Ue,O as Be,P as je,Q as Ne,U as He,V as te,W as ne}from"./index-RzDfxWVG.js";import{s as Ge,a as qe,b as _e}from"./index-57Z-SuWt.js";import{s as Je}from"./index-DrrOr_af.js";import{s as be}from"./index-BQeS9rre.js";var Ye=`
    .p-textarea {
        font-family: inherit;
        font-feature-settings: inherit;
        font-size: 1rem;
        color: dt('textarea.color');
        background: dt('textarea.background');
        padding-block: dt('textarea.padding.y');
        padding-inline: dt('textarea.padding.x');
        border: 1px solid dt('textarea.border.color');
        transition:
            background dt('textarea.transition.duration'),
            color dt('textarea.transition.duration'),
            border-color dt('textarea.transition.duration'),
            outline-color dt('textarea.transition.duration'),
            box-shadow dt('textarea.transition.duration');
        appearance: none;
        border-radius: dt('textarea.border.radius');
        outline-color: transparent;
        box-shadow: dt('textarea.shadow');
    }

    .p-textarea:enabled:hover {
        border-color: dt('textarea.hover.border.color');
    }

    .p-textarea:enabled:focus {
        border-color: dt('textarea.focus.border.color');
        box-shadow: dt('textarea.focus.ring.shadow');
        outline: dt('textarea.focus.ring.width') dt('textarea.focus.ring.style') dt('textarea.focus.ring.color');
        outline-offset: dt('textarea.focus.ring.offset');
    }

    .p-textarea.p-invalid {
        border-color: dt('textarea.invalid.border.color');
    }

    .p-textarea.p-variant-filled {
        background: dt('textarea.filled.background');
    }

    .p-textarea.p-variant-filled:enabled:hover {
        background: dt('textarea.filled.hover.background');
    }

    .p-textarea.p-variant-filled:enabled:focus {
        background: dt('textarea.filled.focus.background');
    }

    .p-textarea:disabled {
        opacity: 1;
        background: dt('textarea.disabled.background');
        color: dt('textarea.disabled.color');
    }

    .p-textarea::placeholder {
        color: dt('textarea.placeholder.color');
    }

    .p-textarea.p-invalid::placeholder {
        color: dt('textarea.invalid.placeholder.color');
    }

    .p-textarea-fluid {
        width: 100%;
    }

    .p-textarea-resizable {
        overflow: hidden;
        resize: none;
    }

    .p-textarea-sm {
        font-size: dt('textarea.sm.font.size');
        padding-block: dt('textarea.sm.padding.y');
        padding-inline: dt('textarea.sm.padding.x');
    }

    .p-textarea-lg {
        font-size: dt('textarea.lg.font.size');
        padding-block: dt('textarea.lg.padding.y');
        padding-inline: dt('textarea.lg.padding.x');
    }
`,We={root:function(e){var n=e.instance,i=e.props;return["p-textarea p-component",{"p-filled":n.$filled,"p-textarea-resizable ":i.autoResize,"p-textarea-sm p-inputfield-sm":i.size==="small","p-textarea-lg p-inputfield-lg":i.size==="large","p-invalid":n.$invalid,"p-variant-filled":n.$variant==="filled","p-textarea-fluid":n.$fluid}]}},Ze=Z.extend({name:"textarea",style:Ye,classes:We}),Qe={name:"BaseTextarea",extends:pe,props:{autoResize:Boolean},style:Ze,provide:function(){return{$pcTextarea:this,$parentInstance:this}}};function H(t){"@babel/helpers - typeof";return H=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},H(t)}function Xe(t,e,n){return(e=et(e))in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function et(t){var e=tt(t,"string");return H(e)=="symbol"?e:e+""}function tt(t,e){if(H(t)!="object"||!t)return t;var n=t[Symbol.toPrimitive];if(n!==void 0){var i=n.call(t,e);if(H(i)!="object")return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}var re={name:"Textarea",extends:Qe,inheritAttrs:!1,observer:null,mounted:function(){var e=this;this.autoResize&&(this.observer=new ResizeObserver(function(){requestAnimationFrame(function(){e.resize()})}),this.observer.observe(this.$el))},updated:function(){this.autoResize&&this.resize()},beforeUnmount:function(){this.observer&&this.observer.disconnect()},methods:{resize:function(){if(this.$el.offsetParent){var e=this.$el.style.height,n=parseInt(e)||0,i=this.$el.scrollHeight,l=!n||i>n,o=n&&i<n;o?(this.$el.style.height="auto",this.$el.style.height="".concat(this.$el.scrollHeight,"px")):l&&(this.$el.style.height="".concat(i,"px"))}},onInput:function(e){this.autoResize&&this.resize(),this.writeValue(e.target.value,e)}},computed:{attrs:function(){return h(this.ptmi("root",{context:{filled:this.$filled,disabled:this.disabled}}),this.formField)},dataP:function(){return B(Xe({invalid:this.$invalid,fluid:this.$fluid,filled:this.$variant==="filled"},this.size,this.size))}}},nt=["value","name","disabled","aria-invalid","data-p"];function ot(t,e,n,i,l,o){return s(),f("textarea",h({class:t.cx("root"),value:t.d_value,name:t.name,disabled:t.disabled,"aria-invalid":t.invalid||void 0,"data-p":o.dataP,onInput:e[0]||(e[0]=function(){return o.onInput&&o.onInput.apply(o,arguments)})},o.attrs),null,16,nt)}re.render=ot;var it=`
    .p-floatlabel {
        display: block;
        position: relative;
    }

    .p-floatlabel label {
        position: absolute;
        pointer-events: none;
        top: 50%;
        transform: translateY(-50%);
        transition-property: all;
        transition-timing-function: ease;
        line-height: 1;
        font-weight: dt('floatlabel.font.weight');
        inset-inline-start: dt('floatlabel.position.x');
        color: dt('floatlabel.color');
        transition-duration: dt('floatlabel.transition.duration');
    }

    .p-floatlabel:has(.p-textarea) label {
        top: dt('floatlabel.position.y');
        transform: translateY(0);
    }

    .p-floatlabel:has(.p-inputicon:first-child) label {
        inset-inline-start: calc((dt('form.field.padding.x') * 2) + dt('icon.size'));
    }

    .p-floatlabel:has(input:focus) label,
    .p-floatlabel:has(input.p-filled) label,
    .p-floatlabel:has(input:-webkit-autofill) label,
    .p-floatlabel:has(textarea:focus) label,
    .p-floatlabel:has(textarea.p-filled) label,
    .p-floatlabel:has(.p-inputwrapper-focus) label,
    .p-floatlabel:has(.p-inputwrapper-filled) label,
    .p-floatlabel:has(input[placeholder]) label,
    .p-floatlabel:has(textarea[placeholder]) label {
        top: dt('floatlabel.over.active.top');
        transform: translateY(0);
        font-size: dt('floatlabel.active.font.size');
        font-weight: dt('floatlabel.active.font.weight');
    }

    .p-floatlabel:has(input.p-filled) label,
    .p-floatlabel:has(textarea.p-filled) label,
    .p-floatlabel:has(.p-inputwrapper-filled) label {
        color: dt('floatlabel.active.color');
    }

    .p-floatlabel:has(input:focus) label,
    .p-floatlabel:has(input:-webkit-autofill) label,
    .p-floatlabel:has(textarea:focus) label,
    .p-floatlabel:has(.p-inputwrapper-focus) label {
        color: dt('floatlabel.focus.color');
    }

    .p-floatlabel-in .p-inputtext,
    .p-floatlabel-in .p-textarea,
    .p-floatlabel-in .p-select-label,
    .p-floatlabel-in .p-multiselect-label,
    .p-floatlabel-in .p-multiselect-label:has(.p-chip),
    .p-floatlabel-in .p-autocomplete-input-multiple,
    .p-floatlabel-in .p-cascadeselect-label,
    .p-floatlabel-in .p-treeselect-label {
        padding-block-start: dt('floatlabel.in.input.padding.top');
        padding-block-end: dt('floatlabel.in.input.padding.bottom');
    }

    .p-floatlabel-in:has(input:focus) label,
    .p-floatlabel-in:has(input.p-filled) label,
    .p-floatlabel-in:has(input:-webkit-autofill) label,
    .p-floatlabel-in:has(textarea:focus) label,
    .p-floatlabel-in:has(textarea.p-filled) label,
    .p-floatlabel-in:has(.p-inputwrapper-focus) label,
    .p-floatlabel-in:has(.p-inputwrapper-filled) label,
    .p-floatlabel-in:has(input[placeholder]) label,
    .p-floatlabel-in:has(textarea[placeholder]) label {
        top: dt('floatlabel.in.active.top');
    }

    .p-floatlabel-on:has(input:focus) label,
    .p-floatlabel-on:has(input.p-filled) label,
    .p-floatlabel-on:has(input:-webkit-autofill) label,
    .p-floatlabel-on:has(textarea:focus) label,
    .p-floatlabel-on:has(textarea.p-filled) label,
    .p-floatlabel-on:has(.p-inputwrapper-focus) label,
    .p-floatlabel-on:has(.p-inputwrapper-filled) label,
    .p-floatlabel-on:has(input[placeholder]) label,
    .p-floatlabel-on:has(textarea[placeholder]) label {
        top: 0;
        transform: translateY(-50%);
        border-radius: dt('floatlabel.on.border.radius');
        background: dt('floatlabel.on.active.background');
        padding: dt('floatlabel.on.active.padding');
    }

    .p-floatlabel:has([class^='p-'][class$='-fluid']) {
        width: 100%;
    }

    .p-floatlabel:has(.p-invalid) label {
        color: dt('floatlabel.invalid.color');
    }
`,lt={root:function(e){var n=e.props;return["p-floatlabel",{"p-floatlabel-over":n.variant==="over","p-floatlabel-on":n.variant==="on","p-floatlabel-in":n.variant==="in"}]}},at=Z.extend({name:"floatlabel",style:it,classes:lt}),rt={name:"BaseFloatLabel",extends:ce,props:{variant:{type:String,default:"over"}},style:at,provide:function(){return{$pcFloatLabel:this,$parentInstance:this}}},G={name:"FloatLabel",extends:rt,inheritAttrs:!1};function st(t,e,n,i,l,o){return s(),f("span",h({class:t.cx("root")},t.ptmi("root")),[$(t.$slots,"default")],16)}G.render=st;const dt={key:0,class:"fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm p-4 gap-4"},ut={class:"flex items-center gap-2"},pt={class:"flex items-center gap-2"},ct={class:"flex justify-end gap-3 pt-2"},ge=_({__name:"taskDetail",props:{showLookDialog:{type:Boolean,default:!1},showEditDialog:{type:Boolean,default:!1},task:{type:Object,default:()=>({})}},emits:["close","save"],setup(t,{emit:e}){const n=t,i=e,l=S(""),o=S("");return fe(()=>{l.value=n.task.content,o.value=n.task.title}),(m,r)=>n.showEditDialog||n.showLookDialog?(s(),f("div",dt,[g(y(be),null,{title:C(()=>[a("div",ut,[g(y(G),{variant:"on"},{default:C(()=>[g(y(ae),{id:"editTaskTitle",modelValue:o.value,"onUpdate:modelValue":r[0]||(r[0]=u=>o.value=u),disabled:!!n.showLookDialog,placeholder:o.value,class:"w-full border! bg-slate-50/80! rounded-2xl! px-6! py-4! shadow-inner! outline-none focus:ring-2! focus:ring-indigo-100! transition-all!"},null,8,["modelValue","disabled","placeholder"]),r[5]||(r[5]=a("label",{for:"editTaskTitle"},"任務標題",-1))]),_:1})])]),content:C(()=>[a("div",pt,[g(y(G),{variant:"on"},{default:C(()=>[g(y(re),{id:"editTaskContent",modelValue:l.value,"onUpdate:modelValue":r[1]||(r[1]=u=>l.value=u),disabled:!!n.showLookDialog,rows:"5",cols:"30",style:{resize:"none"},placeholder:l.value,class:"w-full border! bg-slate-50/80! rounded-2xl! px-6! py-4! shadow-inner! outline-none focus:ring-2! focus:ring-indigo-100! transition-all!"},null,8,["modelValue","disabled","placeholder"]),r[6]||(r[6]=a("label",{for:"editTaskContent"},"任務內容",-1))]),_:1})])]),footer:C(()=>[a("div",ct,[n.showEditDialog?(s(),T(y(A),{key:0,label:"取消",onClick:r[2]||(r[2]=u=>i("close")),class:"px-6! h-10! rounded-xl! font-bold! bg-slate-100! text-slate-500! border-none! hover:bg-slate-200!"})):O("",!0),n.showEditDialog?(s(),T(y(A),{key:1,label:"儲存",onClick:r[3]||(r[3]=u=>(i("save",{...n.task,title:o.value,content:l.value}),i("close"))),class:"px-6! h-10! rounded-xl! font-bold! bg-indigo-500! border-indigo-500! shadow-lg! shadow-indigo-200!"})):O("",!0),n.showLookDialog?(s(),T(y(A),{key:2,label:"離開",onClick:r[4]||(r[4]=u=>i("close")),class:"px-6! h-10! rounded-xl! font-bold! bg-slate-100! text-slate-500! border-none! hover:bg-slate-200!"})):O("",!0)])]),_:1})])):O("",!0)}}),ft={class:"w-full max-w-[850px] mx-auto bg-white/80 backdrop-blur-xl rounded-[2.5rem] border border-white/60 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.05)] p-8 md:p-12 flex flex-col h-fit"},ht={class:"flex flex-col gap-6 mb-16 w-full"},mt={class:"flex flex-col md:flex-row gap-5"},bt={class:"flex flex-col md:flex-row items-center justify-between gap-4 w-full mt-6"},gt={class:"flex items-center gap-3 w-full md:w-auto bg-slate-50/50 p-2 pr-4 rounded-2xl border border-slate-100"},vt={class:"flex flex-col gap-4"},yt={class:"flex items-center gap-5"},xt=["onClick"],wt={key:0,class:"pi pi-check text-white text-[12px]"},Ot={class:"flex flex-col"},kt={class:"flex items-center gap-2 mt-1"},It={class:"text-[10px] text-indigo-500 bg-indigo-50 px-2.5 py-0.5 rounded-lg font-bold"},Ct={class:"flex gap-1 opacity-0 group-hover:opacity-100 transition-opacity"},St=_({__name:"addTodo",props:{tasks:{type:Array,required:!0},loginUserIndex:{type:Number,required:!0},loginUser:{type:Object,required:!0},users:{type:Array,required:!0}},emits:["add-task","delete-task","save-task-update","remove-history"],setup(t,{emit:e}){const n=S(!1),i=S(!1),l=S(!1),o=S(""),m=S(""),r=S(null),u=j(()=>x.tasks.filter(d=>d.createUser===x.loginUser.account)),k=e,x=t,I=()=>{if(D())return;const w={id:Date.now(),title:o.value,content:m.value,assignedTo:r.value?.name,isCompleted:!1,createUser:x.loginUser.account};k("add-task",w),o.value="",m.value="",r.value=null,l.value=!1},c=w=>{u.value.find(v=>v.id===w)&&k("delete-task",w)},p=w=>{u.value.find(v=>v.id===w.id)&&k("save-task-update",w)},b=w=>{const d=u.value.find(v=>v.id===w);d&&k("remove-history",d)},D=()=>o.value.trim()?(l.value=!1,!1):(l.value=!0,!0);return(w,d)=>(s(),f("div",ft,[d[9]||(d[9]=he('<div class="mb-10 flex items-center gap-4"><div class="bg-linear-to-tr from-[#6366f1] to-[#a855f7] text-white w-12 h-12 flex items-center justify-center rounded-2xl shadow-lg shadow-indigo-200"><i class="pi pi-sparkles text-lg"></i></div><div><h1 class="text-2xl font-black text-slate-800 tracking-tight">待辦事項</h1><p class="text-slate-400 text-xs font-medium">新增與查看待辦事項</p></div></div>',1)),a("div",ht,[a("form",{onSubmit:I},[a("div",mt,[g(y(G),{variant:"on",class:"flex-1"},{default:C(()=>[d[5]||(d[5]=a("label",{for:"taskTitle",class:"ml-2! font-bold text-slate-400"},"任務標題",-1)),g(y(ae),{id:"taskTitle",modelValue:o.value,"onUpdate:modelValue":d[0]||(d[0]=v=>o.value=v),invalid:l.value&&!o.value,class:"w-full border! bg-slate-50/80! rounded-2xl! px-6! py-4! shadow-inner! outline-none focus:ring-2! focus:ring-indigo-100! transition-all!"},null,8,["modelValue","invalid"]),l.value&&!o.value?(s(),T(y(Je),{key:0,severity:"error",closable:!1,class:"mt-2 transition-opacity"},{default:C(()=>[...d[4]||(d[4]=[Y("任務標題為必填",-1)])]),_:1})):O("",!0)]),_:1}),g(y(G),{variant:"on",class:"flex-1"},{default:C(()=>[d[6]||(d[6]=a("label",{for:"taskContent",class:"ml-2! font-bold text-slate-400"},"詳細內容",-1)),g(y(re),{id:"taskContent",modelValue:m.value,"onUpdate:modelValue":d[1]||(d[1]=v=>m.value=v),autoResize:!0,rows:"1",class:"w-full border! bg-slate-50/80! rounded-2xl! px-6! pt-6! pb-3! shadow-inner! outline-none focus:ring-2! focus:ring-indigo-100! transition-all!"},null,8,["modelValue"])]),_:1})]),a("div",bt,[a("div",gt,[d[7]||(d[7]=a("div",{class:"flex items-center gap-2 text-sm font-bold text-slate-500 ml-2"},[a("i",{class:"pi pi-user-plus text-indigo-400"}),a("span",null,"指派給")],-1)),g(y(Ge),{modelValue:r.value,"onUpdate:modelValue":d[2]||(d[2]=v=>r.value=v),options:t.users[t.loginUserIndex]?.friends,optionLabel:"name",placeholder:"選擇指派對象",class:"flex-1 md:w-44! border-none! bg-transparent! shadow-none!"},null,8,["modelValue","options"])]),g(y(A),{onClick:I,class:"w-full md:w-auto bg-linear-to-r! from-[#6366f1]! to-[#8b5cf6]! border-none! rounded-2xl! h-14! px-10! font-bold! text-white! shadow-xl! shadow-indigo-100! transition-all active:scale-95! hover:scale-105!"},{default:C(()=>[...d[8]||(d[8]=[a("i",{class:"pi pi-plus mr-2"},null,-1),a("span",null,"新增任務",-1)])]),_:1})])],32)]),d[10]||(d[10]=a("div",{class:"flex items-center gap-2 mb-6"},[a("span",{class:"text-xs font-black text-slate-300 uppercase tracking-widest"},"任務清單"),a("div",{class:"h-px flex-1 bg-slate-100"})],-1)),a("div",vt,[(s(!0),f(E,null,N(u.value,v=>(s(),f("div",{key:v.id,class:"flex items-center justify-between p-5 bg-white rounded-[1.8rem] border border-slate-100 transition-all hover:shadow-md hover:border-indigo-100 group"},[a("div",yt,[a("div",{onClick:z=>{v.isCompleted=!v.isCompleted,b(v.id)},class:V(["w-7 h-7 rounded-full border-2 cursor-pointer flex items-center justify-center transition-all",v.isCompleted?"bg-emerald-500 border-emerald-500":"bg-white border-slate-200 hover:border-indigo-300"])},[v.isCompleted?(s(),f("i",wt)):O("",!0)],10,xt),a("div",Ot,[a("span",{class:V(["font-bold text-slate-700 text-base",{"line-through text-slate-400 opacity-60":v.isCompleted}])},M(v.title),3),a("div",kt,[a("span",It,"@ "+M(v.assignedTo),1)])])]),a("div",Ct,[g(y(A),{icon:"pi pi-eye",text:"",rounded:"",class:"text-slate-300! hover:text-indigo-500! hover:bg-indigo-50!",onClick:z=>{i.value=!0}},null,8,["onClick"]),g(y(A),{icon:"pi pi-pencil",text:"",rounded:"",class:"text-slate-300! hover:text-indigo-500! hover:bg-indigo-50!",onClick:z=>{n.value=!0}},null,8,["onClick"]),g(y(A),{icon:"pi pi-trash",text:"",rounded:"",class:"text-slate-300! hover:text-rose-500! hover:bg-rose-50!",onClick:z=>c(v.id)},null,8,["onClick"])]),(s(),T(me,{to:"body"},[n.value||i.value?(s(),T(ge,{key:0,onClose:d[3]||(d[3]=z=>{n.value=!1,i.value=!1}),onSave:p,task:v,showEditDialog:n.value,showLookDialog:i.value},null,8,["task","showEditDialog","showLookDialog"])):O("",!0)]))]))),128))])]))}}),Lt={class:"w-full max-w-[850px] mx-auto bg-white/80 backdrop-blur-xl rounded-[2.5rem] border border-white/60 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.05)] p-8 md:p-12 flex flex-col h-fit"},$t={class:"flex flex-col gap-6 w-full"},Mt={class:"flex items-center gap-5"},Tt=["onClick"],Kt={key:0,class:"pi pi-check text-white text-[12px]"},Dt={class:"flex flex-col"},Vt={class:"flex items-center gap-2 mt-1"},At={class:"text-[10px] text-indigo-500 bg-indigo-50 px-2.5 py-0.5 rounded-lg font-bold"},zt={class:"flex gap-1 opacity-0 group-hover:opacity-100 transition-opacity"},Pt=_({__name:"assignTodo",props:{tasks:{type:Array,required:!0},loginUserIndex:{type:Number,required:!0},loginUser:{type:Object,required:!0},users:{type:Array,required:!0}},emits:["delete-task","save-task-update","remove-history"],setup(t,{emit:e}){const n=S(!1),i=S(!1),l=e,o=t,m=j(()=>o.tasks.filter(x=>x.assignedTo===o.loginUser.name)),r=x=>{m.value.find(c=>c.id===x)&&l("delete-task",x)},u=x=>{m.value.find(c=>c.id===x.id)&&l("save-task-update",x)},k=x=>{l("remove-history",x)};return(x,I)=>(s(),f("div",Lt,[I[1]||(I[1]=he('<div class="mb-10 flex items-center gap-4"><div class="bg-linear-to-tr from-[#6366f1] to-[#a855f7] text-white w-12 h-12 flex items-center justify-center rounded-2xl shadow-lg shadow-indigo-200"><i class="pi pi-sparkles text-lg"></i></div><div><h1 class="text-2xl font-black text-slate-800 tracking-tight">被指派事項</h1><p class="text-slate-400 text-xs font-medium">查看被指派的事項</p></div></div>',1)),a("div",$t,[(s(!0),f(E,null,N(m.value,c=>(s(),f("div",{key:c.id,class:"flex items-center justify-between p-5 bg-white rounded-[1.8rem] border border-slate-100 transition-all hover:shadow-md hover:border-indigo-100 group"},[a("div",Mt,[a("div",{onClick:p=>{c.isCompleted=!c.isCompleted,k(c.id)},class:V(["w-7 h-7 rounded-full border-2 cursor-pointer flex items-center justify-center transition-all",c.isCompleted?"bg-emerald-500 border-emerald-500":"bg-white border-slate-200 hover:border-indigo-300"])},[c.isCompleted?(s(),f("i",Kt)):O("",!0)],10,Tt),a("div",Dt,[a("span",{class:V(["font-bold text-slate-700 text-base",{"line-through text-slate-400 opacity-60":c.isCompleted}])},M(c.title),3),a("div",Vt,[a("span",At,"@ "+M(c.assignedTo),1)])])]),a("div",zt,[g(y(A),{icon:"pi pi-eye",text:"",rounded:"",class:"text-slate-300! hover:text-indigo-500! hover:bg-indigo-50!",onClick:p=>{i.value=!0}},null,8,["onClick"]),g(y(A),{icon:"pi pi-pencil",text:"",rounded:"",class:"text-slate-300! hover:text-indigo-500! hover:bg-indigo-50!",onClick:p=>{n.value=!0}},null,8,["onClick"]),g(y(A),{icon:"pi pi-trash",text:"",rounded:"",class:"text-slate-300! hover:text-rose-500! hover:bg-rose-50!",onClick:p=>r(c.id)},null,8,["onClick"])]),(s(),T(me,{to:"body"},[n.value||i.value?(s(),T(ge,{key:0,onClose:I[0]||(I[0]=p=>{n.value=!1,i.value=!1}),onSave:u,task:c,showEditDialog:n.value,showLookDialog:i.value},null,8,["task","showEditDialog","showLookDialog"])):O("",!0)]))]))),128))])]))}});var ve={name:"TimesCircleIcon",extends:Le};function Ft(t){return Bt(t)||Ut(t)||Rt(t)||Et()}function Et(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Rt(t,e){if(t){if(typeof t=="string")return ie(t,e);var n={}.toString.call(t).slice(8,-1);return n==="Object"&&t.constructor&&(n=t.constructor.name),n==="Map"||n==="Set"?Array.from(t):n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?ie(t,e):void 0}}function Ut(t){if(typeof Symbol<"u"&&t[Symbol.iterator]!=null||t["@@iterator"]!=null)return Array.from(t)}function Bt(t){if(Array.isArray(t))return ie(t)}function ie(t,e){(e==null||e>t.length)&&(e=t.length);for(var n=0,i=Array(e);n<e;n++)i[n]=t[n];return i}function jt(t,e,n,i,l,o){return s(),f("svg",h({width:"14",height:"14",viewBox:"0 0 14 14",fill:"none",xmlns:"http://www.w3.org/2000/svg"},t.pti()),Ft(e[0]||(e[0]=[a("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M7 14C5.61553 14 4.26215 13.5895 3.11101 12.8203C1.95987 12.0511 1.06266 10.9579 0.532846 9.67879C0.00303296 8.3997 -0.13559 6.99224 0.134506 5.63437C0.404603 4.2765 1.07129 3.02922 2.05026 2.05026C3.02922 1.07129 4.2765 0.404603 5.63437 0.134506C6.99224 -0.13559 8.3997 0.00303296 9.67879 0.532846C10.9579 1.06266 12.0511 1.95987 12.8203 3.11101C13.5895 4.26215 14 5.61553 14 7C14 8.85652 13.2625 10.637 11.9497 11.9497C10.637 13.2625 8.85652 14 7 14ZM7 1.16667C5.84628 1.16667 4.71846 1.50879 3.75918 2.14976C2.79989 2.79074 2.05222 3.70178 1.61071 4.76768C1.16919 5.83358 1.05367 7.00647 1.27876 8.13803C1.50384 9.26958 2.05941 10.309 2.87521 11.1248C3.69102 11.9406 4.73042 12.4962 5.86198 12.7212C6.99353 12.9463 8.16642 12.8308 9.23232 12.3893C10.2982 11.9478 11.2093 11.2001 11.8502 10.2408C12.4912 9.28154 12.8333 8.15373 12.8333 7C12.8333 5.45291 12.2188 3.96918 11.1248 2.87521C10.0308 1.78125 8.5471 1.16667 7 1.16667ZM4.66662 9.91668C4.58998 9.91704 4.51404 9.90209 4.44325 9.87271C4.37246 9.84333 4.30826 9.8001 4.2544 9.74557C4.14516 9.6362 4.0838 9.48793 4.0838 9.33335C4.0838 9.17876 4.14516 9.0305 4.2544 8.92113L6.17553 7L4.25443 5.07891C4.15139 4.96832 4.09529 4.82207 4.09796 4.67094C4.10063 4.51982 4.16185 4.37563 4.26872 4.26876C4.3756 4.16188 4.51979 4.10066 4.67091 4.09799C4.82204 4.09532 4.96829 4.15142 5.07887 4.25446L6.99997 6.17556L8.92106 4.25446C9.03164 4.15142 9.1779 4.09532 9.32903 4.09799C9.48015 4.10066 9.62434 4.16188 9.73121 4.26876C9.83809 4.37563 9.89931 4.51982 9.90198 4.67094C9.90464 4.82207 9.84855 4.96832 9.74551 5.07891L7.82441 7L9.74554 8.92113C9.85478 9.0305 9.91614 9.17876 9.91614 9.33335C9.91614 9.48793 9.85478 9.6362 9.74554 9.74557C9.69168 9.8001 9.62748 9.84333 9.55669 9.87271C9.4859 9.90209 9.40996 9.91704 9.33332 9.91668C9.25668 9.91704 9.18073 9.90209 9.10995 9.87271C9.03916 9.84333 8.97495 9.8001 8.9211 9.74557L6.99997 7.82444L5.07884 9.74557C5.02499 9.8001 4.96078 9.84333 4.88999 9.87271C4.81921 9.90209 4.74326 9.91704 4.66662 9.91668Z",fill:"currentColor"},null,-1)])),16)}ve.render=jt;var Nt=`
    .p-chip {
        display: inline-flex;
        align-items: center;
        background: dt('chip.background');
        color: dt('chip.color');
        border-radius: dt('chip.border.radius');
        padding-block: dt('chip.padding.y');
        padding-inline: dt('chip.padding.x');
        gap: dt('chip.gap');
    }

    .p-chip-icon {
        color: dt('chip.icon.color');
        font-size: dt('chip.icon.size');
        width: dt('chip.icon.size');
        height: dt('chip.icon.size');
    }

    .p-chip-image {
        border-radius: 50%;
        width: dt('chip.image.width');
        height: dt('chip.image.height');
        margin-inline-start: calc(-1 * dt('chip.padding.y'));
    }

    .p-chip:has(.p-chip-remove-icon) {
        padding-inline-end: dt('chip.padding.y');
    }

    .p-chip:has(.p-chip-image) {
        padding-block-start: calc(dt('chip.padding.y') / 2);
        padding-block-end: calc(dt('chip.padding.y') / 2);
    }

    .p-chip-remove-icon {
        cursor: pointer;
        font-size: dt('chip.remove.icon.size');
        width: dt('chip.remove.icon.size');
        height: dt('chip.remove.icon.size');
        color: dt('chip.remove.icon.color');
        border-radius: 50%;
        transition:
            outline-color dt('chip.transition.duration'),
            box-shadow dt('chip.transition.duration');
        outline-color: transparent;
    }

    .p-chip-remove-icon:focus-visible {
        box-shadow: dt('chip.remove.icon.focus.ring.shadow');
        outline: dt('chip.remove.icon.focus.ring.width') dt('chip.remove.icon.focus.ring.style') dt('chip.remove.icon.focus.ring.color');
        outline-offset: dt('chip.remove.icon.focus.ring.offset');
    }
`,Ht={root:"p-chip p-component",image:"p-chip-image",icon:"p-chip-icon",label:"p-chip-label",removeIcon:"p-chip-remove-icon"},Gt=Z.extend({name:"chip",style:Nt,classes:Ht}),qt={name:"BaseChip",extends:ce,props:{label:{type:[String,Number],default:null},icon:{type:String,default:null},image:{type:String,default:null},removable:{type:Boolean,default:!1},removeIcon:{type:String,default:void 0}},style:Gt,provide:function(){return{$pcChip:this,$parentInstance:this}}},ye={name:"Chip",extends:qt,inheritAttrs:!1,emits:["remove"],data:function(){return{visible:!0}},methods:{onKeydown:function(e){(e.key==="Enter"||e.key==="Backspace")&&this.close(e)},close:function(e){this.visible=!1,this.$emit("remove",e)}},computed:{dataP:function(){return B({removable:this.removable})}},components:{TimesCircleIcon:ve}},_t=["aria-label","data-p"],Jt=["src"];function Yt(t,e,n,i,l,o){return l.visible?(s(),f("div",h({key:0,class:t.cx("root"),"aria-label":t.label},t.ptmi("root"),{"data-p":o.dataP}),[$(t.$slots,"default",{},function(){return[t.image?(s(),f("img",h({key:0,src:t.image},t.ptm("image"),{class:t.cx("image")}),null,16,Jt)):t.$slots.icon?(s(),T(oe(t.$slots.icon),h({key:1,class:t.cx("icon")},t.ptm("icon")),null,16,["class"])):t.icon?(s(),f("span",h({key:2,class:[t.cx("icon"),t.icon]},t.ptm("icon")),null,16)):O("",!0),t.label!==null?(s(),f("div",h({key:3,class:t.cx("label")},t.ptm("label")),M(t.label),17)):O("",!0)]}),t.removable?$(t.$slots,"removeicon",{key:0,removeCallback:o.close,keydownCallback:o.onKeydown},function(){return[(s(),T(oe(t.removeIcon?"span":"TimesCircleIcon"),h({class:[t.cx("removeIcon"),t.removeIcon],onClick:o.close,onKeydown:o.onKeydown},t.ptm("removeIcon")),null,16,["class","onClick","onKeydown"]))]}):O("",!0)],16,_t)):O("",!0)}ye.render=Yt;var Wt=`
    .p-autocomplete {
        display: inline-flex;
    }

    .p-autocomplete-loader {
        position: absolute;
        top: 50%;
        margin-top: -0.5rem;
        inset-inline-end: dt('autocomplete.padding.x');
    }

    .p-autocomplete:has(.p-autocomplete-dropdown) .p-autocomplete-loader {
        inset-inline-end: calc(dt('autocomplete.dropdown.width') + dt('autocomplete.padding.x'));
    }

    .p-autocomplete:has(.p-autocomplete-dropdown) .p-autocomplete-input {
        flex: 1 1 auto;
        width: 1%;
    }

    .p-autocomplete:has(.p-autocomplete-dropdown) .p-autocomplete-input,
    .p-autocomplete:has(.p-autocomplete-dropdown) .p-autocomplete-input-multiple {
        border-start-end-radius: 0;
        border-end-end-radius: 0;
    }

    .p-autocomplete-dropdown {
        cursor: pointer;
        display: inline-flex;
        user-select: none;
        align-items: center;
        justify-content: center;
        overflow: hidden;
        position: relative;
        width: dt('autocomplete.dropdown.width');
        border-start-end-radius: dt('autocomplete.dropdown.border.radius');
        border-end-end-radius: dt('autocomplete.dropdown.border.radius');
        background: dt('autocomplete.dropdown.background');
        border: 1px solid dt('autocomplete.dropdown.border.color');
        border-inline-start: 0 none;
        color: dt('autocomplete.dropdown.color');
        transition:
            background dt('autocomplete.transition.duration'),
            color dt('autocomplete.transition.duration'),
            border-color dt('autocomplete.transition.duration'),
            outline-color dt('autocomplete.transition.duration'),
            box-shadow dt('autocomplete.transition.duration');
        outline-color: transparent;
    }

    .p-autocomplete-dropdown:not(:disabled):hover {
        background: dt('autocomplete.dropdown.hover.background');
        border-color: dt('autocomplete.dropdown.hover.border.color');
        color: dt('autocomplete.dropdown.hover.color');
    }

    .p-autocomplete-dropdown:not(:disabled):active {
        background: dt('autocomplete.dropdown.active.background');
        border-color: dt('autocomplete.dropdown.active.border.color');
        color: dt('autocomplete.dropdown.active.color');
    }

    .p-autocomplete-dropdown:focus-visible {
        box-shadow: dt('autocomplete.dropdown.focus.ring.shadow');
        outline: dt('autocomplete.dropdown.focus.ring.width') dt('autocomplete.dropdown.focus.ring.style') dt('autocomplete.dropdown.focus.ring.color');
        outline-offset: dt('autocomplete.dropdown.focus.ring.offset');
    }

    .p-autocomplete-overlay {
        position: absolute;
        top: 0;
        left: 0;
        background: dt('autocomplete.overlay.background');
        color: dt('autocomplete.overlay.color');
        border: 1px solid dt('autocomplete.overlay.border.color');
        border-radius: dt('autocomplete.overlay.border.radius');
        box-shadow: dt('autocomplete.overlay.shadow');
        min-width: 100%;
    }

    .p-autocomplete-list-container {
        overflow: auto;
    }

    .p-autocomplete-list {
        margin: 0;
        list-style-type: none;
        display: flex;
        flex-direction: column;
        gap: dt('autocomplete.list.gap');
        padding: dt('autocomplete.list.padding');
    }

    .p-autocomplete-option {
        cursor: pointer;
        white-space: nowrap;
        position: relative;
        overflow: hidden;
        display: flex;
        align-items: center;
        padding: dt('autocomplete.option.padding');
        border: 0 none;
        color: dt('autocomplete.option.color');
        background: transparent;
        transition:
            background dt('autocomplete.transition.duration'),
            color dt('autocomplete.transition.duration'),
            border-color dt('autocomplete.transition.duration');
        border-radius: dt('autocomplete.option.border.radius');
    }

    .p-autocomplete-option:not(.p-autocomplete-option-selected):not(.p-disabled).p-focus {
        background: dt('autocomplete.option.focus.background');
        color: dt('autocomplete.option.focus.color');
    }

    .p-autocomplete-option:not(.p-autocomplete-option-selected):not(.p-disabled):hover {
        background: dt('autocomplete.option.focus.background');
        color: dt('autocomplete.option.focus.color');
    }

    .p-autocomplete-option-selected {
        background: dt('autocomplete.option.selected.background');
        color: dt('autocomplete.option.selected.color');
    }

    .p-autocomplete-option-selected.p-focus {
        background: dt('autocomplete.option.selected.focus.background');
        color: dt('autocomplete.option.selected.focus.color');
    }

    .p-autocomplete-option-group {
        margin: 0;
        padding: dt('autocomplete.option.group.padding');
        color: dt('autocomplete.option.group.color');
        background: dt('autocomplete.option.group.background');
        font-weight: dt('autocomplete.option.group.font.weight');
    }

    .p-autocomplete-input-multiple {
        margin: 0;
        list-style-type: none;
        cursor: text;
        overflow: hidden;
        display: flex;
        align-items: center;
        flex-wrap: wrap;
        padding: calc(dt('autocomplete.padding.y') / 2) dt('autocomplete.padding.x');
        gap: calc(dt('autocomplete.padding.y') / 2);
        color: dt('autocomplete.color');
        background: dt('autocomplete.background');
        border: 1px solid dt('autocomplete.border.color');
        border-radius: dt('autocomplete.border.radius');
        width: 100%;
        transition:
            background dt('autocomplete.transition.duration'),
            color dt('autocomplete.transition.duration'),
            border-color dt('autocomplete.transition.duration'),
            outline-color dt('autocomplete.transition.duration'),
            box-shadow dt('autocomplete.transition.duration');
        outline-color: transparent;
        box-shadow: dt('autocomplete.shadow');
    }

    .p-autocomplete-input-multiple.p-disabled {
        opacity: 1;
        background: dt('autocomplete.disabled.background');
        color: dt('autocomplete.disabled.color');
    }

    .p-autocomplete-input-multiple:not(.p-disabled):hover {
        border-color: dt('autocomplete.hover.border.color');
    }

    .p-autocomplete.p-focus .p-autocomplete-input-multiple:not(.p-disabled) {
        border-color: dt('autocomplete.focus.border.color');
        box-shadow: dt('autocomplete.focus.ring.shadow');
        outline: dt('autocomplete.focus.ring.width') dt('autocomplete.focus.ring.style') dt('autocomplete.focus.ring.color');
        outline-offset: dt('autocomplete.focus.ring.offset');
    }

    .p-autocomplete.p-invalid .p-autocomplete-input-multiple {
        border-color: dt('autocomplete.invalid.border.color');
    }

    .p-variant-filled.p-autocomplete-input-multiple {
        background: dt('autocomplete.filled.background');
    }

    .p-autocomplete-input-multiple.p-variant-filled:not(.p-disabled):hover {
        background: dt('autocomplete.filled.hover.background');
    }

    .p-autocomplete.p-focus .p-autocomplete-input-multiple.p-variant-filled:not(.p-disabled) {
        background: dt('autocomplete.filled.focus.background');
    }

    .p-autocomplete-chip.p-chip {
        padding-block-start: calc(dt('autocomplete.padding.y') / 2);
        padding-block-end: calc(dt('autocomplete.padding.y') / 2);
        border-radius: dt('autocomplete.chip.border.radius');
    }

    .p-autocomplete-input-multiple:has(.p-autocomplete-chip) {
        padding-inline-start: calc(dt('autocomplete.padding.y') / 2);
        padding-inline-end: calc(dt('autocomplete.padding.y') / 2);
    }

    .p-autocomplete-chip-item.p-focus .p-autocomplete-chip {
        background: dt('autocomplete.chip.focus.background');
        color: dt('autocomplete.chip.focus.color');
    }

    .p-autocomplete-input-chip {
        flex: 1 1 auto;
        display: inline-flex;
        padding-block-start: calc(dt('autocomplete.padding.y') / 2);
        padding-block-end: calc(dt('autocomplete.padding.y') / 2);
    }

    .p-autocomplete-input-chip input {
        border: 0 none;
        outline: 0 none;
        background: transparent;
        margin: 0;
        padding: 0;
        box-shadow: none;
        border-radius: 0;
        width: 100%;
        font-family: inherit;
        font-feature-settings: inherit;
        font-size: 1rem;
        color: inherit;
    }

    .p-autocomplete-input-chip input::placeholder {
        color: dt('autocomplete.placeholder.color');
    }

    .p-autocomplete.p-invalid .p-autocomplete-input-chip input::placeholder {
        color: dt('autocomplete.invalid.placeholder.color');
    }

    .p-autocomplete-empty-message {
        padding: dt('autocomplete.empty.message.padding');
    }

    .p-autocomplete-fluid {
        display: flex;
    }

    .p-autocomplete-fluid:has(.p-autocomplete-dropdown) .p-autocomplete-input {
        width: 1%;
    }

    .p-autocomplete:has(.p-inputtext-sm) .p-autocomplete-dropdown {
        width: dt('autocomplete.dropdown.sm.width');
    }

    .p-autocomplete:has(.p-inputtext-sm) .p-autocomplete-dropdown .p-icon {
        font-size: dt('form.field.sm.font.size');
        width: dt('form.field.sm.font.size');
        height: dt('form.field.sm.font.size');
    }

    .p-autocomplete:has(.p-inputtext-lg) .p-autocomplete-dropdown {
        width: dt('autocomplete.dropdown.lg.width');
    }

    .p-autocomplete:has(.p-inputtext-lg) .p-autocomplete-dropdown .p-icon {
        font-size: dt('form.field.lg.font.size');
        width: dt('form.field.lg.font.size');
        height: dt('form.field.lg.font.size');
    }

    .p-autocomplete-clear-icon {
        position: absolute;
        top: 50%;
        margin-top: -0.5rem;
        cursor: pointer;
        color: dt('form.field.icon.color');
        inset-inline-end: dt('autocomplete.padding.x');
    }

    .p-autocomplete:has(.p-autocomplete-dropdown) .p-autocomplete-clear-icon {
        inset-inline-end: calc(dt('autocomplete.padding.x') + dt('autocomplete.dropdown.width'));
    }

    .p-autocomplete:has(.p-autocomplete-clear-icon) .p-autocomplete-input {
        padding-inline-end: calc((dt('form.field.padding.x') * 2) + dt('icon.size'));
    }

    .p-inputgroup .p-autocomplete-dropdown {
        border-radius: 0;
    }

    .p-inputgroup > .p-autocomplete:last-child:has(.p-autocomplete-dropdown) > .p-autocomplete-input {
        border-start-end-radius: 0;
        border-end-end-radius: 0;
    }

    .p-inputgroup > .p-autocomplete:last-child .p-autocomplete-dropdown {
        border-start-end-radius: dt('autocomplete.dropdown.border.radius');
        border-end-end-radius: dt('autocomplete.dropdown.border.radius');
    }
`,Zt={root:{position:"relative"}},Qt={root:function(e){var n=e.instance;return["p-autocomplete p-component p-inputwrapper",{"p-invalid":n.$invalid,"p-focus":n.focused,"p-inputwrapper-filled":n.$filled||W(n.inputValue),"p-inputwrapper-focus":n.focused,"p-autocomplete-open":n.overlayVisible,"p-autocomplete-fluid":n.$fluid,"p-autocomplete-clearable":n.isClearIconVisible}]},pcInputText:"p-autocomplete-input",inputMultiple:function(e){var n=e.instance,i=e.props;return["p-autocomplete-input-multiple",{"p-variant-filled":n.$variant==="filled","p-disabled":i.disabled}]},clearIcon:"p-autocomplete-clear-icon",chipItem:function(e){var n=e.instance,i=e.i;return["p-autocomplete-chip-item",{"p-focus":n.focusedMultipleOptionIndex===i}]},pcChip:"p-autocomplete-chip",chipIcon:"p-autocomplete-chip-icon",inputChip:"p-autocomplete-input-chip",loader:"p-autocomplete-loader",dropdown:"p-autocomplete-dropdown",overlay:"p-autocomplete-overlay p-component",listContainer:"p-autocomplete-list-container",list:"p-autocomplete-list",optionGroup:"p-autocomplete-option-group",option:function(e){var n=e.instance,i=e.option,l=e.i,o=e.getItemOptions;return["p-autocomplete-option",{"p-autocomplete-option-selected":n.isSelected(i),"p-focus":n.focusedOptionIndex===n.getOptionIndex(l,o),"p-disabled":n.isOptionDisabled(i)}]},emptyMessage:"p-autocomplete-empty-message"},Xt=Z.extend({name:"autocomplete",style:Wt,classes:Qt,inlineStyles:Zt}),en={name:"BaseAutoComplete",extends:pe,props:{suggestions:{type:Array,default:null},optionLabel:null,optionDisabled:null,optionGroupLabel:null,optionGroupChildren:null,scrollHeight:{type:String,default:"14rem"},dropdown:{type:Boolean,default:!1},dropdownMode:{type:String,default:"blank"},multiple:{type:Boolean,default:!1},loading:{type:Boolean,default:!1},placeholder:{type:String,default:null},dataKey:{type:String,default:null},minLength:{type:Number,default:1},delay:{type:Number,default:300},appendTo:{type:[String,Object],default:"body"},forceSelection:{type:Boolean,default:!1},completeOnFocus:{type:Boolean,default:!1},showClear:{type:Boolean,default:!1},inputId:{type:String,default:null},inputStyle:{type:Object,default:null},inputClass:{type:[String,Object],default:null},panelStyle:{type:Object,default:null},panelClass:{type:[String,Object],default:null},overlayStyle:{type:Object,default:null},overlayClass:{type:[String,Object],default:null},dropdownIcon:{type:String,default:null},dropdownClass:{type:[String,Object],default:null},loader:{type:String,default:null},loadingIcon:{type:String,default:null},removeTokenIcon:{type:String,default:null},chipIcon:{type:String,default:null},virtualScrollerOptions:{type:Object,default:null},autoOptionFocus:{type:Boolean,default:!1},selectOnFocus:{type:Boolean,default:!1},focusOnHover:{type:Boolean,default:!0},searchLocale:{type:String,default:void 0},searchMessage:{type:String,default:null},selectionMessage:{type:String,default:null},emptySelectionMessage:{type:String,default:null},emptySearchMessage:{type:String,default:null},showEmptyMessage:{type:Boolean,default:!0},tabindex:{type:Number,default:0},typeahead:{type:Boolean,default:!0},ariaLabel:{type:String,default:null},ariaLabelledby:{type:String,default:null}},style:Xt,provide:function(){return{$pcAutoComplete:this,$parentInstance:this}}};function se(t,e,n){return(e=tn(e))in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function tn(t){var e=nn(t,"string");return R(e)=="symbol"?e:e+""}function nn(t,e){if(R(t)!="object"||!t)return t;var n=t[Symbol.toPrimitive];if(n!==void 0){var i=n.call(t,e);if(R(i)!="object")return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}function R(t){"@babel/helpers - typeof";return R=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},R(t)}function J(t){return rn(t)||an(t)||ln(t)||on()}function on(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function ln(t,e){if(t){if(typeof t=="string")return le(t,e);var n={}.toString.call(t).slice(8,-1);return n==="Object"&&t.constructor&&(n=t.constructor.name),n==="Map"||n==="Set"?Array.from(t):n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?le(t,e):void 0}}function an(t){if(typeof Symbol<"u"&&t[Symbol.iterator]!=null||t["@@iterator"]!=null)return Array.from(t)}function rn(t){if(Array.isArray(t))return le(t)}function le(t,e){(e==null||e>t.length)&&(e=t.length);for(var n=0,i=Array(e);n<e;n++)i[n]=t[n];return i}var xe={name:"AutoComplete",extends:en,inheritAttrs:!1,emits:["change","focus","blur","item-select","item-unselect","option-select","option-unselect","dropdown-click","clear","complete","before-show","before-hide","show","hide"],inject:{$pcFluid:{default:null}},outsideClickListener:null,resizeListener:null,scrollHandler:null,overlay:null,virtualScroller:null,searchTimeout:null,dirty:!1,startRangeIndex:-1,data:function(){return{clicked:!1,focused:!1,focusedOptionIndex:-1,focusedMultipleOptionIndex:-1,overlayVisible:!1,searching:!1}},watch:{suggestions:function(){this.searching&&(this.show(),this.focusedOptionIndex=this.overlayVisible&&this.autoOptionFocus?this.findFirstFocusedOptionIndex():-1,this.searching=!1,!this.showEmptyMessage&&this.visibleOptions.length===0&&this.hide()),this.autoUpdateModel()}},mounted:function(){this.autoUpdateModel()},updated:function(){this.overlayVisible&&this.alignOverlay()},beforeUnmount:function(){this.unbindOutsideClickListener(),this.unbindResizeListener(),this.scrollHandler&&(this.scrollHandler.destroy(),this.scrollHandler=null),this.overlay&&(ee.clear(this.overlay),this.overlay=null)},methods:{getOptionIndex:function(e,n){return this.virtualScrollerDisabled?e:n&&n(e).index},getOptionLabel:function(e){return this.optionLabel?U(e,this.optionLabel):e},getOptionValue:function(e){return e},getOptionRenderKey:function(e,n){return(this.dataKey?U(e,this.dataKey):this.getOptionLabel(e))+"_"+n},getPTOptions:function(e,n,i,l){return this.ptm(l,{context:{option:e,index:i,selected:this.isSelected(e),focused:this.focusedOptionIndex===this.getOptionIndex(i,n),disabled:this.isOptionDisabled(e)}})},isOptionDisabled:function(e){return this.optionDisabled?U(e,this.optionDisabled):!1},isOptionGroup:function(e){return this.optionGroupLabel&&e.optionGroup&&e.group},getOptionGroupLabel:function(e){return U(e,this.optionGroupLabel)},getOptionGroupChildren:function(e){return U(e,this.optionGroupChildren)},getAriaPosInset:function(e){var n=this;return(this.optionGroupLabel?e-this.visibleOptions.slice(0,e).filter(function(i){return n.isOptionGroup(i)}).length:e)+1},show:function(e){this.$emit("before-show"),this.dirty=!0,this.overlayVisible=!0,this.focusedOptionIndex=this.focusedOptionIndex!==-1?this.focusedOptionIndex:this.autoOptionFocus?this.findFirstFocusedOptionIndex():-1,e&&P(this.multiple?this.$refs.focusInput:this.$refs.focusInput.$el)},hide:function(e){var n=this,i=function(){var o;n.$emit("before-hide"),n.dirty=e,n.overlayVisible=!1,n.clicked=!1,n.focusedOptionIndex=-1,e&&P(n.multiple?n.$refs.focusInput:(o=n.$refs.focusInput)===null||o===void 0?void 0:o.$el)};setTimeout(function(){i()},0)},onFocus:function(e){this.disabled||(!this.dirty&&this.completeOnFocus&&this.search(e,e.target.value,"focus"),this.dirty=!0,this.focused=!0,this.overlayVisible&&(this.focusedOptionIndex=this.focusedOptionIndex!==-1?this.focusedOptionIndex:this.overlayVisible&&this.autoOptionFocus?this.findFirstFocusedOptionIndex():-1,this.scrollInView(this.focusedOptionIndex)),this.$emit("focus",e))},onBlur:function(e){var n,i;this.dirty=!1,this.focused=!1,this.focusedOptionIndex=-1,this.$emit("blur",e),(n=(i=this.formField).onBlur)===null||n===void 0||n.call(i)},onKeyDown:function(e){if(this.disabled){e.preventDefault();return}switch(e.code){case"ArrowDown":this.onArrowDownKey(e);break;case"ArrowUp":this.onArrowUpKey(e);break;case"ArrowLeft":this.onArrowLeftKey(e);break;case"ArrowRight":this.onArrowRightKey(e);break;case"Home":this.onHomeKey(e);break;case"End":this.onEndKey(e);break;case"PageDown":this.onPageDownKey(e);break;case"PageUp":this.onPageUpKey(e);break;case"Enter":case"NumpadEnter":this.onEnterKey(e);break;case"Space":this.onSpaceKey(e);break;case"Escape":this.onEscapeKey(e);break;case"Tab":this.onTabKey(e);break;case"ShiftLeft":case"ShiftRight":this.onShiftKey(e);break;case"Backspace":this.onBackspaceKey(e);break}this.clicked=!1},onInput:function(e){var n=this;if(this.typeahead){this.searchTimeout&&clearTimeout(this.searchTimeout);var i=e.target.value;this.multiple||this.updateModel(e,i),i.length===0?(this.searching=!1,this.hide(),this.$emit("clear")):i.length>=this.minLength?(this.focusedOptionIndex=-1,this.searchTimeout=setTimeout(function(){n.search(e,i,"input")},this.delay)):(this.searching=!1,this.hide())}},onChange:function(e){var n=this;if(this.forceSelection){var i=!1;if(this.visibleOptions&&!this.multiple){var l,o=this.multiple?this.$refs.focusInput.value:(l=this.$refs.focusInput)===null||l===void 0||(l=l.$el)===null||l===void 0?void 0:l.value,m=this.visibleOptions.find(function(k){return n.isOptionMatched(k,o||"")});m!==void 0&&(i=!0,!this.isSelected(m)&&this.onOptionSelect(e,m))}if(!i){if(this.multiple)this.$refs.focusInput.value="";else{var r,u=(r=this.$refs.focusInput)===null||r===void 0?void 0:r.$el;u&&(u.value="")}this.$emit("clear"),!this.multiple&&this.updateModel(e,null)}}},onMultipleContainerFocus:function(){this.disabled||(this.focused=!0)},onMultipleContainerBlur:function(){this.focusedMultipleOptionIndex=-1,this.focused=!1},onMultipleContainerKeyDown:function(e){if(this.disabled){e.preventDefault();return}switch(e.code){case"ArrowLeft":this.onArrowLeftKeyOnMultiple(e);break;case"ArrowRight":this.onArrowRightKeyOnMultiple(e);break;case"Backspace":this.onBackspaceKeyOnMultiple(e);break}},onContainerClick:function(e){this.clicked=!0,!(this.disabled||this.searching||this.loading||this.isDropdownClicked(e))&&(!this.overlay||!this.overlay.contains(e.target))&&P(this.multiple?this.$refs.focusInput:this.$refs.focusInput.$el)},onDropdownClick:function(e){var n=void 0;if(this.overlayVisible)this.hide(!0);else{var i=this.multiple?this.$refs.focusInput:this.$refs.focusInput.$el;P(i),n=i.value,this.dropdownMode==="blank"?this.search(e,"","dropdown"):this.dropdownMode==="current"&&this.search(e,n,"dropdown")}this.$emit("dropdown-click",{originalEvent:e,query:n})},onOptionSelect:function(e,n){var i=arguments.length>2&&arguments[2]!==void 0?arguments[2]:!0,l=this.getOptionValue(n);this.multiple?(this.$refs.focusInput.value="",this.isSelected(n)||this.updateModel(e,[].concat(J(this.d_value||[]),[l]))):this.updateModel(e,l),this.$emit("item-select",{originalEvent:e,value:n}),this.$emit("option-select",{originalEvent:e,value:n}),i&&this.hide(!0)},onOptionMouseMove:function(e,n){this.focusOnHover&&this.changeFocusedOptionIndex(e,n)},onOptionSelectRange:function(e){var n=this,i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:-1,l=arguments.length>2&&arguments[2]!==void 0?arguments[2]:-1;if(i===-1&&(i=this.findNearestSelectedOptionIndex(l,!0)),l===-1&&(l=this.findNearestSelectedOptionIndex(i)),i!==-1&&l!==-1){var o=Math.min(i,l),m=Math.max(i,l),r=this.visibleOptions.slice(o,m+1).filter(function(u){return n.isValidOption(u)}).filter(function(u){return!n.isSelected(u)}).map(function(u){return n.getOptionValue(u)});this.updateModel(e,[].concat(J(this.d_value||[]),J(r)))}},onClearClick:function(e){this.updateModel(e,null)},onOverlayClick:function(e){Se.emit("overlay-click",{originalEvent:e,target:this.$el})},onOverlayKeyDown:function(e){e.code==="Escape"&&this.onEscapeKey(e)},onArrowDownKey:function(e){if(this.overlayVisible){var n=this.focusedOptionIndex!==-1?this.findNextOptionIndex(this.focusedOptionIndex):this.clicked?this.findFirstOptionIndex():this.findFirstFocusedOptionIndex();this.multiple&&e.shiftKey&&this.onOptionSelectRange(e,this.startRangeIndex,n),this.changeFocusedOptionIndex(e,n),e.preventDefault()}},onArrowUpKey:function(e){if(this.overlayVisible)if(e.altKey)this.focusedOptionIndex!==-1&&this.onOptionSelect(e,this.visibleOptions[this.focusedOptionIndex]),this.overlayVisible&&this.hide(),e.preventDefault();else{var n=this.focusedOptionIndex!==-1?this.findPrevOptionIndex(this.focusedOptionIndex):this.clicked?this.findLastOptionIndex():this.findLastFocusedOptionIndex();this.multiple&&e.shiftKey&&this.onOptionSelectRange(e,n,this.startRangeIndex),this.changeFocusedOptionIndex(e,n),e.preventDefault()}},onArrowLeftKey:function(e){var n=e.currentTarget;this.focusedOptionIndex=-1,this.multiple&&(Pe(n.value)&&this.$filled?(P(this.$refs.multiContainer),this.focusedMultipleOptionIndex=this.d_value.length):e.stopPropagation())},onArrowRightKey:function(e){this.focusedOptionIndex=-1,this.multiple&&e.stopPropagation()},onHomeKey:function(e){var n=e.currentTarget,i=n.value.length,l=e.metaKey||e.ctrlKey,o=this.findFirstOptionIndex();this.multiple&&e.shiftKey&&l&&this.onOptionSelectRange(e,o,this.startRangeIndex),n.setSelectionRange(0,e.shiftKey?i:0),this.focusedOptionIndex=-1,e.preventDefault()},onEndKey:function(e){var n=e.currentTarget,i=n.value.length,l=e.metaKey||e.ctrlKey,o=this.findLastOptionIndex();this.multiple&&e.shiftKey&&l&&this.onOptionSelectRange(e,this.startRangeIndex,o),n.setSelectionRange(e.shiftKey?0:i,i),this.focusedOptionIndex=-1,e.preventDefault()},onPageUpKey:function(e){this.scrollInView(0),e.preventDefault()},onPageDownKey:function(e){this.scrollInView(this.visibleOptions.length-1),e.preventDefault()},onEnterKey:function(e){this.typeahead?this.overlayVisible?(this.focusedOptionIndex!==-1&&(this.multiple&&e.shiftKey?(this.onOptionSelectRange(e,this.focusedOptionIndex),e.preventDefault()):this.onOptionSelect(e,this.visibleOptions[this.focusedOptionIndex])),this.hide()):(this.focusedOptionIndex=-1,this.onArrowDownKey(e)):this.multiple&&(e.target.value.trim()&&(this.updateModel(e,[].concat(J(this.d_value||[]),[e.target.value.trim()])),this.$refs.focusInput.value=""),e.preventDefault())},onSpaceKey:function(e){!this.autoOptionFocus&&this.focusedOptionIndex!==-1&&this.onEnterKey(e)},onEscapeKey:function(e){this.overlayVisible&&this.hide(!0),e.preventDefault()},onTabKey:function(e){this.focusedOptionIndex!==-1&&this.onOptionSelect(e,this.visibleOptions[this.focusedOptionIndex]),this.overlayVisible&&this.hide()},onShiftKey:function(){this.startRangeIndex=this.focusedOptionIndex},onBackspaceKey:function(e){if(this.multiple){if(W(this.d_value)&&!this.$refs.focusInput.value){var n=this.d_value[this.d_value.length-1],i=this.d_value.slice(0,-1);this.writeValue(i,e),this.$emit("item-unselect",{originalEvent:e,value:n}),this.$emit("option-unselect",{originalEvent:e,value:n})}e.stopPropagation()}},onArrowLeftKeyOnMultiple:function(){this.focusedMultipleOptionIndex=this.focusedMultipleOptionIndex<1?0:this.focusedMultipleOptionIndex-1},onArrowRightKeyOnMultiple:function(){this.focusedMultipleOptionIndex++,this.focusedMultipleOptionIndex>this.d_value.length-1&&(this.focusedMultipleOptionIndex=-1,P(this.$refs.focusInput))},onBackspaceKeyOnMultiple:function(e){this.focusedMultipleOptionIndex!==-1&&this.removeOption(e,this.focusedMultipleOptionIndex)},onOverlayEnter:function(e){ee.set("overlay",e,this.$primevue.config.zIndex.overlay),ze(e,{position:"absolute",top:"0"}),this.alignOverlay(),this.$attrSelector&&e.setAttribute(this.$attrSelector,"")},onOverlayAfterEnter:function(){this.bindOutsideClickListener(),this.bindScrollListener(),this.bindResizeListener(),this.$emit("show")},onOverlayLeave:function(){this.unbindOutsideClickListener(),this.unbindScrollListener(),this.unbindResizeListener(),this.$emit("hide"),this.overlay=null},onOverlayAfterLeave:function(e){ee.clear(e)},alignOverlay:function(){var e=this.multiple?this.$refs.multiContainer:this.$refs.focusInput.$el;this.appendTo==="self"?De(this.overlay,e):(this.overlay.style.minWidth=Ve(e)+"px",Ae(this.overlay,e))},bindOutsideClickListener:function(){var e=this;this.outsideClickListener||(this.outsideClickListener=function(n){e.overlayVisible&&e.overlay&&e.isOutsideClicked(n)&&e.hide()},document.addEventListener("click",this.outsideClickListener,!0))},unbindOutsideClickListener:function(){this.outsideClickListener&&(document.removeEventListener("click",this.outsideClickListener,!0),this.outsideClickListener=null)},bindScrollListener:function(){var e=this;this.scrollHandler||(this.scrollHandler=new Ce(this.$refs.container,function(){e.overlayVisible&&e.hide()})),this.scrollHandler.bindScrollListener()},unbindScrollListener:function(){this.scrollHandler&&this.scrollHandler.unbindScrollListener()},bindResizeListener:function(){var e=this;this.resizeListener||(this.resizeListener=function(){e.overlayVisible&&!Ke()&&e.hide()},window.addEventListener("resize",this.resizeListener))},unbindResizeListener:function(){this.resizeListener&&(window.removeEventListener("resize",this.resizeListener),this.resizeListener=null)},isOutsideClicked:function(e){return!this.overlay.contains(e.target)&&!this.isInputClicked(e)&&!this.isDropdownClicked(e)},isInputClicked:function(e){return this.multiple?e.target===this.$refs.multiContainer||this.$refs.multiContainer.contains(e.target):e.target===this.$refs.focusInput.$el},isDropdownClicked:function(e){return this.$refs.dropdownButton?e.target===this.$refs.dropdownButton||this.$refs.dropdownButton.contains(e.target):!1},isOptionMatched:function(e,n){var i;return this.isValidOption(e)&&((i=this.getOptionLabel(e))===null||i===void 0?void 0:i.toLocaleLowerCase(this.searchLocale))===n.toLocaleLowerCase(this.searchLocale)},isValidOption:function(e){return W(e)&&!(this.isOptionDisabled(e)||this.isOptionGroup(e))},isValidSelectedOption:function(e){return this.isValidOption(e)&&this.isSelected(e)},isEquals:function(e,n){return Te(e,n,this.equalityKey)},isSelected:function(e){var n=this,i=this.getOptionValue(e);return this.multiple?(this.d_value||[]).some(function(l){return n.isEquals(l,i)}):this.isEquals(this.d_value,this.getOptionValue(e))},findFirstOptionIndex:function(){var e=this;return this.visibleOptions.findIndex(function(n){return e.isValidOption(n)})},findLastOptionIndex:function(){var e=this;return X(this.visibleOptions,function(n){return e.isValidOption(n)})},findNextOptionIndex:function(e){var n=this,i=e<this.visibleOptions.length-1?this.visibleOptions.slice(e+1).findIndex(function(l){return n.isValidOption(l)}):-1;return i>-1?i+e+1:e},findPrevOptionIndex:function(e){var n=this,i=e>0?X(this.visibleOptions.slice(0,e),function(l){return n.isValidOption(l)}):-1;return i>-1?i:e},findSelectedOptionIndex:function(){var e=this;return this.$filled?this.visibleOptions.findIndex(function(n){return e.isValidSelectedOption(n)}):-1},findFirstFocusedOptionIndex:function(){var e=this.findSelectedOptionIndex();return e<0?this.findFirstOptionIndex():e},findLastFocusedOptionIndex:function(){var e=this.findSelectedOptionIndex();return e<0?this.findLastOptionIndex():e},search:function(e,n,i){n!=null&&(i==="input"&&n.trim().length===0||(this.searching=!0,this.$emit("complete",{originalEvent:e,query:n})))},removeOption:function(e,n){var i=this,l=this.d_value[n],o=this.d_value.filter(function(m,r){return r!==n}).map(function(m){return i.getOptionValue(m)});this.updateModel(e,o),this.$emit("item-unselect",{originalEvent:e,value:l}),this.$emit("option-unselect",{originalEvent:e,value:l}),this.dirty=!0,P(this.multiple?this.$refs.focusInput:this.$refs.focusInput.$el)},changeFocusedOptionIndex:function(e,n){this.focusedOptionIndex!==n&&(this.focusedOptionIndex=n,this.scrollInView(),this.selectOnFocus&&this.onOptionSelect(e,this.visibleOptions[n],!1))},scrollInView:function(){var e=this,n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:-1;this.$nextTick(function(){var i=n!==-1?"".concat(e.$id,"_").concat(n):e.focusedOptionId,l=Me(e.list,'li[id="'.concat(i,'"]'));l?l.scrollIntoView&&l.scrollIntoView({block:"nearest",inline:"start"}):e.virtualScrollerDisabled||e.virtualScroller&&e.virtualScroller.scrollToIndex(n!==-1?n:e.focusedOptionIndex)})},autoUpdateModel:function(){this.selectOnFocus&&this.autoOptionFocus&&!this.$filled&&(this.focusedOptionIndex=this.findFirstFocusedOptionIndex(),this.onOptionSelect(null,this.visibleOptions[this.focusedOptionIndex],!1))},updateModel:function(e,n){this.writeValue(n,e),this.$emit("change",{originalEvent:e,value:n})},flatOptions:function(e){var n=this;return(e||[]).reduce(function(i,l,o){i.push({optionGroup:l,group:!0,index:o});var m=n.getOptionGroupChildren(l);return m&&m.forEach(function(r){return i.push(r)}),i},[])},overlayRef:function(e){this.overlay=e},listRef:function(e,n){this.list=e,n&&n(e)},virtualScrollerRef:function(e){this.virtualScroller=e},findNextSelectedOptionIndex:function(e){var n=this,i=this.$filled&&e<this.visibleOptions.length-1?this.visibleOptions.slice(e+1).findIndex(function(l){return n.isValidSelectedOption(l)}):-1;return i>-1?i+e+1:-1},findPrevSelectedOptionIndex:function(e){var n=this,i=this.$filled&&e>0?X(this.visibleOptions.slice(0,e),function(l){return n.isValidSelectedOption(l)}):-1;return i>-1?i:-1},findNearestSelectedOptionIndex:function(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,i=-1;return this.$filled&&(n?(i=this.findPrevSelectedOptionIndex(e),i=i===-1?this.findNextSelectedOptionIndex(e):i):(i=this.findNextSelectedOptionIndex(e),i=i===-1?this.findPrevSelectedOptionIndex(e):i)),i>-1?i:e}},computed:{visibleOptions:function(){return this.optionGroupLabel?this.flatOptions(this.suggestions):this.suggestions||[]},inputValue:function(){if(this.$filled)if(R(this.d_value)==="object"){var e=this.getOptionLabel(this.d_value);return e??this.d_value}else return this.d_value;else return""},hasSelectedOption:function(){return this.$filled},equalityKey:function(){return this.dataKey},searchResultMessageText:function(){return W(this.visibleOptions)&&this.overlayVisible?this.searchMessageText.replaceAll("{0}",this.visibleOptions.length):this.emptySearchMessageText},searchMessageText:function(){return this.searchMessage||this.$primevue.config.locale.searchMessage||""},emptySearchMessageText:function(){return this.emptySearchMessage||this.$primevue.config.locale.emptySearchMessage||""},selectionMessageText:function(){return this.selectionMessage||this.$primevue.config.locale.selectionMessage||""},emptySelectionMessageText:function(){return this.emptySelectionMessage||this.$primevue.config.locale.emptySelectionMessage||""},selectedMessageText:function(){return this.$filled?this.selectionMessageText.replaceAll("{0}",this.multiple?this.d_value.length:"1"):this.emptySelectionMessageText},listAriaLabel:function(){return this.$primevue.config.locale.aria?this.$primevue.config.locale.aria.listLabel:void 0},focusedOptionId:function(){return this.focusedOptionIndex!==-1?"".concat(this.$id,"_").concat(this.focusedOptionIndex):null},focusedMultipleOptionId:function(){return this.focusedMultipleOptionIndex!==-1?"".concat(this.$id,"_multiple_option_").concat(this.focusedMultipleOptionIndex):null},isClearIconVisible:function(){return this.showClear&&this.$filled&&!this.disabled&&!this.loading},ariaSetSize:function(){var e=this;return this.visibleOptions.filter(function(n){return!e.isOptionGroup(n)}).length},virtualScrollerDisabled:function(){return!this.virtualScrollerOptions},panelId:function(){return this.$id+"_panel"},containerDataP:function(){return B({fluid:this.$fluid})},overlayDataP:function(){return B(se({},"portal-"+this.appendTo,"portal-"+this.appendTo))},inputMultipleDataP:function(){return B(se({invalid:this.$invalid,disabled:this.disabled,focus:this.focused,fluid:this.$fluid,filled:this.$variant==="filled",empty:!this.$filled},this.size,this.size))}},components:{InputText:ae,VirtualScroller:_e,Portal:Ie,Chip:ye,ChevronDownIcon:qe,SpinnerIcon:ke,TimesIcon:Oe},directives:{ripple:$e}};function q(t){"@babel/helpers - typeof";return q=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},q(t)}function de(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter(function(l){return Object.getOwnPropertyDescriptor(t,l).enumerable})),n.push.apply(n,i)}return n}function ue(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?de(Object(n),!0).forEach(function(i){sn(t,i,n[i])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):de(Object(n)).forEach(function(i){Object.defineProperty(t,i,Object.getOwnPropertyDescriptor(n,i))})}return t}function sn(t,e,n){return(e=dn(e))in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function dn(t){var e=un(t,"string");return q(e)=="symbol"?e:e+""}function un(t,e){if(q(t)!="object"||!t)return t;var n=t[Symbol.toPrimitive];if(n!==void 0){var i=n.call(t,e);if(q(i)!="object")return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}var pn=["data-p"],cn=["aria-activedescendant","data-p-has-dropdown","data-p"],fn=["id","aria-label","aria-setsize","aria-posinset"],hn=["id","placeholder","tabindex","disabled","aria-label","aria-labelledby","aria-expanded","aria-controls","aria-activedescendant","aria-invalid"],mn=["data-p-has-dropdown"],bn=["disabled","aria-expanded","aria-controls"],gn=["id","data-p"],vn=["id","aria-label"],yn=["id"],xn=["id","aria-label","aria-selected","aria-disabled","aria-setsize","aria-posinset","onClick","onMousemove","data-p-selected","data-p-focused","data-p-disabled"];function wn(t,e,n,i,l,o){var m=F("InputText"),r=F("TimesIcon"),u=F("Chip"),k=F("SpinnerIcon"),x=F("VirtualScroller"),I=F("Portal"),c=Fe("ripple");return s(),f("div",h({ref:"container",class:t.cx("root"),style:t.sx("root"),onClick:e[11]||(e[11]=function(){return o.onContainerClick&&o.onContainerClick.apply(o,arguments)}),"data-p":o.containerDataP},t.ptmi("root")),[t.multiple?O("",!0):(s(),T(m,{key:0,ref:"focusInput",id:t.inputId,type:"text",name:t.$formName,class:V([t.cx("pcInputText"),t.inputClass]),style:Ee(t.inputStyle),defaultValue:o.inputValue,placeholder:t.placeholder,tabindex:t.disabled?-1:t.tabindex,fluid:t.$fluid,disabled:t.disabled,size:t.size,invalid:t.invalid,variant:t.variant,autocomplete:"off",role:"combobox","aria-label":t.ariaLabel,"aria-labelledby":t.ariaLabelledby,"aria-haspopup":"listbox","aria-autocomplete":"list","aria-expanded":l.overlayVisible,"aria-controls":l.overlayVisible?o.panelId:void 0,"aria-activedescendant":l.focused?o.focusedOptionId:void 0,onFocus:o.onFocus,onBlur:o.onBlur,onKeydown:o.onKeyDown,onInput:o.onInput,onChange:o.onChange,unstyled:t.unstyled,"data-p-has-dropdown":t.dropdown,pt:t.ptm("pcInputText")},null,8,["id","name","class","style","defaultValue","placeholder","tabindex","fluid","disabled","size","invalid","variant","aria-label","aria-labelledby","aria-expanded","aria-controls","aria-activedescendant","onFocus","onBlur","onKeydown","onInput","onChange","unstyled","data-p-has-dropdown","pt"])),o.isClearIconVisible?$(t.$slots,"clearicon",{key:1,class:V(t.cx("clearIcon")),clearCallback:o.onClearClick},function(){return[g(r,h({class:[t.cx("clearIcon")],onClick:o.onClearClick},t.ptm("clearIcon")),null,16,["class","onClick"])]}):O("",!0),t.multiple?(s(),f("ul",h({key:2,ref:"multiContainer",class:t.cx("inputMultiple"),tabindex:"-1",role:"listbox","aria-orientation":"horizontal","aria-activedescendant":l.focused?o.focusedMultipleOptionId:void 0,onFocus:e[5]||(e[5]=function(){return o.onMultipleContainerFocus&&o.onMultipleContainerFocus.apply(o,arguments)}),onBlur:e[6]||(e[6]=function(){return o.onMultipleContainerBlur&&o.onMultipleContainerBlur.apply(o,arguments)}),onKeydown:e[7]||(e[7]=function(){return o.onMultipleContainerKeyDown&&o.onMultipleContainerKeyDown.apply(o,arguments)}),"data-p-has-dropdown":t.dropdown,"data-p":o.inputMultipleDataP},t.ptm("inputMultiple")),[(s(!0),f(E,null,N(t.d_value,function(p,b){return s(),f("li",h({key:"".concat(b,"_").concat(o.getOptionLabel(p)),id:t.$id+"_multiple_option_"+b,class:t.cx("chipItem",{i:b}),role:"option","aria-label":o.getOptionLabel(p),"aria-selected":!0,"aria-setsize":t.d_value.length,"aria-posinset":b+1},{ref_for:!0},t.ptm("chipItem")),[$(t.$slots,"chip",h({class:t.cx("pcChip"),value:p,index:b,removeCallback:function(w){return o.removeOption(w,b)}},{ref_for:!0},t.ptm("pcChip")),function(){return[g(u,{class:V(t.cx("pcChip")),label:o.getOptionLabel(p),removeIcon:t.chipIcon||t.removeTokenIcon,removable:"",unstyled:t.unstyled,onRemove:function(w){return o.removeOption(w,b)},"data-p-focused":l.focusedMultipleOptionIndex===b,pt:t.ptm("pcChip")},{removeicon:C(function(){return[$(t.$slots,t.$slots.chipicon?"chipicon":"removetokenicon",{class:V(t.cx("chipIcon")),index:b,removeCallback:function(w){return o.removeOption(w,b)}})]}),_:2},1032,["class","label","removeIcon","unstyled","onRemove","data-p-focused","pt"])]})],16,fn)}),128)),a("li",h({class:t.cx("inputChip"),role:"option"},t.ptm("inputChip")),[a("input",h({ref:"focusInput",id:t.inputId,type:"text",style:t.inputStyle,class:t.inputClass,placeholder:t.placeholder,tabindex:t.disabled?-1:t.tabindex,disabled:t.disabled,autocomplete:"off",role:"combobox","aria-label":t.ariaLabel,"aria-labelledby":t.ariaLabelledby,"aria-haspopup":"listbox","aria-autocomplete":"list","aria-expanded":l.overlayVisible,"aria-controls":t.$id+"_list","aria-activedescendant":l.focused?o.focusedOptionId:void 0,"aria-invalid":t.invalid||void 0,onFocus:e[0]||(e[0]=function(){return o.onFocus&&o.onFocus.apply(o,arguments)}),onBlur:e[1]||(e[1]=function(){return o.onBlur&&o.onBlur.apply(o,arguments)}),onKeydown:e[2]||(e[2]=function(){return o.onKeyDown&&o.onKeyDown.apply(o,arguments)}),onInput:e[3]||(e[3]=function(){return o.onInput&&o.onInput.apply(o,arguments)}),onChange:e[4]||(e[4]=function(){return o.onChange&&o.onChange.apply(o,arguments)})},t.ptm("input")),null,16,hn)],16)],16,cn)):O("",!0),l.searching||t.loading?$(t.$slots,t.$slots.loader?"loader":"loadingicon",{key:3,class:V(t.cx("loader"))},function(){return[t.loader||t.loadingIcon?(s(),f("i",h({key:0,class:["pi-spin",t.cx("loader"),t.loader,t.loadingIcon],"aria-hidden":"true","data-p-has-dropdown":t.dropdown},t.ptm("loader")),null,16,mn)):t.loading?(s(),T(k,h({key:1,class:t.cx("loader"),spin:"","aria-hidden":"true","data-p-has-dropdown":t.dropdown},t.ptm("loader")),null,16,["class","data-p-has-dropdown"])):O("",!0)]}):O("",!0),$(t.$slots,t.$slots.dropdown?"dropdown":"dropdownbutton",{toggleCallback:function(b){return o.onDropdownClick(b)}},function(){return[t.dropdown?(s(),f("button",h({key:0,ref:"dropdownButton",type:"button",class:[t.cx("dropdown"),t.dropdownClass],disabled:t.disabled,"aria-haspopup":"listbox","aria-expanded":l.overlayVisible,"aria-controls":o.panelId,onClick:e[8]||(e[8]=function(){return o.onDropdownClick&&o.onDropdownClick.apply(o,arguments)})},t.ptm("dropdown")),[$(t.$slots,"dropdownicon",{class:V(t.dropdownIcon)},function(){return[(s(),T(oe(t.dropdownIcon?"span":"ChevronDownIcon"),h({class:t.dropdownIcon},t.ptm("dropdownIcon")),null,16,["class"]))]})],16,bn)):O("",!0)]}),t.typeahead?(s(),f("span",h({key:4,role:"status","aria-live":"polite",class:"p-hidden-accessible"},t.ptm("hiddenSearchResult"),{"data-p-hidden-accessible":!0}),M(o.searchResultMessageText),17)):O("",!0),g(I,{appendTo:t.appendTo},{default:C(function(){return[g(Re,h({name:"p-anchored-overlay",onEnter:o.onOverlayEnter,onAfterEnter:o.onOverlayAfterEnter,onLeave:o.onOverlayLeave,onAfterLeave:o.onOverlayAfterLeave},t.ptm("transition")),{default:C(function(){return[l.overlayVisible?(s(),f("div",h({key:0,ref:o.overlayRef,id:o.panelId,class:[t.cx("overlay"),t.panelClass,t.overlayClass],style:ue(ue({},t.panelStyle),t.overlayStyle),onClick:e[9]||(e[9]=function(){return o.onOverlayClick&&o.onOverlayClick.apply(o,arguments)}),onKeydown:e[10]||(e[10]=function(){return o.onOverlayKeyDown&&o.onOverlayKeyDown.apply(o,arguments)}),"data-p":o.overlayDataP},t.ptm("overlay")),[$(t.$slots,"header",{value:t.d_value,suggestions:o.visibleOptions}),a("div",h({class:t.cx("listContainer"),style:{"max-height":o.virtualScrollerDisabled?t.scrollHeight:""}},t.ptm("listContainer")),[g(x,h({ref:o.virtualScrollerRef},t.virtualScrollerOptions,{style:{height:t.scrollHeight},items:o.visibleOptions,tabindex:-1,disabled:o.virtualScrollerDisabled,pt:t.ptm("virtualScroller")}),Ue({content:C(function(p){var b=p.styleClass,D=p.contentRef,w=p.items,d=p.getItemOptions,v=p.contentStyle,z=p.itemSize;return[a("ul",h({ref:function(K){return o.listRef(K,D)},id:t.$id+"_list",class:[t.cx("list"),b],style:v,role:"listbox","aria-label":o.listAriaLabel},t.ptm("list")),[(s(!0),f(E,null,N(w,function(L,K){return s(),f(E,{key:o.getOptionRenderKey(L,o.getOptionIndex(K,d))},[o.isOptionGroup(L)?(s(),f("li",h({key:0,id:t.$id+"_"+o.getOptionIndex(K,d),style:{height:z?z+"px":void 0},class:t.cx("optionGroup"),role:"option"},{ref_for:!0},t.ptm("optionGroup")),[$(t.$slots,"optiongroup",{option:L.optionGroup,index:o.getOptionIndex(K,d)},function(){return[Y(M(o.getOptionGroupLabel(L.optionGroup)),1)]})],16,yn)):Be((s(),f("li",h({key:1,id:t.$id+"_"+o.getOptionIndex(K,d),style:{height:z?z+"px":void 0},class:t.cx("option",{option:L,i:K,getItemOptions:d}),role:"option","aria-label":o.getOptionLabel(L),"aria-selected":o.isSelected(L),"aria-disabled":o.isOptionDisabled(L),"aria-setsize":o.ariaSetSize,"aria-posinset":o.getAriaPosInset(o.getOptionIndex(K,d)),onClick:function(Q){return o.onOptionSelect(Q,L)},onMousemove:function(Q){return o.onOptionMouseMove(Q,o.getOptionIndex(K,d))},"data-p-selected":o.isSelected(L),"data-p-focused":l.focusedOptionIndex===o.getOptionIndex(K,d),"data-p-disabled":o.isOptionDisabled(L)},{ref_for:!0},o.getPTOptions(L,d,K,"option")),[$(t.$slots,"option",{option:L,index:o.getOptionIndex(K,d)},function(){return[Y(M(o.getOptionLabel(L)),1)]})],16,xn)),[[c]])],64)}),128)),t.showEmptyMessage&&(!w||w&&w.length===0)?(s(),f("li",h({key:0,class:t.cx("emptyMessage"),role:"option"},t.ptm("emptyMessage")),[$(t.$slots,"empty",{},function(){return[Y(M(o.searchResultMessageText),1)]})],16)):O("",!0)],16,vn)]}),_:2},[t.$slots.loader?{name:"loader",fn:C(function(p){var b=p.options;return[$(t.$slots,"loader",{options:b})]}),key:"0"}:void 0]),1040,["style","items","disabled","pt"])],16),$(t.$slots,"footer",{value:t.d_value,suggestions:o.visibleOptions}),a("span",h({role:"status","aria-live":"polite",class:"p-hidden-accessible"},t.ptm("hiddenSelectedMessage"),{"data-p-hidden-accessible":!0}),M(o.selectedMessageText),17)],16,gn)):O("",!0)]}),_:3},16,["onEnter","onAfterEnter","onLeave","onAfterLeave"])]}),_:3},8,["appendTo"])],16,pn)}xe.render=wn;const On={class:"w-full max-w-[850px] lg:max-w-[420px] mx-auto lg:mx-0 lg:sticky lg:top-10"},kn={class:"flex flex-col gap-4"},In={class:"flex items-center"},Cn={class:"flex items-center country-item"},Sn={class:"flex flex-col gap-3"},Ln={class:"flex flex-col gap-1"},$n={class:"font-bold text-slate-700 text-base"},Mn={class:"text-slate-400 text-xs font-medium"},Tn=_({__name:"addFriend",props:{users:{},loginUserIndex:{},loginUser:{}},setup(t){const e=S(""),n=S([]),i=t,l=m=>{const r=m.value.account,u=/^[a-zA-Z0-9._]+@gmail\.com$/;if(i.loginUserIndex===-1)return;const k=i.users[i.loginUserIndex],x=i.users.findIndex(b=>b.account===r);if(x===-1)return;const I=i.users[x];if(!k||!I)return;k.friends||(k.friends=[]),I.friends||(I.friends=[]);const c=k.friends.some(b=>b.account===r),p=r===i.loginUser.account;if(!c&&!p&&u.test(r)){const b={id:I.friends.length+1,account:k.account,name:k.name};I.friends.push(b);const D={id:k.friends.length+1,account:I.account,name:I.name};k.friends.push(D),localStorage.setItem("users",JSON.stringify(i.users))}e.value=""},o=m=>{const r=m.query,u=je.filter(i.users,["account"],r,Ne.CONTAINS);n.value=u};return(m,r)=>(s(),f("div",On,[g(y(be),{class:"bg-white/80! backdrop-blur-xl! rounded-[2.5rem]! border-none! shadow-2xl! shadow-slate-200/50! p-4"},{title:C(()=>[...r[1]||(r[1]=[a("div",{class:"flex items-center gap-3 text-slate-800 p-2 mb-4"},[a("div",{class:"w-10 h-10 rounded-xl bg-slate-100 flex items-center justify-center"},[a("i",{class:"pi pi-user-plus text-slate-500"})]),a("span",{class:"text-lg font-bold tracking-tight"},"加入好友")],-1)])]),content:C(()=>[a("div",kn,[a("div",In,[g(y(xe),{modelValue:e.value,"onUpdate:modelValue":r[0]||(r[0]=u=>e.value=u),onItemSelect:l,suggestions:n.value,onComplete:o,optionLabel:"account",placeholder:"請輸入好友帳號",class:"w-full opacity-90!",inputClass:"w-full border! bg-slate-50/80! rounded-2xl! px-6! py-4! shadow-inner! outline-none focus:ring-2! focus:ring-indigo-100! transition-all!",fluid:""},{option:C(u=>[a("div",Cn,[a("div",null,M(u.option.account),1)])]),_:1},8,["modelValue","suggestions"])]),r[2]||(r[2]=a("div",{class:"flex items-center gap-2 mb-6"},[a("span",{class:"text-xs font-black text-slate-300 uppercase tracking-widest"},"好友清單"),a("div",{class:"h-px flex-1 bg-slate-100"})],-1)),a("div",Sn,[(s(!0),f(E,null,N(t.users[t.loginUserIndex]?.friends,u=>(s(),f("div",{key:u.account,class:"flex items-center justify-between p-4 bg-slate-50/50 rounded-2xl border border-transparent hover:border-white hover:bg-white hover:shadow-md transition-all group"},[a("div",Ln,[a("span",$n,M(u.name),1),a("span",Mn,M(u.account),1)])]))),128))])])]),_:1})]))}}),Kn={class:"min-h-screen grid grid-cols-1 lg:grid-cols-[1.6fr_1fr] gap-8 p-4 md:p-10 lg:p-16 bg-linear-to-br from-[#eef2ff] to-[#f8fafc] items-start"},Dn={class:"flex flex-col gap-8 w-full"},Vn={class:"flex flex-col gap-8 w-full"},Rn=_({__name:"mainPage",setup(t){const e=S([]),n=S([]),i=S([]),l=S({id:0,name:"",account:"",password:"",status:!1,friends:[]}),o=j(()=>i.value.findIndex(c=>c.account===l.value.account));fe(()=>{n.value=JSON.parse(localStorage.getItem("tasks")||"[]"),i.value=JSON.parse(localStorage.getItem("users")||"[]"),l.value=JSON.parse(localStorage.getItem("user")||"{}"),e.value=JSON.parse(localStorage.getItem("historyTasks")||"[]")}),He(n,c=>{localStorage.setItem("tasks",JSON.stringify(c))},{deep:!0});const m=c=>{n.value.push(c),localStorage.setItem("tasks",JSON.stringify(n.value))},r=c=>{n.value=n.value.filter(p=>p.id!==c)},u=(c,p)=>{const b=n.value.findIndex(D=>D.id===p.id);b!==-1&&(n.value[b]=p)},k=()=>{const c=[...n.value];console.log(c),(e.value.length===0||e.value===void 0)&&(e.value=[]),e.value.push(...c.filter(p=>(p.createUser===l.value.account||p.assignedTo===l.value.name)&&p.isCompleted===!0)),console.log(e.value),localStorage.setItem("historyTasks",JSON.stringify(e.value)),n.value=n.value.filter(p=>p.isCompleted===!1),localStorage.setItem("tasks",JSON.stringify(n.value))},x=j(()=>({tasks:n.value,loginUserIndex:o.value,loginUser:l.value,users:i.value,historyTasks:e.value,onAddTask:m,onDeleteTask:r,onSaveTaskUpdate:u,onRemoveHistory:k})),I=j(()=>({users:i.value,loginUserIndex:o.value,loginUser:l.value}));return(c,p)=>(s(),f("div",Kn,[a("div",Dn,[g(St,te(ne(x.value)),null,16),g(Pt,te(ne(x.value)),null,16)]),a("div",Vn,[g(Tn,te(ne(I.value)),null,16)])]))}});export{Rn as default};
