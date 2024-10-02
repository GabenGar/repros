import { ensureIDSelector, ensureOneSelector } from "#browser/dom";

export function initBottomRow() {
  initBuyColumn();
}

function initBuyColumn() {
  {
    const autoTrapBtn = ensureIDSelector<HTMLDivElement>("autoTrapBtn");

    autoTrapBtn.onclick = () => toggleAutoTrap();
  }

  {
    const buildingsCollectBtn = ensureIDSelector<HTMLDivElement>(
      "buildingsCollectBtn",
    );

    buildingsCollectBtn.onclick = () => setGather("buildings");
  }

  initBuyTabs();
  initNumTabs();
  initBuyContainer();
  initRightColumn();
}

function initBuyTabs() {
  {
    const allTab = ensureIDSelector<HTMLLIElement>("allTab");

    allTab.onclick = () => filterTabs("all");
  }

  {
    const buildingsTab = ensureIDSelector<HTMLLIElement>("buildingsTab");

    buildingsTab.onclick = () => filterTabs("buildings");
  }

  {
    const jobsTab = ensureIDSelector<HTMLLIElement>("jobsTab");

    jobsTab.onclick = () => filterTabs("jobs");
  }

  {
    const upgradesTab = ensureIDSelector<HTMLLIElement>("upgradesTab");

    upgradesTab.onclick = () => filterTabs("upgrades");
  }

  {
    const equipmentTab = ensureIDSelector<HTMLLIElement>("equipmentTab");

    equipmentTab.onclick = () => filterTabs("equipment");
  }

  {
    const talentsTab =
      ensureIDSelector<HTMLElementTagNameMap["li"]>("talentsTab");

    talentsTab.onclick = () => filterTabs("talents");
    talentsTab.onmouseover = (event) => tooltip("Mastery", null, event);
    talentsTab.onmouseout = () => tooltip("hide");
  }

  {
    const equalityTab =
      ensureIDSelector<HTMLElementTagNameMap["li"]>("equalityTab");

    equalityTab.onclick = () =>
      tooltip("Scale Equality Scaling", null, "update", true);
    equalityTab.onmouseover = (event) =>
      tooltip("Equality Scaling", null, event, true);
    equalityTab.onmouseout = () => tooltip("hide");
  }

  {
    const natureTab =
      ensureIDSelector<HTMLElementTagNameMap["li"]>("natureTab");

    natureTab.onclick = () => filterTabs("nature");
    natureTab.onmouseover = (event) =>
      tooltip("Empowerments of Nature", null, event);
    natureTab.onmouseout = () => tooltip("hide");
  }

  {
    const playerSpireTab =
      ensureIDSelector<HTMLElementTagNameMap["li"]>("playerSpireTab");

    playerSpireTab.onclick = () => playerSpire.openPopup();
  }

  {
    const alchemyTab =
      ensureIDSelector<HTMLElementTagNameMap["li"]>("alchemyTab");

    alchemyTab.onclick = () => alchObj.openPopup();
  }

  {
    const autoBattleTab =
      ensureIDSelector<HTMLElementTagNameMap["li"]>("autoBattleTab");

    autoBattleTab.onclick = () => autoBattle.popup();
  }
}

function initNumTabs() {
  {
    const tab1 = ensureIDSelector<HTMLLIElement>("tab1");

    tab1.onclick = () => numTab(1);
  }

  {
    const tab2 = ensureIDSelector<HTMLLIElement>("tab2");

    tab2.onclick = () => numTab(2);
  }

  {
    const tab3 = ensureIDSelector<HTMLLIElement>("tab3");

    tab3.onclick = () => numTab(3);
  }

  {
    const tab4 = ensureIDSelector<HTMLLIElement>("tab4");

    tab4.onclick = () => numTab(4);
  }

  {
    const tab5Text = ensureIDSelector<HTMLAnchorElement>("tab5Text");

    tab5Text.onclick = () => numTab(5);
  }

  {
    const tab5Text2 = ensureIDSelector<HTMLAnchorElement>("tab5Text2");

    tab5Text2.onclick = () => tooltip("Custom", null, "update");
  }

  {
    const tab6 = ensureIDSelector<HTMLLIElement>("tab6");

    tab6.onclick = () => numTab(6);
    tab6.onmouseover = (event) =>
      tooltip(
        "Buy Max",
        "customText",
        event,
        "Switching to this option will spend the majority of your resources with each purchase. <b>Click twice to customize.</b>",
      );
    tab6.onmouseout = () => tooltip("hide");
  }
}

function initBuyContainer() {
  {
    const autoStructureBtn =
      ensureIDSelector<HTMLDivElement>("autoStructureBtn");

    autoStructureBtn.onmouseover = (event) =>
      tooltip("AutoStructure", null, event);
    autoStructureBtn.onmouseout = () => tooltip("hide");
  }

  {
    const autoStructureText =
      ensureIDSelector<HTMLDivElement>("autoStructureText");

    autoStructureText.onclick = () => toggleAutoStructure();
  }

  {
    const autoStructureConfig = ensureIDSelector<HTMLDivElement>(
      "autoStructureConfig",
    );

    autoStructureConfig.onclick = () =>
      tooltip("Configure AutoStructure", null, "update");
  }

  {
    const autoStorageBtn = ensureIDSelector<HTMLDivElement>("autoStorageBtn");

    autoStorageBtn.onmouseover = (event) =>
      tooltip(
        "AutoStorage",
        "customText",
        event,
        "Enabling this will cause your Trimps to automatically add a storage building to the queue if you reach max capacity. This will work on and offline if enabled.",
      );
    autoStorageBtn.onmouseout = () => tooltip("hide");
    autoStorageBtn.onclick = () => toggleAutoStorage();
  }

  {
    const autoJobsBtn = ensureIDSelector<HTMLDivElement>("autoJobsBtn");

    autoJobsBtn.onmouseover = (event) => tooltip("AutoJobs", null, event);
    autoJobsBtn.onmouseout = () => tooltip("hide");
  }

  {
    const autoJobsText = ensureIDSelector<HTMLDivElement>("autoJobsText");

    autoJobsText.onclick = () => toggleAutoJobs();
  }

  {
    const configureAutoJobs = ensureOneSelector<HTMLElementTagNameMap["div"]>(
      `#autoJobsBtn > div:last-child`,
    );

    configureAutoJobs.onclick = () =>
      tooltip("Configure AutoJobs", null, "update");
  }

  {
    const fireBtn = ensureIDSelector<HTMLDivElement>("fireBtn");

    fireBtn.onclick = () => fireMode();
    fireBtn.onmouseover = (event) => tooltip("Fire Trimps", null, event);
    fireBtn.onmouseout = () => tooltip("hide");
  }

  {
    const autoGoldenBtn = ensureIDSelector<HTMLDivElement>("autoGoldenBtn");

    autoGoldenBtn.onmouseover = (event) => tooltip("AutoGold", null, event);
    autoGoldenBtn.onmouseout = () => tooltip("hide");
  }

  {
    const autoGoldenText =
      ensureIDSelector<HTMLElementTagNameMap["div"]>("autoGoldenText");

    autoGoldenText.onclick = () => toggleAutoGolden();
  }

  {
    const autoPrestigeBtn = ensureIDSelector<HTMLDivElement>("autoPrestigeBtn");

    autoPrestigeBtn.onmouseover = (event) =>
      tooltip("AutoPrestige", null, event);
    autoPrestigeBtn.onmouseout = () => tooltip("hide");
    autoPrestigeBtn.onclick = () => toggleAutoPrestiges();
  }

  {
    const autoUpgradeBtn = ensureIDSelector<HTMLDivElement>("autoUpgradeBtn");

    autoUpgradeBtn.onmouseover = (event) => tooltip("AutoUpgrade", null, event);
    autoUpgradeBtn.onmouseout = () => tooltip("hide");
    autoUpgradeBtn.onclick = () => toggleAutoUpgrades();
  }

  {
    const autoEquipBtn = ensureIDSelector<HTMLDivElement>("autoEquipBtn");

    autoEquipBtn.onmouseover = (event) => tooltip("AutoEquip", null, event);
    autoEquipBtn.onmouseout = () => tooltip("hide");
  }

  {
    const autoEquipText = ensureIDSelector<HTMLDivElement>("autoEquipText");

    autoEquipText.onclick = () => toggleAutoEquip();
  }

  {
    const autoEquipConfig = ensureIDSelector<HTMLDivElement>("autoEquipConfig");

    autoEquipConfig.onclick = () =>
      tooltip("Configure AutoEquip", null, "update");
  }

  {
    const swapToMutatorsBtn =
      ensureIDSelector<HTMLDivElement>("swapToMutatorsBtn");

    swapToMutatorsBtn.onclick = () => u2Mutations.swapTab(true);
  }

  {
    const talentRespecBtn = ensureIDSelector<HTMLDivElement>("talentRespecBtn");

    talentRespecBtn.onmouseover = (event) =>
      tooltip("Respec Masteries", null, event);
    talentRespecBtn.onmouseout = () => tooltip("hide");
    talentRespecBtn.onclick = () => respecTalents();
  }

  {
    const talentsHere = ensureIDSelector<HTMLDivElement>("talentsHere");

    talentsHere.onload = function () {
      preventZoom(this);
    };
  }

  {
    const infoSpanPoison = ensureIDSelector<HTMLSpanElement>("infoSpanPoison");

    infoSpanPoison.onmouseover = (event) =>
      natureTooltip(event, "description", "Poison");
    infoSpanPoison.onmouseout = () => tooltip("hide");
  }

  {
    const natureUpgradePoison = ensureIDSelector<HTMLSpanElement>(
      "natureUpgradePoison",
    );

    natureUpgradePoison.onmouseover = (event) =>
      natureTooltip(event, "upgrade", "Poison");
    natureUpgradePoison.onmouseout = () => tooltip("hide");
    natureUpgradePoison.onclick = () => naturePurchase("upgrade", "Poison");
  }

  {
    const natureUpgradeTransferPoison = ensureIDSelector<HTMLSpanElement>(
      "natureUpgradeTransferPoison",
    );

    natureUpgradeTransferPoison.onmouseover = (event) =>
      natureTooltip(event, "stackTransfer", "Poison");
    natureUpgradeTransferPoison.onmouseout = () => tooltip("hide");
    natureUpgradeTransferPoison.onclick = () =>
      naturePurchase("stackTransfer", "Poison");
  }

  {
    const uberPoisonContainer = ensureIDSelector<HTMLSpanElement>(
      "uberPoisonContainer",
    );

    uberPoisonContainer.onmouseover = (event) =>
      natureTooltip(event, "uberEmpower", "Poison");
    uberPoisonContainer.onmouseout = () => tooltip("hide");
    uberPoisonContainer.onclick = () => naturePurchase("uberEmpower", "Poison");
  }

  {
    const natureConvertPoisonWind = ensureIDSelector<HTMLSpanElement>(
      "natureConvertPoisonWind",
    );

    natureConvertPoisonWind.onmouseover = (event) =>
      natureTooltip(event, "convert", "Poison", "Wind");
    natureConvertPoisonWind.onmouseout = () => tooltip("hide");
    natureConvertPoisonWind.onclick = () =>
      naturePurchase("convert", "Poison", "Wind");
  }

  {
    const natureConvertPoisonIce = ensureIDSelector<HTMLSpanElement>(
      "natureConvertPoisonIce",
    );

    natureConvertPoisonIce.onmouseover = (event) =>
      natureTooltip(event, "convert", "Poison", "Ice");
    natureConvertPoisonIce.onmouseout = () => tooltip("hide");
    natureConvertPoisonIce.onclick = () =>
      naturePurchase("convert", "Poison", "Ice");
  }

  {
    const infoSpanWind = ensureIDSelector<HTMLSpanElement>("infoSpanWind");

    infoSpanWind.onmouseover = (event) =>
      natureTooltip(event, "description", "Wind");
    infoSpanWind.onmouseout = () => tooltip("hide");
  }

  {
    const natureUpgradeLevelWind = ensureIDSelector<HTMLSpanElement>(
      "natureUpgradeLevelWind",
    );

    natureUpgradeLevelWind.onmouseover = (event) =>
      natureTooltip(event, "upgrade", "Wind");
    natureUpgradeLevelWind.onmouseout = () => tooltip("hide");
    natureUpgradeLevelWind.onclick = () => naturePurchase("upgrade", "Wind");
  }

  {
    const natureUpgradeTransferWind = ensureIDSelector<HTMLSpanElement>(
      "natureUpgradeTransferWind",
    );

    natureUpgradeTransferWind.onmouseover = (event) =>
      natureTooltip(event, "stackTransfer", "Wind");
    natureUpgradeTransferWind.onmouseout = () => tooltip("hide");
    natureUpgradeTransferWind.onclick = () =>
      naturePurchase("stackTransfer", "Wind");
  }

  {
    const uberWindContainer =
      ensureIDSelector<HTMLSpanElement>("uberWindContainer");

    uberWindContainer.onmouseover = (event) =>
      natureTooltip(event, "uberEmpower", "Wind");
    uberWindContainer.onmouseout = () => tooltip("hide");
    uberWindContainer.onclick = () => naturePurchase("uberEmpower", "Wind");
  }

  {
    const natureTransferWindPoison = ensureIDSelector<
      HTMLElementTagNameMap["span"]
    >("natureTransferWindPoison");

    natureTransferWindPoison.onmouseover = (event) =>
      natureTooltip(event, "convert", "Wind", "Poison");
    natureTransferWindPoison.onmouseout = () => tooltip("hide");
    natureTransferWindPoison.onclick = () =>
      naturePurchase("convert", "Wind", "Poison");
  }

  {
    const natureTransferWindIce = ensureIDSelector<
      HTMLElementTagNameMap["span"]
    >("natureTransferWindIce");

    natureTransferWindIce.onmouseover = (event) =>
      natureTooltip(event, "convert", "Wind", "Ice");
    natureTransferWindIce.onmouseout = () => tooltip("hide");
    natureTransferWindIce.onclick = () =>
      naturePurchase("convert", "Wind", "Ice");
  }

  {
    const infoSpanIce =
      ensureIDSelector<HTMLElementTagNameMap["span"]>("infoSpanIce");

    infoSpanIce.onmouseover = (event) =>
      natureTooltip(event, "description", "Ice");
    infoSpanIce.onmouseout = () => tooltip("hide");
  }

  {
    const natureUpgradeLevelIce = ensureIDSelector<
      HTMLElementTagNameMap["span"]
    >("natureUpgradeLevelIce");

    natureUpgradeLevelIce.onmouseover = (event) =>
      natureTooltip(event, "upgrade", "Ice");
    natureUpgradeLevelIce.onmouseout = () => tooltip("hide");
    natureUpgradeLevelIce.onclick = () => naturePurchase("upgrade", "Ice");
  }

  {
    const natureUpgradeTransferIce = ensureIDSelector<
      HTMLElementTagNameMap["span"]
    >("natureUpgradeTransferIce");

    natureUpgradeTransferIce.onmouseover = (event) =>
      natureTooltip(event, "stackTransfer", "Ice");
    natureUpgradeTransferIce.onmouseout = () => tooltip("hide");
    natureUpgradeTransferIce.onclick = () =>
      naturePurchase("stackTransfer", "Ice");
  }

  {
    const uberIceContainer =
      ensureIDSelector<HTMLElementTagNameMap["span"]>("uberIceContainer");

    uberIceContainer.onmouseover = (event) =>
      natureTooltip(event, "uberEmpower", "Ice");
    uberIceContainer.onmouseout = () => tooltip("hide");
    uberIceContainer.onclick = () => naturePurchase("uberEmpower", "Ice");
  }

  {
    const natureConvertIcePoison = ensureIDSelector<
      HTMLElementTagNameMap["span"]
    >("natureConvertIcePoison");

    natureConvertIcePoison.onmouseover = (event) =>
      natureTooltip(event, "convert", "Ice", "Poison");
    natureConvertIcePoison.onmouseout = () => tooltip("hide");
    natureConvertIcePoison.onclick = () =>
      naturePurchase("convert", "Ice", "Poison");
  }

  {
    const natureConvertIceWind = ensureIDSelector<
      HTMLElementTagNameMap["span"]
    >("natureConvertIceWind");

    natureConvertIceWind.onmouseover = (event) =>
      natureTooltip(event, "convert", "Ice", "Wind");
    natureConvertIceWind.onmouseout = () => tooltip("hide");
    natureConvertIceWind.onclick = () =>
      naturePurchase("convert", "Ice", "Wind");
  }
}

function initRightColumn() {
  initBattleHeadContainer();
  initGridRow();
}

function initBattleHeadContainer() {
  {
    const formation0 =
      ensureIDSelector<HTMLElementTagNameMap["div"]>("formation0");

    formation0.onclick = () => setFormation("0");
    formation0.onmouseover = (event) =>
      tooltip(
        "No Formation",
        "customText",
        event,
        "Clear your formations, return to normal stats, and derp around the battlefield. (Hotkeys: X or 1)",
      );
    formation0.onmouseout = () => tooltip("hide");
  }

  {
    const formation1 =
      ensureIDSelector<HTMLElementTagNameMap["div"]>("formation1");

    formation1.onclick = () => setFormation("1");
    formation1.onmouseover = (event) =>
      tooltip(
        "Heap Formation",
        "customText",
        event,
        "Trimps gain 4x health but lose half of their attack and block. (Hotkeys: H or 2)",
      );
    formation1.onmouseout = () => tooltip("hide");
  }

  {
    const formation2 =
      ensureIDSelector<HTMLElementTagNameMap["div"]>("formation2");

    formation2.onclick = () => setFormation("2");
    formation2.onmouseover = (event) =>
      tooltip(
        "Dominance Formation",
        "customText",
        event,
        "Trimps gain 4x attack but lose half of their health and block. (Hotkeys: D or 3)",
      );
    formation2.onmouseout = () => tooltip("hide");
  }

  {
    const formation3 =
      ensureIDSelector<HTMLElementTagNameMap["div"]>("formation3");

    formation3.onclick = () => setFormation("3");
    formation3.onmouseover = (event) =>
      tooltip(
        "Barrier Formation",
        "customText",
        event,
        "Trimps gain 4x block and 50% block pierce reduction but lose half of their health and attack. (Hotkeys: B or 4)",
      );
    formation3.onmouseout = () => tooltip("hide");
  }

  {
    const formation4 =
      ensureIDSelector<HTMLElementTagNameMap["div"]>("formation4");

    formation4.onclick = () => setFormation("4");
    formation4.onmouseover = (event) =>
      tooltip("Scryer Formation", null, event);
    formation4.onmouseout = () => tooltip("hide");
  }

  {
    const formation5 =
      ensureIDSelector<HTMLElementTagNameMap["div"]>("formation5");

    formation5.onclick = () => setFormation("5");
    formation5.onmouseover = (event) => natureTooltip(event, "formation");
    formation5.onmouseout = () => tooltip("hide");
  }

  {
    const damageDiv =
      ensureIDSelector<HTMLElementTagNameMap["div"]>("damageDiv");

    damageDiv.onclick = () => getBattleStatBd("attack");
  }

  {
    const blockDiv = ensureIDSelector<HTMLElementTagNameMap["div"]>("blockDiv");

    blockDiv.onclick = () => getBattleStatBd("block");
  }

  {
    const roboTrimpBtn =
      ensureIDSelector<HTMLElementTagNameMap["div"]>("roboTrimpBtn");

    roboTrimpBtn.onclick = () => magnetoShriek();
  }

  {
    const chainHolder =
      ensureIDSelector<HTMLElementTagNameMap["div"]>("chainHolder");

    chainHolder.onmouseover = (event) => tooltip("MagnetoShriek", null, event);
    chainHolder.onmouseout = () => tooltip("hide");
  }

  {
    const healthBattleStat = ensureOneSelector<HTMLElementTagNameMap["span"]>(
      "#goodGuyBar > span.bdHover.pointer.noselect.innerFightBar",
    );

    healthBattleStat.onclick = () => getBattleStatBd("health");
  }

  {
    const badCanCrit =
      ensureIDSelector<HTMLElementTagNameMap["span"]>("badCanCrit");

    badCanCrit.onmouseover = (event) =>
      tooltip(
        "Crushing Blows",
        "customText",
        event,
        "Your current health is higher than your block, making you vulnerable to critical strikes from your enemies. Better fix that...",
      );
    badCanCrit.onmouseout = () => tooltip("hide");
  }

  {
    const lootBdBtn =
      ensureIDSelector<HTMLElementTagNameMap["span"]>("lootBdBtn");

    lootBdBtn.onclick = () => getLootBd("Food/Wood/Metal");
  }

  {
    const openTutorialBtn =
      ensureIDSelector<HTMLElementTagNameMap["span"]>("openTutorialBtn");

    openTutorialBtn.onclick = () => tutorial.popup();
  }
}

function initGridRow() {
  {
    const battleSideTitle =
      ensureIDSelector<HTMLElementTagNameMap["div"]>("battleSideTitle");

    battleSideTitle.onmouseover = (event) => getZoneStats(event);
    battleSideTitle.onmouseout = () => tooltip("hide");
  }

  {
    const fightBtn =
      ensureIDSelector<HTMLElementTagNameMap["span"]>("fightBtn");

    fightBtn.onmouseover = (event) => tooltip("Fight", null, event);
    fightBtn.onmouseout = () => tooltip("hide");
    fightBtn.onclick = () => fightManual();
  }

  {
    const pauseFightBtn =
      ensureIDSelector<HTMLElementTagNameMap["span"]>("pauseFight");

    pauseFightBtn.onmouseover = (event) => tooltip("AutoFight", null, event);
    pauseFightBtn.onmouseout = () => tooltip("hide");
    pauseFightBtn.onclick = () => pauseFight();
  }

  {
    const mapsBtn = ensureIDSelector<HTMLElementTagNameMap["div"]>("mapsBtn");

    mapsBtn.onmouseover = (event) => tooltip("Maps", null, event);
    mapsBtn.onmouseout = () => tooltip("hide");
  }

  {
    const mapsBtnText =
      ensureIDSelector<HTMLElementTagNameMap["div"]>("mapsBtnText");

    mapsBtnText.onclick = () => mapsClicked();
  }

  {
    const configureMaps =
      ensureIDSelector<HTMLElementTagNameMap["div"]>("configureMaps");

    configureMaps.onclick = () => tooltip("Configure Maps", null, "update");
  }

  {
    const voidMapsBtn =
      ensureIDSelector<HTMLElementTagNameMap["span"]>("voidMapsBtn");

    voidMapsBtn.onclick = () => toggleVoidMaps();
  }

  {
    const portalBtn =
      ensureIDSelector<HTMLElementTagNameMap["span"]>("portalBtn");

    portalBtn.onmouseover = (event) => tooltip("Portal", null, event);
    portalBtn.onmouseout = () => tooltip("hide");
    portalBtn.onclick = () => portalClicked();
  }

  {
    const repeatBtn =
      ensureIDSelector<HTMLElementTagNameMap["span"]>("repeatBtn");

    repeatBtn.onmouseover = (event) => tooltip("Repeat Map", null, event);
    repeatBtn.onmouseout = () => tooltip("hide");
    repeatBtn.onclick = () => repeatClicked();
  }

  {
    const heirloomsBtn =
      ensureIDSelector<HTMLElementTagNameMap["span"]>("heirloomsBtn");

    heirloomsBtn.onclick = () => toggleHeirlooms();
  }

  {
    const boneBtnMain =
      ensureIDSelector<HTMLElementTagNameMap["span"]>("boneBtnMain");

    boneBtnMain.onclick = () => showBones();
  }

  {
    const finishDailyBtn =
      ensureIDSelector<HTMLElementTagNameMap["span"]>("finishDailyBtn");

    finishDailyBtn.onclick = () => tooltip("Finish Daily", null, "update");
  }

  {
    const exitSpireBtn =
      ensureIDSelector<HTMLElementTagNameMap["span"]>("exitSpireBtn");

    exitSpireBtn.onclick = () => tooltip("Exit Spire", null, "update");
  }

  {
    const openTutorialBtn2 =
      ensureIDSelector<HTMLElementTagNameMap["span"]>("openTutorialBtn2");

    openTutorialBtn2.onclick = () => tutorial.popup();
  }

  {
    const advMapsHideBtn =
      ensureIDSelector<HTMLElementTagNameMap["span"]>("advMapsHideBtn");

    advMapsHideBtn.onclick = () => hideAdvMaps();
    advMapsHideBtn.onmouseover = (event) =>
      tooltip("Show/Hide Map Config", "advMaps", event);
    advMapsHideBtn.onmouseout = () => tooltip("hide");
  }

  {
    const advMapsPreset1 =
      ensureIDSelector<HTMLElementTagNameMap["span"]>("advMapsPreset1");

    advMapsPreset1.onclick = () => selectAdvMapsPreset(1);
    advMapsPreset1.onmouseover = (event) =>
      tooltip("Map Preset", "advMaps", event);
    advMapsPreset1.onmouseout = () => tooltip("hide");
  }

  {
    const advMapsPreset2 =
      ensureIDSelector<HTMLElementTagNameMap["span"]>("advMapsPreset2");

    advMapsPreset2.onclick = () => selectAdvMapsPreset(2);
    advMapsPreset2.onmouseover = (event) =>
      tooltip("Map Preset", "advMaps", event);
    advMapsPreset2.onmouseout = () => tooltip("hide");
  }

  {
    const advMapsPreset3 =
      ensureIDSelector<HTMLElementTagNameMap["span"]>("advMapsPreset3");

    advMapsPreset3.onclick = () => selectAdvMapsPreset(3);
    advMapsPreset3.onmouseover = (event) =>
      tooltip("Map Preset", "advMaps", event);
    advMapsPreset3.onmouseout = () => tooltip("hide");
  }

  {
    const advMapsPreset4 =
      ensureIDSelector<HTMLElementTagNameMap["span"]>("advMapsPreset4");

    advMapsPreset4.onclick = () => selectAdvMapsPreset(4);
    advMapsPreset4.onmouseover = (event) =>
      tooltip("Map Preset", "advMaps", event);
    advMapsPreset4.onmouseout = () => tooltip("hide");
  }

  {
    const advMapsPreset5 =
      ensureIDSelector<HTMLElementTagNameMap["span"]>("advMapsPreset5");

    advMapsPreset5.onclick = () => selectAdvMapsPreset(5);
    advMapsPreset5.onmouseover = (event) =>
      tooltip("Map Preset", "advMaps", event);
    advMapsPreset5.onmouseout = () => tooltip("hide");
  }

  {
    const advMapsSaveBtn =
      ensureIDSelector<HTMLElementTagNameMap["span"]>("advMapsSaveBtn");

    advMapsSaveBtn.onclick = () => saveAdvMaps();
    advMapsSaveBtn.onmouseover = (event) =>
      tooltip("Save Map Settings", "advMaps", event);
    advMapsSaveBtn.onmouseout = () => tooltip("hide");
  }

  {
    const advMapsResetBtn =
      ensureIDSelector<HTMLElementTagNameMap["span"]>("advMapsResetBtn");

    advMapsResetBtn.onclick = () => resetAdvMaps(true);
    advMapsResetBtn.onmouseover = (event) =>
      tooltip("Reset Map Settings", "advMaps", event);
    advMapsResetBtn.onmouseout = () => tooltip("hide");
  }

  {
    const advMapsRecycleBtn =
      ensureIDSelector<HTMLElementTagNameMap["span"]>("advMapsRecycleBtn");

    advMapsRecycleBtn.onmouseover = (event) =>
      tooltip("Recycle All", null, event);
    advMapsRecycleBtn.onmouseout = () => tooltip("hide");
    advMapsRecycleBtn.onclick = () => recycleBelow(false);
  }

  {
    const incrementMapLevelBtn = ensureIDSelector<
      HTMLElementTagNameMap["span"]
    >("incrementMapLevelBtn");

    incrementMapLevelBtn.onclick = () => incrementMapLevel(-1);
  }

  {
    const mapLevelInput =
      ensureIDSelector<HTMLElementTagNameMap["input"]>("mapLevelInput");

    mapLevelInput.onkeyup = () => updateMapCost();
    // @ts-expect-error it clearly exists https://developer.mozilla.org/en-US/docs/Web/API/Element/focusout_event
    mapLevelInput.onfocusout = () => checkMapLevelInput(this);
  }

  {
    const decrementMapLevelBtn = ensureIDSelector<
      HTMLElementTagNameMap["span"]
    >("decrementMapLevelBtn");

    decrementMapLevelBtn.onclick = () => incrementMapLevel(1);
  }

  {
    const mapCreateBtn =
      ensureIDSelector<HTMLElementTagNameMap["div"]>("mapCreateBtn");

    mapCreateBtn.onclick = () => buyMap();
  }

  {
    const advLootContainerTitle = ensureIDSelector<
      HTMLElementTagNameMap["div"]
    >("advLootContainerTitle");

    advLootContainerTitle.onmouseover = (event) =>
      tooltip("Loot", "advMaps", event);
    advLootContainerTitle.onmouseout = () => tooltip("hide");
  }

  {
    const lootAdvMapsRange =
      ensureIDSelector<HTMLElementTagNameMap["input"]>("lootAdvMapsRange");

    lootAdvMapsRange.oninput = () => updateMapNumbers();
    lootAdvMapsRange.onchange = () => updateMapNumbers();
  }

  {
    const advSizeContainerTitle = ensureIDSelector<
      HTMLElementTagNameMap["div"]
    >("advSizeContainerTitle");

    advSizeContainerTitle.onmouseover = (event) =>
      tooltip("Size", "advMaps", event);
    advSizeContainerTitle.onmouseout = () => tooltip("hide");
  }

  {
    const sizeAdvMapsRange =
      ensureIDSelector<HTMLElementTagNameMap["input"]>("sizeAdvMapsRange");

    sizeAdvMapsRange.oninput = () => updateMapNumbers();
    sizeAdvMapsRange.onchange = () => updateMapNumbers();
  }

  {
    const advDifficultyContainerTitle = ensureIDSelector<
      HTMLElementTagNameMap["div"]
    >("advDifficultyContainerTitle");

    advDifficultyContainerTitle.onmouseover = (event) =>
      tooltip("Difficulty", "advMaps", event);
    advDifficultyContainerTitle.onmouseout = () => tooltip("hide");
  }

  {
    const difficultyAdvMapsRange = ensureIDSelector<
      HTMLElementTagNameMap["input"]
    >("difficultyAdvMapsRange");

    difficultyAdvMapsRange.oninput = () => updateMapNumbers();
    difficultyAdvMapsRange.onchange = () => updateMapNumbers();
  }

  {
    const advBiomeContainer =
      ensureIDSelector<HTMLElementTagNameMap["div"]>("advBiomeContainer");

    advBiomeContainer.onmouseover = (event) =>
      tooltip("Biome", "advMaps", event);
    advBiomeContainer.onmouseout = () => tooltip("hide");
  }

  {
    const biomeAdvMapsSelect =
      ensureIDSelector<HTMLElementTagNameMap["select"]>("biomeAdvMapsSelect");

    biomeAdvMapsSelect.onchange = () => updateMapCost();
  }

  {
    const advMapsRow2SpecialModifier = ensureIDSelector<
      HTMLElementTagNameMap["div"]
    >("advMapsRow2SpecialModifier");

    advMapsRow2SpecialModifier.onmouseover = (event) =>
      tooltip("Special Modifier", "advMaps", event);
    advMapsRow2SpecialModifier.onmouseout = () => tooltip("hide");
  }

  {
    const advSpecialSelect =
      ensureIDSelector<HTMLElementTagNameMap["select"]>("advSpecialSelect");

    advSpecialSelect.onchange = () => updateMapCost();
  }

  {
    const advPerfectUnlockedTitle = ensureIDSelector<
      HTMLElementTagNameMap["div"]
    >("advPerfectUnlockedTitle");

    advPerfectUnlockedTitle.onmouseover = (event) =>
      tooltip("Perfect Sliders", "advMaps", event);
    advPerfectUnlockedTitle.onmouseout = () => tooltip("hide");
  }

  {
    const advPerfectCheckbox =
      ensureIDSelector<HTMLElementTagNameMap["input"]>("advPerfectCheckbox");

    advPerfectCheckbox.onclick = function () {
      swapNiceCheckbox(this);
      updateMapNumbers();
    };
  }

  {
    const advExtraLevelTitle =
      ensureIDSelector<HTMLElementTagNameMap["div"]>("advExtraLevelTitle");

    advExtraLevelTitle.onmouseover = (event) =>
      tooltip("Extra Zones", "advMaps", event);
    advExtraLevelTitle.onmouseout = () => tooltip("hide");
  }

  {
    const advExtraLevelSelect = ensureIDSelector<
      HTMLElementTagNameMap["select"]
    >("advExtraLevelSelect");

    advExtraLevelSelect.onchange = () => updateMapCost();
  }

  {
    const selectMapBtn =
      ensureIDSelector<HTMLElementTagNameMap["span"]>("selectMapBtn");

    selectMapBtn.onclick = () => runMap();
  }

  {
    const recycleMapBtn =
      ensureIDSelector<HTMLElementTagNameMap["span"]>("recycleMapBtn");

    recycleMapBtn.onclick = () => recycleMap();
  }

  {
    const extraGridInfoBtnsContinue = ensureIDSelector<
      HTMLElementTagNameMap["span"]
    >("extraGridInfoBtnsContinue");

    extraGridInfoBtnsContinue.onclick = () => restoreGrid();
  }

  {
    const togglemapLoot2 =
      ensureIDSelector<HTMLElementTagNameMap["span"]>("togglemapLoot2");

    togglemapLoot2.onmouseout = () => tooltip("hide");
    togglemapLoot2.onclick = () => toggleSetting("mapLoot");
  }

  {
    const togglerepeatUntil =
      ensureIDSelector<HTMLElementTagNameMap["span"]>("togglerepeatUntil");

    togglerepeatUntil.onclick = () => toggleSetting("repeatUntil");
    togglerepeatUntil.onmouseout = () => tooltip("hide");
  }

  {
    const toggleexitTo =
      ensureIDSelector<HTMLElementTagNameMap["span"]>("toggleexitTo");

    toggleexitTo.onmouseout = () => tooltip("hide");
    toggleexitTo.onclick = () => toggleSetting("exitTo");
  }

  {
    const togglemapAtZone2 =
      ensureIDSelector<HTMLElementTagNameMap["span"]>("togglemapAtZone2");

    togglemapAtZone2.onmouseout = () => tooltip("hide");
    togglemapAtZone2.onclick = () => toggleSetting("mapAtZone");
  }

  {
    const togglerepeatVoids =
      ensureIDSelector<HTMLElementTagNameMap["span"]>("togglerepeatVoids");

    togglerepeatVoids.onmouseout = () => tooltip("hide");
    togglerepeatVoids.onclick = () => toggleSetting("repeatVoids");
  }

  {
    const toggleclimbBw2 =
      ensureIDSelector<HTMLElementTagNameMap["span"]>("toggleclimbBw2");

    toggleclimbBw2.onmouseout = () => tooltip("hide");
    toggleclimbBw2.onclick = () => toggleSetting("climbBw");
  }
}
