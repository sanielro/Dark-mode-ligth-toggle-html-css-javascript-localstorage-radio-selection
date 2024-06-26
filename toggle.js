  function loadmode() {
    document.documentElement.getAttribute("theme"), document.createElement("script")
  }
  window.addEventListener("DOMContentLoaded", (() => {
    setMetaThemeColor(), document.querySelector("#theme-selector") && (document.querySelector("#theme-selector").value = document.documentElement.getAttribute("theme"), document.querySelector("#theme-selector").addEventListener("change", (function() {
      setTheme(this.value)
    }))), window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", (e => {
      "auto" === localStorage.getItem("theme") && setTheme("auto")
    })), loadmode()
  }));
