import { ensureOneSelector } from "#browser/dom";

export function initOfflineMapButtons() {
  const offlineMapBtnsInner = ensureOneSelector<HTMLDivElement>(
    "#offlineMapBtnsInner",
  );

  const offlineMapBtn0 = ensureOneSelector<HTMLSpanElement>(
    "#offlineMapBtn0",
    offlineMapBtnsInner,
  );
  const offlineMapBtn1 = ensureOneSelector<HTMLSpanElement>(
    "#offlineMapBtn1",
    offlineMapBtnsInner,
  );
  const offlineMapBtn2 = ensureOneSelector<HTMLSpanElement>(
    "#offlineMapBtn2",
    offlineMapBtnsInner,
  );
  const offlineMapBtn3 = ensureOneSelector<HTMLSpanElement>(
    "#offlineMapBtn3",
    offlineMapBtnsInner,
  );

  offlineMapBtn0.onclick = () => offlineProgress.runFirstMap(0);
  offlineMapBtn1.onclick = () => offlineProgress.runFirstMap(-1);
  offlineMapBtn2.onclick = () => offlineProgress.runFirstMap(-2);
  offlineMapBtn3.onclick = () => offlineProgress.runFirstMap(-3);
}

export function initOfflineZoneButton() {
  const offlineZoneBtn = ensureOneSelector<HTMLSpanElement>("#offlineZoneBtn");

  offlineZoneBtn.onclick = () => offlineProgress.leaveMap();
}

export function initOfflineExtraButtons() {
  const offlineExtraBtnsContainer = ensureOneSelector<HTMLDivElement>(
    "#offlineExtraBtnsContainer",
  );

  const buttonInfo = ensureOneSelector<HTMLDivElement>(
    ".btn-info",
    offlineExtraBtnsContainer,
  );
  const buttonDanger = ensureOneSelector<HTMLDivElement>(
    ".btn-danger",
    offlineExtraBtnsContainer,
  );
  const offlineEqualityBtn = ensureOneSelector<HTMLDivElement>(
    "#offlineEqualityBtn",
  );
  const offlineFightBtn = ensureOneSelector<HTMLDivElement>("#offlineFightBtn");

  buttonInfo.onclick = () => tooltip("Lost Time", null, "update");
  buttonDanger.onclick = () => offlineProgress.finish();
  offlineEqualityBtn.onclick = () => offlineProgress.showEquality();
  offlineFightBtn.onclick = () => offlineProgress.fightClicked();
}
