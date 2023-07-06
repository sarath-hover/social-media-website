// ================= SIDEBAR ==================

const menuItems = document.querySelectorAll(".menu-item");

// ========== MESSAGES =========

const messagesNotification = document.querySelector("#messages-notification");
const messages = document.querySelector(".messages");
const message = messages.querySelectorAll(".message");
const messageSearch = document.querySelector("#message-search");

// ========== THEME =========

const theme = document.querySelector("#theme");
const themeModal = document.querySelector(".customize-theme");
const fontSizes = document.querySelectorAll(".choose-size span");
var root = document.querySelector(":root");
const colorPalette = document.querySelectorAll(".choose-color span");
const Bg1 = document.querySelector(".bg-1");
const Bg2 = document.querySelector(".bg-2");
const Bg3 = document.querySelector(".bg-3");

// ====== REMOVE ALL ACTIVE CLASS FROM ALL ACTIVE ITEMS =========

const changeActiveItem = () => {
  menuItems.forEach((item) => {
    item.classList.remove("active");
  });
};

menuItems.forEach((item) => {
  item.addEventListener("click", () => {
    changeActiveItem();
    item.classList.add("active");
    if (item.id != "notifications") {
      document.querySelector(".notifications-popup");
      style.display = "none";
    } else {
      document.querySelector(".notifications-popup");
      style.display = "block";
      document.querySelector(
        "#notifications .notification-count"
      ).style.display = "none";
    }
  });
});

// ===================== SIDE BAR SECTION ENDS HERE =====================

// ===================== MESSAGES SECTION SARTS HERE ====================

// ------- SEARCHES CHATS --------

const searchMessage = () => {
  const val = messageSearch.value.toLowerCase();
  message.forEach((user) => {
    let name = user.querySelectorAll("h5").textContent.toLowerCase();
    if (name.indexOf(val) != -1) {
      user.style.display = "flex";
    } else {
      user.style.display = "none";
    }
  });
};

// ------- SEARCH CHAT --------

messageSearch.addEventListener("keyup", searchMessage);

// -------- HIGHLIGHT MESSAGES CARD WHEN MESSAGES MENU ITEM IS CLICKED--------

messagesNotification.addEventListener("click", () => {
  messages.style.boxShadow = "0 0 1rem var(--color-primary)";
  messagesNotification.querySelector(".notification-count").style.display =
    "none";
  setTimeout(() => {
    messages.style.boxShadow = "none";
  }, 2000);
});

// ============ MESSAGES SECTION ENDS HERE ==============

// =========== THEME/DISPLY CUSTOMIZATION ============

// ----------- OPEN CUSTOMIZATION -----------

const openThemeModal = () => {
  themeModal.style.display = "grid";
};

// ------------ CLOSE FUNCTION ------------

const closeThemeModal = (e) => {
  if (e.target.classList.contains("customize-theme")) {
    themeModal.style.display = "none";
  }
};

// ------------ CLOSE CUSTOMIZATION ------------

themeModal.addEventListener("click", closeThemeModal);

theme.addEventListener("click", openThemeModal);

// ========== FONT CUSTOMIZATION STARTS HERE ============

// ----------- REMOVE ACTIVE CLASS FROM FONT SIZE -----------

const removeSizeSelector = () => {
  fontSizes.forEach((size) => {
    size.classList.remove("active");
  });
};

fontSizes.forEach((size) => {
  size.addEventListener("click", () => {
    removeSizeSelector();
    let fontSize;
    size.classList.toggle("active");
    if (size.classList.contains("font-size-1")) {
      fontSize = "10px";
      root.style.setProperty("--sticky-top-left", "5.4rem");
      root.style.setProperty("--sticky-top-right", "5.4rem");
    } else if (size.classList.contains("font-size-2")) {
      fontSize = "13px";
      root.style.setProperty("--sticky-top-left", "5.4rem");
      root.style.setProperty("--sticky-top-right", "-7rem");
    } else if (size.classList.contains("font-size-3")) {
      fontSize = "16px";
      root.style.setProperty("--sticky-top-left", "-2rem");
      root.style.setProperty("--sticky-top-right", "-17rem");
    } else if (size.classList.contains("font-size-4")) {
      fontSize = "19px";
      root.style.setProperty("--sticky-top-left", "-5rem");
      root.style.setProperty("--sticky-top-right", "-25rem");
    } else if (size.classList.contains("font-size-5")) {
      fontSize = "22px";
      root.style.setProperty("--sticky-top-left", "-12rem");
      root.style.setProperty("--sticky-top-right", "-35rem");
    }

    // ========== CHANGE THE FONT SIZE OF THE ALL THE HTML ==========

    document.querySelector("html").style.fontSize = fontSize;
  });
});

// ---------- REMOVE ACTIVE CLASS FROM COLORS -----------

const changeActiveColorClass = () => {
  colorPalette.forEach((colorPicker) => {
    colorPicker.classList.remove("active");
  });
};

// ============= CHANGE PRIMARY COLOURS ===============

colorPalette.forEach((color) => {
  color.addEventListener("click", () => {
    let primary;

    // ---------- REMOVE ACTIVE CLASS FROM COLORS -----------

    changeActiveColorClass();

    if (color.classList.contains("color-1")) {
      primaryHue = 252;
    } else if (color.classList.contains("color-2")) {
      primaryHue = 52;
    } else if (color.classList.contains("color-3")) {
      primaryHue = 352;
    } else if (color.classList.contains("color-4")) {
      primaryHue = 152;
    } else if (color.classList.contains("color-5")) {
      primaryHue = 202;
    }
    color.classList.add("active");
    root.style.setProperty("--primary-color-hue", primaryHue);
  });
});

// =========== BACKGROUND COLOR SECTION STARTS HERE ==============

// ========== THEME BACKGROUND VALUES =================

let lightColorLightness;
let whiteColorLightness;
let darkColorLightness;

// =========== CHANGE BACKGROUND FUNCTIONS ==============

const changeBG = () => {
  root.style.setProperty("--light-color-lightness", lightColorLightness);
  root.style.setProperty("--white-color-lightness", whiteColorLightness);
  root.style.setProperty("--dark-color-lightness", darkColorLightness);
};

// ============= THEME BACKGROUND VALUES ===============

Bg1.addEventListener("click", () => {
  // -------- ADD ACTIVE CLASS ---------
  Bg1.classList.add("active");
  // ------- REMOVE ACTIVE CLASS FROM OTHERS -------
  Bg2.classList.remove("active");
  Bg3.classList.remove("active");
  // ------- REMOVE CUSTOMIZED CHANGES FROM LOCAL STORAGE -------
  window.location.reload();
});

Bg2.addEventListener("click", () => {
  darkColorLightness = "95%";
  whiteColorLightness = "20%";
  lightColorLightness = "15%";

  // -------- ADD ACTIVE CLASS ---------
  Bg2.classList.add("active");
  // ------- REMOVE ACTIVE CLASS FROM OTHERS -------
  Bg1.classList.remove("active");
  Bg3.classList.remove("active");
  changeBG();
});

Bg3.addEventListener("click", () => {
  darkColorLightness = "95%";
  whiteColorLightness = "10%";
  lightColorLightness = "0%";

  // -------- ADD ACTIVE CLASS ---------
  Bg3.classList.add("active");
  // ------- REMOVE ACTIVE CLASS FROM OTHERS -------
  Bg1.classList.remove("active");
  Bg2.classList.remove("active");
  changeBG();
});
