webpackJsonp([0],{13:function(e,t){(function(t){e.exports=t}).call(t,{})},14:function(e,t,n){"use strict";var o=u(n(1)),r=u(n(8)),a=u(n(26));function u(e){return e&&e.__esModule?e:{default:e}}r.default.render(o.default.createElement(a.default),document.getElementById("app"))},26:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),r=n(1),a=c(r),u=c(n(27)),l=c(n(28));function c(e){return e&&e.__esModule?e:{default:e}}var i=function(e){var t=e.data;return a.default.createElement("div",{className:"technologies__section"},t.technologies.map(function(e,t){return a.default.createElement("div",{key:t,className:"technologies__section-item"},a.default.createElement("img",{src:e.url,alt:e.name}))}))},f=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,r.Component),o(t,[{key:"render",value:function(){return a.default.createElement("div",{className:"app"},a.default.createElement(l.default,null),a.default.createElement(i,{data:u.default}),a.default.createElement("section",{className:"body__home"}))}}]),t}();t.default=f},27:function(e,t){e.exports={technologies:[{name:"Node",url:"https://png.icons8.com/color/50/000000/nodejs.png"},{name:"React",url:"https://png.icons8.com/ios/50/000000/react-native-filled.png"}]}},28:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=u(n(1)),r=u(n(29)),a=u(n(30));function u(e){return e&&e.__esModule?e:{default:e}}t.default=function(){return o.default.createElement("div",{className:"header-mobile"},r.default.buttonData.map(function(e,t){return o.default.createElement(a.default,{key:"button-"+t,type:e.type})}))}},29:function(e,t){e.exports={buttonData:[{type:"clock"},{type:"test"},{type:"clock"},{type:"test"}]}},30:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=a(n(1)),r=a(n(31));function a(e){return e&&e.__esModule?e:{default:e}}t.default=function(e){var t=e.type,n=(0,r.default)({"icon-clock":"clock"===t,test:"test"===t});return o.default.createElement("div",{className:"header-mobile__block"},o.default.createElement("span",{className:n}))}},31:function(e,t,n){"use strict";var o,r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};
/*!
  Copyright (c) 2017 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/
!function(){var a={}.hasOwnProperty;function u(){for(var e=[],t=0;t<arguments.length;t++){var n=arguments[t];if(n){var o=void 0===n?"undefined":r(n);if("string"===o||"number"===o)e.push(n);else if(Array.isArray(n)&&n.length){var l=u.apply(null,n);l&&e.push(l)}else if("object"===o)for(var c in n)a.call(n,c)&&n[c]&&e.push(c)}}return e.join(" ")}void 0!==e&&e.exports?(u.default=u,e.exports=u):"object"===r(n(13))&&n(13)?void 0===(o=function(){return u}.apply(t,[]))||(e.exports=o):window.classNames=u}()}},[14]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vKHdlYnBhY2spL2J1aWxkaW4vYW1kLW9wdGlvbnMuanMiLCJ3ZWJwYWNrOi8vLy4vc3RhdGljL2pzL2FwcHMvaG9tZS5qcyIsIndlYnBhY2s6Ly8vLi9zdGF0aWMvanMvbW9kdWxlcy9Ib21lL2luZGV4LmpzeCIsIndlYnBhY2s6Ly8vLi9zdGF0aWMvanMvbW9kdWxlcy9Ib21lL21vY2svdGVjaG5vbG9naWVzLmpzb24iLCJ3ZWJwYWNrOi8vLy4vc3RhdGljL2pzL21vZHVsZXMvdWkvSGVhZGVyL2luZGV4LmpzeCIsIndlYnBhY2s6Ly8vLi9zdGF0aWMvanMvbW9kdWxlcy91aS9IZWFkZXIvbW9jay5qc29uIiwid2VicGFjazovLy8uL3N0YXRpYy9qcy9tb2R1bGVzL3VpL0hlYWRlci9jb21wb25lbnRzL0NpcmNsZUJ1dHRvbi5qc3giLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NsYXNzbmFtZXMvaW5kZXguanMiXSwibmFtZXMiOlsiX193ZWJwYWNrX2FtZF9vcHRpb25zX18iLCJtb2R1bGUiLCJleHBvcnRzIiwiX193ZWJwYWNrX3JlcXVpcmVfXyIsIlJlYWN0RE9NIiwicmVuZGVyIiwiUmVhY3QiLCJjcmVhdGVFbGVtZW50IiwiSG9tZSIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJfcmVhY3QiLCJUZWNobm9sb2dpZXMiLCJfcmVmIiwiZGF0YSIsIl9yZWFjdDIiLCJkZWZhdWx0IiwiY2xhc3NOYW1lIiwidGVjaG5vbG9naWVzIiwibWFwIiwiaXRlbSIsImtleSIsInNyYyIsInVybCIsImFsdCIsIm5hbWUiLCJDb21wb25lbnQiLCJfSGVhZGVyMiIsInRlY2hub2xvZ2llc0RhdGEiLCJtb2NrIiwiYnV0dG9uRGF0YSIsImluZGV4IiwiX0NpcmNsZUJ1dHRvbjIiLCJ0eXBlIiwiaWNvblN0eWxlIiwiX2NsYXNzbmFtZXMyIiwiaWNvbi1jbG9jayIsInRlc3QiLCJoYXNPd24iLCJoYXNPd25Qcm9wZXJ0eSIsImNsYXNzTmFtZXMiLCJjbGFzc2VzIiwiaSIsImFyZ3VtZW50cyIsImxlbmd0aCIsImFyZyIsImFyZ1R5cGUiLCJfdHlwZW9mIiwicHVzaCIsIkFycmF5IiwiaXNBcnJheSIsImlubmVyIiwiYXBwbHkiLCJjYWxsIiwiam9pbiIsInVuZGVmaW5lZCIsIl9fV0VCUEFDS19BTURfREVGSU5FX1JFU1VMVF9fIiwid2luZG93Il0sIm1hcHBpbmdzIjoib0NBQUEsU0FBQUEsR0FDQUMsRUFBQUMsUUFBQUYsZ0RDREEsUUFBQUcsRUFBQSxRQUNBQSxFQUFBLFFBQ0FBLEVBQUEsd0RBRUFDLFVBQVNDLE9BQU9DLFVBQU1DLGNBQWNDLFdBQU9DLFNBQVNDLGVBQWUsbVZDSm5FQyxFQUFBUixFQUFBLGNBQ0FBLEVBQUEsU0FHQUEsRUFBQSx3REFFQSxJQUFNUyxFQUFlLFNBQUFDLEdBQUEsSUFBR0MsRUFBSEQsRUFBR0MsS0FBSCxPQUNuQkMsRUFBQUMsUUFBQVQsY0FBQSxPQUFLVSxVQUFVLHlCQUNaSCxFQUFLSSxhQUNIQyxJQUFJLFNBQUNDLEVBQU1DLEdBQVAsT0FDSE4sRUFBQUMsUUFBQVQsY0FBQSxPQUFLYyxJQUFLQSxFQUFLSixVQUFVLDhCQUN2QkYsRUFBQUMsUUFBQVQsY0FBQSxPQUFLZSxJQUFLRixFQUFLRyxJQUFLQyxJQUFLSixFQUFLSyxZQU1sQ2pCLGdyQkFBYWtCLGlEQUVmLE9BQ0VYLEVBQUFDLFFBQUFULGNBQUEsT0FBS1UsVUFBVSxPQUNiRixFQUFBQyxRQUFBVCxjQUFDb0IsRUFBQVgsUUFBRCxNQUNBRCxFQUFBQyxRQUFBVCxjQUFDSyxHQUFhRSxLQUFNYyxZQUdwQmIsRUFBQUMsUUFBQVQsY0FBQSxXQUFTVSxVQUFVLG1DQVNaVCxvQkNsQ2ZQLEVBQUFDLFNBQWtCZ0IsZUFBaUJPLEtBQUEsT0FBQUYsSUFBQSxzREFBMEVFLEtBQUEsUUFBQUYsSUFBQSxvSkNBN0csUUFBQXBCLEVBQUEsUUFHQUEsRUFBQSxTQUdBQSxFQUFBLGtFQUdlLGtCQUNiWSxFQUFBQyxRQUFBVCxjQUFBLE9BQUtVLFVBQVUsaUJBQ1pZLFVBQUtDLFdBQVdYLElBQUksU0FBQ0wsRUFBTWlCLEdBQVAsT0FDbkJoQixFQUFBQyxRQUFBVCxjQUFDeUIsRUFBQWhCLFNBQ0NLLElBQUEsVUFBZVUsRUFDZkUsS0FBTW5CLEVBQUttQiw2QkNkbkJoQyxFQUFBQyxTQUFrQjRCLGFBQWVHLEtBQUEsVUFBaUJBLEtBQUEsU0FBZ0JBLEtBQUEsVUFBaUJBLEtBQUEsNEZDQW5GLFFBQUE5QixFQUFBLFFBQ0FBLEVBQUEsa0VBRXFCLFNBQUFVLEdBQWMsSUFBWG9CLEVBQVdwQixFQUFYb0IsS0FDaEJDLEdBQVksRUFBQUMsRUFBQW5CLFVBQ2hCb0IsYUFBdUIsVUFBVEgsRUFDZEksS0FBaUIsU0FBVEosSUFHVixPQUNFbEIsRUFBQUMsUUFBQVQsY0FBQSxPQUFLVSxVQUFVLHdCQUNiRixFQUFBQyxRQUFBVCxjQUFBLFFBQU1VLFVBQVdpQjs7Ozs7O0NDSnRCLFdBR0EsSUFBSUksS0FBWUMsZUFFaEIsU0FBU0MsSUFHUixJQUZBLElBQUlDLEtBRUtDLEVBQUksRUFBR0EsRUFBSUMsVUFBVUMsT0FBUUYsSUFBSyxDQUMxQyxJQUFJRyxFQUFNRixVQUFVRCxHQUNwQixHQUFLRyxFQUFMLENBRUEsSUFBSUMsT0FBQSxJQUFpQkQsRUFBakIsWUFBQUUsRUFBaUJGLEdBRXJCLEdBQWdCLFdBQVpDLEdBQW9DLFdBQVpBLEVBQzNCTCxFQUFRTyxLQUFLSCxRQUNQLEdBQUlJLE1BQU1DLFFBQVFMLElBQVFBLEVBQUlELE9BQVEsQ0FDNUMsSUFBSU8sRUFBUVgsRUFBV1ksTUFBTSxLQUFNUCxHQUMvQk0sR0FDSFYsRUFBUU8sS0FBS0csUUFFUixHQUFnQixXQUFaTCxFQUNWLElBQUssSUFBSXpCLEtBQU93QixFQUNYUCxFQUFPZSxLQUFLUixFQUFLeEIsSUFBUXdCLEVBQUl4QixJQUNoQ29CLEVBQVFPLEtBQUszQixJQU1qQixPQUFPb0IsRUFBUWEsS0FBSyxVQUdDLElBQVhyRCxHQUEwQkEsRUFBT0MsU0FDM0NzQyxFQUFXeEIsUUFBVXdCLEVBQ3JCdkMsRUFBT0MsUUFBVXNDLEdBQytDLFdBQXRCTyxFQUFPNUMsRUFBQSxNQUEyQkEsRUFBQSxTQUU1RW9ELEtBQUFDLEVBQUEsV0FDQyxPQUFPaEIsR0FEUlksTUFBQWxELFNBQUFELEVBQUFDLFFBQUFzRCxHQUlBQyxPQUFPakIsV0FBYUEsRUExQ3JCIiwiZmlsZSI6ImhvbWUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBnbG9iYWxzIF9fd2VicGFja19hbWRfb3B0aW9uc19fICovXHJcbm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX2FtZF9vcHRpb25zX187XHJcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vICh3ZWJwYWNrKS9idWlsZGluL2FtZC1vcHRpb25zLmpzXG4vLyBtb2R1bGUgaWQgPSAxM1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFJlYWN0RE9NIGZyb20gJ3JlYWN0LWRvbSc7XG5pbXBvcnQgSG9tZSBmcm9tICcuLi9tb2R1bGVzL0hvbWUnO1xuXG5SZWFjdERPTS5yZW5kZXIoUmVhY3QuY3JlYXRlRWxlbWVudChIb21lKSwgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FwcCcpKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3N0YXRpYy9qcy9hcHBzL2hvbWUuanMiLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHRlY2hub2xvZ2llc0RhdGEgZnJvbSAnLi9tb2NrL3RlY2hub2xvZ2llcy5qc29uJztcblxuLy8gY29tcG9uZW50c1xuaW1wb3J0IEhlYWRlciBmcm9tICcuLy4uL3VpL0hlYWRlcic7XG5cbmNvbnN0IFRlY2hub2xvZ2llcyA9ICh7IGRhdGEgfSkgPT4gKFxuICA8ZGl2IGNsYXNzTmFtZT1cInRlY2hub2xvZ2llc19fc2VjdGlvblwiPlxuICAgIHtkYXRhLnRlY2hub2xvZ2llc1xuICAgICAgLm1hcCgoaXRlbSwga2V5KSA9PiAoXG4gICAgICAgIDxkaXYga2V5PXtrZXl9IGNsYXNzTmFtZT1cInRlY2hub2xvZ2llc19fc2VjdGlvbi1pdGVtXCI+XG4gICAgICAgICAgPGltZyBzcmM9e2l0ZW0udXJsfSBhbHQ9e2l0ZW0ubmFtZX0gLz5cbiAgICAgICAgPC9kaXY+KVxuICAgICAgKX1cbiAgPC9kaXY+XG4pXG5cbmNsYXNzIEhvbWUgZXh0ZW5kcyBDb21wb25lbnQge1xuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYXBwXCI+XG4gICAgICAgIDxIZWFkZXIgLz5cbiAgICAgICAgPFRlY2hub2xvZ2llcyBkYXRhPXt0ZWNobm9sb2dpZXNEYXRhfSAvPlxuICAgICAgICBcblxuICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJib2R5X19ob21lXCI+XG4gICAgICAgICAgXG4gICAgICAgIDwvc2VjdGlvbj5cblxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBIb21lO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3RhdGljL2pzL21vZHVsZXMvSG9tZS9pbmRleC5qc3giLCJtb2R1bGUuZXhwb3J0cyA9IHtcInRlY2hub2xvZ2llc1wiOlt7XCJuYW1lXCI6XCJOb2RlXCIsXCJ1cmxcIjpcImh0dHBzOi8vcG5nLmljb25zOC5jb20vY29sb3IvNTAvMDAwMDAwL25vZGVqcy5wbmdcIn0se1wibmFtZVwiOlwiUmVhY3RcIixcInVybFwiOlwiaHR0cHM6Ly9wbmcuaWNvbnM4LmNvbS9pb3MvNTAvMDAwMDAwL3JlYWN0LW5hdGl2ZS1maWxsZWQucG5nXCJ9XX1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3N0YXRpYy9qcy9tb2R1bGVzL0hvbWUvbW9jay90ZWNobm9sb2dpZXMuanNvblxuLy8gbW9kdWxlIGlkID0gMjdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuLy9tb2NrXG5pbXBvcnQgbW9jayBmcm9tICcuL21vY2suanNvbic7XG5cbi8vQ29tcG9uZW50c1xuaW1wb3J0IENpcmNsZUJ1dHRvbiBmcm9tICcuL2NvbXBvbmVudHMvQ2lyY2xlQnV0dG9uJztcblxuXG5jb25zdCBIZWFkZXIgPSAoKSA9PiAoXG4gIDxkaXYgY2xhc3NOYW1lPVwiaGVhZGVyLW1vYmlsZVwiPlxuICAgIHttb2NrLmJ1dHRvbkRhdGEubWFwKChkYXRhLCBpbmRleCkgPT5cbiAgICAgIDxDaXJjbGVCdXR0b25cbiAgICAgICAga2V5PXtgYnV0dG9uLSR7aW5kZXh9YH1cbiAgICAgICAgdHlwZT17ZGF0YS50eXBlfVxuICAgICAgLz4pXG4gICAgfVxuICA8L2Rpdj5cbik7XG5cbmV4cG9ydCBkZWZhdWx0IEhlYWRlcjtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zdGF0aWMvanMvbW9kdWxlcy91aS9IZWFkZXIvaW5kZXguanN4IiwibW9kdWxlLmV4cG9ydHMgPSB7XCJidXR0b25EYXRhXCI6W3tcInR5cGVcIjpcImNsb2NrXCJ9LHtcInR5cGVcIjpcInRlc3RcIn0se1widHlwZVwiOlwiY2xvY2tcIn0se1widHlwZVwiOlwidGVzdFwifV19XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zdGF0aWMvanMvbW9kdWxlcy91aS9IZWFkZXIvbW9jay5qc29uXG4vLyBtb2R1bGUgaWQgPSAyOVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IGNsYXNzTmFtZXMgZnJvbSAnY2xhc3NuYW1lcyc7XG5cbmNvbnN0IENpcmNsZUJ1dHRvbiA9ICh7IHR5cGUgfSkgPT4ge1xuICBjb25zdCBpY29uU3R5bGUgPSBjbGFzc05hbWVzKHtcbiAgICBcImljb24tY2xvY2tcIjogdHlwZSA9PT0gXCJjbG9ja1wiLFxuICAgIFwidGVzdFwiOiB0eXBlID09PSBcInRlc3RcIlxuICB9KTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiaGVhZGVyLW1vYmlsZV9fYmxvY2tcIj5cbiAgICAgIDxzcGFuIGNsYXNzTmFtZT17aWNvblN0eWxlfSAvPlxuICAgIDwvZGl2PlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IENpcmNsZUJ1dHRvbjtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zdGF0aWMvanMvbW9kdWxlcy91aS9IZWFkZXIvY29tcG9uZW50cy9DaXJjbGVCdXR0b24uanN4IiwiLyohXG4gIENvcHlyaWdodCAoYykgMjAxNyBKZWQgV2F0c29uLlxuICBMaWNlbnNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UgKE1JVCksIHNlZVxuICBodHRwOi8vamVkd2F0c29uLmdpdGh1Yi5pby9jbGFzc25hbWVzXG4qL1xuLyogZ2xvYmFsIGRlZmluZSAqL1xuXG4oZnVuY3Rpb24gKCkge1xuXHQndXNlIHN0cmljdCc7XG5cblx0dmFyIGhhc093biA9IHt9Lmhhc093blByb3BlcnR5O1xuXG5cdGZ1bmN0aW9uIGNsYXNzTmFtZXMgKCkge1xuXHRcdHZhciBjbGFzc2VzID0gW107XG5cblx0XHRmb3IgKHZhciBpID0gMDsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xuXHRcdFx0dmFyIGFyZyA9IGFyZ3VtZW50c1tpXTtcblx0XHRcdGlmICghYXJnKSBjb250aW51ZTtcblxuXHRcdFx0dmFyIGFyZ1R5cGUgPSB0eXBlb2YgYXJnO1xuXG5cdFx0XHRpZiAoYXJnVHlwZSA9PT0gJ3N0cmluZycgfHwgYXJnVHlwZSA9PT0gJ251bWJlcicpIHtcblx0XHRcdFx0Y2xhc3Nlcy5wdXNoKGFyZyk7XG5cdFx0XHR9IGVsc2UgaWYgKEFycmF5LmlzQXJyYXkoYXJnKSAmJiBhcmcubGVuZ3RoKSB7XG5cdFx0XHRcdHZhciBpbm5lciA9IGNsYXNzTmFtZXMuYXBwbHkobnVsbCwgYXJnKTtcblx0XHRcdFx0aWYgKGlubmVyKSB7XG5cdFx0XHRcdFx0Y2xhc3Nlcy5wdXNoKGlubmVyKTtcblx0XHRcdFx0fVxuXHRcdFx0fSBlbHNlIGlmIChhcmdUeXBlID09PSAnb2JqZWN0Jykge1xuXHRcdFx0XHRmb3IgKHZhciBrZXkgaW4gYXJnKSB7XG5cdFx0XHRcdFx0aWYgKGhhc093bi5jYWxsKGFyZywga2V5KSAmJiBhcmdba2V5XSkge1xuXHRcdFx0XHRcdFx0Y2xhc3Nlcy5wdXNoKGtleSk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0cmV0dXJuIGNsYXNzZXMuam9pbignICcpO1xuXHR9XG5cblx0aWYgKHR5cGVvZiBtb2R1bGUgIT09ICd1bmRlZmluZWQnICYmIG1vZHVsZS5leHBvcnRzKSB7XG5cdFx0Y2xhc3NOYW1lcy5kZWZhdWx0ID0gY2xhc3NOYW1lcztcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGNsYXNzTmFtZXM7XG5cdH0gZWxzZSBpZiAodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiB0eXBlb2YgZGVmaW5lLmFtZCA9PT0gJ29iamVjdCcgJiYgZGVmaW5lLmFtZCkge1xuXHRcdC8vIHJlZ2lzdGVyIGFzICdjbGFzc25hbWVzJywgY29uc2lzdGVudCB3aXRoIG5wbSBwYWNrYWdlIG5hbWVcblx0XHRkZWZpbmUoJ2NsYXNzbmFtZXMnLCBbXSwgZnVuY3Rpb24gKCkge1xuXHRcdFx0cmV0dXJuIGNsYXNzTmFtZXM7XG5cdFx0fSk7XG5cdH0gZWxzZSB7XG5cdFx0d2luZG93LmNsYXNzTmFtZXMgPSBjbGFzc05hbWVzO1xuXHR9XG59KCkpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbm9kZV9tb2R1bGVzL2NsYXNzbmFtZXMvaW5kZXguanMiXSwic291cmNlUm9vdCI6IiJ9