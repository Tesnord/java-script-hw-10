const e="light-theme",t="dark-theme",s=document.querySelector("body"),a=document.querySelector("#theme-switch-toggle");localStorage.getItem("ui-theme")==e?s.classList.add(e):localStorage.getItem("ui-theme")==t&&s.classList.add(t),s.classList.contains(t)&&a.setAttribute("checked",!0),a.addEventListener("change",(a=>{switch(!0){case s.classList.contains(t):s.classList.replace(t,e),localStorage.setItem("ui-theme",e);break;case s.classList.contains(e):s.classList.replace(e,t),localStorage.setItem("ui-theme",t);break;default:s.classList.add(t),localStorage.setItem("ui-theme",t)}}));
//# sourceMappingURL=index.61afd587.js.map
