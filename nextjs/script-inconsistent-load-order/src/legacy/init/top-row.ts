import { ensureIDSelector, ensureOneSelector } from "#browser/dom";

export function initTopRow() {
  initResourceColumn();
  initMiscColumn();
  initTrimpsColumn();
  initLogColumn();
}

function initResourceColumn() {
  initBoneShrine();
  initFood();
  initWood();
  initMetal();
  initScience();
}

function initFood() {
  const food = ensureIDSelector<HTMLDivElement>("food");

  {
    const ownedArea = ensureOneSelector<HTMLSpanElement>(
      ".ownedArea.bdHover",
      food,
    );

    ownedArea.onclick = () => getMaxResources("Food");
  }

  {
    const foodCollectBtn = ensureIDSelector<HTMLDivElement>("foodCollectBtn");

    foodCollectBtn.onclick = () => setGather("food");
  }

  {
    const foodPs = ensureIDSelector<HTMLSpanElement>("foodPs");

    foodPs.onclick = () => getPsString("food");
  }
}

function initBoneShrine() {
  const boneShrineBtn = ensureIDSelector<HTMLDivElement>("boneShrineBtn");

  boneShrineBtn.onmouseover = (event) => tooltip("Bone Shrine", null, event);
  boneShrineBtn.onclick = () => game.permaBoneBonuses.boosts.consume();
  boneShrineBtn.onmouseout = () => tooltip("hide");
}

function initWood() {
  const wood = ensureIDSelector("wood");

  {
    const ownedArea = ensureOneSelector<HTMLSpanElement>(
      ".ownedArea.bdHover",
      wood,
    );
    ownedArea.onclick = () => getMaxResources("Wood");
  }

  {
    const woodCollectBtn = ensureIDSelector<HTMLDivElement>("woodCollectBtn");

    woodCollectBtn.onclick = () => setGather("wood");
  }

  {
    const woodPs = ensureIDSelector<HTMLSpanElement>("woodPs");

    woodPs.onclick = () => getPsString("wood");
  }
}

function initMetal() {
  const metal = ensureIDSelector("metal");

  {
    const ownedArea = ensureOneSelector<HTMLSpanElement>(
      ".ownedArea.bdHover",
      metal,
    );

    ownedArea.onclick = () => getMaxResources("Metal");
  }

  {
    const metalCollectBtn = ensureIDSelector<HTMLDivElement>("metalCollectBtn");

    metalCollectBtn.onclick = () => setGather("metal");
  }

  {
    const metalPs = ensureIDSelector<HTMLSpanElement>("metalPs");

    metalPs.onclick = () => getPsString("metal");
  }
}

function initScience() {
  {
    const scienceCollectBtn =
      ensureIDSelector<HTMLDivElement>("scienceCollectBtn");

    scienceCollectBtn.onclick = () => setGather("science");
  }

  {
    const sciencePs = ensureIDSelector<HTMLDivElement>("sciencePs");

    sciencePs.onclick = () => getPsString("science");
  }
}

function initMiscColumn() {
  {
    const fragmentsPs = ensureIDSelector<HTMLSpanElement>("fragmentsPs");

    fragmentsPs.onclick = () => getPsString("fragments");
  }

  {
    const gemsPs = ensureIDSelector<HTMLSpanElement>("gemsPs");

    gemsPs.onclick = () => getPsString("gems");
  }

  {
    const heliumPh = ensureIDSelector<HTMLSpanElement>("heliumPh");

    heliumPh.onmouseover = (event) => tooltip("Helium Per Hour", null, event);
    heliumPh.onmouseout = () => tooltip("hide");
  }
}

function initTrimpsColumn() {
  const trimps = ensureIDSelector("trimps");

  {
    const turkimpBuff = ensureIDSelector<HTMLDivElement>("turkimpBuff");

    turkimpBuff.onmouseover = (event) => tooltip("Well Fed", null, event);
    turkimpBuff.onmouseout = () => tooltip("hide");
  }

  {
    const fluffyBox = ensureIDSelector<HTMLDivElement>("fluffyBox");

    fluffyBox.onmouseover = (event) => tooltip("Fluffy", null, event);
    fluffyBox.onmouseout = () => tooltip("hide");
    fluffyBox.onclick = () => tooltip("Fluffy", null, "update");
  }

  {
    const trimpsOwned = ensureOneSelector<HTMLSpanElement>(
      ".ownedArea.pointer.noselect.bdHover",
      trimps,
    );

    trimpsOwned.onclick = () => getMaxTrimps();
  }

  {
    const trimpsPs = ensureIDSelector<HTMLSpanElement>("trimpsPs");

    trimpsPs.onclick = () => getTrimpPs();
  }

  {
    const trimpsCollectBtn =
      ensureIDSelector<HTMLDivElement>("trimpsCollectBtn");

    trimpsCollectBtn.onclick = () => setGather("trimps");
  }
}

function initLogColumn() {
  {
    const StoryFilter = ensureIDSelector<HTMLButtonElement>("StoryFilter");

    StoryFilter.onclick = () => filterMessage("Story");
  }

  {
    const LootFilter = ensureIDSelector<HTMLButtonElement>("LootFilter");

    LootFilter.onclick = () => filterMessage("Loot");
  }

  {
    const UnlocksFilter = ensureIDSelector<HTMLButtonElement>("UnlocksFilter");

    UnlocksFilter.onclick = () => filterMessage("Unlocks");
  }

  {
    const CombatFilter = ensureIDSelector<HTMLButtonElement>("CombatFilter");

    CombatFilter.onclick = () => filterMessage("Combat");
  }

  {
    const logConfigBtn = ensureIDSelector<HTMLButtonElement>("logConfigBtn");

    logConfigBtn.onclick = () => tooltip("Message Config", null, "update");
  }

  {
    const closeTrackedAchieve = ensureIDSelector<HTMLSpanElement>("closeTrackedAchieve")

    closeTrackedAchieve.onclick= () => startTrackAchieve()
  }
}
