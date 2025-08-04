"use strict";

const dayOfBirth = new Date("2026-04-14");

// Getting elements from html
const days = document.querySelector(".days");
const hours = document.querySelector(".hours");
const min = document.querySelector(".min");
const sec = document.querySelector(".sec");

function updateCountdown() {
    const now = new Date();
    const diff = dayOfBirth - now;

    if (diff <= 0) {
        days.textContent = "0";
        hours.textContent = "0";
        min.textContent = "0";
        sec.textContent = "0";
        return;
    }

    const d = Math.floor(diff / (1000 * 60 * 60 * 24));
    const h = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const m = Math.floor((diff / (1000 * 60)) % 60);
    const s = Math.floor((diff / 1000) % 60);

    days.textContent = d;
    hours.textContent = h;
    min.textContent = m;
    sec.textContent = s;
}

updateCountdown();
setInterval(updateCountdown, 1000);
