// Local override of al-folio theme.js
// Two-state theme toggle only: light <-> dark. The "system" (auto) mode is removed.
// Has to be in the head tag, otherwise a flicker effect will occur.

// Toggle only between light and dark.
let toggleThemeSetting = () => {
  let themeSetting = determineThemeSetting();
  if (themeSetting == "dark") {
    setThemeSetting("light");
  } else {
    setThemeSetting("dark");
  }
};

// Change the theme setting and apply the theme.
let setThemeSetting = (themeSetting) => {
  localStorage.setItem("theme", themeSetting);
  document.documentElement.setAttribute("data-theme-setting", themeSetting);
  applyTheme();
};

// Apply the computed dark or light theme to the website.
let applyTheme = () => {
  let theme = determineComputedTheme();

  transTheme();
  setHighlight(theme);
  setGiscusTheme(theme);
  setSearchTheme(theme);
  updateCalendarUrl();

  if (typeof mermaid !== "undefined") setMermaidTheme(theme);
  if (typeof Diff2HtmlUI !== "undefined") setDiff2htmlTheme(theme);
  if (typeof echarts !== "undefined") setEchartsTheme(theme);
  if (typeof Plotly !== "undefined") setPlotlyTheme(theme);
  if (typeof vegaEmbed !== "undefined") setVegaLiteTheme(theme);

  document.documentElement.setAttribute("data-theme", theme);

  // Add class to tables.
  let tables = document.getElementsByTagName("table");
  for (let i = 0; i < tables.length; i++) {
    if (theme == "dark") {
      tables[i].classList.add("table-dark");
    } else {
      tables[i].classList.remove("table-dark");
    }
  }

  // Set jupyter notebooks themes.
  let jupyterNotebooks = document.getElementsByClassName("jupyter-notebook-iframe-container");
  for (let i = 0; i < jupyterNotebooks.length; i++) {
    let bodyElement = jupyterNotebooks[i].getElementsByTagName("iframe")[0].contentWindow.document.body;
    if (theme == "dark") {
      bodyElement.setAttribute("data-jp-theme-light", "false");
      bodyElement.setAttribute("data-jp-theme-name", "JupyterLab Dark");
    } else {
      bodyElement.setAttribute("data-jp-theme-light", "true");
      bodyElement.setAttribute("data-jp-theme-name", "JupyterLab Light");
    }
  }

  // Updates the background of medium-zoom overlay.
  if (typeof medium_zoom !== "undefined") {
    medium_zoom.update({
      background: getComputedStyle(document.documentElement).getPropertyValue("--global-bg-color") + "ee",
    });
  }
};

let setHighlight = (theme) => {
  if (theme == "dark") {
    document.getElementById("highlight_theme_light").media = "none";
    document.getElementById("highlight_theme_dark").media = "";
  } else {
    document.getElementById("highlight_theme_dark").media = "none";
    document.getElementById("highlight_theme_light").media = "";
  }
};

let setGiscusTheme = (theme) => {
  function sendMessage(message) {
    const iframe = document.querySelector("iframe.giscus-frame");
    if (!iframe) return;
    iframe.contentWindow.postMessage({ giscus: message }, "https://giscus.app");
  }
  sendMessage({ setConfig: { theme: theme } });
};

// Chart / diagram theming. These are only invoked when the corresponding library is
// present on the page (guarded in applyTheme), so no-op stubs are safe for this site.
let setMermaidTheme = () => {};
let setDiff2htmlTheme = () => {};
let setEchartsTheme = () => {};
let setPlotlyTheme = () => {};
let setVegaLiteTheme = () => {};

let setSearchTheme = (theme) => {
  const ninjaKeys = document.querySelector("ninja-keys");
  if (!ninjaKeys) return;
  if (theme === "dark") {
    ninjaKeys.classList.add("dark");
  } else {
    ninjaKeys.classList.remove("dark");
  }
};

let transTheme = () => {
  document.documentElement.classList.add("transition");
  window.setTimeout(() => {
    document.documentElement.classList.remove("transition");
  }, 260);
};

// Only "dark" or "light" are valid now; anything else defaults to "light".
let determineThemeSetting = () => {
  let themeSetting = localStorage.getItem("theme");
  if (themeSetting != "dark" && themeSetting != "light") {
    themeSetting = "light";
  }
  return themeSetting;
};

// With no "system" mode, the computed theme equals the setting.
let determineComputedTheme = () => {
  return determineThemeSetting();
};

let initTheme = () => {
  let themeSetting = determineThemeSetting();
  setThemeSetting(themeSetting);

  document.addEventListener("DOMContentLoaded", function () {
    const mode_toggle = document.getElementById("light-toggle");
    if (mode_toggle) {
      mode_toggle.addEventListener("click", function () {
        toggleThemeSetting();
      });
    }
  });
};

// Get the appropriate background color for Google Calendar based on current theme
let getCalendarBgColor = () => {
  let theme = determineComputedTheme();
  return theme === "dark" ? "333333" : "f9f9f9";
};

// Get the Google Calendar embed URL with the correct background color
let getCalendarUrl = (calendarId, timezone = "UTC") => {
  const baseUrl = "https://calendar.google.com/calendar/embed";
  const params = new URLSearchParams({
    src: calendarId,
    ctz: timezone,
    mode: "WEEK",
    showTitle: "0",
    showPrint: "0",
    showCalendars: "0",
    showTabs: "0",
    bgcolor: getCalendarBgColor(),
  });
  return `${baseUrl}?${params.toString()}`;
};

// Update the calendar iframe src to apply theme changes
let updateCalendarUrl = () => {
  const iframe = document.getElementById("calendar-iframe");
  if (iframe && iframe.dataset.calendarId) {
    iframe.src = getCalendarUrl(iframe.dataset.calendarId, iframe.dataset.timezone || "UTC");
  }
};
