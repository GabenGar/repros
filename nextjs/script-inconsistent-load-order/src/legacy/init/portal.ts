import { ensureIDSelector } from "#browser/dom";

export function initPortal() {
  {
    const swapPortalUniverseBtn = ensureIDSelector<
      HTMLElementTagNameMap["div"]
    >("swapPortalUniverseBtn");

    swapPortalUniverseBtn.onmouseover = (event) =>
      tooltip("Change Universe", null, event);
    swapPortalUniverseBtn.onmouseout = () => tooltip("hide");
    swapPortalUniverseBtn.onclick = () => swapPortalUniverse();
  }

  {
    const presetTab1 =
      ensureIDSelector<HTMLElementTagNameMap["li"]>("presetTab1");

    presetTab1.onclick = () => presetTab(1, true);
    presetTab1.onmouseover = (event) => tooltip("Perk Preset", null, event, 1);
    presetTab1.onmouseout = () => tooltip("hide");
  }

  {
    const presetTab2 =
      ensureIDSelector<HTMLElementTagNameMap["li"]>("presetTab2");

    presetTab2.onclick = () => presetTab(2, true);
    presetTab2.onmouseover = (event) => tooltip("Perk Preset", null, event, 2);
    presetTab2.onmouseout = () => tooltip("hide");
  }

  {
    const presetTab3 =
      ensureIDSelector<HTMLElementTagNameMap["li"]>("presetTab3");

    presetTab3.onclick = () => presetTab(3, true);
    presetTab3.onmouseover = (event) => tooltip("Perk Preset", null, event, 3);
    presetTab3.onmouseout = () => tooltip("hide");
  }

  {
    const presetTabSave =
      ensureIDSelector<HTMLElementTagNameMap["li"]>("presetTabSave");

    presetTabSave.onclick = () => savePerkPreset();
    presetTabSave.onmouseover = (event) =>
      tooltip("Perk Preset", null, event, "Save");
    presetTabSave.onmouseout = () => tooltip("hide");
  }

  {
    const presetTabLoad =
      ensureIDSelector<HTMLElementTagNameMap["li"]>("presetTabLoad");

    presetTabLoad.onclick = () => loadPerkPreset();
    presetTabLoad.onmouseover = (event) =>
      tooltip("Perk Preset", null, event, "Load");
    presetTabLoad.onmouseout = () => tooltip("hide");
  }

  {
    const presetTabRename =
      ensureIDSelector<HTMLElementTagNameMap["li"]>("presetTabRename");

    presetTabRename.onclick = () => renamePerkPreset(true);
    presetTabRename.onmouseover = (event) =>
      tooltip("Perk Preset", null, event, "Rename");
    presetTabRename.onmouseout = () => tooltip("hide");
  }

  {
    const presetTabExport =
      ensureIDSelector<HTMLElementTagNameMap["li"]>("presetTabExport");

    presetTabExport.onclick = () => tooltip("Export Perks", null, "update");
    presetTabExport.onmouseover = (event) =>
      tooltip("Perk Preset", null, event, "Export");
    presetTabExport.onmouseout = () => tooltip("hide");
  }

  {
    const presetTabImport =
      ensureIDSelector<HTMLElementTagNameMap["li"]>("presetTabImport");

    presetTabImport.onclick = () => tooltip("Import Perks", null, "update");
    presetTabImport.onmouseover = (event) =>
      tooltip("Perk Preset", null, event, "Import");
    presetTabImport.onmouseout = () => tooltip("hide");
  }

  {
    const ptab1 = ensureIDSelector<HTMLElementTagNameMap["li"]>("ptab1");

    ptab1.onclick = () => numTab(1, true);
  }

  {
    const ptab2 = ensureIDSelector<HTMLElementTagNameMap["li"]>("ptab2");

    ptab2.onclick = () => numTab(2, true);
  }

  {
    const ptab3 = ensureIDSelector<HTMLElementTagNameMap["li"]>("ptab3");

    ptab3.onclick = () => numTab(3, true);
  }

  {
    const ptab4 = ensureIDSelector<HTMLElementTagNameMap["li"]>("ptab4");

    ptab4.onclick = () => numTab(4, true);
  }

  {
    const ptab5 = ensureIDSelector<HTMLElementTagNameMap["li"]>("ptab5");

    ptab5.onclick = () => tooltip("Custom", null, "update", true);
  }

  {
    const ptab6 = ensureIDSelector<HTMLElementTagNameMap["li"]>("ptab6");

    ptab6.onclick = () => numTab(6, true);
    ptab6.onmouseover = (event) =>
      tooltip(
        "Buy Max",
        "customText",
        event,
        "Switching to this option will spend the majority of your Helium with each purchase. <b>Click twice to customize.</b>",
      );
    ptab6.onmouseout = () => tooltip("hide");
  }

  {
    const ptabInfo = ensureIDSelector<HTMLElementTagNameMap["li"]>("ptabInfo");

    ptabInfo.onclick = () => toggleSetting("detailedPerks", null, true);
  }

  {
    const ptabRemove =
      ensureIDSelector<HTMLElementTagNameMap["li"]>("ptabRemove");

    ptabRemove.onclick = () => toggleRemovePerks();
  }

  {
    const challengeSquaredViewBtn = ensureIDSelector<
      HTMLElementTagNameMap["span"]
    >("challengeSquaredViewBtn");

    challengeSquaredViewBtn.onmouseover = (event) =>
      tooltip("Challenge2", null, event, true);
    challengeSquaredViewBtn.onmouseout = () => tooltip("hide");
  }

  {
    const cancelChallengeBtn =
      ensureIDSelector<HTMLElementTagNameMap["div"]>("cancelChallengeBtn");

    cancelChallengeBtn.onclick = () => confirmAbandonChallenge();
  }

  {
    const inPortalC2Button =
      ensureIDSelector<HTMLElementTagNameMap["span"]>("inPortalC2Button");

    inPortalC2Button.onclick = () => toggleChallengeSquared();
    inPortalC2Button.onmouseover = (event) => tooltip("Challenge2", null, event);
    inPortalC2Button.onmouseout = () => tooltip("hide");
  }

  {
    const activatePortalBtn =
      ensureIDSelector<HTMLElementTagNameMap["div"]>("activatePortalBtn");

    activatePortalBtn.onclick = () => activateClicked();
  }

  {
    const cancelPortalBtn =
      ensureIDSelector<HTMLElementTagNameMap["div"]>("cancelPortalBtn");

    cancelPortalBtn.onclick = () => {
      cancelTooltip();
      cancelPortal();
    };
  }

  {
    const respecPortalBtn =
      ensureIDSelector<HTMLElementTagNameMap["div"]>("respecPortalBtn");

    respecPortalBtn.onclick = () => respecPerks();
    respecPortalBtn.onmouseover = (event) => tooltip("Respec", null, event);
    respecPortalBtn.onmouseout = () => tooltip("hide");
  }

  {
    const swapToCurrentChallengeBtn = ensureIDSelector<
      HTMLElementTagNameMap["div"]
    >("swapToCurrentChallengeBtn");

    swapToCurrentChallengeBtn.onclick = () => swapToCurrentChallenge();
    swapToCurrentChallengeBtn.onmouseover = (event) =>
      tooltip(
        "View Current Challenge",
        "customText",
        event,
        "Swap the Challenge Selection pane to instead display your current challenge, or vice versa",
      );
    swapToCurrentChallengeBtn.onmouseout = () => tooltip("hide");
  }

  {
    const clearPerksBtn =
      ensureIDSelector<HTMLElementTagNameMap["div"]>("clearPerksBtn");

    clearPerksBtn.onclick = () => clearPerks();
  }

  {
    const respecMutatorsBtn =
      ensureIDSelector<HTMLElementTagNameMap["div"]>("respecMutatorsBtn");

    respecMutatorsBtn.onmouseover = (event) =>
      tooltip("Respec Mutators", null, event);
    respecMutatorsBtn.onmouseout = () => tooltip("hide");
    respecMutatorsBtn.onclick = () => u2Mutations.toggleRespec();
  }
}
