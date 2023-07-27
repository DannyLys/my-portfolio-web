/**
 * Minified by jsDelivr using Terser v5.10.0.
 * Original file: /gh/manucaralmo/GlowCookies@3.1.7/src/glowCookies.js
 *
 * Do NOT use SRI with dynamically generated files! More information: https://www.jsdelivr.com/using-sri-with-dynamic-files
 */
class GlowCookies {
  constructor() {
    this.banner = void 0, this.config = void 0, this.tracking = void 0, this.PreBanner = void 0, this.Cookies = void 0, this.DOMbanner = void 0
  }
  render() {
    this.addCss(), this.createDOMElements(), this.checkStatus()
  }
  addCss() {
    const e = document.createElement("link");
    e.setAttribute("rel", "stylesheet"), e.setAttribute("href", "https://cdn.jsdelivr.net/gh/manucaralmo/GlowCookies@3.1.3/src/glowCookies.min.css"), document.head.appendChild(e)
  }
  createDOMElements() {
    this.PreBanner = document.createElement("div"), this.PreBanner.innerHTML = `<button type="button" id="prebannerBtn" class="prebanner prebanner__border__${this.config.bannerStyle} glowCookies__${this.config.position} glowCookies__${this.config.border} animation" style="color: ${this.banner.manageCookies.color}; background-color: ${this.banner.manageCookies.background};">\n                                    <svg fill="currentColor" style="margin-right: 7px; margin-top: 2px; vertical-align: text-top;" height="15px" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">\n                                        <path d="M510.52 255.82c-69.97-.85-126.47-57.69-126.47-127.86-70.17 0-127-56.49-127.86-126.45-27.26-4.14-55.13.3-79.72 12.82l-69.13 35.22a132.221 132.221 0 0 0-57.79 57.81l-35.1 68.88a132.645 132.645 0 0 0-12.82 80.95l12.08 76.27a132.521 132.521 0 0 0 37.16 72.96l54.77 54.76a132.036 132.036 0 0 0 72.71 37.06l76.71 12.15c27.51 4.36 55.7-.11 80.53-12.76l69.13-35.21a132.273 132.273 0 0 0 57.79-57.81l35.1-68.88c12.56-24.64 17.01-52.58 12.91-79.91zM176 368c-17.67 0-32-14.33-32-32s14.33-32 32-32 32 14.33 32 32-14.33 32-32 32zm32-160c-17.67 0-32-14.33-32-32s14.33-32 32-32 32 14.33 32 32-14.33 32-32 32zm160 128c-17.67 0-32-14.33-32-32s14.33-32 32-32 32 14.33 32 32-14.33 32-32 32z"/>\n                                    </svg>${this.banner.manageCookies.text}</button>`, this.PreBanner.style.display = "none", document.body.appendChild(this.PreBanner), this.Cookies = document.createElement("div"), this.Cookies.innerHTML = `<div \n                                    id="glowCookies-banner" \n                                    class="glowCookies__banner glowCookies__banner__${this.config.bannerStyle} glowCookies__${this.config.border} glowCookies__${this.config.position}"\n                                    style="background-color: ${this.banner.background};"\n                                >\n                                    <h3 style="color: ${this.banner.color};">${this.banner.heading}</h3>\n                                    <p style="color: ${this.banner.color};">\n                                        ${this.banner.description} \n                                        <a \n                                            href="${this.banner.link}"\n                                            target="_blank" \n                                            class="read__more"\n                                            style="color: ${this.banner.color};"\n                                        >\n                                            ${this.banner.linkText}\n                                        </a>\n                                    </p>\n                                    <div class="btn__section">\n                                        <button type="button" id="acceptCookies" class="btn__accept accept__btn__styles" style="color: ${this.banner.acceptBtn.color}; background-color: ${this.banner.acceptBtn.background};">\n                                            ${this.banner.acceptBtn.text}\n                                        </button>\n                                        <button type="button" id="rejectCookies" class="btn__settings settings__btn__styles" style="color: ${this.banner.rejectBtn.color}; background-color: ${this.banner.rejectBtn.background};">\n                                            ${this.banner.rejectBtn.text}\n                                        </button>\n                                    </div>\n                                </div>\n                            `, document.body.appendChild(this.Cookies), this.DOMbanner = document.getElementById("glowCookies-banner"), document.getElementById("prebannerBtn").addEventListener("click", (() => this.openSelector())), document.getElementById("acceptCookies").addEventListener("click", (() => this.acceptCookies())), document.getElementById("rejectCookies").addEventListener("click", (() => this.rejectCookies()))
  }
  checkStatus() {
    switch (localStorage.getItem("GlowCookies")) {
      case "1":
        this.openManageCookies(), this.activateTracking(), this.addCustomScript();
        break;
      case "0":
        this.openManageCookies();
        break;
      default:
        this.openSelector()
    }
  }
  openManageCookies() {
    this.PreBanner.style.display = this.config.hideAfterClick ? "none" : "block", this.DOMbanner.classList.remove("glowCookies__show")
  }
  openSelector() {
    this.PreBanner.style.display = "none", this.DOMbanner.classList.add("glowCookies__show")
  }
  acceptCookies() {
    localStorage.setItem("GlowCookies", "1"), this.openManageCookies(), this.activateTracking(), this.addCustomScript()
  }
  rejectCookies() {
    localStorage.setItem("GlowCookies", "0"), this.openManageCookies(), this.disableTracking()
  }
  activateTracking() {
    if (this.tracking.AnalyticsCode) {
      let e = document.createElement("script");
      e.setAttribute("src", `https://www.googletagmanager.com/gtag/js?id=${this.tracking.AnalyticsCode}`), document.head.appendChild(e);
      let n = document.createElement("script");
      n.text = `window.dataLayer = window.dataLayer || [];\n                                function gtag(){dataLayer.push(arguments);}\n                                gtag('js', new Date());\n                                gtag('config', '${this.tracking.AnalyticsCode}');`, document.head.appendChild(n)
    }
    if (this.tracking.FacebookPixelCode) {
      let e = document.createElement("script");
      e.text = `\n                                    !function(f,b,e,v,n,t,s)\n                                    {if(f.fbq)return;n=f.fbq=function(){n.callMethod?\n                                    n.callMethod.apply(n,arguments):n.queue.push(arguments)};\n                                    if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';\n                                    n.queue=[];t=b.createElement(e);t.async=!0;\n                                    t.src=v;s=b.getElementsByTagName(e)[0];\n                                    s.parentNode.insertBefore(t,s)}(window, document,'script',\n                                    'https://connect.facebook.net/en_US/fbevents.js');\n                                    fbq('init', '${this.tracking.FacebookPixelCode}');\n                                    fbq('track', 'PageView');\n                                `, document.head.appendChild(e);
      let n = document.createElement("noscript");
      n.setAttribute("height", "1"), n.setAttribute("width", "1"), n.setAttribute("style", "display:none"), n.setAttribute("src", `https://www.facebook.com/tr?id=${this.tracking.FacebookPixelCode}&ev=PageView&noscript=1`), document.head.appendChild(n)
    }
    if (this.tracking.HotjarTrackingCode) {
      let e = document.createElement("script");
      e.text = `\n                                (function(h,o,t,j,a,r){\n                                    h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};\n                                    h._hjSettings={hjid:${this.tracking.HotjarTrackingCode},hjsv:6};\n                                    a=o.getElementsByTagName('head')[0];\n                                    r=o.createElement('script');r.async=1;\n                                    r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;\n                                    a.appendChild(r);\n                                })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');\n                                `, document.head.appendChild(e)
    }
  }
  disableTracking() {
    if (this.tracking.AnalyticsCode) {
      let e = document.createElement("script");
      e.setAttribute("src", `https://www.googletagmanager.com/gtag/js?id=${this.tracking.AnalyticsCode}`), document.head.appendChild(e);
      let n = document.createElement("script");
      n.text = `window.dataLayer = window.dataLayer || [];\n                        function gtag(){dataLayer.push(arguments);}\n                        gtag('js', new Date());\n                        gtag('config', '${this.tracking.AnalyticsCode}' , {\n                            'client_storage': 'none',\n                            'anonymize_ip': true\n                        });`, document.head.appendChild(n)
    }
    this.clearCookies()
  }
  clearCookies() {
    let e = document.cookie.split("; ");
    for (let n = 0; n < e.length; n++) {
      let t = window.location.hostname.split(".");
      for (; t.length > 0;) {
        let o = encodeURIComponent(e[n].split(";")[0].split("=")[0]) + "=; expires=Thu, 01-Jan-1970 00:00:01 GMT; domain=" + t.join(".") + " ;path=",
          a = location.pathname.split("/");
        for (document.cookie = o + "/"; a.length > 0;) document.cookie = o + a.join("/"), a.pop();
        t.shift()
      }
    }
  }
  addCustomScript() {
    if (void 0 !== this.tracking.customScript) {
      let e;
      this.tracking.customScript.forEach((n => {
        "src" === n.type ? (e = document.createElement("script"), e.setAttribute("src", n.content)) : "custom" === n.type && (e = document.createElement("script"), e.text = n.content), "head" === n.position ? document.head.appendChild(e) : document.body.appendChild(e)
      }))
    }
  }
  start(e, n) {
    n || (n = {});
    const t = new LanguagesGC(e);
    this.config = {
      border: n.border || "",
      position: n.position || "left",
      hideAfterClick: n.hideAfterClick || !1,
      bannerStyle: n.style || 2
    }, this.tracking = {
      AnalyticsCode: n.analytics || void 0,
      FacebookPixelCode: n.facebookPixel || void 0,
      HotjarTrackingCode: n.hotjar || void 0,
      customScript: n.customScript || void 0
    }, this.banner = {
      description: n.bannerDescription || t.bannerDescription,
      linkText: n.bannerLinkText || t.bannerLinkText,
      link: n.policyLink || "/terms/privacy-policy.html",
      background: n.bannerBackground || "#5ab9ea",
      color: n.bannerColor || "#fff",
      heading: "none" !== n.bannerHeading ? n.bannerHeading || t.bannerHeading : "",
      acceptBtn: {
        text: n.acceptBtnText || t.acceptBtnText,
        background: n.acceptBtnBackground || "#8860d0",
        color: n.acceptBtnColor || "#fff"
      },
      rejectBtn: {
        text: n.rejectBtnText || t.rejectBtnText,
        background: n.rejectBtnBackground || "#5680e9",
        color: n.rejectBtnColor || "#fff"
      },
      manageCookies: {
        color: n.manageColor || "#fff",
        background: n.manageBackground || "#5ab9ea",
        text: n.manageText || t.manageText
      }
    }, window.addEventListener("load", (() => {
      this.render()
    }))
  }
}
class LanguagesGC {
  constructor(e) {
    this.init();
    let n = this.arrLang[e] || this.arrLang.en;
    this.bannerHeading = n.bannerHeading, this.bannerDescription = n.bannerDescription, this.bannerLinkText = n.bannerLinkText, this.acceptBtnText = n.acceptBtnText, this.rejectBtnText = n.rejectBtnText, this.manageText = n.manageText
  }
  init() {
    this.arrLang = {
      en: {
        bannerHeading: "This website uses cookies",
        bannerDescription: "This website uses our own and third-party cookies to personalize content and to analyze web traffic.",
        bannerLinkText: "Read more about cookies",
        acceptBtnText: "Accept cookies",
        rejectBtnText: "Reject",
        manageText: "Manage cookies"
      },
      pl: {
        bannerHeading: "Ta strona używa plików cookie",
        bannerDescription: "Ta strona używa plików cookie - zarówno własnych, jak i od zewnętrznych dostawców, w celu personalizacji treści i analizy ruchu.",
        bannerLinkText: "Więcej o plikach cookie",
        acceptBtnText: "Zaakceptuj pliki cookie",
        rejectBtnText: "Odrzuć",
        manageText: "Ustawienia plików cookie"
      }
    }
  }
}
const glowCookies = new GlowCookies;