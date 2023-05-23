import{_ as l,o as i,c as n,d as o,t as s,a as p,F as c,g as h,p as u,h as w}from"./app-66b3a2f7.js";const m=[{id:"",keyWord:"cure",data:"The cure for boredom is curiosity.There is no cure for curiosity.",explain:"无聊的解药是好奇心，而好奇心没有解药。",words:[{word:"cure",explain:"n.药物 疗法 v.治愈"},{word:"boredom",explain:"n.厌倦"},{word:"curiosity",explain:"n.好奇心"}],a:""},{id:"",keyWord:"master",data:"The master has failed more times than the beginner has even tried.",explain:"大师失败的次数比初学者尝试的次数还有多。",words:[{word:"master",explain:"n.大师 能手 v.精通"}],a:""},{id:"",keyWord:"wish",data:"A year from now you may wish you had started today.",explain:"明年今日，你会希望此时此刻自己已经开始行动。",words:[{word:"wish",explain:"v.想要 n.希望"}],a:""},{id:"",keyWord:"tie",data:"If you want to  live a happy life,tie it to a goal,not people or things.",explain:"如果你想要拥有幸福的生活，制定一个目标，而不要把希望寄托在别的人或事上。",words:[{word:"tie",explain:"v.寄托 n.领带"}],a:""},{id:"",keyWord:"happened",data:"I am not what happened to me, I am what I choose to become.",explain:"成全我的不是生活，而是我的选择",words:[{word:"happened",explain:"v.发生"}],a:""},{id:"",keyWord:"discuss",data:"Great minds discuss ideals.Average minds discuss events.Small minds discuss people.",explain:"大智论道，中智论事，小智论人",words:[{word:"discuss",explain:"v.讨论，论述"},{word:"Average",explain:"n.平均 adj.普通的"}],a:"discuss 从不用作不及物动词。"},{id:"",keyWord:"idealist",data:"An idealist is a person who helps other people to be prosperous.",explain:"理想主义者是那些帮助他人获得成就的人。",words:[{word:"idealist",explain:"n.空想家，理想主义者"},{word:"prosperous",explain:"adj.成功的"},{word:"pragmatist",explain:"n.实用主义者"},{word:"pessimist",explain:"n.悲观主义者"},{word:"economist",explain:"n.经济学家"}],a:"后缀 .ist 通常是某种信仰者，专家，从事某种职业的人，从事某种研究，与某事物有关的人"},{id:"",keyWord:"source",data:"It is one of my sources of happiness never to desire a knowledge of other people's business.",explain:"我的快乐源泉之一就是不去管别人的闲事。",words:[{word:"sources",explain:"n.来源"},{word:"idealist",explain:"v.想要 n.欲望"},{word:"business",explain:"n.事情，商业"}],a:""},{id:"",keyWord:"confidence",data:"Confidence has nothing to do with what you look like. If you obsess over that, you'll end up being disappointed in yourself all the time.",explain:"自信与外表无关，如果你沉溺于此，便会一直对自己失望",words:[{word:"confidence",explain:"n.信心，信任"},{word:"obsess",explain:"v.迷恋"},{word:"disappointed",explain:"adv.失望地"}],a:""},{id:"",keyWord:"fable",data:"Life is like a fable. Its values lies not in its length,but in its content.",explain:"生命如寓言，其价值不在于长短，而在于内容",words:[{word:"fable",explain:"n.寓言 v.谎言"},{word:"lies",explain:"n.说谎 v.躺下 在于 "}],a:""},{id:"",keyWord:"accomplish",data:"Never give up on a dream just because of the time it will take to accomplish it.The time will pass anyway.",explain:"永远不要因为梦想需要太长时间实现而放弃。时间总会逝去。",words:[{word:"accomplish",explain:"v.实现"}],a:""},{id:"",keyWord:"limit",data:"I'm not going to limit myself just because people  won't accept the fact that I can do something else.",explain:"我不会因为人们不接受我可以做其他事而限制自己。",words:[{word:"limit",explain:"v.限制 n.限度"}],a:""},{id:"",keyWord:"deserve",data:"I now deserve love,romance,and joy-and all the good that life has to offer me.",explain:"我现在值得得到爱，浪漫和快乐，以及生活中所有的美好。",words:[{word:"deserve ",explain:"v.值得"}],a:""},{id:"",keyWord:"effort",data:"People choose to read,and it takes effort.It's not one of those bobbies that asks nothing of the person who is doing it.It's more than a hobby.",explain:"人们选择阅读，这需要努力。阅读不是对正在做这件事的人们一项毫无要求的爱好。这不仅仅是一项爱好。",words:[{word:"effort",explain:"n.努力"}],a:""}],v={proverb:m};const y={data(){return{proverbs:[],currentProverb:{keyWord:"",data:"",explain:"",words:[],a:"",b:""},text:""}},methods:{generateProv(){var a;let e=this.getRandomProverb();if(this.proverbs.length===1)return this.currentProverb=e;for(;(e==null?void 0:e.data)===((a=this.currentProverb)==null?void 0:a.data);)e=this.getRandomProverb();this.currentProverb=e},getRandomProverb(){let e=Math.floor(Math.random()*this.proverbs.length);return this.proverbs[e]}},mounted(){this.proverbs=v.proverb,this.generateProv()}},b=e=>(u("data-v-b184e5fb"),e=e(),w(),e),x={class:"studyDaily"},f={class:"my-list"},_={class:"my-list-item-1"},g={class:"my-list-item-2"},k={key:0,class:"my-list-item-4"},I={class:"my-list-item-3"},P={class:"word"},W=b(()=>o("span",null," ",-1));function S(e,a,j,D,t,d){return i(),n("div",x,[o("button",{class:"btn",onClick:a[0]||(a[0]=(...r)=>d.generateProv&&d.generateProv(...r))},"换一句"),o("ul",f,[o("li",_,s(t.currentProverb.data),1),o("li",g,s(t.currentProverb.explain),1),t.currentProverb.a?(i(),n("li",k,s(t.currentProverb.a),1)):p("v-if",!0),(i(!0),n(c,null,h(t.currentProverb.words,r=>(i(),n("li",I,[o("span",P,s(r.word),1),W,o("span",null,s(r.explain),1)]))),256))])])}const T=l(y,[["render",S],["__scopeId","data-v-b184e5fb"],["__file","StudyDaily.vue"]]);export{T as default};
