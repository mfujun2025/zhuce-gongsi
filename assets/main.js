/* 注册公司.cn · 全站共享交互脚本 */
(function () {
  "use strict";
  var $ = function (s) { return document.querySelector(s); };

  /* 头部阴影 & 回到顶部 */
  addEventListener("scroll", function () {
    var h = $("#header"), t = $("#toTop");
    if (h) h.classList.toggle("scrolled", scrollY > 8);
    if (t) t.classList.toggle("on", scrollY > 420);
  });
  var toTop = $("#toTop");
  if (toTop) toTop.addEventListener("click", function () { scrollTo({ top: 0, behavior: "smooth" }); });

  /* 轻提示 */
  window.__toast = function (msg) {
    var t = $("#toast");
    if (!t) return;
    t.textContent = msg; t.classList.add("on");
    clearTimeout(t._tm);
    t._tm = setTimeout(function () { t.classList.remove("on"); }, 2200);
  };
})();
