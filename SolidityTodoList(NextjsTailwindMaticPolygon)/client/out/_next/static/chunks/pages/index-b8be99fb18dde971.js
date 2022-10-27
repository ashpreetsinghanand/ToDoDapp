(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{6100:function(d,b,a){"use strict";a.r(b),a.d(b,{default:function(){return u}});var e=a(6687),f=a(29),c=a(7794),g=a.n(c),h=a(5893),i=function(){return(0,h.jsxs)("div",{className:"flex flex-col justify-center items-center mb-20 font-bold text-2xl gap-y-3",children:[(0,h.jsx)("div",{children:"----------------------------------------"}),(0,h.jsx)("div",{children:"Please connect to the Matic Polygon Network Testnet"}),(0,h.jsx)("div",{children:"and reload the page"}),(0,h.jsx)("div",{children:"----------------------------------------"})]})},j=function(a){var b=a.connectWallet;return(0,h.jsx)("button",{className:"h-[5rem] text-2xl font-bold py-3 px-12 bg-[#f1c232] rounded-lg mb-10 hover:scale-105 transition duration-500 ease-in-out",onClick:b,children:"Connect Wallet"})},k=a(7294),l=function(){return(0,h.jsxs)("div",{className:"w-[full] flex px-2 py-8 justify-between",children:[(0,h.jsx)("div",{className:"flex-3 text-5xl",children:" \u231B"}),(0,h.jsx)("div",{className:"flex-1 flex place-content-center  capitalize gap-[30px] text-5xl font-bold  font-mono",children:"TODO LIST DAPP"}),(0,h.jsx)("div",{className:"flex-3 flex text-5xl bolder",children:"\uD83D\uDCDD"})]})},m=a(1649),n=a(3750),o=function(a){var b=a.taskText,c=a.onClick;return(0,h.jsxs)("div",{className:"flex items-center text-white",children:[(0,h.jsx)("div",{className:" bg-[#031956] text-[#b6c7db] flex w-[70%] rounded-[15px] mb-[10px] flex-1",children:(0,h.jsx)("div",{className:"flex items-center justify-between w-full p-[20px] text-xl",children:b})}),(0,h.jsx)(n.AuQ,{onClick:c,className:"text-2xl cursor-pointer ml-10"})]})},p=function(a){var b=a.tasks,c=a.input,e=a.setInput,d=a.addTask,f=a.deleteTask;return(0,h.jsxs)("div",{className:"w-[70%] bg-[#354ea3] py-4 px-9 rounded-[30px] overflow-y-scroll",children:[(0,h.jsx)(l,{}),(0,h.jsx)("h2",{className:"text-4xl bolder text-white pb-8",children:"What's up, User!"}),(0,h.jsx)("div",{className:"py-3 text-[#7d99e9]",children:"TODAY'S TASKS"}),(0,h.jsxs)("form",{className:"flex items-center justify-center",children:[(0,h.jsx)("input",{className:"rounded-[10px] w-full p-[10px] border-none outline-none bg-[#031956] text-white mb-[10px]",placeholder:"Add a task for today...",value:c,onChange:function(a){return e(a.target.value)}}),(0,h.jsx)(m.Lgw,{onClick:d,className:"text-[#ea0a] text-[50px] cursor-pointer ml-[20px] mb-[10px]"})]}),(0,h.jsx)("ul",{children:b.map(function(a){return(0,h.jsx)(o,{taskText:a.taskText,onClick:f(a.id)},a.id)})})]})},q="0x224Eb3b9EBD2C143AF59558B1D7ae609D67B335B",r=JSON.parse('{"Mt":[{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"recipient","type":"address"},{"indexed":false,"internalType":"uint256","name":"taskId","type":"uint256"}],"name":"AddTask","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"taskId","type":"uint256"},{"indexed":false,"internalType":"bool","name":"isDeleted","type":"bool"}],"name":"DeleteTask","type":"event"},{"inputs":[{"internalType":"string","name":"taskText","type":"string"},{"internalType":"bool","name":"isDeleted","type":"bool"}],"name":"addTask","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"getMyTask","outputs":[{"components":[{"internalType":"uint256","name":"id","type":"uint256"},{"internalType":"string","name":"taskText","type":"string"},{"internalType":"bool","name":"isDeleted","type":"bool"}],"internalType":"struct TaskContract.Task[]","name":"","type":"tuple[]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"taskId","type":"uint256"},{"internalType":"bool","name":"isDeleted","type":"bool"}],"name":"deleteTask","outputs":[],"stateMutability":"nonpayable","type":"function"}]}'),s=a(6076),t=a(7114);function u(){var m,a=(0,k.useState)(!1),n=a[0],B=a[1],b=(0,k.useState)(!1),o=b[0],C=b[1],c=(0,k.useState)(""),D=(c[0],c[1]),d=(0,k.useState)(""),u=d[0],v=d[1],l=(0,k.useState)([]),w=l[0],E=l[1];(0,k.useEffect)(function(){z(),F()},[]);var x,y,z=(m=(0,f.Z)(g().mark(function a(){var b,c,d,e,f;return g().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:if(a.prev=0,c=(b=window).ethereum){a.next=5;break}return console.log("Metamask not detected"),a.abrupt("return");case 5:return a.next=7,c.request({method:"eth_chainId"});case 7:return d=a.sent,console.log("connected to chain",d),d!==(e="0x13881")?(alert("you are not connected to matic chain "),B(!1)):B(!0),a.next=13,c.request({method:"eth_requestAccounts"});case 13:f=a.sent,console.log("Found account",f[0]),C(!0),D(f[0]),a.next=22;break;case 19:a.prev=19,a.t0=a.catch(0),console.log(a.t0);case 22:case"end":return a.stop()}},a,null,[[0,19]])})),function(){return m.apply(this,arguments)}),F=(x=(0,f.Z)(g().mark(function a(){var b,c,d,e,f,h;return g().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:if(a.prev=0,!(c=(b=window).ethereum)){a.next=12;break}return e=(d=new t.Q(c)).getSigner(),f=new s.CH(q,r.Mt,e),a.next=8,f.getMyTask();case 8:E(h=a.sent),a.next=13;break;case 12:console.log("ethereum object does not exist");case 13:a.next=18;break;case 15:a.prev=15,a.t0=a.catch(0),console.log(a.t0);case 18:case"end":return a.stop()}},a,null,[[0,15]])})),function(){return x.apply(this,arguments)}),A=(y=(0,f.Z)(g().mark(function a(b){var c,d,f,h,i,j;return g().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:b.preventDefault(),c={taskText:u,isDeleted:!1};try{(f=(d=window).ethereum)?(i=(h=new t.Q(f)).getSigner(),(j=new s.CH(q,r.Mt,i)).addTask(c.taskText,c.isDeleted).then(function(a){E([].concat((0,e.Z)(w),[c])),console.log("Completed Task")}).catch(function(a){console.log("Error occured while adding a new task")})):console.log("Ethereum object doesn't exist!")}catch(g){console.log("Error submitting new Tweet",g)}v("");case 4:case"end":return a.stop()}},a)})),function(a){return y.apply(this,arguments)});return(0,h.jsx)("div",{className:"bg-[#97b5fe] h-screen w-screen flex justify-center py-6",children:o?n?(0,h.jsx)(p,{tasks:w,input:u,setInput:v,addTask:A,deleteTask:function(a){return(0,f.Z)(g().mark(function b(){var c,d,e,f,h,i,j;return g().wrap(function(b){for(;;)switch(b.prev=b.next){case 0:if(console.log(a),b.prev=1,!(d=(c=window).ethereum)){b.next=16;break}return f=(e=new t.Q(d)).getSigner(),h=new s.CH(q,r.Mt,f),b.next=9,h.deleteTask(a,!0);case 9:return i=b.sent,b.next=12,h.getMyTask();case 12:E(j=b.sent),b.next=17;break;case 16:console.log("Ethereum object doesn't exist");case 17:b.next=22;break;case 19:b.prev=19,b.t0=b.catch(1),console.log(b.t0);case 22:case"end":return b.stop()}},b,null,[[1,19]])}))}}):(0,h.jsx)(i,{}):(0,h.jsx)(j,{connectWallet:z})})}},5557:function(a,b,c){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return c(6100)}])},6601:function(){}},function(a){a.O(0,[866,13,597,774,888,179],function(){var b;return a(a.s=5557)}),_N_E=a.O()}])