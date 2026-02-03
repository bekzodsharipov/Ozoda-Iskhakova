async function sendPhoneAndTime() {
  const raw = localStorage.getItem("formData");
  if (!raw) return;

  let data;
  try {
    data = JSON.parse(raw);
  } catch (e) {
    console.error("formData JSON parse error:", e);
    return;
  }

  const phoneRaw = (data?.TelefonRaqam ?? "").toString().trim();
  const timeRaw = (data?.SanaSoat ?? "").toString().trim(); 

  const digits = phoneRaw.replace(/\D/g, "");
  const isValidPhone =
    (phoneRaw.startsWith("+998") && digits.length === 12) ||
    (!phoneRaw.startsWith("+") && digits.length >= 9 && digits.length <= 12);

  if (!isValidPhone) {
    console.warn("Telefon noto‘g‘ri, yuborilmadi:", phoneRaw);
    return;
  }

  const regTime = timeRaw || new Date().toISOString();

  const formData = new FormData();
  formData.append("sheetName", "Lead");
  formData.append("Telefon raqam", phoneRaw);
  formData.append("Royhatdan o'tgan vaqti", regTime);

  try {
    const res = await fetch(
      "https://script.google.com/macros/s/AKfycbzjCFc9VJrpB0C6lw0II5xDkON10WyNtNTzORSVVIaK7MXwvP387wjkjLiqVr3eutaB/exec",
      { method: "POST", body: formData }
    );

    if (!res.ok) throw new Error("API response was not ok");

    localStorage.removeItem("formData");
  } catch (err) {
    console.error("Error submitting form:", err);
    const el = document.getElementById("errorMessage");
    if (el) el.style.display = "block";
  }
}

window.addEventListener("load", sendPhoneAndTime);



