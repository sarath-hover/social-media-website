// ================= SIDEBAR ==================

const menuItems = document.querySelectorAll(".menu-item");

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
      Style.display = "none";
    } else {
      document.querySelector(".notifications-popup");
      Style.display = "block";
      document.querySelector(
        "#notifications .notification-count"
      ).style.display = "none";
    }
  });
});

// ======= NOTIFICATION POP-UP AND NOTIFICATION COUNT NOT WORKING =======

// ===================== SIDE BAR SECTION ENDS HERE =====================

// ===================== MESSAGES SECTION SARTS HERE ====================

const messagesNotification = document.querySelector("#messages-notification");
const messages = document.querySelector(".messages");

messagesNotification.addEventListener("click", () => {
  messages.style.boxShadow = "0 0 1rem var(--color-primary)";
  messagesNotification.querySelector(".notification-count").style.display =
    "none";
  setTimeout(() => {
    messages.style.boxShadow = "none";
  }, 2000);
});

// ============ MESSAGES SECTION ENDS HERE ==============

// ========== SEARCH BAR SECTION STARTS HERE =============

const message = messages.querySelectorAll(".message");
const messageSearch = document.querySelector("#message-search");

const searchMessage = () => {
  const val = messageSearch.value.toLowrCase();
  message.forEach((chat) => {
    let name = chat.querySelectorAll("h5").textContent.toLowerCase();
    if (name.indexOf(val) != -1) {
      chat.style.display = "flex";
    } else {
      chat.style.display = "none";
    }
  });
};

messageSearch.addEventListener("keyup", searchMessage);

// ========== SEARCH BAR NOT WORKING ================

// =========== SEARCH BAR SECTION ENDS HERE ================

// =========== THEME CUSTOMIZATION SECTION STARTS HERE ============

const theme = document.querySelector("#theme");
const themeModal = document.querySelector(".customize-theme");

// ============= OPEN CUSTOMIZATION ===============

const openThemeModel = () => {
  themeModal.style.display = "grid";
};

// ============== CLOSE FUNCTION ===============

const closeThemeModal = (e) => {
  if (e.target.classList.contains("customize-theme")) {
    themeModal.style.display = "none";
  }
};

// ============ CLOSE CUSTOMIZATION ==================

themeModal.addEventListener("click", closeThemeModal);

theme.addEventListener("click", openThemeModel);

// ========== FONT CUSTOMIZATION STARTS HERE ============

const fontSizes = document.querySelectorAll(".choose-size span");
var root = document.querySelector(":root");

// =========== REMOVE ACTIVE CLASS FROM FONT SIZE =================

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
      root.style.setProperty("--sticky-top-left:", "5.4rem");
      root.style.setProperty("--sticky-top-right:", "5.4rem");
    } else if (size.classList.contains("font-size-2")) {
      fontSize = "13px";
      root.style.setProperty("--sticky-top-left:", "5.4rem");
      root.style.setProperty("--sticky-top-right:", "-7rem");
    } else if (size.classList.contains("font-size-3")) {
      fontSize = "16px";
      root.style.setProperty("--sticky-top-left:", "-2rem");
      root.style.setProperty("--sticky-top-right:", "-17rem");
    } else if (size.classList.contains("font-size-4")) {
      fontSize = "19px";
      root.style.setProperty("--sticky-top-left:", "-5rem");
      root.style.setProperty("--sticky-top-right:", "-25rem");
    } else if (size.classList.contains("font-size-5")) {
      fontSize = "22px";
      root.style.setProperty("--sticky-top-left:", "-12rem");
      root.style.setProperty("--sticky-top-right:", "-35rem");
    }

    // ========== CHANGE THE FONT SIZE OF THE ALL THE HTML ==========

    document.querySelector("html").style.fontSize = fontSize;
  });
});

// ============= CHANGE PRIMARY COLOURS ===============

const colorPalette = document.querySelectorAll(".choose-color span");

colorPalette.forEach((color) => {
  color.addEventListener("click", () => {
    let primary;

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

const Bg1 = document.querySelector(".bg-1");
const Bg2 = document.querySelector(".bg-2");
const Bg3 = document.querySelector(".bg-3");

// ========== THEME BACKGROUND VALUES =================

let lightColorLightness;
let WhiteColorLightness;
let DarkColorLightness;

// =========== CHANGE BACKGROUND FUNCTIONS ==============

const changeBG = () => {
  root.style.setProperty("--light-color-lightness", lightColorLightness);
  root.style.setProperty("--white-color-lightness", WhiteColorLightness);
  root.style.setProperty("--dark-color-lightness", DarkColorLightness);
};

// ============= THEME BACKGROUND VALUES ===============

Bg1.addEventListener("click", () => {
  Bg1.classList.add("active");
  Bg2.classList.remove("active");
  Bg3.classList.remove("active");
  window.location.reload();
});

Bg2.addEventListener("click", () => {
  DarkColorLightness = "95%";
  WhiteColorLightness = "20%";
  lightColorLightness = "15%";

  Bg2.classList.add("active");
  Bg1.classList.remove("active");
  Bg3.classList.remove("active");
  changeBG();
});

Bg3.addEventListener("click", () => {
  DarkColorLightness = "95%";
  WhiteColorLightness = "10%";
  lightColorLightness = "0%";

  Bg3.classList.add("active");
  Bg1.classList.remove("active");
  Bg1.classList.remove("active");
  changeBG();
});
