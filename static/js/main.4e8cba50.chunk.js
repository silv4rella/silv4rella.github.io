(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{11:function(e,t,a){e.exports=a.p+"static/media/plus.75fa7149.jpg"},12:function(e,t,a){e.exports=a.p+"static/media/minus.6399f01c.jpg"},17:function(e,t,a){},20:function(e,t,a){e.exports=a.p+"static/media/login1.c1e52070.jpg"},22:function(e,t,a){e.exports=a.p+"static/media/parent.f46bf5b2.jpg"},23:function(e,t,a){e.exports=a.p+"static/media/child.bd2841dc.jpg"},25:function(e,t,a){e.exports=a(64)},31:function(e,t,a){},56:function(e,t,a){},58:function(e,t,a){},60:function(e,t,a){},64:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),i=a(18),r=a.n(i),s=(a(31),a(19)),c=a(1),o=a(2),u=a(4),m=a(3),d=a(5),p=a(7),N=a.n(p),v=(a(56),l.a.createContext(null)),E=a(20),h=a.n(E),f=(a(58),function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,l=new Array(n),i=0;i<n;i++)l[i]=arguments[i];return(a=Object(u.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(l)))).state={pn:"",swipe:"",start:""},a.input1=function(e){a.setState({pn:(null===a.state.pn?"":a.state.pn)+e.target.value})},a.clear=function(e){a.setState({pn:null})},a}return Object(d.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this;return l.a.createElement("div",null,l.a.createElement("div",{className:"View1"},l.a.createElement("img",{src:h.a,className:"App-logo",alt:"login1"}),"/*",l.a.createElement("button",{className:"prevButton",onClick:this.props.swipe},"\u25c0"),"*/",l.a.createElement("div",{className:"mainCountView"},l.a.createElement("div",{className:"mainTodayCount"},l.a.createElement("div",null,"Today"),l.a.createElement("div",null,"&10 &10")),l.a.createElement("div",{className:"mainNowCount"},l.a.createElement("div",null,"Now"),l.a.createElement("div",null,"&1 &1")),l.a.createElement("div",{className:"mainOutCount"},l.a.createElement("div",null,"Out"),l.a.createElement("div",null,"&3 &3")))),l.a.createElement("div",{className:"View2"},l.a.createElement("input",{type:"number",id:"phonenum",name:"phonenum",readOnly:!0,value:this.state.pn?this.state.pn:""})),l.a.createElement("div",{className:"View3"},l.a.createElement("button",{className:"button3",value:"7",onClick:this.input1},"7"),l.a.createElement("button",{className:"button3",value:"8",onClick:this.input1},"8"),l.a.createElement("button",{className:"button3",value:"9",onClick:this.input1},"9"),l.a.createElement("button",{className:"button3",value:"4",onClick:this.input1},"4"),l.a.createElement("button",{className:"button3",value:"5",onClick:this.input1},"5"),l.a.createElement("button",{className:"button3",value:"6",onClick:this.input1},"6"),l.a.createElement("button",{className:"button3",value:"1",onClick:this.input1},"1"),l.a.createElement("button",{className:"button3",value:"2",onClick:this.input1},"2"),l.a.createElement("button",{className:"button3",value:"3",onClick:this.input1},"3"),l.a.createElement("button",{className:"button2",value:"",onClick:this.clear},"\ud1f4\uc7a5"),l.a.createElement("button",{className:"button3",value:"0",onClick:this.input1},"0"),l.a.createElement(v.Consumer,null,function(t){return l.a.createElement("button",{className:"button1",onClick:function(){e.props.start(),console.log(e.state.pn),t.updateValue("phoneNum",e.state.pn),e.clear()}},"\uc785\uc7a5")})))}}]),t}(n.Component)),b=a(21),w=a.n(b),C=(a(60),function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,i=new Array(n),r=0;r<n;r++)i[r]=arguments[r];return(a=Object(u.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(i)))).userChildInfo=function(){if(a.props.userChildInfo||null!==a.props.userChildInfo){for(var e=[],t=a.props.userChildInfo,n=0;n<t.length;n++)e=e.concat(l.a.createElement("div",{className:"userInfo_line",key:n},l.a.createElement("div",{className:"userInfo_line1"},"\uc544\uc774"+(n+1)),l.a.createElement("div",{className:"userInfo_line2"},t[n].name?t[n].name:"null"),l.a.createElement("div",{className:"userInfo_line3"},t[n].day?t[n].day:"null")));return e}return l.a.createElement("div",{className:"userInfo_line",key:n},l.a.createElement("div",{className:"userInfo_line1"},"\uc544\uc7741"),l.a.createElement("div",{className:"userInfo_line2"},"null"),l.a.createElement("div",{className:"userInfo_line3"},"null"))},a}return Object(d.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this;return l.a.createElement(v.Consumer,null,function(t){return l.a.createElement("div",{className:"userInfoView_sub1"},l.a.createElement("div",{className:"userInfo_line"},l.a.createElement("div",{className:"userInfo_line1"},"\ubcf4\ud638\uc790"),l.a.createElement("div",{className:"userInfo_line2"},e.props.userName?e.props.userName:"null"),l.a.createElement("div",{className:"userInfo_line3"},e.props.userDay?e.props.userDay:"null"),l.a.createElement("div",{className:"userInfo_line4"},e.props.userPhoneNum?e.props.userPhoneNum:"null")),e.userChildInfo())})}}]),t}(n.Component)),g=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,l=new Array(n),i=0;i<n;i++)l[i]=arguments[i];return(a=Object(u.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(l)))).state={seasonTicket:0,coupon10:0,coupon25:0,coupon50:0,stamp:0},a}return Object(d.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{className:"infoInventoryView"},l.a.createElement("div",{className:"infoInventoryView_titleView"},l.a.createElement("div",{className:"infoInventoryView_title"},"\ub0b4 \ubcf4\uc720 \ub0b4\uc5ed")),l.a.createElement("div",{className:"itemList"},l.a.createElement("div",{className:"itemRow item_border-right"},l.a.createElement("div",{className:"itemTitle item_border-bottom"},"\uc815\uae30\uad8c"),l.a.createElement("div",{className:"itemColumn"},l.a.createElement("div",{className:"iteminfofront"},"\uc815\uae30\uad8c"),l.a.createElement("div",{className:"iteminfoback"},this.state.seasonTicket)),l.a.createElement("div",{className:"itemColumn"},l.a.createElement("div",{className:"iteminfofront"},"\uc815\uae30\uad8c"),l.a.createElement("div",{className:"iteminfoback"},this.state.seasonTicket))),l.a.createElement("div",{className:"itemRow item_border-right"},l.a.createElement("div",{className:"itemTitle item_border-bottom"},"\ucfe0\ud3f0"),l.a.createElement("div",{className:"itemColumn"},l.a.createElement("div",{className:"iteminfofront"},"10% \ucfe0\ud3f0"),l.a.createElement("div",{className:"iteminfoback"},this.state.coupon10))),l.a.createElement("div",{className:"itemRow"},l.a.createElement("div",{className:"itemTitle item_border-bottom"},"\uc2a4\ud0ec\ud504"),l.a.createElement("div",{className:"itemColumn"},l.a.createElement("div",{className:"iteminfofront"},"\uc2a4\ud0ec\ud504"),l.a.createElement("div",{className:"iteminfoback"},this.state.stamp)))))}}]),t}(n.Component),x=a(22),_=a.n(x),y=a(23),k=a.n(y),B=a(11),I=a.n(B),V=a(12),j=a.n(V),O=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,i=new Array(n),r=0;r<n;r++)i[r]=arguments[r];return(a=Object(u.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(i)))).curUserData=function(){return l.a.createElement(v.Consumer,null,function(e){return l.a.createElement(C,{userName:e.curUser().name?e.curUser().name:null,userDay:e.curUser().day?e.curUser().day:null,userPhoneNum:e.curUser().phoneNum?e.curUser().phoneNum:null,userChildInfo:e.curUser().child?e.curUser().child:null})})},a}return Object(d.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{className:"info"},l.a.createElement("div",{className:"titleBar"},"\uc815\ubcf4"),l.a.createElement(w.a,{className:"infoScrollView",speed:1,contentClassName:"infoScrollView_Content",horizontal:!1},l.a.createElement("div",{className:"infoUserView"},l.a.createElement("div",{className:"userInfoView"},l.a.createElement("div",{className:"userInfoView_titleView"},l.a.createElement("div",{className:"userInfoView_title"},"\uace0\uac1d\uc815\ubcf4"),l.a.createElement("button",{className:"userInfoView_print",onClick:function(){return console.log("print")}},"print")),this.curUserData()),l.a.createElement(g,null))),l.a.createElement("div",{className:"countView"},l.a.createElement("div",{className:"countViewPerson"},l.a.createElement("img",{src:_.a,className:"countViewPersonImage Image_border-right",alt:"img_parent"}),l.a.createElement("img",{src:k.a,className:"countViewPersonImage Image_border-left",alt:"img_parent"})),l.a.createElement("div",{className:"countViewPersonButton"},l.a.createElement("button",{className:"countViewButton button_border-right"},l.a.createElement("img",{src:j.a,className:"countViewButtonImage",alt:"img_parent_add"})),l.a.createElement("button",{className:"countViewButton button_border-left button_border-right"},l.a.createElement("img",{src:I.a,className:"countViewButtonImage",alt:"img_parent_sub"})),l.a.createElement("button",{className:"countViewButton button_border-left button_border-right"},l.a.createElement("img",{src:j.a,className:"countViewButtonImage",alt:"img_child_add"})),l.a.createElement("button",{className:"countViewButton button_border-left"},l.a.createElement("img",{src:I.a,className:"countViewButtonImage",alt:"img_child_sub"}))),l.a.createElement("div",{className:"numberView"},l.a.createElement("div",{className:"numberView_textbox numberView_border-right"},l.a.createElement("div",{className:"numberView_text"}," 1")),l.a.createElement("div",{className:"numberView_textbox numberView_border-left"},l.a.createElement("div",{className:"numberView_text"}," 2"))),l.a.createElement("div",{className:"ticketButtonView ticketButtonView_border1"},l.a.createElement("button",{className:"ticketButton ticketButton_type1 ticketButtonView_border-right"},"\uc815\uae30\uad8c \ubc1c\ud589"),l.a.createElement("button",{className:"ticketButton ticketButton_type2 ticketButtonView_border-left"},"\ud1f4\uc7a5")),l.a.createElement("div",{className:"ticketButtonView ticketButtonView_border2"},l.a.createElement("button",{className:"ticketButton ticketButton_type3 ticketButtonView_border-right"},"\uc815\uae30\uad8c \uc785\uc7a5"),l.a.createElement("button",{className:"ticketButton ticketButton_type4 ticketButtonView_border-left"},"\uc77c\ubc18 \uc785\uc7a5"))),"/*",l.a.createElement("button",{className:"nextButton",value:"1",onClick:this.props.swipe},"\u25b6"),"*/")}}]),t}(n.Component),T=(a(17),a(24)),S=a.n(T),U=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,i=new Array(n),r=0;r<n;r++)i[r]=arguments[r];return(a=Object(u.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(i)))).subInfo=function(e){return e?l.a.createElement("div",{className:"BoxButton_TitleBox"},l.a.createElement("div",{className:"BoxButtonText_Title"},a.props.index),l.a.createElement("div",{className:"BoxButtonText_etc1"},a.props.name?a.props.name:"-"),l.a.createElement("div",{className:"BoxButtonText_etc2"},a.props.startTime?a.props.startTime:"-")):l.a.createElement("div",{className:"BoxButton_TitleBox_text"},a.props.index)},a}return Object(d.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this;return l.a.createElement(v.Consumer,null,function(t){return l.a.createElement("button",{className:e.props.useSlotNum?"BoxButton_used":"BoxButton_unUsed",value:e.props.phoneNum,onClick:function(){e.props.useSlotNum?t.updateValue("loginCustomerNum",e.props.listIndex):t.addUser_UseCafe({useSlotNum:e.props.index,customerNum:"",name:e.props.name,startTime:S()(new Date).format("HH:mm:ss"),endTime:"00:00:00",phoneNum:t.state.phoneNum},t.state.listData.length),e.props.swipe()}},e.subInfo(e.props.useSlotNum))})}}]),t}(n.Component),D=a(8),P=a.n(D),A=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,l=new Array(n),i=0;i<n;i++)l[i]=arguments[i];return(a=Object(u.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(l)))).state={index:0},a.handleChange=function(e){a.setState({index:e})},a.handleChangeIndex=function(e){a.setState({index:e})},a}return Object(d.a)(t,e),Object(o.a)(t,[{key:"findArrayElementBySlotNum",value:function(e,t){return e.findIndex(function(e){return e.useSlotNum===t})}},{key:"createList",value:function(e,t,a){for(var n=[],i=t;i<a;i++){var r;n=(r=this.findArrayElementBySlotNum(e,i+1))>-1?n.concat(l.a.createElement(U,{key:i,index:i+1,listIndex:r,useSlotNum:e[r].useSlotNum,name:e[r].name,startTime:e[r].startTime,endTime:e[r].endTime,phoneNum:e[r].phoneNum,swipe:this.props.swipe,action:this.props.action})):n.concat(l.a.createElement(U,{key:i,index:i+1,swipe:this.props.swipe,action:this.props.action}))}return n}},{key:"render",value:function(){var e=this,t=this.state.index;return l.a.createElement("div",{className:"list"},l.a.createElement("div",{className:"listView"},l.a.createElement("div",{className:"listInfoView"},l.a.createElement("div",{className:"listCountView"},l.a.createElement("div",{className:"titleTodayCount"},l.a.createElement("div",null,"Today"),l.a.createElement("div",null,"&10 &10")),l.a.createElement("div",{className:"titleNowCount"},l.a.createElement("div",null,"Now"),l.a.createElement("div",null,"&1 &1")),l.a.createElement("div",{className:"titleOutCount"},l.a.createElement("div",null,"Out"),l.a.createElement("div",null,"&3 &3"))),l.a.createElement("div",{className:"listSearchBar"},l.a.createElement("div",null,"Out"))),l.a.createElement("div",{className:"listTitleText"},"\uc2e0\ubc1c\uc7a5"),l.a.createElement("div",{className:"swipe-wrap"},l.a.createElement(N.a,{index:t,onChangeIndex:this.handleChangeIndex},l.a.createElement("div",{className:"listBox"},l.a.createElement(v.Consumer,null,function(t){return e.createList(t.state.listData,0,49)})),l.a.createElement("div",{className:"listBox"},l.a.createElement(v.Consumer,null,function(t){return e.createList(t.state.listData,49,98)})),l.a.createElement("div",{className:"listBox"},l.a.createElement(v.Consumer,null,function(t){return e.createList(t.state.listData,98,147)})))),l.a.createElement("div",{className:"pageTabBar"},l.a.createElement("img",{src:P.a,className:"PageNumber",alt:"login1",onClick:function(){return e.handleChange(0)}}),l.a.createElement("img",{src:P.a,className:"PageNumber",alt:"login1",onClick:function(){return e.handleChange(1)}}),l.a.createElement("img",{src:P.a,className:"PageNumber",alt:"login1",onClick:function(){return e.handleChange(2)}}))))}}]),t}(n.Component),L=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,l=new Array(n),i=0;i<n;i++)l[i]=arguments[i];return(a=Object(u.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(l)))).listPageMaxCount=49,a.listBoxCount=150,a.init=!1,a.state={index:1},a.handleChangeIndex=function(e){a.setState({index:e}),a.init=1===e},a.handleSetIndex0=function(e){a.setState({index:0})},a.handleSetIndex1=function(e){a.setState({index:1})},a.handleSetIndex2=function(e){a.setState({index:2})},a}return Object(d.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this,t=this.state.index;return l.a.createElement(v.Consumer,null,function(a){return!0===e.init?(a.stateClear(),e.init=!1):e.init=!1,l.a.createElement("div",{className:"swipe-wrap"},l.a.createElement(N.a,{index:t,onChangeIndex:e.handleChangeIndex,enableMouseEvents:!0},l.a.createElement("div",null," ",l.a.createElement(O,{swipe:e.handleSetIndex1})," "),l.a.createElement("div",null," ",l.a.createElement(f,{swipe:e.handleSetIndex0,start:e.handleSetIndex2})," "),l.a.createElement("div",null," ",l.a.createElement(A,{swipe:e.handleSetIndex0,listPageMaxCount:e.listPageMaxCount,listBoxCount:e.listBoxCount})," ")))})}}]),t}(n.Component),M=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,l=new Array(n),i=0;i<n;i++)l[i]=arguments[i];return(a=Object(u.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(l)))).state={index:null,name:null,day:"1900-01-01",startTime:null,endTime:null,phoneNum:null,loginCustomerNum:null,listData:[{useSlotNum:1,customerNum:10000001,name:"\ub178\ub9ac",day:"1900-01-01",startTime:"00:00:00",endTime:"00:00:00",phoneNum:"010-1111-1111",child:[{name:"\ub178\ub9ac11",day:"1900-01-01"},{name:"\ub178\ub9ac12",day:"1900-01-01"}]},{useSlotNum:4,customerNum:10000002,name:"\ubca0\uac00\uc2a4",day:"1900-01-01",startTime:"00:00:00",endTime:"00:00:00",phoneNum:"010-2222-2222",child:[{name:"\ubca0\uac00\uc2a411",day:"1900-01-01"},{name:"\ubca0\uac00\uc2a412",day:"1900-01-01"}]},{useSlotNum:3,customerNum:10000003,name:"\uc9c0\ub2c8",day:"1900-01-01",startTime:"00:00:00",endTime:"00:00:00",phoneNum:"010-3333-3333",child:[{name:"\uc9c0\ub2c811",day:"1900-01-01"}]},{useSlotNum:12,customerNum:10000004,name:"\ud574\ub9ac\ud3ec\ud130",day:"1900-01-01",startTime:"00:00:00",endTime:"00:00:00",phoneNum:"010-4444-4444",child:[{name:"\ud574\ub9ac\ud3ec\ud13011",day:"1900-01-01"}]}]},a.updateValue=function(e,t){a.setState(Object(s.a)({},e,t))},a.addUser_UseCafe=function(e,t){a.setState({listData:a.state.listData.concat(e),loginCustomerNum:t})},a.stateClear=function(){a.setState({index:null,name:null,day:"1900-01-01",startTime:null,endTime:null,phoneNum:null,loginCustomerNum:null}),console.log("stateClear")},a.curUser=function(){return null!==a.state.loginCustomerNum?a.state.listData[a.state.loginCustomerNum]:{index:null,name:null,day:"1900-01-01",startTime:null,endTime:null,phoneNum:null,loginCustomerNum:null}},a}return Object(d.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return l.a.createElement(v.Provider,{value:{state:this.state,updateValue:this.updateValue,addUser_UseCafe:this.addUser_UseCafe,curUser:this.curUser,stateClear:this.stateClear}},l.a.createElement(L,null))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(l.a.createElement(M,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},8:function(e,t,a){e.exports=a.p+"static/media/1.4ab2a718.jpg"}},[[25,2,1]]]);
//# sourceMappingURL=main.4e8cba50.chunk.js.map