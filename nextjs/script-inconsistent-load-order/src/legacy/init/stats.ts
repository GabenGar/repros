import { ensureIDSelector } from "#browser/dom";

export function initStats() {
  {
    const totalSelectBtn =
      ensureIDSelector<HTMLElementTagNameMap["div"]>("totalSelectBtn");

    totalSelectBtn.onclick = () => toggleStats("total");
  }

  {
    const currentSelectBtn =
      ensureIDSelector<HTMLElementTagNameMap["div"]>("currentSelectBtn");

    currentSelectBtn.onclick = () => toggleStats("current");
  }

  {
    const customSelectBtn =
      ensureIDSelector<HTMLElementTagNameMap["div"]>("customSelectBtn");

    customSelectBtn.onclick = () => toggleStats("custom");
  }

  {
    const closeStatsBtn =
      ensureIDSelector<HTMLElementTagNameMap["div"]>("closeStatsBtn");

    closeStatsBtn.onclick = () => toggleStats();
  }

  {
    const closeStatsBtn =
      ensureIDSelector<HTMLElementTagNameMap["div"]>("infoStatsBtn");

    closeStatsBtn.onclick = () => tooltip("Trimps Info", null, "update");
  }
}
