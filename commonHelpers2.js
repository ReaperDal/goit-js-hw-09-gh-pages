import"./assets/modulepreload-polyfill-3cfb730f.js";const a={email:"",message:""};function l(){const e=localStorage.getItem("feedback-form-state");return e?JSON.parse(e):a}function o(e){localStorage.setItem("feedback-form-state",JSON.stringify(e))}document.addEventListener("DOMContentLoaded",()=>{const e=document.querySelector(".feedback-form"),t=l();e.elements.email.value=t.email,e.elements.message.value=t.message,a.email=t.email,a.message=t.message,e.addEventListener("input",m=>{const s=m.target;(s.name==="email"||s.name==="message")&&(a[s.name]=s.value,o(a))}),e.addEventListener("submit",m=>{m.preventDefault(),!a.email||!a.message?alert("Fill please all fields"):(console.log(a),localStorage.removeItem("feedback-form-state"),a.email="",a.message="",e.elements.email.value="",e.elements.message.value="")})});
//# sourceMappingURL=commonHelpers2.js.map