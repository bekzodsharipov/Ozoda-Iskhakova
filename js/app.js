document.addEventListener("DOMContentLoaded", (function() {
    const e = document.querySelector(".lazyHTML");
    e && (e.innerHTML = ` <section class="users">
        <div class="users__container container">
            <h2 class="users__title">KURS KIMLAR UCHUN:</h2>


            <div class="users__wrapper">
                <div class="users__box">
                    <div class="users__top">
                        <h3 class="users__top__title">01/</h3>
                        <p class="users__top__text">Boshlang'ich, noldan <br> tikishni o'rganmoqchi</p>
                    </div>


                    <div class="users__info">
                        <img class="users__images" src="./images/users/1.avif" loading="lazy" decoding="async"
                            width="320" height="249" alt="images">

                        <div class="users__row">
                            <img src="./images/users/icon.avif" loading="lazy" decoding="async" width="46" height="46"
                                alt="icon">
                            <div class="users__item">
                                <p>@mona.idesign_</p>
                            </div>
                        </div>

                        <ul class="users__nav" style="margin-bottom: 35px;">
                            <h4 class="users__nav__title">Kursdan oldin:</h4>
                            <li class="users__nav__list">O'qishga noldan keldim</li>
                        </ul>

                        <ul class="users__nav">
                            <h4 class="users__nav__title">Kursdan keyin:</h4>
                            <li class="users__nav__list">Asos andozani mukammal o'rgandim</li>
                            <li class="users__nav__list">Без примерка va no standart qomatga <br> bemalol tika olaman
                            </li>
                            <li class="users__nav__list">Qiyin bichimdagi, klassik va astarlik <br> fasonlarni mustaqil
                                bicha
                                olaman</li>
                        </ul>
                    </div>
                </div>

                <div class="users__box">
                    <div class="users__top">
                        <h3 class="users__top__title">02/</h3>
                        <p class="users__top__text">Malaka oshirishni istagan <br> tikuvchilar uchun</p>
                    </div>


                    <div class="users__info">
                        <img class="users__images" src="./images/users/2.avif" loading="lazy" decoding="async"
                            width="320" height="249" alt="images">


                        <ul class="users__nav" style="margin-bottom: 35px;">
                            <h4 class="users__nav__title">Kursdan oldin:</h4>
                            <li class="users__nav__list">Andoza bilan ishlamaganman</li>
                            <li class="users__nav__list">Yeng chiqarishda qiynalganman</li>
                            <li class="users__nav__list">Klassik fasonlarni bichib-tikishni <br> bilmas edim</li>
                        </ul>

                        <ul class="users__nav">
                            <h4 class="users__nav__title">Kursdan keyin:</h4>
                            <li class="users__nav__list">Oylik daromadim 4x baravar oshdi</li>
                            <li class="users__nav__list">Astarlik kostyum va klassik shimlarni <br> bichib-tikishni
                                o'rgandim</li>
                        </ul>
                    </div>
                </div>

                <div class="users__box">
                    <div class="users__top">
                        <h3 class="users__top__title">03/</h3>
                        <p class="users__top__text">Ishlab chiqarish biznesini <br> ochishni istaganlar uchun</p>
                    </div>


                    <div class="users__info">
                        <img class="users__images" src="./images/users/3.avif" loading="lazy" decoding="async"
                            width="320" height="249" alt="images">

                        <div class="users__row">
                            <img src="./images/users/icon.avif" loading="lazy" decoding="async" width="46" height="46"
                                alt="icon">
                            <div class="users__item">
                                <p>@sayyora_design</p>
                            </div>
                        </div>

                        <ul class="users__nav" style="margin-bottom: 35px;">
                            <h4 class="users__nav__title">Kursdan oldin:</h4>
                            <li class="users__nav__list">Andozamda kamchilik bo'lgan</li>
                            <li class="users__nav__list">“Ko'p narsani bilaman” deb o'ylaganman</li>
                        </ul>

                        <ul class="users__nav">
                            <h4 class="users__nav__title">Kursdan keyin:</h4>
                            <li class="users__nav__list">Oylik daromadim: 15 mln so'm</li>
                            <li class="users__nav__list">Uy liboslari yo'nalishida kolleksiya <br> chiqardim</li>
                            <li class="users__nav__list">Andozani mukammal o'rgandim va <br> tikkan liboslarimiz
                                qolipdek tushyapti</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </section>


    <section class="tariffs">
        <div class="tariffs__container container">
            <h2 class="tariffs__title">TARIFLAR</h2>

            <div class="tariffs__box" style="margin-bottom: 35px;">
                <div class="tariffs__name">
                    <h3>CLASSIC tarif</h3>
                </div>

                <div class="tariffs__col">
                    <div class="tariffs__info">
                        <div class="tariffs__item">
                            <div class="tariffs__dot"></div>
                            <p class="tariffs__text">Asos va yeng andozasi</p>
                        </div>
                        <div class="tariffs__item">
                            <div class="tariffs__dot"></div>
                            <p class="tariffs__text">O’lchov olish</p>
                        </div>
                        <div class="tariffs__item">
                            <div class="tariffs__dot"></div>
                            <p class="tariffs__text">Asos andoza</p>
                        </div>
                        <div class="tariffs__item">
                            <div class="tariffs__dot"></div>
                            <p class="tariffs__text">Yeng andoza</p>
                        </div>
                        <div class="tariffs__item">
                            <div class="tariffs__dot"></div>
                            <p class="tariffs__text">Libos balansi</p>
                        </div>
                        <div class="tariffs__item">
                            <div class="tariffs__dot"></div>
                            <p class="tariffs__text">Bichish</p>
                        </div>
                        <div class="tariffs__item">
                            <div class="tariffs__dot"></div>
                            <p class="tariffs__text">Ko’krak vitochka ko’chirish</p>
                        </div>
                        <div class="tariffs__item">
                            <div class="tariffs__dot"></div>
                            <p class="tariffs__text">Yeng modellashtirish</p>
                        </div>
                        <div class="tariffs__item">
                            <div class="tariffs__dot"></div>
                            <p class="tariffs__text">Bachokli kostyum</p>
                        </div>
                        <div class="tariffs__item">
                            <div class="tariffs__dot"></div>
                            <p class="tariffs__text">Bachokli kastyum andozasini chizish</p>
                        </div>
                        <div class="tariffs__item">
                            <div class="tariffs__dot"></div>
                            <p class="tariffs__text">Bachokli kastyum yengi</p>
                        </div>
                        <div class="tariffs__item">
                            <div class="tariffs__dot"></div>
                            <p class="tariffs__text">Bachokli kastyum bichilishi</p>
                        </div>
                        <div class="tariffs__item">
                            <div class="tariffs__dot"></div>
                            <p class="tariffs__text">Bachokli kastym choklarini <br> VTO dazmol qilish</p>
                        </div>
                        <div class="tariffs__item">
                            <div class="tariffs__dot"></div>
                            <p class="tariffs__text">Yeng shlitsasini tikish</p>
                        </div>
                        <div class="tariffs__item">
                            <div class="tariffs__dot"></div>
                            <p class="tariffs__text">Astar tikish texnikasi</p>
                        </div>
                        <div class="tariffs__item">
                            <div class="tariffs__dot"></div>
                            <p class="tariffs__text">1 oy davomida kuratorlar nazorati</p>
                        </div>
                        <div class="tariffs__item">
                            <div class="tariffs__dot"></div>
                            <p class="tariffs__text">2 marotaba Kuratorlar bilan Jonli Efir</p>
                        </div>
                        <div class="tariffs__item">
                            <div class="tariffs__dot"></div>
                            <p class="tariffs__text">3 oy o’qish materiallariga kirish imkoniyati</p>
                        </div>
                    </div>

                    <button class="tariffs__btn registerBtn">Ma'lumot olish</button>
                </div>
            </div>

            <div class="tariffs__box">
                <div class="tariffs__names">
                    <h3>Standart tarif</h3>
                </div>

                <div class="tariffs__cols">
                    <div class="tariffs__info">
                        <div class="tariffs__item">
                            <div class="tariffs__dots"></div>
                            <p class="tariffs__texts">10 xil yubka</p>
                        </div>
                        <div class="tariffs__item">
                            <div class="tariffs__dots"></div>
                            <p class="tariffs__texts">Klassik shim (bichish tikish <br> texnikasi VTO dazmoli)</p>
                        </div>
                        <div class="tariffs__item">
                            <div class="tariffs__dots"></div>
                            <p class="tariffs__texts">Klassik shim (bichish tikish <br> texnikasi VTO dazmoli)</p>
                        </div>
                        <div class="tariffs__item">
                            <div class="tariffs__dots"></div>
                            <p class="tariffs__texts">Asos va yeng andozasi</p>
                        </div>
                        <div class="tariffs__item">
                            <div class="tariffs__dots"></div>
                            <p class="tariffs__texts">O’lchov olish</p>
                        </div>
                        <div class="tariffs__item">
                            <div class="tariffs__dots"></div>
                            <p class="tariffs__texts">Asos andoza</p>
                        </div>
                        <div class="tariffs__item">
                            <div class="tariffs__dots"></div>
                            <p class="tariffs__texts">Yeng andoza</p>
                        </div>
                        <div class="tariffs__item">
                            <div class="tariffs__dots"></div>
                            <p class="tariffs__texts">Libos balansi</p>
                        </div>
                        <div class="tariffs__item">
                            <div class="tariffs__dots"></div>
                            <p class="tariffs__texts">Bichish</p>
                        </div>
                        <div class="tariffs__item">
                            <div class="tariffs__dots"></div>
                            <p class="tariffs__texts">Ko’krak vitochka ko’chirish</p>
                        </div>
                        <div class="tariffs__item">
                            <div class="tariffs__dots"></div>
                            <p class="tariffs__texts">Yeng modellashtirish</p>
                        </div>
                        <div class="tariffs__item">
                            <div class="tariffs__dots"></div>
                            <p class="tariffs__texts">Bachokli kostyum</p>
                        </div>
                        <div class="tariffs__item">
                            <div class="tariffs__dots"></div>
                            <p class="tariffs__texts">Bachokli kastyum andozasini chizish</p>
                        </div>
                        <div class="tariffs__item">
                            <div class="tariffs__dots"></div>
                            <p class="tariffs__texts">Bachokli kastyum yengi</p>
                        </div>
                        <div class="tariffs__item">
                            <div class="tariffs__dots"></div>
                            <p class="tariffs__texts">Bachokli kastyum bichilishi</p>
                        </div>
                        <div class="tariffs__item">
                            <div class="tariffs__dots"></div>
                            <p class="tariffs__texts">Bachokli kastym choklarini <br> VTO dazmol qilish</p>
                        </div>
                        <div class="tariffs__item">
                            <div class="tariffs__dots"></div>
                            <p class="tariffs__texts">Yeng shlitsasini tikish</p>
                        </div>
                        <div class="tariffs__item">
                            <div class="tariffs__dots"></div>
                            <p class="tariffs__texts">Astar tikish texnikasi</p>
                        </div>
                        <div class="tariffs__item">
                            <div class="tariffs__dots"></div>
                            <p class="tariffs__texts">7 xil yoqa turlari(rubashka yoqa, stoyka <br> yoqa qaytarma yoqa
                                va
                                hokazo)</p>
                        </div>
                        <div class="tariffs__item">
                            <div class="tariffs__dots"></div>
                            <p class="tariffs__texts">Reglan</p>
                        </div>
                        <div class="tariffs__item">
                            <div class="tariffs__dots"></div>
                            <p class="tariffs__texts">Davomiyligi: 2 oy</p>
                        </div>
                        <div class="tariffs__item">
                            <div class="tariffs__dots"></div>
                            <p class="tariffs__texts">Kuratorlar nazorati va savol-javob <br> uchun chat</p>
                        </div>
                        <div class="tariffs__item">
                            <div class="tariffs__dots"></div>
                            <p class="tariffs__texts">4 marotaba Kuratorlar bilan Jonli Efir</p>
                        </div>
                        <div class="tariffs__item">
                            <div class="tariffs__dots"></div>
                            <p class="tariffs__texts">6 oy o’qish materiallariga kirish imkoniyati</p>
                        </div>
                    </div>

                    <button class="tariffs__btn registerBtn"
                        style="background: radial-gradient(128.21% 194.57% at 50.1% 0%, #FFE5BD 0%, #FFCC7F 100%); box-shadow: 0px 4px 0px 0px #897353; color: #28110C;">Ma'lumot
                        olish</button>
                </div>
            </div>
        </div>
    </section>


    <section class="speakerInfo">
        <div class="speakerInfo__container container">
            <h2 class="users__title">OZODA ISKHAKOVA</h2>

            <div class="speakerInfo__box">
                <div class="speakerInfo__imgBox">
                    <img src="./images/speaker.avif" loading="lazy" decoding="async" width="320" height="375"
                        alt="speaker">
                </div>

                <div class="tariffs__infos">
                    <div class="tariffs__item">
                        <div class="tariffs__dots"></div>
                        <p class="tariffs__texts">25 yillik tajribaga ega Dizayner</p>
                    </div>
                    <div class="tariffs__item">
                        <div class="tariffs__dots"></div>
                        <p class="tariffs__texts">4 ta davlatda filial Qatar, Rossiya, <br> Turkiya va O’zbekiston</p>
                    </div>
                    <div class="tariffs__item">
                        <div class="tariffs__dots"></div>
                        <p class="tariffs__texts">100 ta oshiq sodiq xodimlar</p>
                    </div>
                    <div class="tariffs__item">
                        <div class="tariffs__dots"></div>
                        <p class="tariffs__texts">1500 dan ziyod Tikuvchilik yo'nalishini <br> biznesga aylantira olgan
                            shogirdlar</p>
                    </div>
                    <div class="tariffs__item">
                        <div class="tariffs__dots"></div>
                        <p class="tariffs__texts">O'zbekistondan yagona va birinchi <br> dizaynerlardan bo'lib IFCO
                            Istanbul, <br> Zinatha
                            Qatar va Fransiya dunyo <br> namoyishlarda Xalqaro bozorda <br> kolleksiyasi orqali sotuv
                            qilayotgan <br> Dizayner
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </section>


    <section class="auto-swiper">
        <div class="auto-swiper__track">
            <img src="./images/animation/1.avif" loading="lazy" decoding="async" width="276" height="491" alt="images">
            <img src="./images/animation/2.avif" loading="lazy" decoding="async" width="276" height="491" alt="images">
            <img src="./images/animation/3.avif" loading="lazy" decoding="async" width="276" height="491" alt="images">
            <img src="./images/animation/4.avif" loading="lazy" decoding="async" width="276" height="491" alt="images">

            <img src="./images/animation/1.avif" loading="lazy" decoding="async" width="276" height="491" alt="images">
            <img src="./images/animation/2.avif" loading="lazy" decoding="async" width="276" height="491" alt="images">
            <img src="./images/animation/3.avif" loading="lazy" decoding="async" width="276" height="491" alt="images">
            <img src="./images/animation/4.avif" loading="lazy" decoding="async" width="276" height="491" alt="images">
        </div>
    </section>


    <section class="thought">
        <div class="thought__container container">
            <h2 class="users__title">BIZ HAQIMIZDA FIKRLAR:</h2>

            <div class="thought__box" style="margin-bottom: 35px;">
                <div class="thought__img">
                    <wistia-player media-id="ctf0t1yoxr" aspect="0.5625"></wistia-player>
                </div>
                <div class="thought__img">
                    <wistia-player media-id="2qsgca5h1i" aspect="0.5625"></wistia-player>
                </div>
                <div class="thought__img">
                    <wistia-player media-id="2v4surcjx8" aspect="0.5625"></wistia-player>
                </div>
                <div class="thought__img">
                    <wistia-player media-id="yjuecnhj6z" aspect="0.5625"></wistia-player>
                </div>
                <div class="thought__img">
                    <wistia-player media-id="5dtd6apu5q" aspect="0.5625"></wistia-player>
                </div>
                <div class="thought__img">
                    <wistia-player media-id="cgbck9vwkb" aspect="0.5625"></wistia-player>
                </div>
            </div>

            <button class="tariffs__btn registerBtn">Ma'lumot olish</button>
        </div>
    </section>


    <footer class="footer">
        <div class="footer__container">
            <h3 class="footer__title">OZODA ISKHAKOVA</h3>
            <p class="footer__text" style="margin-bottom: 16px;">This site or product is not part of or endorsed by
                Facebook, <br> Google, or any social media platform in any
                way FACEBOOK <br> is a trademark of META PLATFORMS, Inc. YOUTUBE and <br> GOOGLE are trademarks of
                ALPHABET, Inc.
            </p>
            <p class="footer__text">Barcha huquqlar himoyalangan, 2026.</p>
        </div>
    </footer>`)
})),
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







