/***********************
 * 1) Lazy HTML inject (IntersectionObserver)
 ***********************/
document.addEventListener("DOMContentLoaded", () => {
    const mount = document.getElementById("lazyHTML");
    const sentinel = document.getElementById("lazySentinel");
    if (!mount || !sentinel) return;

    let injected = false;

    const inject = () => {
        if (injected) return;
        injected = true;

        mount.innerHTML = `
    <section class="thought">
        <div class="thought__container container">
            <h2 class="users__title">BIZ HAQIMIZDA FIKRLAR:</h2>
            <div class="thought__box" style="margin-bottom: 35px;">
              <div class="thought__img"><div class="wistiaMount" data-media="ctf0t1yoxr" data-aspect="0.5625"></div></div>
<div class="thought__img"><div class="wistiaMount" data-media="2qsgca5h1i" data-aspect="0.5625"></div></div>
<div class="thought__img"><div class="wistiaMount" data-media="2v4surcjx8" data-aspect="0.5625"></div></div>
<div class="thought__img"><div class="wistiaMount" data-media="yjuecnhj6z" data-aspect="0.5625"></div></div>
<div class="thought__img"><div class="wistiaMount" data-media="5dtd6apu5q" data-aspect="0.5625"></div></div>
<div class="thought__img"><div class="wistiaMount" data-media="cgbck9vwkb" data-aspect="0.5625"></div></div>
            </div> <button class="tariffs__btn registerBtn">Ma'lumot olish</button>
        </div>
    </section>
    <footer class="footer">
        <div class="footer__container">
            <h3 class="footer__title">OZODA ISKHAKOVA</h3>
            <p class="footer__text" style="margin-bottom: 16px;">This site or product is not part of or endorsed by
                Facebook, <br> Google, or any social media platform in any way FACEBOOK <br> is a trademark of META
                PLATFORMS, Inc. YOUTUBE and <br> GOOGLE are trademarks of ALPHABET, Inc. </p>
            <p class="footer__text">Barcha huquqlar himoyalangan, 2026.</p>
        </div>
    </footer>`;
        mount.innerHTML = mount.innerHTML || "";

        initWistiaLazy();
    };

    const io = new IntersectionObserver(
        (entries) => {
            if (entries.some((e) => e.isIntersecting)) {
                io.disconnect();
                inject();
            }
        },
        { rootMargin: "600px 0px" }
    );

    io.observe(sentinel);
});

/***********************
 * 2) Wistia lazy load (CLICK-TO-PLAY)
 *    - player.js faqat kerak bo‘lganda yuklanadi
 ***********************/
function loadWistiaOnce() {
    if (window.__wistiaLoading) return window.__wistiaLoading;

    window.__wistiaLoading = new Promise((resolve) => {
        // Agar avvaldan qo‘shilgan bo‘lsa ham qayta qo‘shmaymiz
        if (document.querySelector('script[src="https://fast.wistia.com/player.js"]')) {
            resolve();
            return;
        }

        const s = document.createElement("script");
        s.src = "https://fast.wistia.com/player.js";
        s.async = true;
        s.onload = () => resolve();
        document.head.appendChild(s);
    });

    return window.__wistiaLoading;
}

function mountWistia(box) {
    const id = box.getAttribute("data-wistia");
    const aspect = box.getAttribute("data-aspect") || "0.5625"; // 9:16 default
    if (!id) return;

    // poster + button o‘rniga player render
    box.innerHTML = `<wistia-player media-id="${id}" aspect="${aspect}"></wistia-player>`;
}

function initWistiaLazy() {
    const items = document.querySelectorAll(".wistiaLazy");
    if (!items.length) return;

    // Click-to-play
    items.forEach((box) => {
        if (box.__bound) return;
        box.__bound = true;

        box.addEventListener(
            "click",
            async () => {
                if (box.__mounted) return;
                box.__mounted = true;

                await loadWistiaOnce();
                mountWistia(box);
            },
            { passive: true }
        );
    });

    // Optional: user video section’ga yaqinlashsa player.js ni oldindan yuklab qo‘yadi
    const preIo = new IntersectionObserver(
        (entries) => {
            if (entries.some((e) => e.isIntersecting)) {
                preIo.disconnect();
                loadWistiaOnce();
            }
        },
        { rootMargin: "900px 0px" }
    );

    preIo.observe(items[0]);
}

/***********************
 * 3) Modal + form validation + redirect
 ***********************/
document.addEventListener("DOMContentLoaded", () => {
    const btns = document.querySelectorAll(".registerBtn");
    const modal = document.getElementById("registrationModal");
    const closeBtn = document.getElementById("closeModalBtn");
    const overlay = document.querySelector(".homeModalOverlay");
    const form = document.getElementById("registrationForm");

    const nameInput = document.getElementById("name");
    const nameError = document.getElementById("nameError");

    const phoneInput = document.getElementById("phone");
    const phoneError = document.getElementById("phoneError");

    const submitBtn = document.getElementById("submitBtn");
    const formatter = window.phoneFormatter;

    let opened = false;
    let lastScrollY = 0;

    function openModal() {
        if (!modal) return;
        opened = true;
        lastScrollY = window.scrollY;

        modal.style.display = "block";
        document.body.style.overflow = "hidden";

        if (nameError) nameError.style.display = "none";
        if (phoneError) phoneError.style.display = "none";
    }

    function closeModal() {
        if (!modal || !opened) return;
        opened = false;

        modal.style.display = "none";
        document.body.style.overflow = "";

        window.scrollTo(0, lastScrollY);
    }

    btns.forEach((b) => b.addEventListener("click", openModal));
    if (closeBtn) closeBtn.addEventListener("click", closeModal);
    if (overlay) overlay.addEventListener("click", closeModal);

    if (!form) return;

    form.addEventListener("submit", (e) => {
        e.preventDefault();

        if (!formatter) {
            console.error("phoneFormatter is not initialized. Check phoneFormatter.js load order.");
            if (phoneError) phoneError.style.display = "block";
            return;
        }

        const name = (nameInput?.value || "").trim();
        const phone = (phoneInput?.value || "").trim();

        let hasError = false;

        if (!name) {
            if (nameError) nameError.style.display = "block";
            hasError = true;
        } else {
            if (nameError) nameError.style.display = "none";
        }

        if (!formatter.validate(phone)) {
            if (phoneError) phoneError.style.display = "block";
            hasError = true;
        } else {
            if (phoneError) phoneError.style.display = "none";
        }

        if (hasError) return;

        if (submitBtn) {
            submitBtn.textContent = "YUBORILMOQDA...";
            submitBtn.disabled = true;
        }

        const now = new Date();
        const date = now.toLocaleDateString("uz-UZ");
        const time = now.toLocaleTimeString("uz-UZ");

        const data = {
            Ism: name,
            TelefonRaqam: formatter.getCurrentCode() + " " + phone,
            SanaSoat: date + " - " + time,
        };

        localStorage.setItem("formData", JSON.stringify(data));

        // redirect
        window.location.href = "/thankYou.html";

        // (bu pastdagi kod redirect bo‘lgani uchun ko‘p holatda ishlamaydi, lekin qoldirdim)
        if (submitBtn) {
            submitBtn.textContent = "DAVOM ETISH";
            submitBtn.disabled = false;
        }

        if (nameInput) nameInput.value = "";
        if (phoneInput) phoneInput.value = "";

        closeModal();
    });
});

/***********************
 * 4) Countdown timer (05:00)
 ***********************/
let time = 5 * 60;
const timerEl = document.getElementById("timer");

function renderTimer() {
    if (!timerEl) return;

    const mm = String(Math.floor(time / 60)).padStart(2, "0");
    const ss = String(time % 60).padStart(2, "0");

    timerEl.textContent = `${mm} : ${ss}`;

    if (time > 0) time--;
    else clearInterval(timerInterval);
}

renderTimer();
const timerInterval = setInterval(renderTimer, 1000);

function loadWistiaOnce() {
    if (window.__wistiaLoading) return window.__wistiaLoading;
  
    window.__wistiaLoading = new Promise((resolve) => {
      // avoid duplicates
      if (document.querySelector('script[src="https://fast.wistia.com/player.js"]')) {
        resolve();
        return;
      }
  
      const s = document.createElement("script");
      s.src = "https://fast.wistia.com/player.js";
      s.async = true;
      s.onload = resolve;
      document.head.appendChild(s);
    });
  
    return window.__wistiaLoading;
  }
  
  function mountWistia(el) {
    const id = el.getAttribute("data-media");
    const aspect = el.getAttribute("data-aspect") || "0.5625";
    if (!id) return;
  
    el.innerHTML = `<wistia-player media-id="${id}" aspect="${aspect}"></wistia-player>`;
  }
  
  function initWistiaLazy() {
    const blocks = document.querySelectorAll(".wistiaMount");
    if (!blocks.length) return;
  
    const io = new IntersectionObserver(async (entries) => {
      const visible = entries.filter((e) => e.isIntersecting).map((e) => e.target);
      if (!visible.length) return;
  
      await loadWistiaOnce();
  
      visible.forEach((el) => {
        if (el.__mounted) return;
        el.__mounted = true;
        mountWistia(el);
        io.unobserve(el);
      });
    }, { rootMargin: "700px 0px" });
  
    blocks.forEach((b) => io.observe(b));
  }
  
  document.addEventListener("DOMContentLoaded", initWistiaLazy);
  