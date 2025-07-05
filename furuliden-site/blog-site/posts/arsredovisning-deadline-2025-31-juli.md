---
title: "Nedräkning till deadline: Årsredovisning och INK2 juli 2025"
date: 2025-07-01
layout: post.njk
permalink: "posts/arsredovisning-deadline-2025-31-juli.html"
---

<section class="qa-box">
  <h3>📆 31 juli – Sista dag för årsredovisning</h3>
  <div class="sub-box">
    <h4>Nedräkning</h4>
    <p id="countdown-ar">Laddar...</p>
  </div>
  <div class="sub-box">
    <h4>Vad händer om du är sen?</h4>
    <ul>
      <li>Bolagsverket tar ut förseningsavgift på <strong>7 500 kr</strong></li>
      <li>Vid fortsatt försening kan avgiften öka till <strong>30 000 kr</strong></li>
    </ul>
  </div>
</section>

<section class="qa-box">
  <h3>📆 1 augusti – Inkomstdeklaration 2 (INK2)</h3>
  <div class="sub-box">
    <h4>Nedräkning</h4>
    <p id="countdown-ink2">Laddar...</p>
  </div>
  <div class="sub-box">
    <h4>Vad händer om du är sen?</h4>
    <ul>
      <li>Skatteverket tar ut förseningsavgift på <strong>6 250 kr</strong></li>
      <li>Risk för kontrollbesök, skattetillägg och F-skatt indragen</li>
    </ul>
  </div>
</section>

<p>För att undvika kostsamma konsekvenser – <a href="/kontakt.html">kontakta oss idag</a> så hjälper vi dig få in allt i tid.</p>

<script>
function countdownTo(id, targetDate, label) {
  const el = document.getElementById(id);
  const now = new Date();
  const diff = targetDate - now;
  const days = Math.ceil(diff / (1000 * 60 * 60 * 24));

  if (days > 0) {
    el.innerHTML = `<strong>${days} dagar kvar</strong> ⚠️`;
    el.classList.add("blink");
  } else {
    el.innerHTML = `🚨 Deadline för <strong>${label}</strong> har passerat.`;
    el.classList.add("blink");
  }
}

function updateCountdowns() {
  const now = new Date();
  const year = now.getMonth() > 6 ? now.getFullYear() + 1 : now.getFullYear();
  const arDate = new Date(year, 6, 31);    // 31 juli
  const ink2Date = new Date(year + (now.getMonth() > 6 ? 1 : 0), 7, 1);  // 1 augusti

  countdownTo("countdown-ar", arDate, "Årsredovisning");
  countdownTo("countdown-ink2", ink2Date, "INK2");
}

updateCountdowns();
setInterval(updateCountdowns, 1000 * 60 * 30); // uppdatera var 30:e minut
</script>

<section>
     <div style="text-align:center;">
        <a href="../../ardusen.html" class="cta-button">Läs mer om risker för att bli försenad här</a>
      </div>
          <div style="text-align:center;">
        <a href="../../contactus.html" class="cta-button">Eller kontakta oss redan idag</a>
      </div>
      </section>