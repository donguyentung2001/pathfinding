(this.webpackJsonppathfinder=this.webpackJsonppathfinder||[]).push([[0],{59:function(t,e,n){},60:function(t,e,n){},68:function(t,e,n){"use strict";n.r(e);var i=n(0),s=n.n(i),a=n(18),r=n.n(a),o=(n(59),n(19)),c=n(26),d=n(27),h=n(7),l=n(30),u=n(29),j=(n.p,n(60),n(76)),g=n(53),p=n(77),b=n(74),f=n(78),O=n(75),v=(n(61),n.p+"static/media/pic1.6a988925.png"),m=n.p+"static/media/pic2.5c986050.png",y=n.p+"static/media/pic4.f20d2566.png",x=n.p+"static/media/pic5.9c12f257.png",k=n.p+"static/media/pic6.706839af.png",w=n.p+"static/media/pic7.db9632b4.png",C=n(1),F={content:{top:"50%",left:"50%",right:"auto",bottom:"auto",marginRight:"-50%",transform:"translate(-50%, -50%)"}},I=function(t){Object(l.a)(n,t);var e=Object(u.a)(n);function n(t){var i;return Object(c.a)(this,n),(i=e.call(this,t)).state={tutorialOn:!0},i.handleClose=i.handleClose.bind(Object(h.a)(i)),i}return Object(d.a)(n,[{key:"componentDidUpdate",value:function(t){this.props.showTutorial!=t.showTutorial&&this.setState((function(t){return{tutorialOn:!0}}))}},{key:"handleClose",value:function(){this.setState((function(t){return{tutorialOn:!1}}))}},{key:"render",value:function(){return Object(C.jsx)("div",{children:Object(C.jsxs)(j.a,{show:this.state.tutorialOn,style:F,onHide:this.handleClose,children:[Object(C.jsx)(j.a.Header,{style:{display:"flex",justifyContent:"center",alignItems:"center"},children:Object(C.jsx)(j.a.Title,{children:"Tutorial"})}),Object(C.jsxs)(j.a.Body,{children:[Object(C.jsx)("p",{children:" For a quick start, click on two grids. "}),Object(C.jsx)("img",{src:v,alt:"two grids",style:{width:"400px",height:"200px"}}),Object(C.jsx)("p",{children:' Then, click on "Run Pathfinding Algorithms" and choose an algorithm you want to find the shortest path with'}),Object(C.jsx)("img",{src:m,alt:"run pathfinding algorithms",style:{width:"400px",height:"200px"}}),Object(C.jsx)("p",{children:" Now you can see how the algorithms find the shortest path between two grids! "}),Object(C.jsx)("img",{src:y,alt:"shortest path",style:{width:"400px",height:"200px"}}),Object(C.jsx)("p",{children:" Click twice on a grid to make it an obstacle. "}),Object(C.jsx)("img",{src:x,alt:"obstacle",style:{width:"400px",height:"200px"}}),Object(C.jsx)("p",{children:' You can also choose to quickly build a maze, aka placing obstacles "smartly", from one of the maze generation algorithms by clicking on "Generate Maze" and choose one algorithm. '}),Object(C.jsx)("img",{src:k,alt:"maze",style:{width:"400px",height:"200px"}}),Object(C.jsx)("p",{children:" Now you can watch how our algorithm builds a maze! You can put two start/end grids on this new maze and run the pathfinding algorithm as well! "}),Object(C.jsx)("img",{src:w,alt:"maze-run",style:{width:"400px",height:"200px"}}),Object(C.jsx)("p",{children:' Finally, to reset our board, click on "Reset board" on the nagivation bar. '}),Object(C.jsx)("p",{children:" Enjoy pathfinding! "})]}),Object(C.jsx)(j.a.Footer,{style:{display:"flex",justifyContent:"center"},children:Object(C.jsx)(g.a,{variant:"primary",style:{width:"70px",height:"50px"},onClick:this.handleClose,children:"Close"})})]})})}}]),n}(i.Component),S=function(t){Object(l.a)(n,t);var e=Object(u.a)(n);function n(t){var i;return Object(c.a)(this,n),(i=e.call(this,t)).state={warningOn:!1},i.handleClose=i.handleClose.bind(Object(h.a)(i)),i}return Object(d.a)(n,[{key:"componentDidUpdate",value:function(t){this.props.showWarning!=t.showWarning&&this.setState((function(t){return{warningOn:!0}}))}},{key:"handleClose",value:function(){this.setState((function(t){return{warningOn:!1}}))}},{key:"render",value:function(){return Object(C.jsx)("div",{children:Object(C.jsxs)(j.a,{show:this.state.warningOn,style:F,onHide:this.handleClose,children:[Object(C.jsx)(j.a.Header,{style:{display:"flex",justifyContent:"center",alignItems:"center"},children:Object(C.jsx)(j.a.Title,{children:"Warning"})}),Object(C.jsx)(j.a.Body,{children:Object(C.jsx)("p",{children:" You need exactly 2 start/end grids.  "})}),Object(C.jsx)(j.a.Footer,{style:{display:"flex",justifyContent:"center"},children:Object(C.jsx)(g.a,{variant:"primary",style:{width:"70px",height:"50px"},onClick:this.handleClose,children:"Close"})})]})})}}]),n}(i.Component),T=function(t){Object(l.a)(n,t);var e=Object(u.a)(n);function n(t){var i;return Object(c.a)(this,n),(i=e.call(this,t)).state={algorithmOn:!1},i.handleClose=i.handleClose.bind(Object(h.a)(i)),i}return Object(d.a)(n,[{key:"componentDidUpdate",value:function(t){this.props.showAlgorithm!=t.showAlgorithm&&this.setState((function(t){return{algorithmOn:!0}}))}},{key:"handleClose",value:function(){this.setState((function(t){return{algorithmOn:!1}}))}},{key:"render",value:function(){return Object(C.jsx)("div",{children:Object(C.jsxs)(j.a,{show:this.state.algorithmOn,style:F,onHide:this.handleClose,children:[Object(C.jsx)(j.a.Header,{style:{display:"flex",justifyContent:"center",alignItems:"center"},children:Object(C.jsx)(j.a.Title,{children:"About our algorithms"})}),Object(C.jsxs)(j.a.Body,{children:[Object(C.jsx)("h3",{children:" Grid setup "}),Object(C.jsx)("p",{children:" A single grid is connected to all of its adjacent grids (vertically, horizontally, diagonally), unless the adjacent grid is an obstacle. "}),Object(C.jsx)("p",{children:" For path-finding algorithm of weighted graphs, we let the distance between a grid and its vertical and horizontal neighbors to be 1, and the distance between a grid and its diagonal neighbor to be 1.4. "}),Object(C.jsx)("h3",{children:" Algorithm "}),Object(C.jsxs)("p",{children:[" Breadth-first search is ",Object(C.jsx)("b",{children:" unweighted "})," and guarantees shortest path.  "]}),Object(C.jsxs)("p",{children:[" Dijkstra's algorithm is ",Object(C.jsx)("b",{children:" weighted "})," and guarantees shortest path.  "]}),Object(C.jsxs)("p",{children:[" A* search algorithm is ",Object(C.jsx)("b",{children:" weighted "})," and guarantees shortest path.  "]}),Object(C.jsxs)("p",{children:[" Greedy Best-First Search algorithm is ",Object(C.jsx)("b",{children:" weighted "})," but does ",Object(C.jsx)("b",{children:" not "})," guarantee shortest path.  "]})]}),Object(C.jsx)(j.a.Footer,{style:{display:"flex",justifyContent:"center"},children:Object(C.jsx)(g.a,{variant:"primary",style:{width:"70px",height:"50px"},onClick:this.handleClose,children:"Close"})})]})})}}]),n}(i.Component),A=function(t){Object(l.a)(n,t);var e=Object(u.a)(n);function n(t){return Object(c.a)(this,n),e.call(this,t)}return Object(d.a)(n,[{key:"componentDidUpdate",value:function(t){if(this.props.condition!=t.condition){var e=document.getElementById(this.props.id);"default"==this.props.condition?e.style.background="#FFFFFF":"block"==this.props.condition?e.style.background="#000000":"considered-d"==this.props.condition?e.style.background="#FFB266":"considered"==this.props.condition?e.style.background="#FF8000":"endpoint"==this.props.condition?e.style.background="#FF99FF":"chosen"==this.props.condition&&(e.style.background="#80FF00")}}},{key:"render",value:function(){return Object(C.jsx)("button",{className:"square",id:this.props.id,condition:this.props.condition,onClick:this.props.changecond,children:" "})}}]),n}(i.Component),M=function(t){Object(l.a)(n,t);var e=Object(u.a)(n);function n(t){var i;Object(c.a)(this,n),(i=e.call(this,t)).changeInitialCondition=i.changeInitialCondition.bind(Object(h.a)(i)),i.addNodeToGraph=i.addNodeToGraph.bind(Object(h.a)(i)),i.changeTraverseCondition=i.changeTraverseCondition.bind(Object(h.a)(i)),i.resetExceptEndPoints=i.resetExceptEndPoints.bind(Object(h.a)(i)),i.reset=i.reset.bind(Object(h.a)(i)),i.resetHelper=i.resetHelper.bind(Object(h.a)(i)),i.BFS=i.BFS.bind(Object(h.a)(i)),i.dijkstra=i.dijkstra.bind(Object(h.a)(i)),i.notVertical=i.notVertical.bind(Object(h.a)(i)),i.findCoordinates=i.findCoordinates.bind(Object(h.a)(i)),i.findDistance=i.findDistance.bind(Object(h.a)(i)),i.deleteNodeFromGraph=i.deleteNodeFromGraph.bind(Object(h.a)(i)),i.generateMazePrimHelper=i.generateMazePrimHelper.bind(Object(h.a)(i)),i.generateMazeRandomHelper=i.generateMazeRandomHelper.bind(Object(h.a)(i)),i.generateMazeRandom=i.generateMazeRandom.bind(Object(h.a)(i)),i.generateMazePrim=i.generateMazePrim.bind(Object(h.a)(i)),i.restoreEndpoints=i.restoreEndpoints.bind(Object(h.a)(i)),i.showTutorial=i.showTutorial.bind(Object(h.a)(i)),i.showWarning=i.showWarning.bind(Object(h.a)(i)),i.showAlgorithm=i.showAlgorithm.bind(Object(h.a)(i)),i.getSumArray=i.getSumArray.bind(Object(h.a)(i)),i.a_star=i.a_star.bind(Object(h.a)(i)),i.greedy_bestfs=i.greedy_bestfs.bind(Object(h.a)(i)),i.state={adjacency_list:{},endpoints:[],conditions:{},tutorialIsOpen:!1,warningIsOn:!1,algorithmIsOn:!1};for(var s=1;s<=400;s++)i.state.conditions[s]="default";for(var a={},r=[2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19],o=[382,383,384,385,386,387,388,389,390,391,392,393,394,395,396,397,398,399],d=[21,41,61,81,101,121,141,161,181,201,221,241,261,281,301,321,341,361],l=[40,60,80,100,120,140,160,180,200,220,240,260,280,300,320,340,360,380],u=1;u<=400;u++)1==u?a[1]=[2,21,22]:20==u?a[20]=[19,39,40]:381==u?a[381]=[361,362,382]:400==u?a[400]=[379,380,399]:r.includes(u)?a[u]=[u-1,u+1,u+20,u+19,u+21]:o.includes(u)?a[u]=[u-1,u+1,u-20,u-19,u-21]:d.includes(u)?a[u]=[u-20,u+20,u+1,u-19,u+21]:l.includes(u)?a[u]=[u-1,u-21,u+20,u+19,u-20]:a[u]=[u-1,u+1,u-19,u-20,u-21,u+19,u+20,u+21];return i.state.adjacency_list=a,i}return Object(d.a)(n,[{key:"showTutorial",value:function(){this.setState({tutorialIsOpen:!this.state.tutorialIsOpen})}},{key:"showWarning",value:function(){this.setState({warningIsOn:!this.state.warningIsOn})}},{key:"showAlgorithm",value:function(){this.setState({algorithmIsOn:!this.state.algorithmIsOn})}},{key:"notVertical",value:function(t,e){return![t-1,t+1,t-20,t+20].includes(e)}},{key:"findCoordinates",value:function(t){return[(t-1)%20,Math.floor((t-1)/20)]}},{key:"findDistance",value:function(t,e){var n=this.findCoordinates(t),i=this.findCoordinates(e),s=Math.pow(n[0]-i[0],2)+Math.pow(n[1]-i[1],2);return Math.pow(s,.5)}},{key:"getSumArray",value:function(t){for(var e=0,n=0;n<t.length;n++)e+=t[n];return e}},{key:"changeInitialCondition",value:function(t){var e=this.state.conditions,n=this.state.endpoints,i=this.state.adjacency_list;"default"==this.state.conditions[t]?(e[t]="endpoint",n.push(t)):"endpoint"==this.state.conditions[t]?(e[t]="block",n.splice(n.indexOf(t),1),i=this.deleteNodeFromGraph(t)):"block"==this.state.conditions[t]&&(e[t]="default",i=this.addNodeToGraph(t)),this.setState((function(t){return{conditions:e,endpoints:n,adjacency_list:i}}))}},{key:"deleteNodeFromGraph",value:function(t){var e=this.state.adjacency_list;e[t]=[];for(var n=[t-1,t+1,t-19,t-20,t-21,t+19,t+20,t+21],i=0;i<n.length;i++)n[i]in e&&e[n[i]].includes(t)&&e[n[i]].splice(e[n[i]].indexOf(t),1);return e}},{key:"addNodeToGraph",value:function(t){var e=this.state.adjacency_list;1==t?e[1]=[2,21,22]:20==t?e[20]=[19,39,40]:381==t?e[381]=[361,362,382]:400==t?e[400]=[379,380,399]:[2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19].includes(t)?e[t]=[t-1,t+1,t+20,t+19,t+21]:[382,383,384,385,386,387,388,389,390,391,392,393,394,395,396,397,398,399].includes(t)?e[t]=[t-1,t+1,t-20,t-19,t-21]:[21,41,61,81,101,121,141,161,181,201,221,241,261,281,301,321,341,361].includes(t)?e[t]=[t-20,t+20,t+1,t-19,t+21]:[40,60,80,100,120,140,160,180,200,220,240,260,280,300,320,340,360,380].includes(t)?e[t]=[t-1,t-21,t+20,t+19,t-20]:e[t]=[t-1,t+1,t-19,t-20,t-21,t+19,t+20,t+21];for(var n=0;n<e[t].length;n++){e[e[t][n]].push(t)}return e}},{key:"changeTraverseCondition",value:function(t,e){var n=this.state.conditions,i=this.state.adjacency_list,s=this.state.endpoints;n[t]=e,this.setState((function(t){return{conditions:n,endpoints:s,adjacency_list:i}}))}},{key:"resetExceptEndPoints",value:function(){for(var t=this.state.conditions,e=this.state.adjacency_list,n=this.state.endpoints,i=1;i<=400;i++)n.includes(i)||"block"==t[i]?n.includes(i)&&(t[i]="endpoint"):t[i]="default";this.setState((function(i){return{conditions:t,endpoints:n,adjacency_list:e}}))}},{key:"restoreEndpoints",value:function(){for(var t=this.state.conditions,e=0;e<this.state.endpoints.length;e++)t[this.state.endpoints[e]]="endpoint";this.setState((function(e){return{conditions:t}}))}},{key:"resetHelper",value:function(){for(var t=[],e={},n=[2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19],i=[382,383,384,385,386,387,388,389,390,391,392,393,394,395,396,397,398,399],s=[21,41,61,81,101,121,141,161,181,201,221,241,261,281,301,321,341,361],a=[40,60,80,100,120,140,160,180,200,220,240,260,280,300,320,340,360,380],r=1;r<=400;r++)1==r?e[1]=[2,21,22]:20==r?e[20]=[19,39,40]:381==r?e[381]=[361,362,382]:400==r?e[400]=[379,380,399]:n.includes(r)?e[r]=[r-1,r+1,r+20,r+19,r+21]:i.includes(r)?e[r]=[r-1,r+1,r-20,r-19,r-21]:s.includes(r)?e[r]=[r-20,r+20,r+1,r-19,r+21]:a.includes(r)?e[r]=[r-1,r-21,r+20,r+19,r-20]:e[r]=[r-1,r+1,r-19,r-20,r-21,r+19,r+20,r+21];for(var o=1;o<=400;o++)t[o]="default";return[t,[],e]}},{key:"reset",value:function(){var t=this;this.setState((function(e){return{conditions:t.resetHelper()[0],endpoints:t.resetHelper()[1],adjacency_list:t.resetHelper()[2]}}))}},{key:"generateMazeRandom",value:function(){var t=this;this.setState((function(e){return{conditions:t.resetHelper()[0],endpoints:t.resetHelper()[1],adjacency_list:t.resetHelper()[2]}}),this.generateMazeRandomHelper)}},{key:"generateMazePrim",value:function(){var t=this;this.setState((function(e){return{conditions:t.resetHelper()[0],endpoints:t.resetHelper()[1],adjacency_list:t.resetHelper()[2]}}),this.generateMazePrimHelper)}},{key:"generateMazeRandomHelper",value:function(){for(var t=[],e=this.state.conditions,n=Math.floor(50*Math.random()+50),i=0;i<n;i++){for(var s=Math.floor(400*Math.random()+1);"default"!=e[s];)s=Math.floor(400*Math.random()+1);e[s]="block",t.push(s)}this.setState((function(t){return{conditions:e}}));for(var a=0;a<t.length;a++)this.setState({adjacency_list:this.deleteNodeFromGraph(t[a])})}},{key:"generateMazePrimHelper",value:function(){for(var t=this.state.conditions,e=this.state.adjacency_list,n={},i=[],s=1;s<=400;s++)t[s]="block";var a=Math.floor(400*Math.random()+1);t[a]="default",n[1]=!0;for(var r=0;r<e[1].length;r++)i.push(e[1][r]);var o=setInterval(function(){var s=this;if(0!=i.length){for(var a=i[Math.floor(Math.random()*i.length)],r=e[a],c=0,d=0;d<r.length;d++)r[d]in n&&(c+=1);if(c<2){n[a]=!0,t[a]="default";for(var h=0;h<e[a].length;h++)e[a][h]in n||i.push(e[a][h])}i.splice(i.indexOf(a),1),this.setState((function(e){return{conditions:t}}))}else{clearInterval(o);for(var l=function(t){t in n||s.setState((function(e){return{adjacency_list:s.deleteNodeFromGraph(t)}}))},u=1;u<=400;u++)l(u)}}.bind(this),.001)}},{key:"BFS",value:function(){if(this.resetExceptEndPoints(),2==this.state.endpoints.length){var t=this.state.endpoints[0],e=this.state.endpoints[1],n=this.state.adjacency_list,i=[t],s={};s[t]=!0;var a=[],r={},o=setInterval(function(){if(0==i.length||e in s){if(clearInterval(o),e in s)var c=e,d=setInterval(function(){if(c==t)return this.changeTraverseCondition(c,"chosen"),clearInterval(d),void this.restoreEndpoints();c!=e&&this.changeTraverseCondition(c,"chosen"),c=r[c]}.bind(this),100)}else{a=[];for(var h=0;h<i.length;h++)for(var l=0;l<n[i[h]].length;l++)n[i[h]][l]in s||(r[n[i[h]][l]]=i[h],a.push(n[i[h]][l]),s[n[i[h]][l]]=!0);i=a;for(var u=0;u<i.length;u++)"endpoint"!=this.state.conditions[i[u]]&&this.changeTraverseCondition(i[u],"considered")}}.bind(this),400)}else this.showWarning()}},{key:"dijkstra",value:function(){if(this.resetExceptEndPoints(),2==this.state.endpoints.length){for(var t=this.state.endpoints[0],e=this.state.endpoints[1],n=this.state.adjacency_list,i=[1e3],s={},a={},r=1;r<=400;r++)r==t?i.push(0):i.push(1e3);var o=0,c=t,d=setInterval(function(){if(this.state.endpoints.includes(c)||this.changeTraverseCondition(c,"considered"),e in s||1e3==o){clearInterval(d);var r=e,h=setInterval(function(){if(r==t)return this.changeTraverseCondition(r,"chosen"),this.restoreEndpoints(),void clearInterval(h);r!=e&&this.changeTraverseCondition(r,"chosen"),r=a[r]}.bind(this),100)}else{for(var l={},u=0;u<n[c].length;u++)n[c][u]in s||(this.notVertical(c,n[c][u])?l[n[c][u]]=o+1.4:l[n[c][u]]=o+1);Object.keys(l).forEach((function(t){l[t]<i[t]&&(i[t]=l[t],a[t]=c,this.state.endpoints.includes(parseInt(t))||this.changeTraverseCondition(t,"considered-d"))}),this),i[c]=1e3,s[c]=!0,o=Math.min.apply(Math,i),c=i.indexOf(o)}}.bind(this),40)}else this.showWarning()}},{key:"a_star",value:function(){if(this.resetExceptEndPoints(),2==this.state.endpoints.length){var t=this.state.endpoints[0],e=this.state.endpoints[1],n=this.state.adjacency_list,i={};i[t]=!0;var s={},a={},r={};r[t]=[0,this.findDistance(t,e)];var c=t,d=setInterval(function(){if(0!=i.length&&c!=e){s[c]=!0,c!=t&&this.changeTraverseCondition(c,"considered");for(var h=0;h<n[c].length;h++)if(!(n[c][h]in s)){if(this.notVertical(n[c][h],c))var l=r[c][0]+1.4;else l=r[c][0]+1;var u=this.findDistance(n[c][h],e);n[c][h]in r?(this.getSumArray(r[n[c][h]])>l+u||this.getSumArray(r[n[c][h]])==l+u&&r[n[c][h]][1]>u)&&(r[n[c][h]]=[l,u],a[n[c][h]]=c):(r[n[c][h]]=[l,u],i[n[c][h]]=!0,a[n[c][h]]=c),n[c][h]!=e&&this.changeTraverseCondition(n[c][h],"considered-d")}delete i[c];for(var j=1e3,g=0,p=Object.entries(i);g<p.length;g++){var b=Object(o.a)(p[g],2),f=b[0];b[1];(1e3==j||this.getSumArray(r[f])<this.getSumArray(r[j])||this.getSumArray(r[f])==this.getSumArray(r[j])&&r[f][1]<r[j][1])&&(j=f),c=parseInt(j)}}else{clearInterval(d);var O=setInterval(function(){if(c==t)return this.changeTraverseCondition(c,"chosen"),this.restoreEndpoints(),void clearInterval(O);c!=e&&this.changeTraverseCondition(c,"chosen"),c=a[c]}.bind(this),100)}}.bind(this),100)}else this.showWarning()}},{key:"greedy_bestfs",value:function(){if(this.resetExceptEndPoints(),2==this.state.endpoints.length){var t=this.state.endpoints[0],e=this.state.endpoints[1],n=this.state.adjacency_list,i={};i[t]=!0;var s={},a={},r={};r[t]=[0,this.findDistance(t,e)];var c=t,d=setInterval(function(){if(0!=i.length&&c!=e){s[c]=!0,c!=t&&this.changeTraverseCondition(c,"considered");for(var h=0;h<n[c].length;h++)if(!(n[c][h]in s)){var l=this.findDistance(n[c][h],e);n[c][h]in r?(this.getSumArray(r[n[c][h]])>0+l||this.getSumArray(r[n[c][h]])==0+l&&r[n[c][h]][1]>l)&&(r[n[c][h]]=[0,l],a[n[c][h]]=c):(r[n[c][h]]=[0,l],i[n[c][h]]=!0,a[n[c][h]]=c),n[c][h]!=e&&this.changeTraverseCondition(n[c][h],"considered-d")}delete i[c];for(var u=1e3,j=0,g=Object.entries(i);j<g.length;j++){var p=Object(o.a)(g[j],2),b=p[0];p[1];(1e3==u||this.getSumArray(r[b])<this.getSumArray(r[u])||this.getSumArray(r[b])==this.getSumArray(r[u])&&r[b][1]<r[u][1])&&(u=b),c=parseInt(u)}}else{clearInterval(d);var f=setInterval(function(){if(c==t)return this.changeTraverseCondition(c,"chosen"),this.restoreEndpoints(),void clearInterval(f);c!=e&&this.changeTraverseCondition(c,"chosen"),c=a[c]}.bind(this),100)}}.bind(this),100)}else this.showWarning()}},{key:"renderElement",value:function(t){var e=this;return Object(C.jsx)(A,{id:t,condition:this.state.conditions[t],changecond:function(){return e.changeInitialCondition(t)}})}},{key:"renderElements",value:function(t){for(var e=[],n=20*(t-1)+1;n<=20*t;n++)e.push(this.renderElement(n));return e}},{key:"renderBoard",value:function(){for(var t=[],e=1;e<=20;e++)t.push(Object(C.jsxs)("div",{className:"board-row",style:{marginLeft:"400px"},children:[" ",this.renderElements(e),"  "]}));return t}},{key:"render",value:function(){return Object(C.jsxs)("div",{children:[Object(C.jsx)(p.a,{sticky:"top",bg:"dark",variant:"dark",style:{marginBottom:"15px"},children:Object(C.jsxs)(b.a,{children:[Object(C.jsx)(p.a.Brand,{children:" Pathfinding Visualizer"}),Object(C.jsxs)(f.a,{className:"me-auto",children:[Object(C.jsx)(f.a.Link,{onClick:this.showTutorial,children:" Tutorial "}),Object(C.jsxs)(O.a,{title:"Run Pathfinding Algorithms",id:"basic-nav-dropdown",children:[Object(C.jsx)(O.a.Item,{onClick:this.BFS,children:"Breadth First Search"}),Object(C.jsx)(O.a.Item,{onClick:this.dijkstra,children:" Dijkstra's Algorithm"}),Object(C.jsx)(O.a.Item,{onClick:this.a_star,children:" A* search Algorithm"}),Object(C.jsx)(O.a.Item,{onClick:this.greedy_bestfs,children:" Greedy Best-First Search Algorithm"})]}),Object(C.jsxs)(O.a,{title:"Generate Maze",id:"basic-nav-dropdown",children:[Object(C.jsx)(O.a.Item,{onClick:this.generateMazePrim,children:" Randomized Prim's Algorithm"}),Object(C.jsx)(O.a.Item,{onClick:this.generateMazeRandom,children:" Just a random maze"})]}),Object(C.jsx)(f.a.Link,{onClick:this.reset,children:" Reset Board "}),Object(C.jsx)(f.a.Link,{onClick:this.showAlgorithm,children:"  About Our Algorithms "})]})]})}),Object(C.jsxs)("div",{style:{marginBottom:"10px"},children:[Object(C.jsx)("div",{style:{marginLeft:"auto",marginRight:"auto",width:"700px"},children:" Click on a grid to make it a start/end grid. We need two grids to run path finding algorithms. "}),Object(C.jsx)("div",{style:{marginLeft:"auto",marginRight:"auto",width:"500px"},children:" Click twice on a grid to make it an obstacle. "}),Object(C.jsx)("div",{style:{marginLeft:"auto",marginRight:"auto",width:"500px"},children:" Click three times on a grid to reset it to the original grid. "})]}),Object(C.jsxs)("div",{style:{marginLeft:"auto",marginRight:"auto",width:"1000px",marginBottom:"15px"},children:[Object(C.jsx)("button",{style:{background:"#FF99FF"},children:" "})," ",Object(C.jsx)("span",{class:"legend",children:" Start/end grid"}),Object(C.jsx)("button",{style:{background:"#000000"},children:" "})," ",Object(C.jsx)("span",{class:"legend",children:" Obstacle grid"}),Object(C.jsx)("button",{style:{background:"#FF8000"},children:" "})," ",Object(C.jsx)("span",{class:"legend",children:" Explored grid"}),Object(C.jsx)("button",{style:{background:"#FFB266"},children:" "})," ",Object(C.jsx)("span",{class:"legend",children:" Soon-to-be-explored grid"}),Object(C.jsx)("button",{style:{background:"#80FF00"},children:" "})," ",Object(C.jsx)("span",{class:"legend",children:" Shortest-path grid"})]}),Object(C.jsx)(I,{showTutorial:this.state.tutorialIsOpen}),Object(C.jsx)(S,{showWarning:this.state.warningIsOn}),Object(C.jsx)(T,{showAlgorithm:this.state.algorithmIsOn}),this.renderBoard()]})}}]),n}(i.Component);var E=function(){return Object(C.jsx)("div",{className:"App",children:Object(C.jsx)(M,{})})},z=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,79)).then((function(e){var n=e.getCLS,i=e.getFID,s=e.getFCP,a=e.getLCP,r=e.getTTFB;n(t),i(t),s(t),a(t),r(t)}))};r.a.render(Object(C.jsx)(s.a.StrictMode,{children:Object(C.jsx)(E,{})}),document.getElementById("root")),z()}},[[68,1,2]]]);
//# sourceMappingURL=main.c7b0fa0c.chunk.js.map