import { ensureIDSelector } from "#browser/dom";

export function initTutorial() {
  {
    const tutorialSizeBtn =
      ensureIDSelector<HTMLElementTagNameMap["span"]>("tutorialSizeBtn");

    tutorialSizeBtn.onclick = () => tutorial.toggleSize();
  }

  {
    const tutorialCloseBtn =
      ensureIDSelector<HTMLElementTagNameMap["span"]>("tutorialCloseBtn");

    tutorialCloseBtn.onclick = () => tutorial.closeWindow();
  }

  {
    const tutorialBackBtn = ensureIDSelector<HTMLElementTagNameMap["span"]>(
      "tutorialBackBtn",
    ).parentElement as HTMLElementTagNameMap["span"];

    tutorialBackBtn.onclick = () => tutorial.back();
  }

  {
    const tutorialNextBtn = ensureIDSelector<HTMLElementTagNameMap["span"]>(
      "tutorialNextBtn",
    ).parentElement as HTMLElementTagNameMap["span"];

    tutorialNextBtn.onclick = () => tutorial.next();
  }
}
