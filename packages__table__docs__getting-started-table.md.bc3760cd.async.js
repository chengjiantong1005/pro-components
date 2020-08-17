(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[85],{dBz3:function(e,t,a){"use strict";a.r(t);var n=a("55Ip"),l=a("q1tI"),r=a.n(l),c=(a("B2uJ"),a("+su7"),a("qOys")),m=a.n(c);a("5Yjd");t["default"]=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"markdown"},r.a.createElement("h1",{id:"protable---\u5feb\u901f\u5f00\u59cb"},r.a.createElement("a",{"aria-hidden":"true",href:"#protable---\u5feb\u901f\u5f00\u59cb"},r.a.createElement("span",{className:"icon icon-link"})),"ProTable - \u5feb\u901f\u5f00\u59cb"),r.a.createElement("p",null,"ProTable \u7684\u8bde\u751f\u662f\u4e3a\u4e86\u89e3\u51b3\u9879\u76ee\u4e2d\u9700\u8981\u5199\u5f88\u591a table \u7684\u6837\u677f\u4ee3\u7801\u7684\u95ee\u9898\uff0c\u6240\u4ee5\u5728\u5176\u4e2d\u505a\u4e86\u5c01\u88c5\u4e86\u5f88\u591a\u5e38\u7528\u7684\u903b\u8f91\u3002\u8fd9\u4e9b\u5c01\u88c5\u53ef\u4ee5\u7b80\u5355\u7684\u5206\u7c7b\u4e3a\u9884\u8bbe\u884c\u4e3a\u4e0e\u9884\u8bbe\u903b\u8f91\u3002"),r.a.createElement("p",null,"\u5728 react \u7684\u4e2d\u5199\u4e00\u4e2a table \u514d\u4e0d\u4e86\u9700\u8981\u5b9a\u4e49\u4e00\u4e9b state\uff0c\u6bd4\u5982 page\uff0cpageNumber\uff0cpageSize\u3002\u5982\u679c\u4f7f\u7528 dva \u7b49\u6570\u636e\u6d41\u65b9\u6848\u53ef\u80fd\u8fd8\u9700\u8981\u5199\u5f88\u591a\u6837\u677f\u4ee3\u7801\u6765\u8bf7\u6c42\u6570\u636e\u3002\u4f46\u662f\u5f88\u591a\u65f6\u5019\u8fd9\u4e9b\u884c\u4e3a\u662f\u9ad8\u5ea6\u96f7\u540c\u7684\uff0c\u6240\u4ee5 ProTable \u9ed8\u8ba4\u5c01\u88c5\u4e86\u8bf7\u6c42\u7f51\u7edc\uff0c\u7ffb\u9875\uff0c\u641c\u7d22\u548c\u7b5b\u9009\u7684\u903b\u8f91\u3002"),r.a.createElement("h2",{id:"\u8bf7\u6c42\u6570\u636e"},r.a.createElement("a",{"aria-hidden":"true",href:"#\u8bf7\u6c42\u6570\u636e"},r.a.createElement("span",{className:"icon icon-link"})),"\u8bf7\u6c42\u6570\u636e"),r.a.createElement("p",null,"request \u4e2d\u5c01\u88c5\u4e86\u8bf7\u6c42\u7f51\u7edc\u7684\u884c\u4e3a\uff0cProTable \u4f1a\u5c06 props.params \u4e2d\u7684\u6570\u636e\u9ed8\u8ba4\u5e26\u5165\u5230\u8bf7\u6c42\u4e2d\uff0c\u5982\u679c\u63a5\u53e3\u6070\u597d\u4e0e\u6211\u4eec\u7684\u5b9a\u4e49\u76f8\u540c\uff0c\u5b9e\u73b0\u4e00\u4e2a\u67e5\u8be2\u4f1a\u975e\u5e38\u7b80\u5355\u3002"),r.a.createElement(m.a,{code:"import request from 'umi-request';\n\nconst fetchData = (params, sort, filter) =>\n  request<{\n    data: T[];\n  }>('https://proapi.azurewebsites.net/github/issues', {\n    params,\n    sort,\n    filter,\n  });\n\nconst keyWords = \"Ant Design\"\n\n<ProTable<T,U> params={{ keyWords }} request={fetchData} />;\n",lang:"tsx"}),r.a.createElement("p",null,"\u6211\u4eec\u7ea6\u5b9a request \u62e5\u6709\u4e09\u4e2a\u53c2\u6570\uff0c\u7b2c\u4e00\u4e2a ",r.a.createElement("code",null,"params")," \u4f1a\u81ea\u5e26 ",r.a.createElement("code",null,"pageSize")," \u548c ",r.a.createElement("code",null,"current"),",\u5e76\u4e14\u5c06 props \u4e2d\u7684 ",r.a.createElement("code",null,"params")," \u4e5f\u4f1a\u5e26\u5165\u5176\u4e2d\uff0c\u7b2c\u4e8c\u4e2a\u53c2\u6570 ",r.a.createElement("code",null,"sort")," \u7528\u4e0e\u6392\u5e8f\uff0c\u7b2c\u4e09\u4e2a\u53c2\u6570 ",r.a.createElement("code",null,"filter")," \u7528\u4e8e\u591a\u9009\u3002\u4ed6\u4eec\u7684\u7c7b\u578b\u5206\u522b\u5982\u4e0b:"),r.a.createElement(m.a,{code:"(\n  params: U & {\n    pageSize?: number;\n    current?: number;\n  },\n  sort: {\n    [key: string]: 'ascend' | 'descend';\n  },\n  filter: { [key: string]: React.ReactText[] },\n) => RequestData;\n",lang:"tsx"}),r.a.createElement("blockquote",null,r.a.createElement("p",null,"ProTable \u4f1a\u5c06\u7b2c\u4e8c\u4e2a\u6cdb\u578b\u8ba4\u4e3a\u662f ",r.a.createElement("code",null,"params")," \u7684\u7c7b\u578b\uff0c\u4fdd\u8bc1\u5404\u4e2a\u73af\u8282\u90fd\u8981\u5b8c\u5584\u7684\u7c7b\u578b\u652f\u6301\u3002")),r.a.createElement("p",null,"\u5bf9\u4e0e\u8bf7\u6c42\u56de\u6765\u7684\u7ed3\u679c\u7684 ProTable \u4e5f\u6709\u4e00\u4e9b\u7ea6\u5b9a\uff0c\u7c7b\u578b\u5982\u4e0b\uff1a"),r.a.createElement(m.a,{code:"interface RequestData {\n  data: Datum[];\n  success: boolean;\n  total: number;\n}\n",lang:"tsx"}),r.a.createElement("p",null,"\u5982\u679c\u6211\u4eec\u6070\u5de7\u5c5e\u6027\u4e0d\u540c\uff0c\u4e5f\u662f\u53ef\u4ee5\u505a\u81ea\u5b9a\u4e49\u7684\u3002request \u53ea\u8981\u662f\u4e00\u4e2a ",r.a.createElement("code",null,"Promise<RequestData>")," \u63a5\u53e3\uff0c\u540c\u6837\u662f\u4e0a\u9762\u7684\u4ee3\u7801,\u6211\u4eec\u53ef\u4ee5\u81ea\u5b9a\u4e49\u53c2\u6570\u548c\u8fd4\u56de\u503c\u3002\u770b\u8d77\u6765\u5c31\u50cf\u8fd9\u6837\uff1a"),r.a.createElement(m.a,{code:"const fetchData =async (params, sort, filter) =>{\n  const msg =await  request<{\n    data: T[];\n  }>('https://proapi.azurewebsites.net/github/issues', {\n    params:{\n      pageNum:params.current,\n      size:params.pageSize\n    },\n    sort,\n    filter,\n  });\n  return {\n    data:msg.list,\n    total:msg.sum,\n    success:!msg.errorCode\n  }\n}\n\nconst keyWords = \"Ant Design\"\n\n<ProTable<T,U> params={{ keyWords }} request={fetchData} />;\n",lang:"tsx"}),r.a.createElement("h2",{id:"\u5217\u914d\u7f6e"},r.a.createElement("a",{"aria-hidden":"true",href:"#\u5217\u914d\u7f6e"},r.a.createElement("span",{className:"icon icon-link"})),"\u5217\u914d\u7f6e"),r.a.createElement("p",null,"\u5217\u914d\u7f6e\u590d\u6742\u628a\u6570\u636e\u6620\u5c04\u6210\u4e3a\u5177\u4f53\u7684 dom, ProTable \u5728 antd \u7684\u57fa\u7840\u4e0a\u8fdb\u884c\u4e86\u4e00\u4e9b\u5c01\u88c5\uff0c\u652f\u6301\u4e86\u4e00\u4e9b\u9ed8\u8ba4\u7684\u884c\u4e3a\u4f5c\u4e3a render \u7684\u8bed\u6cd5\u7cd6\uff0c\u6211\u4eec\u53ef\u4ee5\u5728\u5217\u4e2d\u914d\u7f6e valueType \u914d\u7f6e\u4e00\u4e2a\u5b57\u7b26\u4e32\u3002\u73b0\u5728\u652f\u6301\u7684\u503c\u5982\u4e0b\uff1a"),r.a.createElement("blockquote",null,r.a.createElement("p",null,"\u5982\u679c\u4f60\u7684\u503c\u7684\u4e0d\u662f\u4e0b\u9762\u7684\u7c7b\u578b\uff0c\u53ef\u4ee5\u7528 renderText \u6765\u8fdb\u884c\u4fee\u6539\uff0crender \u4f1a\u8986\u76d6\u6389 valueType\u3002")),r.a.createElement("table",null,r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null,"\u7c7b\u578b"),r.a.createElement("th",null,"\u63cf\u8ff0"),r.a.createElement("th",null,"\u793a\u4f8b"))),r.a.createElement("tbody",null,r.a.createElement("tr",null,r.a.createElement("td",null,"money"),r.a.createElement("td",null,"\u8f6c\u5316\u503c\u4e3a\u91d1\u989d"),r.a.createElement("td",null,"\xa510,000.26")),r.a.createElement("tr",null,r.a.createElement("td",null,"date"),r.a.createElement("td",null,"\u65e5\u671f"),r.a.createElement("td",null,"2019-11-16")),r.a.createElement("tr",null,r.a.createElement("td",null,"dateRange"),r.a.createElement("td",null,"\u65e5\u671f\u533a\u95f4"),r.a.createElement("td",null,"2019-11-16 2019-11-18")),r.a.createElement("tr",null,r.a.createElement("td",null,"dateTime"),r.a.createElement("td",null,"\u65e5\u671f\u548c\u65f6\u95f4"),r.a.createElement("td",null,"2019-11-16 12:50:00")),r.a.createElement("tr",null,r.a.createElement("td",null,"dateTimeRange"),r.a.createElement("td",null,"\u65e5\u671f\u548c\u65f6\u95f4\u533a\u95f4"),r.a.createElement("td",null,"2019-11-16 12:50:00 2019-11-18 12:50:00")),r.a.createElement("tr",null,r.a.createElement("td",null,"time"),r.a.createElement("td",null,"\u65f6\u95f4"),r.a.createElement("td",null,"12:50:00")),r.a.createElement("tr",null,r.a.createElement("td",null,"option"),r.a.createElement("td",null,"\u64cd\u4f5c\u9879\uff0c\u4f1a\u81ea\u52a8\u589e\u52a0 marginRight\uff0c\u53ea\u652f\u6301\u4e00\u4e2a\u6570\u7ec4,\u8868\u5355\u4e2d\u4f1a\u81ea\u52a8\u5ffd\u7565"),r.a.createElement("td",null,r.a.createElement("code",null,"[<a>\u64cd\u4f5ca</a>,<a>\u64cd\u4f5cb</a>]"))),r.a.createElement("tr",null,r.a.createElement("td",null,"text"),r.a.createElement("td",null,"\u9ed8\u8ba4\u503c\uff0c\u4e0d\u505a\u4efb\u4f55\u5904\u7406"),r.a.createElement("td",null,"-")),r.a.createElement("tr",null,r.a.createElement("td",null,"textarea"),r.a.createElement("td",null,"\u4e0e text \u76f8\u540c\uff0c form \u8f6c\u5316\u65f6\u4f1a\u8f6c\u4e3a textarea \u7ec4\u4ef6"),r.a.createElement("td",null,"-")),r.a.createElement("tr",null,r.a.createElement("td",null,"index"),r.a.createElement("td",null,"\u5e8f\u53f7\u5217"),r.a.createElement("td",null,"-")),r.a.createElement("tr",null,r.a.createElement("td",null,"indexBorder"),r.a.createElement("td",null,"\u5e26 border \u7684\u5e8f\u53f7\u5217"),r.a.createElement("td",null,"-")),r.a.createElement("tr",null,r.a.createElement("td",null,"progress"),r.a.createElement("td",null,"\u8fdb\u5ea6\u6761"),r.a.createElement("td",null,"-")),r.a.createElement("tr",null,r.a.createElement("td",null,"digit"),r.a.createElement("td",null,r.a.createElement("a",{href:"https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat",target:"_blank",rel:"noopener noreferrer"},"\u683c\u5f0f\u5316",r.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg","aria-hidden":!0,x:"0px",y:"0px",viewBox:"0 0 100 100",width:"15",height:"15",className:"__dumi-default-external-link-icon"},r.a.createElement("path",{fill:"currentColor",d:"M18.8,85.1h56l0,0c2.2,0,4-1.8,4-4v-32h-8v28h-48v-48h28v-8h-32l0,0c-2.2,0-4,1.8-4,4v56C14.8,83.3,16.6,85.1,18.8,85.1z"}),r.a.createElement("polygon",{fill:"currentColor",points:"45.7,48.7 51.3,54.3 77.2,28.5 77.2,37.2 85.2,37.2 85.2,14.9 62.8,14.9 62.8,22.9 71.5,22.9"}))),"\u6570\u5b57\u5c55\u793a\uff0cform \u8f6c\u5316\u65f6\u4f1a\u8f6c\u4e3a inputNumber"),r.a.createElement("td",null,"-")))),r.a.createElement("p",null,"valueType \u8fd8\u4f1a\u5f71\u54cd\u67e5\u8be2\u8868\u5355\u7684\u751f\u6210,\u4e0d\u540c\u7684 valueType \u5bf9\u5e94\u4e0d\u540c\u7684 antd \u7ec4\u4ef6\uff0c\u5bf9\u5e94\u5173\u7cfb\u5982\u4e0b\uff1a"),r.a.createElement("table",null,r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null,"\u7c7b\u578b"),r.a.createElement("th",null,"\u5bf9\u5e94\u7684\u7ec4\u4ef6"))),r.a.createElement("tbody",null,r.a.createElement("tr",null,r.a.createElement("td",null,"text"),r.a.createElement("td",null,r.a.createElement("a",{href:"https://ant.design/components/input-cn/",target:"_blank",rel:"noopener noreferrer"},"Input",r.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg","aria-hidden":!0,x:"0px",y:"0px",viewBox:"0 0 100 100",width:"15",height:"15",className:"__dumi-default-external-link-icon"},r.a.createElement("path",{fill:"currentColor",d:"M18.8,85.1h56l0,0c2.2,0,4-1.8,4-4v-32h-8v28h-48v-48h28v-8h-32l0,0c-2.2,0-4,1.8-4,4v56C14.8,83.3,16.6,85.1,18.8,85.1z"}),r.a.createElement("polygon",{fill:"currentColor",points:"45.7,48.7 51.3,54.3 77.2,28.5 77.2,37.2 85.2,37.2 85.2,14.9 62.8,14.9 62.8,22.9 71.5,22.9"}))))),r.a.createElement("tr",null,r.a.createElement("td",null,"textarea"),r.a.createElement("td",null,r.a.createElement("a",{href:"https://ant.design/components/input-cn/#components-input-demo-textarea",target:"_blank",rel:"noopener noreferrer"},"Input.TextArea",r.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg","aria-hidden":!0,x:"0px",y:"0px",viewBox:"0 0 100 100",width:"15",height:"15",className:"__dumi-default-external-link-icon"},r.a.createElement("path",{fill:"currentColor",d:"M18.8,85.1h56l0,0c2.2,0,4-1.8,4-4v-32h-8v28h-48v-48h28v-8h-32l0,0c-2.2,0-4,1.8-4,4v56C14.8,83.3,16.6,85.1,18.8,85.1z"}),r.a.createElement("polygon",{fill:"currentColor",points:"45.7,48.7 51.3,54.3 77.2,28.5 77.2,37.2 85.2,37.2 85.2,14.9 62.8,14.9 62.8,22.9 71.5,22.9"}))))),r.a.createElement("tr",null,r.a.createElement("td",null,"date"),r.a.createElement("td",null,r.a.createElement("a",{href:"https://ant.design/components/date-picker-cn/",target:"_blank",rel:"noopener noreferrer"},"DatePicker",r.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg","aria-hidden":!0,x:"0px",y:"0px",viewBox:"0 0 100 100",width:"15",height:"15",className:"__dumi-default-external-link-icon"},r.a.createElement("path",{fill:"currentColor",d:"M18.8,85.1h56l0,0c2.2,0,4-1.8,4-4v-32h-8v28h-48v-48h28v-8h-32l0,0c-2.2,0-4,1.8-4,4v56C14.8,83.3,16.6,85.1,18.8,85.1z"}),r.a.createElement("polygon",{fill:"currentColor",points:"45.7,48.7 51.3,54.3 77.2,28.5 77.2,37.2 85.2,37.2 85.2,14.9 62.8,14.9 62.8,22.9 71.5,22.9"}))))),r.a.createElement("tr",null,r.a.createElement("td",null,"dateTime"),r.a.createElement("td",null,r.a.createElement("a",{href:"https://ant.design/components/date-picker-cn/#components-date-picker-demo-time",target:"_blank",rel:"noopener noreferrer"},"DatePicker",r.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg","aria-hidden":!0,x:"0px",y:"0px",viewBox:"0 0 100 100",width:"15",height:"15",className:"__dumi-default-external-link-icon"},r.a.createElement("path",{fill:"currentColor",d:"M18.8,85.1h56l0,0c2.2,0,4-1.8,4-4v-32h-8v28h-48v-48h28v-8h-32l0,0c-2.2,0-4,1.8-4,4v56C14.8,83.3,16.6,85.1,18.8,85.1z"}),r.a.createElement("polygon",{fill:"currentColor",points:"45.7,48.7 51.3,54.3 77.2,28.5 77.2,37.2 85.2,37.2 85.2,14.9 62.8,14.9 62.8,22.9 71.5,22.9"}))))),r.a.createElement("tr",null,r.a.createElement("td",null,"time"),r.a.createElement("td",null,r.a.createElement("a",{href:"https://ant.design/components/time-picker-cn/",target:"_blank",rel:"noopener noreferrer"},"TimePicker",r.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg","aria-hidden":!0,x:"0px",y:"0px",viewBox:"0 0 100 100",width:"15",height:"15",className:"__dumi-default-external-link-icon"},r.a.createElement("path",{fill:"currentColor",d:"M18.8,85.1h56l0,0c2.2,0,4-1.8,4-4v-32h-8v28h-48v-48h28v-8h-32l0,0c-2.2,0-4,1.8-4,4v56C14.8,83.3,16.6,85.1,18.8,85.1z"}),r.a.createElement("polygon",{fill:"currentColor",points:"45.7,48.7 51.3,54.3 77.2,28.5 77.2,37.2 85.2,37.2 85.2,14.9 62.8,14.9 62.8,22.9 71.5,22.9"}))))),r.a.createElement("tr",null,r.a.createElement("td",null,"dateTimeRange"),r.a.createElement("td",null,r.a.createElement("a",{href:"https://ant.design/components/time-picker-cn/#components-time-picker-demo-range-picker",target:"_blank",rel:"noopener noreferrer"},"RangePicker",r.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg","aria-hidden":!0,x:"0px",y:"0px",viewBox:"0 0 100 100",width:"15",height:"15",className:"__dumi-default-external-link-icon"},r.a.createElement("path",{fill:"currentColor",d:"M18.8,85.1h56l0,0c2.2,0,4-1.8,4-4v-32h-8v28h-48v-48h28v-8h-32l0,0c-2.2,0-4,1.8-4,4v56C14.8,83.3,16.6,85.1,18.8,85.1z"}),r.a.createElement("polygon",{fill:"currentColor",points:"45.7,48.7 51.3,54.3 77.2,28.5 77.2,37.2 85.2,37.2 85.2,14.9 62.8,14.9 62.8,22.9 71.5,22.9"}))))),r.a.createElement("tr",null,r.a.createElement("td",null,"dateRange"),r.a.createElement("td",null,r.a.createElement("a",{href:"https://ant.design/components/time-picker-cn/#components-time-picker-demo-range-picker",target:"_blank",rel:"noopener noreferrer"},"RangePicker",r.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg","aria-hidden":!0,x:"0px",y:"0px",viewBox:"0 0 100 100",width:"15",height:"15",className:"__dumi-default-external-link-icon"},r.a.createElement("path",{fill:"currentColor",d:"M18.8,85.1h56l0,0c2.2,0,4-1.8,4-4v-32h-8v28h-48v-48h28v-8h-32l0,0c-2.2,0-4,1.8-4,4v56C14.8,83.3,16.6,85.1,18.8,85.1z"}),r.a.createElement("polygon",{fill:"currentColor",points:"45.7,48.7 51.3,54.3 77.2,28.5 77.2,37.2 85.2,37.2 85.2,14.9 62.8,14.9 62.8,22.9 71.5,22.9"}))))),r.a.createElement("tr",null,r.a.createElement("td",null,"money"),r.a.createElement("td",null,r.a.createElement("a",{href:"https://ant.design/components/input-number-cn/",target:"_blank",rel:"noopener noreferrer"},"InputNumber",r.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg","aria-hidden":!0,x:"0px",y:"0px",viewBox:"0 0 100 100",width:"15",height:"15",className:"__dumi-default-external-link-icon"},r.a.createElement("path",{fill:"currentColor",d:"M18.8,85.1h56l0,0c2.2,0,4-1.8,4-4v-32h-8v28h-48v-48h28v-8h-32l0,0c-2.2,0-4,1.8-4,4v56C14.8,83.3,16.6,85.1,18.8,85.1z"}),r.a.createElement("polygon",{fill:"currentColor",points:"45.7,48.7 51.3,54.3 77.2,28.5 77.2,37.2 85.2,37.2 85.2,14.9 62.8,14.9 62.8,22.9 71.5,22.9"}))))),r.a.createElement("tr",null,r.a.createElement("td",null,"digit"),r.a.createElement("td",null,r.a.createElement("a",{href:"https://ant.design/components/input-number-cn/",target:"_blank",rel:"noopener noreferrer"},"InputNumber",r.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg","aria-hidden":!0,x:"0px",y:"0px",viewBox:"0 0 100 100",width:"15",height:"15",className:"__dumi-default-external-link-icon"},r.a.createElement("path",{fill:"currentColor",d:"M18.8,85.1h56l0,0c2.2,0,4-1.8,4-4v-32h-8v28h-48v-48h28v-8h-32l0,0c-2.2,0-4,1.8-4,4v56C14.8,83.3,16.6,85.1,18.8,85.1z"}),r.a.createElement("polygon",{fill:"currentColor",points:"45.7,48.7 51.3,54.3 77.2,28.5 77.2,37.2 85.2,37.2 85.2,14.9 62.8,14.9 62.8,22.9 71.5,22.9"}))))),r.a.createElement("tr",null,r.a.createElement("td",null,"option"),r.a.createElement("td",null,"\u4e0d\u5c55\u793a")),r.a.createElement("tr",null,r.a.createElement("td",null,"index"),r.a.createElement("td",null,"\u4e0d\u5c55\u793a")),r.a.createElement("tr",null,r.a.createElement("td",null,"progress"),r.a.createElement("td",null,"\u4e0d\u5c55\u793a")))),r.a.createElement("p",null,r.a.createElement("code",null,"valueType")," \u867d\u7136\u89e3\u51b3\u4e86\u90e8\u5206\u95ee\u9898\uff0c\u4f46\u662f\u679a\u4e3e\u7684\u60c5\u51b5\u4ed6\u65e0\u6cd5\u6ee1\u8db3\uff0c\u6240\u4ee5 ProTable \u8fd8\u652f\u6301\u4e86 ",r.a.createElement("code",null,"valueEnum")," \u6765\u652f\u6301\u679a\u4e3e\u7c7b\u578b\u7684\u6570\u636e\u3002",r.a.createElement("code",null,"valueEnum"),"\u662f\u4e00\u4e2a",r.a.createElement("code",null,"Object"),"\u6216\u8005",r.a.createElement("code",null,"Map"),"\uff0c\u5982\u679c\u4f60\u7528\u6570\u5b57\u5f53 key\uff0c\u6216\u8005\u5bf9\u987a\u5e8f\u6709\u8981\u6c42\u5efa\u8bae\u4f7f\u7528\u7684",r.a.createElement("code",null,"Map"),"\u3002\u6570\u636e\u7ed3\u6784\u5982\u4e0b\uff1a"),r.a.createElement(m.a,{code:"const valueEnum = {\n  open: '\u672a\u89e3\u51b3',\n  closed: {\n    text: '\u5df2\u89e3\u51b3',\n    status: 'Success',\n  },\n};\n",lang:"tsx"}),r.a.createElement("p",null,"\u914d\u5408\u4e3a ",r.a.createElement("code",null,"valueEnum")," \u7684\u5b57\u6bb5\u4f1a\u88ab\u5c55\u793a\u4e3a\u4e0b\u62c9\u6846\u3002"),r.a.createElement("h2",{id:"actionref"},r.a.createElement("a",{"aria-hidden":"true",href:"#actionref"},r.a.createElement("span",{className:"icon icon-link"})),"ActionRef"),r.a.createElement("p",null,"\u5728\u8fdb\u884c\u4e86\u64cd\u4f5c\uff0c\u6216\u8005 tab \u5207\u6362\u7b49\u65f6\u5019\u6211\u4eec\u9700\u8981\u624b\u52a8\u89e6\u53d1\u4e00\u4e0b\u8868\u5355\u7684\u66f4\u65b0\uff0c\u7eaf\u7cb9\u7684 props \u5f88\u96be\u89e3\u51b3\u8fd9\u4e2a\u95ee\u9898\uff0c\u6240\u4ee5\u6211\u4eec\u63d0\u4f9b\u4e00\u4e2a ref \u6765\u652f\u6301\u4e00\u4e9b\u9ed8\u8ba4\u7684\u64cd\u4f5c\u3002"),r.a.createElement(m.a,{code:"const ref = useRef<ActionType>();\n\n// \u4e24\u79d2\u5237\u65b0\u4e00\u6b21\u8868\u683c\nuseEffect(() => {\n  setInterval(() => {\n    ref.current.reload();\n  }, 2000);\n}, []);\n\n// hooks \u7ed1\u5b9a\n<ProTable actionRef={ref} />;\n\n// class\n<ProTable actionRef={(ref) => (this.ref = ref)} />;\n",lang:"tsx"}),r.a.createElement("p",null,r.a.createElement("code",null,"ActionRef")," \u8fd8\u652f\u6301\u4e86\u4e00\u4e9b\u522b\u7684\u884c\u4e3a,\u67d0\u4e9b\u65f6\u5019\u4f1a\u51cf\u5c11\u7684\u4f60\u7684\u7f16\u7801\u6210\u672c\uff0c\u4f46\u662f ref \u4f1a\u8131\u79bb react \u7684\u751f\u547d\u5468\u671f\uff0c\u6240\u4ee5\u8fd9\u4e9b action \u90fd\u662f\u4e0d\u53d7\u63a7\u7684\u3002"),r.a.createElement(m.a,{code:"// \u5237\u65b0\nref.current.reload();\n\n// \u91cd\u7f6e\u6240\u6709\u9879\u5e76\u5237\u65b0\nref.current.reloadAndRest();\n\n// \u91cd\u7f6e\u5230\u9ed8\u8ba4\u503c\nref.current.reset();\n\n// \u6e05\u7a7a\u9009\u4e2d\u9879\nref.current.clearSelected();\n",lang:"tsx"}),r.a.createElement("h2",{id:"\u67e5\u8be2\u8868\u5355"},r.a.createElement("a",{"aria-hidden":"true",href:"#\u67e5\u8be2\u8868\u5355"},r.a.createElement("span",{className:"icon icon-link"})),"\u67e5\u8be2\u8868\u5355"),r.a.createElement("p",null,"\u67e5\u8be2\u8868\u5355\u662f ProTable \u7684\u9ed8\u8ba4\u884c\u4e3a\u4e2d\u6700\u4e3a\u590d\u6742\u7684\u4e00\u4e2a\uff0c\u6211\u4eec\u4e3a\u5176\u63d0\u4f9b\u4e86\u90e8\u5206\u914d\u7f6e\u548c\u9884\u8bbe\u3002\u5982\u679c\u4f60\u7684\u67e5\u8be2\u8868\u5355\u975e\u5e38\u590d\u6742\uff0c\u6216\u8005\u5176\u4e2d\u4f7f\u7528\u4e86\u4e00\u4e9b\u4e1a\u52a1\u903b\u8f91\uff0c\u5efa\u8bae\u4f7f\u7528 antd \u7684\u8fdb\u884c\u6392\u7248\uff0c\u5e76\u628a\u6570\u636e\u901a\u8fc7 params \u4ea4\u7ed9 ProTable\uff0c\u9ed8\u8ba4\u7684\u67e5\u8be2\u8868\u5355\u662f\u9ad8\u5ea6\u6807\u51c6\u5316\u7684\u3002"),r.a.createElement("p",null,r.a.createElement("img",{src:"https://gw.alipayobjects.com/zos/antfincdn/P7jDHJ323a/4febb542-739c-49b7-8bb9-6a5fc2ca631c.png",alt:"tableDemo"})),r.a.createElement("h3",{id:"\u63a7\u5236\u5c55\u793a"},r.a.createElement("a",{"aria-hidden":"true",href:"#\u63a7\u5236\u5c55\u793a"},r.a.createElement("span",{className:"icon icon-link"})),"\u63a7\u5236\u5c55\u793a"),r.a.createElement("p",null,"\u5f88\u591a\u65f6\u5019\u67e5\u8be2\u8868\u5355\u662f\u6709\u4e00\u4e9b\u914d\u7f6e\u7684\uff0c\u9ed8\u8ba4\u7684\u903b\u8f91\u4e0d\u80fd\u6ee1\u8db3\u9700\u6c42\uff0c\u6211\u4eec\u652f\u6301\u901a\u8fc7 ",r.a.createElement("code",null,"formItemProps")," \u6765\u8fdb\u884c\u4e00\u4e9b\u7b80\u5355\u7684\u914d\u7f6e\u3002\u6bd4\u5982 ",r.a.createElement("code",null,"placeholder")," \u6216\u8005\u589e\u52a0\u4e00\u4e2a ",r.a.createElement("code",null,"addonAfter")," \u7684\u3002"),r.a.createElement(m.a,{code:'{\n  formItemProps: {\n    placeholder:"\u8bf7\u8f93\u5165\u8868\u683c\u540d",\n    addonAfter: <SettingOutlined />;\n  }\n}\n',lang:"tsx"}),r.a.createElement("blockquote",null,r.a.createElement("p",null,"value \u548c onChange \u6709\u7279\u6b8a\u7684\u542b\u4e49,\u7528\u4e8e\u8868\u5355\u7ed1\u5b9a\uff0c\u6240\u4ee5\u4e0d\u80fd\u8986\u76d6\u3002")),r.a.createElement("p",null,"\u6709\u4e9b\u65f6\u5019\u8868\u5355\u4e2d\u548c table \u4e2d\u7684 title \u4e5f\u662f\u4e0d\u540c\u7684\uff0c\u6211\u4eec\u652f\u6301\u914d\u7f6e title \u4e3a ",r.a.createElement("code",null,"function")," \u6765\u652f\u6301\u6839\u636e\u60c5\u51b5\u663e\u793a\u4e0d\u540c title\u3002"),r.a.createElement(m.a,{code:" title: (_, type) => (type === 'table' ? '\u72b6\u6001' : '\u5217\u8868\u72b6\u6001'),\n",lang:"tsx"}),r.a.createElement("p",null,"\u6211\u4eec\u53ef\u4ee5\u5728 props \u4e2d\u8bbe\u7f6e form \u914d\u7f6e\u6765\u81ea\u5b9a\u4e49\u8868\u5355\u7684\u64cd\u4f5c\uff0c\u6bd4\u5982\u8bf4\u9ed8\u8ba4\u503c\u3002"),r.a.createElement(m.a,{code:"form={{ initialValues: {...data}, labelCol: { span: 6 }, }}\n",lang:"tsx"}),r.a.createElement("h3",{id:"\u81ea\u5b9a\u4e49\u8868\u5355\u9879"},r.a.createElement("a",{"aria-hidden":"true",href:"#\u81ea\u5b9a\u4e49\u8868\u5355\u9879"},r.a.createElement("span",{className:"icon icon-link"})),"\u81ea\u5b9a\u4e49\u8868\u5355\u9879"),r.a.createElement("p",null,"\u5f88\u591a\u65f6\u5019\u5185\u7f6e\u7684\u8868\u5355\u9879\u65e0\u6cd5\u6ee1\u8db3\u6211\u4eec\u7684\u9700\u6c42\uff0c\u8fd9\u65f6\u5019\u6211\u4eec\u5c31\u9700\u8981\u6765\u81ea\u5b9a\u4e49\u4e00\u4e0b\u9ed8\u8ba4\u7684\u7ec4\u4ef6\uff0c",r.a.createElement("code",null,"renderFormItem")," \u53ef\u4ee5\u5b8c\u6210\u91cd\u5199\u6e32\u67d3\u903b\u8f91\uff0c\u5b83\u4f1a\u4f20\u5165 item \u548c props \u6765\u8fdb\u884c\u6e32\u67d3\uff0c\u9700\u8981\u6ce8\u610f\u7684\u662f\u6211\u4eec\u5fc5\u987b\u8981\u5c06 props \u4e2d\u7684 ",r.a.createElement("code",null,"value")," \u548c ",r.a.createElement("code",null,"onChange")," \u5fc5\u987b\u8981\u88ab\u8d4b\u503c\uff0c\u5426\u5219 form \u65e0\u6cd5\u7ed1\u5b9a\u6570\u636e\u3002"),r.a.createElement("p",null,"\u4e3a\u4e86\u505a\u8868\u5355\u7684\u8054\u52a8 ",r.a.createElement("code",null,"renderFormItem")," \u589e\u52a0\u4e86\u7b2c\u4e09\u4e2a\u53c2\u6570\uff0c\u53ef\u4ee5\u7528 name \u83b7\u5f97\u522b\u7684\u8868\u5355\u9879\u6570\u636e\u5e76\u4e14\u505a\u4e00\u4e9b\u5b9a\u5236\u3002"),r.a.createElement(m.a,{code:"renderFormItem: (_, { type, defaultRender, ...rest }, form) => {\n  if (type === 'form') {\n    return null;\n  }\n  const status = form.getFieldValue('state');\n  if (status !== 'open') {\n    return <Input {...rest} placeholder=\"\u8bf7\u8f93\u5165\" />;\n  }\n  return defaultRender(_);\n};\n",lang:"tsx"}),r.a.createElement("blockquote",null,r.a.createElement("p",null,"renderFormItem \u7684\u6027\u80fd\u4e0d\u662f\u5f88\u597d\uff0c\u4f7f\u7528\u65f6\u8981\u6ce8\u610f\u4e0d\u8981\u518d\u5176\u4e2d\u505a\u8017\u8d39\u65f6\u95f4\u8f83\u957f\u7684\u4e8b\u60c5\u3002")),r.a.createElement("h2",{id:"\u64cd\u4f5c\u680f"},r.a.createElement("a",{"aria-hidden":"true",href:"#\u64cd\u4f5c\u680f"},r.a.createElement("span",{className:"icon icon-link"})),"\u64cd\u4f5c\u680f"),r.a.createElement("p",null,"\u64cd\u4f5c\u680f\u53ef\u4ee5\u627f\u8f7d\u4e00\u4e9b\u5e38\u7528\u7684\u64cd\u4f5c\u6216\u8005\u8868\u683c\u7684\u6807\u9898\uff0c\u4e3a\u4e86\u4e0d\u4e0e antd \u7684 Table \u7684\u5c5e\u6027\u51b2\u7a81\uff0c\u6211\u4eec\u4f7f\u7528\u4e86 ",r.a.createElement("code",null,"headerTitle")," \u6765\u5b9a\u4e49\u4e86\u64cd\u4f5c\u680f\u7684\u6807\u9898,\u64cd\u4f5c\u680f\u7684\u6807\u9898\u662f\u4e00\u4e2a ReactNode \u4f60\u53ef\u4ee5\u81ea\u5b9a\u4e49\u5b83\uff0c\u5982\u679c\u9700\u8981\u53ef\u4ee5\u653e\u5165\u4e00\u4e2a Tabs\u3002"),r.a.createElement("p",null,r.a.createElement("code",null,"toolBarRender")," \u652f\u6301\u8fd4\u56de\u4e00\u4e2a ReactNode \u7684\u6570\u7ec4\uff0c\u6211\u4eec\u4f1a\u81ea\u52a8\u52a0\u5165\u95f4\u8ddd\uff0ctoolBarRender \u7c7b\u578b\u5b9a\u4e49\u5982\u4e0b\uff1a"),r.a.createElement(m.a,{code:"toolBarRender: (action, { selectedRowKeys, selectedRows }) => ReactNode[];\n",lang:"tsx"}),r.a.createElement("p",null,"\u9ed8\u8ba4\u4f1a\u8fd4\u56de\u5f53\u524d\u9009\u4e2d\u7684\u6240\u6709\u884c\u548c\u4ed6\u4eec\u7684 keys\uff0c\u7528\u4e8e\u6279\u91cf\u64cd\u4f5c\u3002"),r.a.createElement("p",null,"\u64cd\u4f5c\u680f\u8fd8\u81ea\u5b9a\u4e49\u4e86\u4e00\u4e9b\u9ed8\u8ba4\u7684\u884c\u4e3a\uff0c\u9ed8\u8ba4\u652f\u6301\u4e86 ",r.a.createElement("code",null,"density")," \u5bc6\u5ea6\u8c03\u6574, ",r.a.createElement("code",null,"fullScreen")," \u5168\u5c4f\uff0c",r.a.createElement("code",null,"reload")," \u5237\u65b0\uff0c",r.a.createElement("code",null,"setting")," table \u8bbe\u7f6e\u3002"),r.a.createElement(m.a,{code:"export interface OptionConfig<T> {\n  density: boolean;\n  fullScreen: OptionsType<T>;\n  reload: OptionsType<T>;\n  setting: boolean;\n}\n",lang:"tsx"}),r.a.createElement("p",null,"\u6211\u4eec\u53ef\u4ee5\u5728 props \u4e2d\u914d\u7f6e options=","{","false","}"," \u6765\u5173\u6389\u64cd\u4f5c\u680f\u3002\u4e5f\u53ef\u4ee5\u5206\u522b\u8bbe\u7f6e\uff0c\u53ea\u4fdd\u7559\u4f60\u60f3\u8981\u7684\u3002"),r.a.createElement(m.a,{code:"options = {\n  fullScreen: false,\n  reload: false,\n  setting: false,\n  density: true,\n};\n",lang:"tsx"}),r.a.createElement("p",null,"\u66f4\u591a\u7684\u529f\u80fd\u67e5\u770b\u67e5\u770b\u5177\u4f53\u7684\u8bf4\u660e:"),r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement(n["a"],{to:"/table/api"},"API")),r.a.createElement("li",null,r.a.createElement(n["a"],{to:"/table/intl"},"\u56fd\u9645\u5316")),r.a.createElement("li",null,r.a.createElement(n["a"],{to:"/table/search"},"\u67e5\u8be2\u8868\u5355")),r.a.createElement("li",null,r.a.createElement(n["a"],{to:"/table/value-type"},"\u9884\u8bbe\u6837\u5f0f")),r.a.createElement("li",null,r.a.createElement(n["a"],{to:"/table/example"},"\u4f8b\u5b50")))))}}}]);