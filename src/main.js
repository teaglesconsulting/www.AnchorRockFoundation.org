import '~/scss/main.scss'

export default function (Vue, { router, head, isClient }) {
  Vue.prototype.$site = require("../content/site.config.json")

  // Set default layout as a global component
  Vue.component("Layout", () => import("~/layouts/Default.vue"))

  Vue.component("BaseLink", () => import("~/components/BaseLink.vue"))

  Vue.component("ContactForm", () => import("~/components/ContactForm.vue"))
  Vue.component("VolunteerForm", () => import("~/components/VolunteerForm.vue"))

  head.script.push({
    type: 'text/javascript',
    innerHTML: `
      window.heap=window.heap||[],heap.load=function(e,t){window.heap.appid = e, window.heap.config = t = t || {};var r=document.createElement("script");r.type="text/javascript",r.async=!0,r.src="https://cdn.heapanalytics.com/js/heap-"+e+".js";var a=document.getElementsByTagName("script")[0];a.parentNode.insertBefore(r,a);for(var n=function(e){return function(){heap.push([e].concat(Array.prototype.slice.call(arguments, 0)))}},p=["addEventProperties","addUserProperties","clearEventProperties","identify","resetIdentity","removeEventProperty","setEventProperties","track","unsetEventProperty"],o=0;o<p.length;o++)heap[p[o]]=n(p[o])};
      heap.load("2058813946");
    `
  })
}
