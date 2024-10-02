import { ensureOneSelector } from "#browser/dom";

export function initPopups() {
  {
    const achieveWindow = ensureOneSelector<HTMLElementTagNameMap["span"]>(
      `#achievementPopup > .achievementBtns > span:first-child`,
    );

    achieveWindow.onclick = () => toggleAchievementWindow();
  }

  {
    const achievePopup = ensureOneSelector<HTMLElementTagNameMap["span"]>(
      `#achievementPopup > .achievementBtns > span:last-child`,
    );

    achievePopup.onclick = () => closeAchievementPopup();
  }

  {
    const heirloomPopup = ensureOneSelector<HTMLElementTagNameMap["span"]>(
      `#heirloomsPopupBtns > span:first-child`,
    );

    heirloomPopup.onclick = () => closeHeirPopup();
  }

  {
    const heirloomPopupClose = ensureOneSelector<HTMLElementTagNameMap["span"]>(
      `#heirloomsPopupBtns > span:last-child`,
    );

    heirloomPopupClose.onclick = () => {
      toggleHeirlooms();
      closeHeirPopup();
    };
  }
}
