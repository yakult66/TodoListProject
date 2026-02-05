import{s as L,a as x}from"./index-Clvewr2n.js";import{g as O,f as z,b as B,a as S}from"./index-CVRQDlBo.js";import{B as E,o as w,c as P,e as t,m as V,r as N,d as U,h as m,b as i,u as n,w as r,f as y,l as $,g as k,n as A,t as v,X as D,a0 as M,T as R}from"./index-CcUtrgh4.js";import{s as H}from"./index-BjRKAaXC.js";import{s as X,b as q}from"./index-RF4_UjY0.js";import{s as C}from"./index-BnaObSPW.js";import{s as T}from"./index-DIsoinB0.js";import"./index-BSZcP_5r.js";var G=`
    .p-toggleswitch {
        display: inline-block;
        width: dt('toggleswitch.width');
        height: dt('toggleswitch.height');
    }

    .p-toggleswitch-input {
        cursor: pointer;
        appearance: none;
        position: absolute;
        top: 0;
        inset-inline-start: 0;
        width: 100%;
        height: 100%;
        padding: 0;
        margin: 0;
        opacity: 0;
        z-index: 1;
        outline: 0 none;
        border-radius: dt('toggleswitch.border.radius');
    }

    .p-toggleswitch-slider {
        cursor: pointer;
        width: 100%;
        height: 100%;
        border-width: dt('toggleswitch.border.width');
        border-style: solid;
        border-color: dt('toggleswitch.border.color');
        background: dt('toggleswitch.background');
        transition:
            background dt('toggleswitch.transition.duration'),
            color dt('toggleswitch.transition.duration'),
            border-color dt('toggleswitch.transition.duration'),
            outline-color dt('toggleswitch.transition.duration'),
            box-shadow dt('toggleswitch.transition.duration');
        border-radius: dt('toggleswitch.border.radius');
        outline-color: transparent;
        box-shadow: dt('toggleswitch.shadow');
    }

    .p-toggleswitch-handle {
        position: absolute;
        top: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
        background: dt('toggleswitch.handle.background');
        color: dt('toggleswitch.handle.color');
        width: dt('toggleswitch.handle.size');
        height: dt('toggleswitch.handle.size');
        inset-inline-start: dt('toggleswitch.gap');
        margin-block-start: calc(-1 * calc(dt('toggleswitch.handle.size') / 2));
        border-radius: dt('toggleswitch.handle.border.radius');
        transition:
            background dt('toggleswitch.transition.duration'),
            color dt('toggleswitch.transition.duration'),
            inset-inline-start dt('toggleswitch.slide.duration'),
            box-shadow dt('toggleswitch.slide.duration');
    }

    .p-toggleswitch.p-toggleswitch-checked .p-toggleswitch-slider {
        background: dt('toggleswitch.checked.background');
        border-color: dt('toggleswitch.checked.border.color');
    }

    .p-toggleswitch.p-toggleswitch-checked .p-toggleswitch-handle {
        background: dt('toggleswitch.handle.checked.background');
        color: dt('toggleswitch.handle.checked.color');
        inset-inline-start: calc(dt('toggleswitch.width') - calc(dt('toggleswitch.handle.size') + dt('toggleswitch.gap')));
    }

    .p-toggleswitch:not(.p-disabled):has(.p-toggleswitch-input:hover) .p-toggleswitch-slider {
        background: dt('toggleswitch.hover.background');
        border-color: dt('toggleswitch.hover.border.color');
    }

    .p-toggleswitch:not(.p-disabled):has(.p-toggleswitch-input:hover) .p-toggleswitch-handle {
        background: dt('toggleswitch.handle.hover.background');
        color: dt('toggleswitch.handle.hover.color');
    }

    .p-toggleswitch:not(.p-disabled):has(.p-toggleswitch-input:hover).p-toggleswitch-checked .p-toggleswitch-slider {
        background: dt('toggleswitch.checked.hover.background');
        border-color: dt('toggleswitch.checked.hover.border.color');
    }

    .p-toggleswitch:not(.p-disabled):has(.p-toggleswitch-input:hover).p-toggleswitch-checked .p-toggleswitch-handle {
        background: dt('toggleswitch.handle.checked.hover.background');
        color: dt('toggleswitch.handle.checked.hover.color');
    }

    .p-toggleswitch:not(.p-disabled):has(.p-toggleswitch-input:focus-visible) .p-toggleswitch-slider {
        box-shadow: dt('toggleswitch.focus.ring.shadow');
        outline: dt('toggleswitch.focus.ring.width') dt('toggleswitch.focus.ring.style') dt('toggleswitch.focus.ring.color');
        outline-offset: dt('toggleswitch.focus.ring.offset');
    }

    .p-toggleswitch.p-invalid > .p-toggleswitch-slider {
        border-color: dt('toggleswitch.invalid.border.color');
    }

    .p-toggleswitch.p-disabled {
        opacity: 1;
    }

    .p-toggleswitch.p-disabled .p-toggleswitch-slider {
        background: dt('toggleswitch.disabled.background');
    }

    .p-toggleswitch.p-disabled .p-toggleswitch-handle {
        background: dt('toggleswitch.handle.disabled.background');
    }
`,J={root:{position:"relative"}},K={root:function(o){var d=o.instance,c=o.props;return["p-toggleswitch p-component",{"p-toggleswitch-checked":d.checked,"p-disabled":c.disabled,"p-invalid":d.$invalid}]},input:"p-toggleswitch-input",slider:"p-toggleswitch-slider",handle:"p-toggleswitch-handle"},Q=E.extend({name:"toggleswitch",style:G,classes:K,inlineStyles:J}),W={name:"BaseToggleSwitch",extends:O,props:{trueValue:{type:null,default:!0},falseValue:{type:null,default:!1},readonly:{type:Boolean,default:!1},tabindex:{type:Number,default:null},inputId:{type:String,default:null},inputClass:{type:[String,Object],default:null},inputStyle:{type:Object,default:null},ariaLabelledby:{type:String,default:null},ariaLabel:{type:String,default:null}},style:Q,provide:function(){return{$pcToggleSwitch:this,$parentInstance:this}}},j={name:"ToggleSwitch",extends:W,inheritAttrs:!1,emits:["change","focus","blur"],methods:{getPTOptions:function(o){var d=o==="root"?this.ptmi:this.ptm;return d(o,{context:{checked:this.checked,disabled:this.disabled}})},onChange:function(o){if(!this.disabled&&!this.readonly){var d=this.checked?this.falseValue:this.trueValue;this.writeValue(d,o),this.$emit("change",o)}},onFocus:function(o){this.$emit("focus",o)},onBlur:function(o){var d,c;this.$emit("blur",o),(d=(c=this.formField).onBlur)===null||d===void 0||d.call(c,o)}},computed:{checked:function(){return this.d_value===this.trueValue},dataP:function(){return z({checked:this.checked,disabled:this.disabled,invalid:this.$invalid})}}},Y=["data-p-checked","data-p-disabled","data-p"],Z=["id","checked","tabindex","disabled","readonly","aria-checked","aria-labelledby","aria-label","aria-invalid"],ee=["data-p"],te=["data-p"];function le(l,o,d,c,u,s){return w(),P("div",V({class:l.cx("root"),style:l.sx("root")},s.getPTOptions("root"),{"data-p-checked":s.checked,"data-p-disabled":l.disabled,"data-p":s.dataP}),[t("input",V({id:l.inputId,type:"checkbox",role:"switch",class:[l.cx("input"),l.inputClass],style:l.inputStyle,checked:s.checked,tabindex:l.tabindex,disabled:l.disabled,readonly:l.readonly,"aria-checked":s.checked,"aria-labelledby":l.ariaLabelledby,"aria-label":l.ariaLabel,"aria-invalid":l.invalid||void 0,onFocus:o[0]||(o[0]=function(){return s.onFocus&&s.onFocus.apply(s,arguments)}),onBlur:o[1]||(o[1]=function(){return s.onBlur&&s.onBlur.apply(s,arguments)}),onChange:o[2]||(o[2]=function(){return s.onChange&&s.onChange.apply(s,arguments)})},s.getPTOptions("input")),null,16,Z),t("div",V({class:l.cx("slider")},s.getPTOptions("slider"),{"data-p":s.dataP}),[t("div",V({class:l.cx("handle")},s.getPTOptions("handle"),{"data-p":s.dataP}),[N(l.$slots,"handle",{checked:s.checked})],16,te)],16,ee)],16,Y)}j.render=le;const se={class:"fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm"},oe={class:"grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-x-8 md:gap-y-6"},ne={class:"flex flex-col gap-2 md:col-span-2"},ae={class:"relative w-full flex items-center"},ie={class:"flex flex-col gap-2"},de={class:"flex flex-col gap-2"},re={class:"flex flex-col gap-2"},ce={class:"flex gap-4 px-2 h-14 bg-slate-50/80 rounded-2xl items-center shadow-inner"},ue={class:"flex items-center gap-2"},ge={class:"flex items-center gap-2"},pe={class:"flex flex-col gap-2"},he={class:"flex items-center gap-3 px-4 h-14 bg-slate-50/80 rounded-2xl shadow-inner"},be={class:"md:col-span-2 mt-2"},we={class:"flex justify-center w-full mt-4"},me=U({__name:"accEdit",props:{user:{}},emits:["close","save"],setup(l,{emit:o}){const c=M("accountActions")?.onEditUser,u=l,s=o,p=m(u.user.account.substring(0,u.user.account.length-10)),h=m(""),b=m(u.user.name),a=m(u.user.role),f=m(u.user.status),_=m(!0),I=()=>{p.value.includes("@")?(p.value=p.value.replace(/@/g,""),_.value=!1):_.value=!0},F=async()=>{h.value.trim()!==""?h.value=await q.hashSync(h.value,10):h.value=u.user.password,c?.(u.user.id,{account:p.value+"@gmail.com",password:h.value,name:b.value,role:a.value,status:f.value,id:u.user.id}),s("close")};return(Pe,e)=>(w(),P("div",se,[i(n(H),{class:"bg-white backdrop-blur-xl rounded-4xl md:rounded-[3rem] border border-white/40 shadow-[0_25px_50px_-12px_rgba(0,0,0,0.01)] p-8 md:p-12 w-full max-w-2xl mx-4 max-h-[90vh] overflow-y-auto"},{title:r(()=>[...e[7]||(e[7]=[t("div",{class:"flex justify-center items-center text-2xl font-bold mb-6 md:mb-10"},"使用者資料編輯",-1)])]),content:r(()=>[t("form",{onSubmit:D(F,["prevent"])},[t("div",oe,[t("div",ne,[e[11]||(e[11]=t("label",{for:"account",class:"text-slate-600 font-semibold ml-1"},"帳號",-1)),t("div",ae,[i(n(B),{id:"account",modelValue:p.value,"onUpdate:modelValue":e[0]||(e[0]=g=>p.value=g),type:"text",onInput:I,placeholder:"請輸入帳號",invalid:!p.value,class:"w-full border-none! bg-slate-50/80! rounded-2xl! pl-6! pr-28! py-4! shadow-inner! outline-none focus:ring-2! focus:ring-indigo-100! transition-all!"},null,8,["modelValue","invalid"]),e[8]||(e[8]=t("span",{class:"absolute right-6 text-slate-400 opacity-60 pointer-events-none select-none font-medium"}," @gmail.com ",-1))]),p.value?k("",!0):(w(),y(n(C),{key:0,severity:"error",closable:!1,class:"mt-1"},{default:r(()=>[...e[9]||(e[9]=[$(" 帳號為必填 ",-1)])]),_:1})),_.value?k("",!0):(w(),y(n(C),{key:1,severity:"error",closable:!1,class:"mt-1"},{default:r(()=>[...e[10]||(e[10]=[$(" 帳號格式錯誤，請輸入@gmail.com前的帳號 ",-1)])]),_:1}))]),t("div",ie,[e[13]||(e[13]=t("label",{for:"name",class:"text-slate-600 font-semibold ml-1"},"姓名",-1)),i(n(B),{id:"name",modelValue:b.value,"onUpdate:modelValue":e[1]||(e[1]=g=>b.value=g),placeholder:"請輸入姓名",invalid:!b.value,class:"w-full border-none! bg-slate-50/80! rounded-2xl! px-6! py-4! shadow-inner! outline-none focus:ring-2! focus:ring-indigo-100! transition-all!"},null,8,["modelValue","invalid"]),b.value?k("",!0):(w(),y(n(C),{key:0,severity:"error",closable:!1,class:"mt-1"},{default:r(()=>[...e[12]||(e[12]=[$(" 姓名為必填 ",-1)])]),_:1}))]),t("div",de,[e[14]||(e[14]=t("label",{for:"password",class:"text-slate-600 font-semibold ml-1"},"密碼",-1)),i(n(X),{inputId:"password",modelValue:h.value,"onUpdate:modelValue":e[2]||(e[2]=g=>h.value=g),placeholder:"密碼若不修改請留空",toggleMask:!0,feedback:!0,class:"w-full",inputClass:"w-full border-none! bg-slate-50/80! rounded-2xl! px-6! py-4! shadow-inner! outline-none focus:ring-2! focus:ring-indigo-100! transition-all!",toggleMaskIcon:"pi pi-eye"},null,8,["modelValue"])]),t("div",re,[e[17]||(e[17]=t("label",{class:"text-slate-600 font-semibold ml-1"},"角色",-1)),t("div",ce,[t("div",ue,[i(n(T),{modelValue:a.value,"onUpdate:modelValue":e[3]||(e[3]=g=>a.value=g),inputId:"role_admin",name:"role",value:"admin"},null,8,["modelValue"]),e[15]||(e[15]=t("label",{for:"role_admin",class:"cursor-pointer text-slate-600"},"管理員",-1))]),t("div",ge,[i(n(T),{modelValue:a.value,"onUpdate:modelValue":e[4]||(e[4]=g=>a.value=g),inputId:"role_user",name:"role",value:"user"},null,8,["modelValue"]),e[16]||(e[16]=t("label",{for:"role_user",class:"cursor-pointer text-slate-600"},"使用者",-1))])])]),t("div",pe,[e[18]||(e[18]=t("label",{class:"text-slate-600 font-semibold ml-1"},"狀態",-1)),t("div",he,[i(n(j),{modelValue:f.value,"onUpdate:modelValue":e[5]||(e[5]=g=>f.value=g)},null,8,["modelValue"]),t("span",{class:A(["font-bold transition-colors",f.value?"text-indigo-600":"text-slate-400"])},v(f.value?"啟用":"停用"),3)])]),t("div",be,[i(n(S),{label:"編輯",type:"submit",class:"bg-linear-to-br from-indigo-500 to-purple-600 border-none! rounded-3xl! w-full py-3.5! font-bold! text-lg! shadow-lg hover:shadow-indigo-500/30 transition-shadow"})])])],32)]),footer:r(()=>[t("div",we,[t("button",{type:"button",class:"flex items-center gap-2 text-slate-400 hover:text-indigo-600 transition-all duration-300 group bg-transparent border-none cursor-pointer",onClick:e[6]||(e[6]=g=>s("close"))},[...e[19]||(e[19]=[t("i",{class:"pi pi-arrow-left text-sm group-hover:-translate-x-1 transition-transform"},null,-1),t("span",{class:"font-medium"},"返回",-1)])])])]),_:1})]))}}),fe={class:"w-full max-w-[1000px] mx-auto bg-white/80 backdrop-blur-xl rounded-[2.5rem] border border-white/60 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.05)] p-6 md:p-12 flex flex-col h-fit"},ve={class:"font-bold text-slate-700"},xe={class:"text-slate-500"},ye={key:0,class:"text-[12px] text-indigo-500 bg-indigo-50 px-2.5 py-1 rounded-lg font-bold"},ke={class:"text-[12px] {{slotProps.data.status?'text-green-500':'text-red-500'}} bg-indigo-50 px-2.5 py-1 rounded-lg font-bold"},Ve={class:"text-slate-400 text-sm"},Ie=U({__name:"accManager",props:{users:{}},emits:["deleteUser","editUser"],setup(l,{emit:o}){const d=m({id:0,account:"",password:"",name:"",role:"",status:!0}),c=m(!1),u=l,s=o,p=h=>{s("deleteUser",h)};return(h,b)=>(w(),P("div",fe,[i(n(L),{value:u.users,scrollable:"",scrollHeight:"flex",paginator:"",rows:5,rowsPerPageOptions:[5,10,20,50],paginatorTemplate:"RowsPerPageDropdown FirstPageLink PrevPageLink CurrentPageReport NextPageLink LastPageLink",currentPageReportTemplate:"第 {first} 頁 ｜ 共 {totalRecords} 頁",tableStyle:"min-width: 50rem"},{header:r(()=>[...b[1]||(b[1]=[t("div",{class:"flex flex-wrap items-center justify-between gap-2 mb-4"},[t("div",{class:"flex items-center gap-3"},[t("div",{class:"bg-indigo-500 text-white w-10 h-10 flex items-center justify-center rounded-xl shadow-lg shadow-indigo-200"},[t("i",{class:"pi pi-user text-lg"})]),t("span",{class:"text-xl font-bold text-slate-800"},"帳號管理")])],-1)])]),footer:r(()=>[t("div",Ve," 總共 "+v(u.users.length)+" 筆帳號 ",1)]),default:r(()=>[i(n(x),{field:"account",sortable:"",header:"帳號",style:{"min-width":"150px"}},{body:r(a=>[t("span",ve,v(a.data.account),1)]),_:1}),i(n(x),{field:"name",sortable:"",header:"名稱",style:{"min-width":"200px"}},{body:r(a=>[t("span",xe,v(a.data.name),1)]),_:1}),i(n(x),{field:"role",sortable:"",header:"角色",style:{"min-width":"120px"}},{body:r(a=>[a.data.role?(w(),P("span",ye,v(a.data.role),1)):k("",!0)]),_:1}),i(n(x),{field:"status",sortable:"",header:"狀態",style:{"min-width":"120px"}},{body:r(a=>[t("span",ke,v(a.data.status?"啟用":"停用"),1)]),_:1}),i(n(x),{field:"edit",header:"編輯",style:{"min-width":"120px"},class:"flex justify-center"},{body:r(a=>[t("div",null,[i(n(S),{icon:"pi pi-pencil",class:"p-button-text rounded-full",onClick:f=>{c.value=!0,d.value=a.data}},null,8,["onClick"]),i(n(S),{icon:"pi pi-trash",class:"p-button-text text-red-500 rounded-full",onClick:f=>p(a.data.id)},null,8,["onClick"])])]),_:1}),(w(),y(R,{to:"body",class:"z-50"},[c.value?(w(),y(me,{key:0,onClose:b[0]||(b[0]=a=>c.value=!1),user:d.value,showEditDialog:c.value},null,8,["user","showEditDialog"])):k("",!0)]))]),_:1},8,["value"])]))}});export{Ie as default};
