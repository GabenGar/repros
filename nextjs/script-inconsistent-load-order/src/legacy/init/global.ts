declare global {
  function gameUnfocused(): void;

  const offlineProgress: {
    runFirstMap(index: number): void;
    leaveMap(): void;
    finish(): void;
    showEquality(): void;
    fightClicked(): void;
  };

  function tooltip(title: "hide"): void;
  function tooltip(
    title: string,
    secondArg: null | "customText" | "advMaps",
    thirdArg: ITooltipThirdArg,
    fourthArg?: string | 1 | 2 | 3 | true,
    fifthArg?: string,
    sixthArg?: number,
  ): void;

  function hideBones(): void;

  const game: {
    permaBoneBonuses: {
      boosts: {
        consume(): void;
      };
    };
    options: {
      menu: {
        pauseGame: {
          description: string;
        };
      };
    };
  };

  function getMaxResources(name: "Food" | "Wood" | "Metal"): void;
  function setGather(
    name: "food" | "wood" | "metal" | "science" | "trimps" | "buildings",
  ): void;
  function getPsString(
    name: "food" | "wood" | "metal" | "science" | "fragments" | "gems",
  ): void;

  function getMaxTrimps(): void;

  function getTrimpPs(): void;

  function filterMessage(
    messageType: "Story" | "Loot" | "Unlocks" | "Combat",
  ): void;

  function startTrackAchieve(): void;

  function toggleAutoTrap(): void;

  function filterTabs(
    tabName:
      | "all"
      | "buildings"
      | "jobs"
      | "upgrades"
      | "equipment"
      | "talents"
      | "nature",
  ): void;

  function numTab(tab: 1 | 2 | 3 | 4 | 5 | 6, secondArg?: true): void;

  function toggleAutoStructure(): void;

  function toggleAutoStorage(): void;

  function toggleAutoJobs(): void;

  function fireMode(): void;

  function toggleAutoPrestiges(): void;

  function toggleAutoUpgrades(): void;

  function toggleAutoEquip(): void;

  const u2Mutations: {
    swapTab(bool: boolean): void;
    toggleRespec(): void;
  };

  function respecTalents(): void;

  function preventZoom(handler: GlobalEventHandlers): void;

  function natureTooltip(
    event: MouseEvent,
    type:
      | "description"
      | "upgrade"
      | "stackTransfer"
      | "uberEmpower"
      | "convert"
      | "formation",
    elementName?: "Poison" | "Wind" | "Ice",
    fourthArg?: "Wind" | "Ice" | "Poison",
  ): void;

  function naturePurchase(
    type: "upgrade" | "stackTransfer" | "uberEmpower" | "convert",
    element: "Poison" | "Wind" | "Ice",
    anotherElement?: "Wind" | "Ice" | "Poison",
  ): void;

  function setFormation(value: "0" | "1" | "2" | "3" | "4" | "5"): void;

  function getBattleStatBd(stat: "attack" | "block" | "health"): void;

  function magnetoShriek(): void;

  function getLootBd(type: "Food/Wood/Metal"): void;

  const tutorial: {
    popup(): void;
    toggleSize(): void;
    closeWindow(): void;
    back(): void;
    next(): void;
  };

  function getZoneStats(event: MouseEvent): void;

  function fightManual(): void;

  function pauseFight(): void;

  function mapsClicked(): void;

  function toggleVoidMaps(): void;

  function portalClicked(): void;

  function repeatClicked(): void;

  function toggleHeirlooms(): void;

  function showBones(): void;

  function hideAdvMaps(): void;

  function selectAdvMapsPreset(preset: 1 | 2 | 3 | 4 | 5): void;

  function saveAdvMaps(): void;

  function resetAdvMaps(val: true): void;

  function recycleBelow(val: false): void;

  function incrementMapLevel(val: -1 | 1): void;

  function updateMapCost(): void;

  function buyMap(): void;

  function updateMapNumbers(): void;

  function swapNiceCheckbox(target: GlobalEventHandlers): void;

  function runMap(): void;

  function recycleMap(): void;

  function restoreGrid(): void;

  function toggleSetting(
    name:
      | "mapLoot"
      | "exitTo"
      | "mapAtZone"
      | "repeatVoids"
      | "climbBw"
      | "detailedPerks"
      | "repeatUntil",
    secondArg?: null,
    thirdArg?: true,
  ): void;

  function save(first: boolean, second: boolean): void;

  function toggleStats(): void;
  function toggleStats(stat: "total" | "current" | "custom"): void;

  function toggleAchievementWindow(): void;

  function toggleSettingsMenu(): void;

  function viewPortalUpgrades(): void;

  function toggleSetting(type: "pauseGame"): void;

  function toggleSettingSection(arg: boolean): void;

  function searchSettings(that: GlobalEventHandlers): void;

  function settingTab(
    name:
      | "New"
      | "General"
      | "Performance"
      | "QOL"
      | "Alerts"
      | "Layout"
      | "Other",
  ): void;

  function swapPortalUniverse(): void;

  function presetTab(firstArg: 1 | 2 | 3, secondArg: true): void;

  function savePerkPreset(): void;

  function loadPerkPreset(): void;

  function renamePerkPreset(arg: boolean): void;

  function toggleRemovePerks(): void;

  function confirmAbandonChallenge(): void;

  function toggleChallengeSquared(): void;

  function activateClicked(): void;

  function cancelTooltip(): void;
  function cancelPortal(): void;

  function respecPerks(): void;

  function swapToCurrentChallenge(): void;

  function clearPerks(): void;

  function toggleAchievementHelp(): void;

  let lastMainHeirIndex: number;

  function toggleHeirloomChances(): void;

  function toggleHeirloomHelp(): void;

  function changeHeirloomRarityRange(offset: number): void;

  function unequipHeirloom(): void;

  function toggleHeirloomOnPortal(): void;

  function equipHeirloom(): void;

  function stopCarryHeirloom(): void;

  function recycleAllHeirloomsClicked(): void;

  function sortHeirlooms(): void;

  function carryHeirloom(): void;

  function recycleHeirloom(): void;

  function replaceMod(): void;

  function upgradeMod(): void;
  function upgradeMod(firstArg: false, amount: 10 | 100): void;

  function closeAchievementPopup(): void;

  function closeHeirPopup(): void;

  const playerSpire: { openPopup(): void };

  const alchObj: {
    openPopup(): void;
  };

  const autoBattle: {
    popup(): void;
  };

  function toggleAutoGolden(): void;
}

type ITooltipThirdArg = "update" | MouseEvent;

export const defineGlobals = undefined;
