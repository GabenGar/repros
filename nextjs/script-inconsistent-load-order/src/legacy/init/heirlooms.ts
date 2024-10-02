import { ensureIDSelector, ensureOneSelector } from "#browser/dom";

export function initHeirlooms() {
  {
    const hierloomChances = ensureOneSelector<HTMLElementTagNameMap["div"]>(
      `#heirloomTitleBar > .col-xs-2 > div:first-child`,
    );

    hierloomChances.onclick = () => {
      lastMainHeirIndex = -1;
      toggleHeirloomChances();
    };
  }

  {
    const hierloomHelp = ensureOneSelector<HTMLElementTagNameMap["div"]>(
      `#heirloomTitleBar > .col-xs-2 > div:nth-child(2)`,
    );

    hierloomHelp.onclick = () => toggleHeirloomHelp();
  }

  {
    const hierloomToggle = ensureOneSelector<HTMLElementTagNameMap["div"]>(
      `#heirloomTitleBar > .col-xs-2 > div:nth-child(3)`,
    );

    hierloomToggle.onclick = () => toggleHeirlooms();
  }

  {
    const heirloomChanceLeft =
      ensureIDSelector<HTMLElementTagNameMap["span"]>("heirloomChanceLeft");

    heirloomChanceLeft.onclick = () => changeHeirloomRarityRange(-1);
  }

  {
    const heirloomChanceRight = ensureIDSelector<HTMLElementTagNameMap["span"]>(
      "heirloomChanceRight",
    );

    heirloomChanceRight.onclick = () => changeHeirloomRarityRange(1);
  }

  {
    const unequipHeirloomBtn =
      ensureIDSelector<HTMLElementTagNameMap["div"]>("unequipHeirloomBtn");

    unequipHeirloomBtn.onclick = () => unequipHeirloom();
  }

  {
    const heirloomPortalBtn =
      ensureIDSelector<HTMLElementTagNameMap["div"]>("heirloomPortalBtn");

    heirloomPortalBtn.onclick = () => toggleHeirloomOnPortal();
  }

  {
    const equipHeirloomBtn =
      ensureIDSelector<HTMLElementTagNameMap["div"]>("equipHeirloomBtn");

    equipHeirloomBtn.onclick = () => equipHeirloom();
  }

  {
    const stopCarryHeirloomBtn = ensureIDSelector<HTMLElementTagNameMap["div"]>(
      "stopCarryHeirloomBtn",
    );

    stopCarryHeirloomBtn.onclick = () => stopCarryHeirloom();
  }

  {
    const recycleAllHeirloomsBtn = ensureIDSelector<
      HTMLElementTagNameMap["div"]
    >("recycleAllHeirloomsBtn");

    recycleAllHeirloomsBtn.onclick = () => recycleAllHeirloomsClicked();
  }

  {
    const sortHeirloomsBtn =
      ensureIDSelector<HTMLElementTagNameMap["div"]>("sortHeirloomsBtn");

    sortHeirloomsBtn.onclick = () => sortHeirlooms();
  }

  {
    const equipHeirloomBtn2 =
      ensureIDSelector<HTMLElementTagNameMap["div"]>("equipHeirloomBtn2");

    equipHeirloomBtn2.onclick = () => equipHeirloom();
  }

  {
    const carryHeirloomBtn =
      ensureIDSelector<HTMLElementTagNameMap["div"]>("carryHeirloomBtn");

    carryHeirloomBtn.onclick = () => carryHeirloom();
  }

  {
    const recycleHeirloomBtn =
      ensureIDSelector<HTMLElementTagNameMap["div"]>("recycleHeirloomBtn");

    recycleHeirloomBtn.onclick = () => recycleHeirloom();
  }

  {
    const modReplaceBtn =
      ensureIDSelector<HTMLElementTagNameMap["div"]>("modReplaceBtn");

    modReplaceBtn.onclick = () => replaceMod();
  }

  {
    const modUpgradeBtn =
      ensureIDSelector<HTMLElementTagNameMap["div"]>("modUpgradeBtn");

    modUpgradeBtn.onclick = () => upgradeMod();
  }

  {
    const modUpgradeBtn10 =
      ensureIDSelector<HTMLElementTagNameMap["div"]>("modUpgradeBtn10");

    modUpgradeBtn10.onclick = () => upgradeMod(false, 10);
  }

  {
    const modUpgradeBtn100 =
      ensureIDSelector<HTMLElementTagNameMap["div"]>("modUpgradeBtn100");

    modUpgradeBtn100.onclick = () => upgradeMod(false, 100);
  }
}
