import { ensureIDSelector, ensureOneSelector } from "#browser/dom";

export function initSettingsRow() {
  initSettingsTable();
  initSettingsWindow();
}

function initSettingsTable() {
  {
    const settingTableSave =
      ensureIDSelector<HTMLElementTagNameMap["td"]>("settingTableSave");

    settingTableSave.onclick = () => save(false, true);
  }

  {
    const settingTableExport =
      ensureIDSelector<HTMLElementTagNameMap["td"]>("settingTableExport");

    settingTableExport.onclick = () => tooltip("Export", null, "update");
  }

  {
    const settingTableImport =
      ensureIDSelector<HTMLElementTagNameMap["td"]>("settingTableImport");

    settingTableImport.onclick = () => tooltip("Import", null, "update");
  }

  {
    const settingTableStats =
      ensureIDSelector<HTMLElementTagNameMap["td"]>("settingTableStats");

    settingTableStats.onclick = () => toggleStats();
  }

  {
    const settingTableAchievments = ensureIDSelector<
      HTMLElementTagNameMap["td"]
    >("settingTableAchievments");

    settingTableAchievments.onclick = () => toggleAchievementWindow();
  }

  {
    const settingTableSettings = ensureIDSelector<HTMLElementTagNameMap["td"]>(
      "settingTableSettings",
    );

    settingTableSettings.onclick = () => toggleSettingsMenu();
  }

  {
    const pastUpgradesBtn =
      ensureIDSelector<HTMLElementTagNameMap["td"]>("pastUpgradesBtn");

    pastUpgradesBtn.onclick = () => viewPortalUpgrades();
  }

  {
    const newUpdatesBtn =
      ensureIDSelector<HTMLElementTagNameMap["td"]>("newUpdatesBtn");

    newUpdatesBtn.onclick = () => window.open("updates.html", "_blank");
  }

  {
    const portalTimer =
      ensureIDSelector<HTMLElementTagNameMap["td"]>("portalTimer");

    portalTimer.onclick = () => toggleSetting("pauseGame");
    portalTimer.onmouseover = (event) =>
      tooltip(
        "Pause the game",
        "customText",
        event,
        game.options.menu["pauseGame"].description,
      );
    portalTimer.onmouseout = () => tooltip("hide");
  }
}

function initSettingsWindow() {
  {
    const toggle = ensureOneSelector<HTMLElementTagNameMap["div"]>(
      "#settingTitleBar > div:first-child",
    );

    toggle.onclick = () => toggleSettingSection(false);
  }

  {
    const searchSettingsEl =
      ensureIDSelector<HTMLElementTagNameMap["input"]>("searchSettings");

    searchSettingsEl.onkeyup = function () {
      searchSettings(this);
    };
  }

  {
    const newTab = ensureIDSelector<HTMLElementTagNameMap["li"]>("NewTab");

    newTab.onclick = () => settingTab("New");
  }

  {
    const GeneralTab =
      ensureIDSelector<HTMLElementTagNameMap["li"]>("GeneralTab");

    GeneralTab.onclick = () => settingTab("General");
  }

  {
    const PerformanceTab =
      ensureIDSelector<HTMLElementTagNameMap["li"]>("PerformanceTab");

    PerformanceTab.onclick = () => settingTab("Performance");
  }

  {
    const QOLTab = ensureIDSelector<HTMLElementTagNameMap["li"]>("QOLTab");

    QOLTab.onclick = () => settingTab("QOL");
  }

  {
    const AlertsTab =
      ensureIDSelector<HTMLElementTagNameMap["li"]>("AlertsTab");

    AlertsTab.onclick = () => settingTab("Alerts");
  }

  {
    const LayoutTab =
      ensureIDSelector<HTMLElementTagNameMap["li"]>("LayoutTab");

    LayoutTab.onclick = () => settingTab("Layout");
  }

  {
    const OtherTab = ensureIDSelector<HTMLElementTagNameMap["li"]>("OtherTab");

    OtherTab.onclick = () => settingTab("Other");
  }

  {
    const HotkeyTab =
      ensureIDSelector<HTMLElementTagNameMap["li"]>("HotkeyTab");

    HotkeyTab.onclick = () => tooltip("Hotkeys", null, "update");
  }

  {
    const backToSearchBtn = ensureOneSelector<HTMLElementTagNameMap["div"]>(
      "#allSettings > div:first-child",
    );

    backToSearchBtn.onclick = () => toggleSettingSection(true);
  }
}
