(this["webpackJsonpsimple-react-ui"]=this["webpackJsonpsimple-react-ui"]||[]).push([[0],[,,,,,,,,,,,,,,,function(e,t,a){e.exports=a(38)},,,,,,function(e,t,a){},,,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),s=a(9),o=a.n(s),r=(a(20),a(21),a(8)),l=a(2),c=a(3),p=a(5),u=a(4),h=(n.Component,a(7)),d=a(13),m=a(6),g=(a(27),function(e){Object(p.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,i=new Array(n),s=0;s<n;s++)i[s]=arguments[s];return(e=t.call.apply(t,[this].concat(i))).state={icon:void 0},e.handleIcon=function(){"close"===e.props.icon?e.setState({icon:m.l}):"photo"===e.props.icon?e.setState({icon:m.g}):"arrowRight"===e.props.icon?e.setState({icon:m.a}):"exclam"===e.props.icon?e.setState({icon:m.f}):"check"===e.props.icon?e.setState({icon:m.c}):"elipsis"===e.props.icon?e.setState({icon:m.e}):"search"===e.props.icon?e.setState({icon:m.i}):"hamburgerMenu"===e.props.icon?e.setState({icon:m.b}):"userPlus"===e.props.icon?e.setState({icon:m.m}):"signIn"===e.props.icon?e.setState({icon:m.j}):"plus"===e.props.icon?e.setState({icon:m.h}):"tag"===e.props.icon?e.setState({icon:m.k}):"clipboard"===e.props.icon&&e.setState({icon:m.d})},e}return Object(c.a)(a,[{key:"componentDidMount",value:function(){this.handleIcon()}},{key:"render",value:function(){return i.a.createElement("div",{className:"icon-wrapper p-2",style:{display:this.props.display?"flex":"none",backgroundColor:this.props.bgColor,width:"2em",height:"2em"}},i.a.createElement(d.a,{className:"icon effect",icon:this.state.icon,color:this.props.iconColor,style:{fontSize:this.props.size?this.props.size:"1.4em"}}))}}]),a}(n.Component)),f=(a(28),function(e){Object(p.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this)).handleHover=function(){n.setState({hover:!n.state.hover})},n.componentDidMount=function(){n.props.bg&&n.setState({bg:n.props.bg,bgHov:n.props.bgHov}),n.props.fontSize&&n.setState({fontSize:n.props.fontSize})},n.state={display:e.display,hover:!1,bg:"#f8f9fa",bgHov:"#e9ecef",fontSize:"1.2em",icon:e.icon,label:e.label},n}return Object(c.a)(a,[{key:"handlePanelClasses",value:function(){var e=[];return this.props.pill?e[0]="rounded-pill":e[0]="rounded-lg",this.props.shadow&&(e[1]="shadow"),this.props.topRight&&(e[2]="topRight"),e.join(" ")}},{key:"handleLabelClasses",value:function(){var e=[];return this.state.icon?this.props.reverse?e[0]="pr-3":e[0]="pl-3":e[0]="px-3",e.join(" ")}},{key:"render",value:function(){return i.a.createElement(i.a.Fragment,null,i.a.createElement(h.a,{appear:!0,in:this.props.display,unmountOnExit:!0},i.a.createElement("div",{style:{display:this.props.display?"block":"none",width:this.props.width}},i.a.createElement("div",{className:"TB-panel "+this.handlePanelClasses(),style:{background:this.state.hover?this.state.bgHov:this.state.bg,transition:"all 200ms",fontSize:this.state.fontSize,flexDirection:this.props.reverse?"row-reverse":"row",width:this.props.width,justifyContent:"center"},onMouseEnter:this.handleHover,onMouseLeave:this.handleHover,onClick:this.props.click},i.a.createElement("div",{style:{maxWidth:this.props.reveal&&!this.state.hover?"0":"200px",transition:"all 200ms",color:this.props.labelColor,display:this.state.label?"block":"none"}},i.a.createElement("p",{className:"TB-label my-2 "+this.handleLabelClasses()},this.props.label)),i.a.createElement("div",{className:"m-1",style:{display:this.state.icon?"block":"none"}},i.a.createElement(g,{size:this.state.fontSize,display:!0,icon:this.state.icon,iconColor:this.state.hover&&this.props.iconHov?this.props.iconHov:this.props.iconColor}))))))}}]),a}(n.Component)),v=(a(29),function(e){Object(p.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this,e)).handleHover=function(){n.setState({hover:!n.state.hover})},n.handleFocus=function(e){n.setState({focus:e}),!1===e&&n.props.onBlur&&n.props.onBlur()},n.handleInputChange=function(e){n.setState({input:e},(function(){var e=n.sizerRef.current.clientWidth;e<n.props.minWidth?n.setState({inputWidth:n.props.minWidth}):n.setState({inputWidth:e+"px"}),n.props.inputSubmit(n.state.input)}))},n.handleClear=function(){n.setState({input:""}),n.handleInputChange("")},n.componentDidMount=function(){n.props.bg&&n.setState({bg:n.props.bg,bgHov:n.props.bgHov})},n.state={hover:!1,focus:n.props.focusOnMount,preWidth:"",inputWidth:n.props.minWidth,input:"",bg:"#f8f9fa",bgHov:"#e9ecef"},n.inputRef=i.a.createRef(),n.sizerRef=i.a.createRef(),n}return Object(c.a)(a,[{key:"render",value:function(){var e=this;return i.a.createElement(i.a.Fragment,null,i.a.createElement(h.a,{appear:!0,in:this.props.display,unmountOnExit:!0},i.a.createElement("div",{className:"SLInput-box"},i.a.createElement("span",{class:["SLInput-pre lead p-0 rounded-lg",this.state.input?"SLInput-pre-closed":"mr-2"].join(" "),style:{fontSize:this.props.textSize,position:this.props.prepend?"relative":"absolute"}},this.props.prepend),i.a.createElement("div",{className:"SLInput-input-wrapper pl-2 rounded-lg",style:{width:"100%",minWidth:this.props.minWidth,height:this.props.maxHeight,background:this.state.hover?this.state.bgHov:this.state.bg,transition:"all 200ms"},onMouseEnter:this.handleHover,onMouseLeave:this.handleHover},i.a.createElement("input",{ref:this.inputRef,className:"lead SLInput-input p-0 py-2",type:"text",autoFocus:this.props.focusOnMount,onFocus:function(){return e.handleFocus(!0)},onBlur:function(){return e.handleFocus(!1)},value:this.state.input,placeholder:this.props.placeholder,size:4,onChange:function(t){return e.handleInputChange(t.target.value)},style:{width:this.props.shrink?this.state.inputWidth:"100%",fontSize:this.props.textSize,minWidth:"50%"}}),i.a.createElement("div",{ref:this.sizerRef,className:"SLInput-sizer",style:{fontSize:this.props.textSize}},this.state.input),i.a.createElement("div",{className:"SLInput-clear-wrapper"},i.a.createElement(f,{display:this.state.input&&this.props.clear,pill:!0,labelColor:"darkgrey",fontSize:"1.1em",icon:"close",iconColor:"darkgrey",iconHov:"lightcoral",bg:"none",click:this.handleClear}))))))}}]),a}(n.Component)),b=(a(30),function(e){Object(p.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this,e)).startTimer=function(){0===n.state.timer&&n.state.timeout&&n.setState({timer:setInterval(n.tick,1e3)})},n.tick=function(){if(n.state.timeout>0){var e=n.state.timeout-1;n.setState({timeout:e}),0===e&&(clearInterval(n.state.timer),n.setState({display:!1}))}},n.handleHover=function(){n.setState({hover:!n.state.hover})},n.handleToggle=function(){n.setState({display:!1})},n.handleAccept=function(){n.props.accept(),n.handleToggle()},n.state={timeout:e.timeout,timer:0,hover:!1,display:!0,type:e.type,icon:void 0,text:e.text},n}return Object(c.a)(a,[{key:"componentDidMount",value:function(){"danger"===this.state.type&&this.setState({icon:i.a.createElement(g,{display:!0,icon:"exclam",iconColor:"lightcoral",size:"2em"})}),this.state.timeout&&this.startTimer(),this.setState({display:!0})}},{key:"render",value:function(){var e=this;return i.a.createElement(h.a,{appear:!0,in:this.state.display,unmountOnExit:!0},i.a.createElement("div",{className:"TN-box shadow py-2 px-3 m-2",onMouseEnter:this.handleHover,onMouseLeave:this.handleHover,style:{maxWidth:this.state.display?"100%":"0",transition:"all 200ms"}},i.a.createElement("div",{className:"TN-content-box"},this.state.icon,i.a.createElement("div",{className:"TN-content"},i.a.createElement("p",{className:"lead TN-text my-0 mx-3 text-muted"},this.props.text),i.a.createElement("small",{className:"TN-text-small lead my-0 mx-3",style:{display:this.props.smallText?"block":"none"}},this.props.smallText),i.a.createElement("div",{className:"TN-choice mx-3 my-2",style:{display:this.props.cancel||this.props.accept?"flex":"none"}},i.a.createElement(f,{display:!!this.props.cancel,pill:!0,label:"Cancel",labelColor:"#6c757d",fontSize:"1.1em",icon:"close",iconColor:"lightCoral",click:function(t){return e.handleToggle()}}),i.a.createElement(f,{display:!!this.props.accept,pill:!0,label:"Accept",labelColor:"#6c757d",fontSize:"1.1em",icon:"check",iconColor:"#80F0B8",click:function(t){return e.handleAccept()}}))))))}}]),a}(n.Component)),y=(a(31),function(e){Object(p.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,i=new Array(n),s=0;s<n;s++)i[s]=arguments[s];return(e=t.call.apply(t,[this].concat(i))).state={img:e.props.placeholderImg?e.props.placeholderImg:"https://picsum.photos/300/200?blur=2",drag:!1},e.handleDragOver=function(e){e.preventDefault(),e.stopPropagation()},e.handleDrag=function(t,a){t.preventDefault(),t.stopPropagation(),e.setState({drag:a})},e.handleDrop=function(t){t.preventDefault(),t.stopPropagation(),e.setState({drag:!1}),e.props.handleDrop(t.dataTransfer)},e}return Object(c.a)(a,[{key:"render",value:function(){var e=this;return i.a.createElement("div",{className:"DND-Dropzone bg-dark",onDragEnter:function(t){return e.handleDrag(t,!0)},onDragLeave:function(t){return e.handleDrag(t,!1)},onDragOver:function(t){return e.handleDragOver(t)},onDrop:function(t){return e.handleDrop(t)},style:{backgroundImage:"url("+this.state.img+")",width:this.props.width,height:this.props.height}},i.a.createElement("div",{className:"DND-DropCenter"},i.a.createElement("p",{className:"DND-Border",style:{width:this.state.drag?"95%":"65%",height:this.state.drag?"95%":"30%",fontSize:this.state.drag?"3em":"1.2em",borderRadius:this.state.drag?"10px":"50px",margin:"0px",transition:"all 200ms"}},this.state.drag?"Drop!":"Drag and drop your image here")))}}]),a}(n.Component)),E=(a(32),function(e){Object(p.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this,e)).handleDropped=function(e){var t=e.files;if(t.length)n.handleFile(t);else{var a=e.getData("text/html"),i=a&&/\bsrc="?([^"\s]+)"?\s*/.exec(a),s=i&&i[1];s&&n.convertURL(s)}},n.handleURL=function(e){if(e.length>0){var t=e;n.setState({url:t}),null!=t.match(/\.(jpeg|jpg|gif|png|svg)|(data:image)/)?(n.setState({validURL:!0}),n.convertURL(t)):(n.setState({validURL:!1}),n.errorToast("Invalid URL!",t))}},n.handleFile=function(e){e.length<2&&e.length>0?n.validateImage(e[0])&&n.props.returnImage(e[0]):n.errorToast("Error!","Only one file may be uploaded!")},n.handleClipboardPaste=function(){navigator.clipboard.readText().then((function(e){n.handleURL(e)}))},n.errorToast=function(e,t){var a=i.a.createElement(b,{key:n.props.renderToast[1],text:e,type:"danger",smallText:t,timeout:5});n.props.renderToast[0](a)},n.state={url:"",validURL:!1},n.fileInput=i.a.createRef(),n}return Object(c.a)(a,[{key:"validateImage",value:function(e){var t=!0;["image/jpeg","image/png","image/gif"].includes(e.type)||(this.errorToast("Error","Invalid file type!"),t=!1);return e.size>5e6&&(this.errorToast("Maximum upload size exceeded! (Max 5MB)","Your image was "+Math.round(e.size/1e6*10)/10+" MB"),t=!1),t}},{key:"convertURL",value:function(e){var t=this,a=new Image,n=document.createElement("canvas"),i=n.getContext("2d");a.onload=function(){n.width=a.naturalWidth,n.height=a.naturalHeight,i.drawImage(a,0,0),n.toBlob((function(e){t.handleFile([e])}),"image/png")},a.onerror=function(){t.setState({validURL:!1})},a.crossOrigin="",a.src=e}},{key:"render",value:function(){var e=this;return i.a.createElement(i.a.Fragment,null,i.a.createElement(h.a,{appear:!0,in:this.props.display,unmountOnExit:!0},i.a.createElement("div",{id:"uploader",className:"img-uploader-panel bg-white"},i.a.createElement(y,{height:"350px",handleDrop:function(t){return e.handleDropped(t)}}),i.a.createElement("hr",{className:"IU-separator"}),i.a.createElement("p",{className:"lead text-muted mt-3 mb-0 mx-3",style:{display:"inline-block"}},"Alternatively"),i.a.createElement("hr",{className:"IU-separator"}),i.a.createElement("div",{className:"alternate-upload mx-0  p-3"},i.a.createElement("div",{className:"url-input-wrapper mb-2 "},i.a.createElement(v,{display:!0,shrink:!1,textSize:"1.1em",placeholder:"Paste an image URL",clear:!0,inputSubmit:this.handleURL}),i.a.createElement("div",{className:"ml-2"},i.a.createElement(f,{display:!0,pill:!0,labelColor:"#6c757d",fontSize:"1.1em",icon:"clipboard",iconColor:"#6c757d",reveal:!0,click:this.handleClipboardPaste}))),i.a.createElement("input",{ref:this.fileInput,accept:"image/*",type:"file",hidden:!0,onChange:function(t){return e.handleFile(e.fileInput.current.files)}}),i.a.createElement(f,{display:!0,width:"100%",pill:!0,label:"Choose photo",labelColor:"#6c757d",fontSize:"1.1em",icon:"photo",iconColor:"#6c757d",click:function(){return e.fileInput.current.click()}})))))}}]),a}(n.Component)),S=(a(33),function(e){Object(p.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this,e)).handleInputChange=function(e){n.setState({input:e},(function(){var t=Math.ceil(n.sizerRef.current.clientWidth/n.inputRef.current.clientWidth)+e.split(/\r\n|\r|\n/).length;t>=n.props.maxRows?n.setState({lineCount:n.props.maxRows}):n.setState({lineCount:t}),n.props.max&&n.handleCounter(e),n.props.inputSubmit(n.state.input)}))},n.handleCounter=function(e){var t;t=e.length<=n.props.max?e.length+" / "+n.props.max+" character limit.":"Too long!",n.setState({counter:t})},n.componentDidMount=function(){n.props.max&&n.setState({counter:"0 / "+n.props.max+" character limit."})},n.state={input:"",inputWidth:"",placeholder:e.placeholder,lineCount:1,counter:""},n.sizerRef=i.a.createRef(),n.inputRef=i.a.createRef(),n}return Object(c.a)(a,[{key:"render",value:function(){var e=this;return i.a.createElement("div",{className:"p-4",style:{textAlign:"right"}},i.a.createElement("div",{className:"MLI-box lead rounded-lg",style:{borderColor:this.state.input.length>this.props.max?"lightcoral":"blue"}},i.a.createElement("textarea",{ref:this.inputRef,className:"MLI-input lead p-2",placeholder:this.state.placeholder,rows:this.state.lineCount,onChange:function(t){return e.handleInputChange(t.target.value)},style:{fontSize:this.props.textSize}},this.state.input),i.a.createElement("p",{ref:this.sizerRef,className:"MLI-inputSizer lead",style:{visibility:"hidden",fontSize:this.props.textSize}},this.state.input)),i.a.createElement("small",{className:"MLI-counter lead my-1"},this.state.counter))}}]),a}(n.Component)),x=(a(34),function(e){Object(p.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this,e)).handleHover=function(){n.setState({hov:!n.state.hov})},n.toggleEdit=function(){!n.state.tagData.length>0&&n.setState({edit:!n.state.edit})},n.handleInput=function(e){e||n.setState({display:!1}),n.props.inputSubmit(n.props.id,e),n.setState({tagData:e},(function(){}))},n.state={display:!0,tagData:"",hov:!1,edit:!1},n}return Object(c.a)(a,[{key:"render",value:function(){var e=this;return i.a.createElement(i.a.Fragment,null,i.a.createElement(h.a,{in:this.state.display,appear:!0,unmountOnExit:!0},i.a.createElement("div",{className:"TG-box shadow px-2 my-2 mr-4 ml-0 test",style:{background:this.state.hov?"#e9ecef":"#f8f9fa",transition:"all 200ms"},onMouseEnter:this.handleHover,onMouseLeave:this.handleHover},i.a.createElement("div",{className:"",style:{display:this.state.edit?"none":"block"}},i.a.createElement(f,{display:!this.state.edit,reverse:!0,label:"Tag",fontSize:"1.2em",icon:"plus",iconColor:"#6c757d",labelColor:"#6c757d",bg:"none",bgHov:"none",click:this.toggleEdit})),i.a.createElement("div",{className:"",style:{display:this.state.edit?"inline-block":"none"}},i.a.createElement(v,{display:this.state.edit,shrink:!0,textSize:"1.1em",maxHeight:"50px",minWidth:"84px",clear:!0,bg:"none",bgHov:"none",focusOnMount:!0,onBlur:this.toggleEdit,inputSubmit:function(t){return e.handleInput(t)}})))))}}]),a}(n.Component)),C=function(e){Object(p.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this,e)).addTagComponent=function(){n.setState({tagComponents:[].concat(Object(r.a)(n.state.tagComponents),[i.a.createElement(x,{key:n.state.tagIdHandler,id:n.state.tagIdHandler,inputSubmit:n.handleTagInput})])},(function(){n.setState({tagData:[].concat(Object(r.a)(n.state.tagData),[[n.state.tagIdHandler,""]]),tagIdHandler:n.state.tagIdHandler+1})}))},n.handleTagInput=function(e,t){for(var a=n.state.tagData,i=0;i<a.length;i++)a[i][0]===e&&(0===t.length?a.splice(i,1):a[i][1]=t);""!==a[a.length-1][1]&&n.state.tagData.length<n.state.maxTags&&n.addTagComponent(),n.setState({tagData:a});var s=a.map((function(e){return e[1]})).filter((function(e){return e}));console.log(s),n.props.inputSubmit(s)},n.componentDidMount=function(){n.addTagComponent()},n.state={tagComponents:[],tagData:[],tagIdHandler:0,maxTags:n.props.maxTags},n}return Object(c.a)(a,[{key:"render",value:function(){return i.a.createElement("div",null,this.state.tagComponents)}}]),a}(n.Component),O=(a(35),function(e){Object(p.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,i=new Array(n),s=0;s<n;s++)i[s]=arguments[s];return(e=t.call.apply(t,[this].concat(i))).state={hover:!1,toggled:e.props.default,size:e.props.size?e.props.size:"25"},e.handleHover=function(){e.setState({hover:!e.state.hover})},e.handleClick=function(){e.setState({toggled:!e.state.toggled},(function(){e.props.inputSubmit&&e.props.inputSubmit(e.state.toggled)}))},e}return Object(c.a)(a,[{key:"render",value:function(){return i.a.createElement(i.a.Fragment,null,i.a.createElement("div",{className:"TS-Wrapper bg-light p-3 rounded-pill",style:{maxWidth:this.props.maxWidth?this.props.maxWidth:"200px"}},i.a.createElement("p",{className:"TS-Label lead text-muted mr-2",style:{textAlign:"left",position:this.props.label?"relative":"absolute"}},this.props.label,i.a.createElement("span",{className:"TS-LabelToggle lead",style:{color:this.state.toggled?"#80F0B8":"lightcoral",transition:"all 200ms"}},this.state.toggled?this.props.label1:this.props.lable0)),i.a.createElement("div",{className:"TS-Box rounded-pill",style:{transition:"all 200ms",background:this.state.toggled?"#80F0B8":"lightcoral"},onClick:this.handleClick},i.a.createElement("div",{style:{margin:.2*this.state.size+"px",width:2.2*this.state.size}},i.a.createElement("div",{className:"TS-Thumb rounded-pill shadow",style:{background:this.state.hover?"#e9ecef":"white",transition:"all 100ms ease-in",width:this.state.size+"px",height:this.state.size+"px",marginLeft:this.state.toggled?1.2*this.state.size+"px":"0",marginRight:this.state.toggled?"0":1.2*this.state.size+"px"},onMouseEnter:this.handleHover,onMouseLeave:this.handleHover})))))}}]),a}(n.Component)),k=function(e){Object(p.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this)).state={previewBlob:""},n.previewRef=i.a.createRef(),n}return Object(c.a)(a,[{key:"handleImgPreview",value:function(){console.log(this.props.img);var e=URL.createObjectURL(this.props.img),t=document.createElement("img");t.src=e,t.id="previewImg",this.previewRef.current.prepend(t)}},{key:"componentDidUpdate",value:function(){this.state.previewBlob!==this.props.img&&(this.setState({previewBlob:this.props.img}),this.handleImgPreview())}},{key:"render",value:function(){return i.a.createElement(h.a,{appear:!1,in:this.props.display,unmountOnExit:!0},i.a.createElement("div",{className:"step2-panel container-fluid",style:{display:this.state.imageUploader?"none":"inline-block"}},i.a.createElement("div",{className:"row mb-2"},i.a.createElement("div",{className:"col-12 col-md-8 mb-2",style:{display:"inline-block"}},i.a.createElement("small",{className:"lead text-muted pb-4"},"Enter your post title below."),i.a.createElement(v,{display:!0,shrink:!1,textSize:"2em",prepend:"Title:",clear:!0,focusOnMount:!0,inputSubmit:this.props.title}))),i.a.createElement("div",{className:"row"},i.a.createElement("div",{className:"col-12 col-md-8 mb-4"},i.a.createElement("div",{ref:this.previewRef,className:"imgViewBox"},i.a.createElement(S,{textSize:"1em",placeholder:"Add an image description!",max:100,maxRows:10,inputSubmit:this.props.description}))),i.a.createElement("div",{className:"col-12 col-md-4"},i.a.createElement("div",{className:"post-options"},i.a.createElement("p",{className:"lead text-muted mb-2"},"Post Visibility:"),i.a.createElement(O,{label:"Visible to: ",maxWidth:"800px",default:!0,lable0:"Only me",label1:"Community"}),i.a.createElement("p",{className:"lead text-muted mt-3 mb-0"},"Add Tags:"),i.a.createElement("div",null,i.a.createElement(C,{maxTags:5,inputSubmit:this.props.tags})))))))}}]),a}(n.Component),I=(a(36),function(e){Object(p.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this,e)).renderDisgardToast=function(){var e=i.a.createElement(b,{key:n.props.renderToast[1],text:"Disgard Post?",type:"danger",smallText:"Your post will not be saved",cancel:!0,timeout:20,accept:function(){return n.props.toggle()}});n.props.renderToast[0](e)},n.handleImageInput=function(e){console.log(e),n.setState({imgBlob:e,imageUploader:!1,postConfig:!0},(function(){}))},n.handleTitleInput=function(e){n.setState({title:e})},n.handleDescriptionInput=function(e){n.setState({description:e})},n.handleTagsInput=function(e){n.setState({tags:e})},n.state={imageUploader:!0,postConfig:!1,imgBlob:"",description:"",title:"",tags:[]},n}return Object(c.a)(a,[{key:"render",value:function(){var e=this;return i.a.createElement(i.a.Fragment,null,i.a.createElement(h.a,{appear:!0,in:this.props.display,unmountOnExit:!0},i.a.createElement("div",{className:"uploader-wrapper"},i.a.createElement("div",{style:{display:this.state.imageUploader?"block":"none"}},i.a.createElement("h1",{className:"lead title mb-0"},"New Post"),i.a.createElement("p",{className:"lead text-muted mb-1"},"Upload an image to get started."),i.a.createElement("div",{style:{position:"relative"}},i.a.createElement(E,{display:this.state.imageUploader,returnImage:function(t){return e.handleImageInput(t)},renderToast:this.props.renderToast}),i.a.createElement(f,{display:!0,pill:!0,label:"Cancel Upload?",labelColor:"#6c757d",shadow:!0,fontSize:"1.1em",icon:"close",iconColor:"lightCoral",reveal:!0,topRight:!0,click:this.renderDisgardToast}))),i.a.createElement(k,{display:this.state.postConfig,img:this.state.imgBlob,title:this.handleTitleInput,description:this.handleDescriptionInput,tags:this.handleTagsInput}))))}}]),a}(n.Component)),j=(a(37),function(e){Object(p.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this,e)).renderUploader=function(){n.setState({uploader:!n.state.uploader})},n.renderToast=function(e){n.setState({toasts:[e].concat(Object(r.a)(n.state.toasts))})},n.state={apiResponse:"",uploader:!0,toasts:[]},n}return Object(c.a)(a,[{key:"callAPI",value:function(){var e=this;fetch("http://localhost:9000/testAPI").then((function(e){return e.text()})).then((function(t){return e.setState({apiResponse:t})}))}},{key:"componentWillMount",value:function(){this.callAPI()}},{key:"render",value:function(){var e=this;return i.a.createElement("div",{className:"App bg-white"},i.a.createElement("div",{style:{position:"absolute"}},this.state.toasts.slice(0,1)),i.a.createElement(I,{display:this.state.uploader,toggle:this.renderUploader,renderToast:[function(t){return e.renderToast(t)},this.state.toasts.length]}),i.a.createElement("p",null,this.state.apiResponse))}}]),a}(n.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(i.a.createElement(i.a.StrictMode,null,i.a.createElement(j,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[15,1,2]]]);
//# sourceMappingURL=main.b84ea1a0.chunk.js.map