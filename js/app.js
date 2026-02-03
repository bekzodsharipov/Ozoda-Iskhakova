document.addEventListener("DOMContentLoaded", (function() {
    const e = document.querySelectorAll(".registerBtn"),
        t = document.getElementById("registrationModal"),
        n = document.getElementById("closeModalBtn"),
        o = document.querySelector(".homeModalOverlay"),
        l = document.getElementById("registrationForm"),
        d = document.getElementById("name"),
        r = document.getElementById("nameError"),
        i = document.getElementById("phone"),
        a = document.getElementById("phoneError"),
        s = document.getElementById("submitBtn"),
        c = window.phoneFormatter;
    let m = !1,
        y = 0;

    function u() {
        t && (m = !0, y = window.scrollY, t.style.display = "block", document.body.style.overflow = "hidden", r.style.display = "none", a.style.display = "none")
    }

    function E() {
        t && m && (m = !1, t.style.display = "none", document.body.style.overflow = "", document.body.style.position = "", document.body.style.top = "", window.scrollTo(0, y))
    }
    e.forEach((e => e.addEventListener("click", u))), n && n.addEventListener("click", E), o && o.addEventListener("click", E), l.addEventListener("submit", (function(e) {
        if (e.preventDefault(), !c) return console.error("phoneFormatter is not initialized. Check formatter.js load order and p/g variables."), void(a.style.display = "block");
        const t = d.value.trim(),
            n = i.value.trim();
        let o = !1;
        if (t ? r.style.display = "none" : (r.style.display = "block", o = !0), c.validate(n) ? a.style.display = "none" : (a.style.display = "block", o = !0), o) return;
        s.textContent = "YUBORILMOQDA...", s.disabled = !0;
        const l = new Date,
            m = l.toLocaleDateString("uz-UZ"),
            y = l.toLocaleTimeString("uz-UZ"),
            u = {
                Ism: t,
                TelefonRaqam: c.getCurrentCode() + " " + n,
                SanaSoat: m + " - " + y
            };
        localStorage.setItem("formData", JSON.stringify(u)), window.location.href = "/thankYou.html", s.textContent = "DAVOM ETISH", s.disabled = !1, d.value = "", i.value = "", E()
    }))
}));

  let time = 5 * 60; 
  const timerEl = document.getElementById("timer");

  function render() {
    const mm = String(Math.floor(time / 60)).padStart(2, "0");
    const ss = String(time % 60).padStart(2, "0");

    timerEl.textContent = `${mm} : ${ss}`;

    if (time > 0) time--;
    else clearInterval(t);
  }

  render();
  const t = setInterval(render, 1000);