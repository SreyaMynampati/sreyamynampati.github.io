document.addEventListener("DOMContentLoaded", () => {

  /* ---------------- AUDIO ---------------- */

  const vinylWrapper = document.querySelector(".vinyl-wrapper");
  const vinylAudio = document.getElementById("vinyl-audio");

  const lamp = document.querySelector(".lamp");
  const lampAudio = document.getElementById("lamp-audio");

  let unlocked = false;
  let vinylPlaying = false;
  let lampPlaying = false;

  document.addEventListener("click", () => {
    unlocked = true;
  });

  if (vinylWrapper && vinylAudio) {
    vinylWrapper.addEventListener("mouseenter", () => {
      if (!unlocked || vinylPlaying) return;

      if (lampPlaying) {
        lampAudio.pause();
        lampPlaying = false;
      }

      vinylPlaying = true;
      vinylAudio.currentTime = 0;
      vinylAudio.volume = 0.6;
      vinylAudio.play().catch(() => {});
    });

    vinylWrapper.addEventListener("mouseleave", () => {
      vinylPlaying = false;
      vinylAudio.pause();
    });
  }

  if (lamp && lampAudio) {
    lamp.addEventListener("mouseenter", () => {
      if (!unlocked || lampPlaying) return;

      if (vinylPlaying) {
        vinylAudio.pause();
        vinylPlaying = false;
      }

      lampPlaying = true;
      lampAudio.currentTime = 0;
      lampAudio.volume = 0.6;
      lampAudio.play().catch(() => {});
    });

    lamp.addEventListener("mouseleave", () => {
      lampPlaying = false;
      lampAudio.pause();
    });
  }

  /* ---------------- CONTACT SCROLL ANIMATION ---------------- */



});
