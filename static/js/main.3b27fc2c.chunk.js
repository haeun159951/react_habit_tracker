(this.webpackJsonptemplate=this.webpackJsonptemplate||[]).push([[0],{15:function(t,e,n){},16:function(t,e,n){},22:function(t,e){},23:function(t,e,n){"use strict";n.r(e);var a=n(1),c=n.n(a),s=n(9),r=n.n(s),i=(n(15),n(6)),o=n(10),l=n(2),h=n(3),u=n(5),b=n(4),d=(n(16),n(0)),j=function(t){Object(u.a)(n,t);var e=Object(b.a)(n);function n(){var t;Object(l.a)(this,n);for(var a=arguments.length,c=new Array(a),s=0;s<a;s++)c[s]=arguments[s];return(t=e.call.apply(e,[this].concat(c))).handleIncrement=function(){t.props.onIncrement(t.props.habit)},t.handleDecrement=function(){t.props.onDecrement(t.props.habit)},t.handleDelete=function(){t.props.onDelete(t.props.habit)},t}return Object(h.a)(n,[{key:"render",value:function(){var t=this.props.habit,e=t.name,n=t.count;return console.log("habit: ".concat(e)),Object(d.jsxs)("li",{className:"habit",children:[Object(d.jsx)("span",{className:"habit-name",children:e}),Object(d.jsx)("span",{className:"habit-count",children:n}),Object(d.jsx)("button",{className:"habit-button habit-increase",onClick:this.handleIncrement,children:Object(d.jsx)("i",{className:"fas fa-plus-square"})}),Object(d.jsx)("button",{className:"habit-button habit-decrease",onClick:this.handleDecrement,children:Object(d.jsx)("i",{className:"fas fa-minus-square"})}),Object(d.jsx)("button",{className:"habit-button habit-delete",onClick:this.handleDelete,children:Object(d.jsx)("i",{className:"fas fa-trash"})})]})}}]),n}(a.PureComponent),p=Object(a.memo)((function(t){var e=c.a.createRef();return Object(d.jsxs)("form",{className:"add-form",onSubmit:function(n){n.preventDefault();var a=e.current.value;a&&t.onAdd(a),e.current.value=""},children:[Object(d.jsx)("input",{className:"input-habit",ref:e,type:"text",placeholder:"Habit"}),Object(d.jsx)("button",{className:"habit-add",children:"Add"})]})})),m=function(t){Object(u.a)(n,t);var e=Object(b.a)(n);function n(){return Object(l.a)(this,n),e.apply(this,arguments)}return Object(h.a)(n,[{key:"render",value:function(){var t=this;return console.log("habits"),Object(d.jsxs)("div",{className:"habits",children:[Object(d.jsx)(p,{onAdd:this.props.onAdd}),Object(d.jsx)("ul",{children:this.props.habits.map((function(e){return Object(d.jsx)(j,{habit:e,onIncrement:t.props.onIncrement,onDecrement:t.props.onDecrement,onDelete:t.props.onDelete},e.id)}))}),Object(d.jsx)("button",{className:"resetBtn",onClick:this.props.onReset,children:"Reset All"})]})}}]),n}(a.PureComponent),f=function(t){Object(u.a)(n,t);var e=Object(b.a)(n);function n(){return Object(l.a)(this,n),e.apply(this,arguments)}return Object(h.a)(n,[{key:"render",value:function(){return console.log("nav"),Object(d.jsxs)("header",{className:"header",children:[Object(d.jsx)("a",{href:"/#",className:"logo",children:Object(d.jsx)("i",{className:"fas fa-leaf"})}),Object(d.jsx)("h1",{className:"title",children:"Habit Tracker"}),Object(d.jsx)("span",{className:"habitCount",children:this.props.totalCount})]})}}]),n}(a.PureComponent),O=function(t){Object(u.a)(n,t);var e=Object(b.a)(n);function n(){var t;Object(l.a)(this,n);for(var a=arguments.length,c=new Array(a),s=0;s<a;s++)c[s]=arguments[s];return(t=e.call.apply(e,[this].concat(c))).state={habits:[{id:1,name:"Reading",count:0},{id:2,name:"Coding",count:0},{id:3,name:"Running",count:0}],totalCount:0,value:""},t.handleAdd=function(e){var n=[].concat(Object(o.a)(t.state.habits),[{id:Date.now(),name:e,count:0}]);t.setState({habits:n})},t.handleReset=function(){var e=t.state.habits.map((function(t){return 0!==t.count?Object(i.a)(Object(i.a)({},t),{},{count:0}):t}));t.setState({habits:e})},t.handleIncrement=function(e){var n=t.state.habits.map((function(t){return t.id===e.id?Object(i.a)(Object(i.a)({},e),{},{count:e.count+1}):t}));t.setState({habits:n})},t.handleDecrement=function(e){var n=t.state.habits.map((function(t){return t.id===e.id&&e.count>0?Object(i.a)(Object(i.a)({},e),{},{count:e.count-1}):t}));t.setState({habits:n})},t.handleDelete=function(e){var n=t.state.habits.filter((function(t){return t.id!==e.id}));t.setState({habits:n})},t}return Object(h.a)(n,[{key:"render",value:function(){return console.log("app"),Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)(f,{totalCount:this.state.habits.filter((function(t){return t.count>0})).length}),Object(d.jsx)(m,{habits:this.state.habits,onIncrement:this.handleIncrement,onDecrement:this.handleDecrement,onDelete:this.handleDelete,onAdd:this.handleAdd,onReset:this.handleReset})]})}}]),n}(a.Component);n(18),n(22);r.a.render(Object(d.jsx)(c.a.StrictMode,{children:Object(d.jsx)(O,{})}),document.getElementById("root"))}},[[23,1,2]]]);
//# sourceMappingURL=main.3b27fc2c.chunk.js.map