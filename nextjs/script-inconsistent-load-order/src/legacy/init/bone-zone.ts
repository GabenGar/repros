import { ensureIDSelector, ensureOneSelector } from "#browser/dom";

export function initBoneZone() {
  const boneWrapper0 = ensureIDSelector<HTMLDivElement>("boneWrapper0");
  {
    const hideBonesButton = ensureOneSelector<HTMLDivElement>(
      ".row > .col-xs-2 > .boneBtn.dangerColor.pointer.noselect",
      boneWrapper0,
    );

    hideBonesButton.onclick = () => hideBones();
  }

  {
    const importPurchaseBtn =
      ensureIDSelector<HTMLDivElement>("importPurchaseBtn");

    importPurchaseBtn.onclick = () =>
      tooltip(
        "Confirm Purchase",
        null,
        "update",
        "You are about to purchase a new Exotic Import for 50 bones. This new Bad Guy will begin spawning in your next Zone or Map at an average of 3 spawns per 100 enemies. Is this what you wanted to do?",
        "purchaseImport()",
        50,
      );
  }

  {
    const heliumPurchaseBtn =
      ensureIDSelector<HTMLDivElement>("heliumPurchaseBtn");

    heliumPurchaseBtn.onclick = () =>
      tooltip(
        "Confirm Purchase",
        null,
        "update",
        "You are about to purchase one Instant Portal for 100 bones. Your new Helium will appear in the View Perks menu at the bottom of the screen available for immediate spending, and your Respec will be refreshed. Is this what you wanted to do?",
        "purchaseMisc('helium')",
        100,
      );
  }

  {
    const heirloomPurchaseBtn = ensureIDSelector<HTMLDivElement>(
      "heirloomPurchaseBtn",
    );

    heirloomPurchaseBtn.onclick = () =>
      tooltip(
        "Confirm Purchase",
        null,
        "update",
        "You are about to purchase one Heirloom for 30 bones. This will be created at a random rarity, and will be just like completing a Void Map at your highest ever Zone reached. Are you sure?",
        "purchaseMisc('heirloom')",
        30,
      );
  }
}
