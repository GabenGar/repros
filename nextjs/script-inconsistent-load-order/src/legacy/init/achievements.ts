import { ensureIDSelector } from "#browser/dom";

export function initAchievements() {
  {
    const achievementHelp =
      ensureIDSelector<HTMLElementTagNameMap["span"]>("achievementHelp");

    achievementHelp.onclick = () => toggleAchievementHelp();
  }

  {
    const achievementMainClose = ensureIDSelector<
      HTMLElementTagNameMap["span"]
    >("achievementMainClose");

    achievementMainClose.onclick = () => toggleAchievementWindow();
  }

  {
    const achievementClose =
      ensureIDSelector<HTMLElementTagNameMap["span"]>("achievementClose2");

    achievementClose.onclick = () => toggleAchievementWindow();
  }
}
