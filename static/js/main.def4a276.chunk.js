(window.webpackJsonproboapp=window.webpackJsonproboapp||[]).push([[0],[,,,,,,,,function(e,t,a){e.exports=a(16)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(7),o=a.n(c),s=(a(13),a(1)),i=a(2),l=a(4),u=a(3),m=a(5),h=function(e){return r.a.createElement("div",{className:"col-sm-4 pd-card"},r.a.createElement("div",{className:"card"},r.a.createElement("img",{className:"img-fluid",src:"https://robohash.org/".concat(e.cardlist.id,"?set=set2"),alt:""}),r.a.createElement("div",{className:"card-body"},r.a.createElement("h5",null,e.cardlist.name)),r.a.createElement("ul",{className:"list-group list-group-flush"},r.a.createElement("li",{className:"list-group-item"},e.cardlist.email),r.a.createElement("li",{className:"list-group-item"},e.cardlist.username))))},d=(a(14),function(e){function t(){return Object(s.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return this.props.Robots.map(function(e){return r.a.createElement(h,{key:e.id,cardlist:e})})}}]),t}(n.Component)),p=function(e){return r.a.createElement("input",{type:"search",placeholder:"Search a Robot",className:"search__input",onChange:e.PropSearch})},f=(a(15),function(e){function t(){var e;return Object(s.a)(this,t),(e=Object(l.a)(this,Object(u.a)(t).call(this))).fetchApi=function(){fetch("https://jsonplaceholder.typicode.com/users/").then(function(t){return t.json().then(function(t){return e.setState({Robots:t})})})},e.SearchField=function(t){e.setState({SearchRobot:t.target.value})},e.state={Robots:[],SearchRobot:""},e}return Object(m.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){this.fetchApi()}},{key:"render",value:function(){var e=this.state,t=e.Robots,a=e.SearchRobot,n=t.filter(function(e){return e.name.toLowerCase().includes(a.toLowerCase())});return r.a.createElement("div",{className:"App "},r.a.createElement("div",{className:"container-fluid remove-pd"},r.a.createElement("div",{className:"header"},r.a.createElement("h1",null," Robots App")),r.a.createElement(p,{PropSearch:this.SearchField}),r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement(d,{Robots:n})))))}}]),t}(n.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(f,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}],[[8,1,2]]]);
//# sourceMappingURL=main.def4a276.chunk.js.map