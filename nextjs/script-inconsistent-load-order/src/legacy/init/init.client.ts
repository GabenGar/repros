import { initAchievements } from "./achievements";
import { initBoneZone } from "./bone-zone";
import { initBottomRow } from "./bottom-row";
import { initHeirlooms } from "./heirlooms";
import {
  initOfflineExtraButtons,
  initOfflineMapButtons,
  initOfflineZoneButton,
} from "./offline";
import { initPopups } from "./popups";
import { initPortal } from "./portal";
import { initSettingsRow } from "./settings-row";
import { initStats } from "./stats";
import { initTopRow } from "./top-row";
import { initTutorial } from "./tutorial";

/**
 * A helper module to initialize callbacks off html file.
 */
export function init() {
  const body = document.body;
  body.onblur = () => gameUnfocused();

  initOfflineMapButtons();
  initOfflineZoneButton();
  initOfflineExtraButtons();
  initBoneZone();
  initTopRow();
  initBottomRow();
  initSettingsRow();
  initPortal();
  initAchievements();
  initStats();
  initHeirlooms();
  initPopups();
  initTutorial();
}
