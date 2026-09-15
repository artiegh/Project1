const revealItems = document.querySelectorAll(".reveal");

const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("is-visible");
    }
  });
}, { threshold: 0.15 });

revealItems.forEach((item) => revealObserver.observe(item));

/* =========================================================
   2) เมนูมือถือ: กดปุ่มแฮมเบอร์เกอร์แล้วเปิด/ปิดเมนู
========================================================= */
const navToggle = document.getElementById("navToggle");
const navLinks = document.getElementById("navLinks");

navToggle.addEventListener("click", () => {
  navLinks.classList.toggle("is-open");
});

// ปิดเมนูอัตโนมัติเมื่อคลิกลิงก์ (สำหรับจอมือถือ)
navLinks.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => navLinks.classList.remove("is-open"));
});

/* =========================================================
   3) ฟอร์มติดต่อ: ตรวจสอบและแสดงข้อความยืนยัน
   หมายเหตุ: นี่คือการจำลองการส่ง (ยังไม่เชื่อมกับอีเมลจริง)
   ถ้าต้องการส่งอีเมลจริง สามารถใช้บริการอย่าง Formspree เพิ่มเติมได้
========================================================= */
const contactForm = document.getElementById("contactForm");
const formStatus = document.getElementById("formStatus");

contactForm.addEventListener("submit", (event) => {
  event.preventDefault(); // ป้องกันไม่ให้หน้าเว็บโหลดใหม่

  const name = document.getElementById("name").value.trim();

  formStatus.textContent = `ขอบคุณครับ/ค่ะ คุณ${name} ข้อความของคุณถูกบันทึกแล้ว!`;
  contactForm.reset();
});


