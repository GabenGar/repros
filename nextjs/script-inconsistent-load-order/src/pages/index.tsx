import Head from "next/head";
import Script from "next/script";
import { init } from "#legacy";

import styles from "./_index.module.scss";

function Home() {
  return (
    <>
      <Head>
        <title>Trimps 5.9.2</title>
        <meta name="description" content="TrimpsX" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="author" content="Greensatellite" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="icon" href="favicon.ico" type="image/x-icon" />
      </Head>

      <noscript>
        <div id="checkJavascript" className={styles.noscript}>
          For some reason, your browser is having trouble loading this game.
          This game runs on javascript, and if you have an addon such as
          noscript, you may need to tell it to allow scripts from
          http://trimps.github.io, which is where this game is hosted.
          <br />
          <br />
          If you are not using any addons that might interfere with javascript,
          try using the latest versions of Chrome or Firefox.
        </div>
      </noscript>

      <div id="offlineWrapper">
        <div id="offlineInnerWrapper">
          <div id="offlineTitle">Making up lost time...</div>
          <div id="offlineProgressWrapper" className="progress">
            <span id="offlineProgressText">Starting...</span>
            <div
              className="progress-bar"
              role="progressbar"
              id="offlineProgress"
            >
              &nbsp;
            </div>
          </div>
          <div className="row">
            <div className="col-xs-3">
              <div id="offlineZoneNumber">Zone</div>
              <div id="offlineCellNumber">Cell</div>
            </div>
            <div className="col-xs-9">
              <div id="offlineExtraInfo"></div>
            </div>
          </div>
          <div className="row">
            <div id="offlineMapBtns" className="col-xs-6">
              <div id="offlineMapText" style={{ textAlign: "center" }}>
                Wanna run a map?
              </div>
              <div id="offlineMapBtnsInner">
                <span
                  id="offlineMapBtn0"
                  className="offlineMapBtn btn btn-md btn-success"
                >
                  World Level Map
                </span>
                <span
                  id="offlineMapBtn1"
                  className="offlineMapBtn btn btn-md btn-success"
                >
                  -1 Level map
                </span>
                <span
                  id="offlineMapBtn2"
                  className="offlineMapBtn btn btn-md btn-success"
                >
                  -2 Level map
                </span>
                <span
                  id="offlineMapBtn3"
                  className="offlineMapBtn btn btn-md btn-success"
                >
                  -3 Level map
                </span>
              </div>
            </div>
            <div id="offlineZoneBtns" className="col-xs-6">
              <div
                id="offlineInMapDescription"
                style={{ textAlign: "center" }}
              ></div>
              <span
                id="offlineZoneBtn"
                className="offlineExtraBtn btn btn-md btn-primary"
              >
                Back to World
              </span>
            </div>
            <div
              id="offlineExtraBtnsContainer"
              className="col-xs-6"
              style={{ position: "absolute", left: "50%", width: "25%" }}
            >
              <div id="offlineTimeOffline"></div>
              <div className="btn btn-lg btn-info offlineExtraBtn">
                What is This?!
              </div>
              <div className="btn btn-lg btn-danger offlineExtraBtn">
                Stop Here
              </div>
              <div
                className="btn btn-lg btn-warning offlineExtraBtn"
                id="offlineEqualityBtn"
              >
                Show Equality
              </div>
              <div
                className="btn btn-lg btn-primary offlineExtraBtn"
                id="offlineFightBtn"
              >
                Start Fighting
              </div>
              <div id="offlineFormations"></div>
              <div id="offlineSettingContainer"></div>
              <div id="offlineEffective"></div>
            </div>
          </div>
        </div>
      </div>

      <div id="boneWrapper" style={{ display: "none" }}>
        <div id="boneWrapper0">
          <div className="row">
            <div className="col-xs-2"></div>
            <div className="col-xs-8">
              <div id="boneTitleContainer">Bone Trader</div>
              <div id="boneOwnedContainer">
                You have <span id="bonesOwned">0</span>
              </div>
              <span id="bonesFrom">
                You can earn bones as you progress through the world by killing
                Skeletimps and Megaskeletimps.
              </span>
              <br />
              <div id="boneFlavorRow">
                The Bone Trader trades bones for... bonuses
              </div>
            </div>

            <div className="col-xs-2">
              <div className="boneBtn dangerColor pointer noselect">Close</div>
            </div>
          </div>
          <div id="boneBuyRow" className="row">
            <div className="col-xs-4 boneBuyColumn">
              <div className="boneBuyTitle">Permanent Upgrades</div>
              <div className="boneBuyDesc" id="permaBonesDesc"></div>
              <div id="permaBoneBonuses"></div>
            </div>

            <div id="boneImportsColumn" className="col-xs-4 boneBuyColumn">
              <div className="boneBuyTitle">Exotic Imp-orts</div>
              <div className="boostSpacerImports boostSpacer">
                <div className="boneBuyDesc">
                  Exotic Imp-orts will be unlocked permanently once purchased.
                  Each has a <span id="exoticImpSpawnChance"></span>% chance to
                  spawn per cell and better loot than normal enemies. Any
                  stacking multipliers from killing Imp-orts reset on Portal but
                  the imps do not have to be unlocked again.
                </div>

                <div className="importsPreview">
                  <div className="importLocation">Spawns in World</div>
                  <table
                    className="table importsTable"
                    id="importsTableWorld0"
                  ></table>
                  <div className="importLocation table-hover">
                    Spawns in Maps
                  </div>
                  <table
                    className="table importsTable"
                    id="importsTableMaps0"
                  ></table>
                </div>

                <div id="purchaseContainerImports">
                  <div
                    className="boneBtn boneBtnStateOn pointer noselect"
                    id="importPurchaseBtn"
                  ></div>
                </div>
              </div>
            </div>

            <div id="boneMiscColumn" className="col-xs-4 boneBuyColumn">
              <div className="boneBuyTitle">Other Goodies</div>
              <div className="boostSpacer">
                <div id="buyHeliumArea">
                  <div
                    className="boneBtn boneBtnStateOn pointer noselect"
                    id="heliumPurchaseBtn"
                  >
                    Buy Bone Portal (100 bones)
                  </div>
                  <div className="miscDesc">
                    <b>
                      <span id="heliumGainedMisc"></span>
                    </b>
                    <br />
                    <span id="bonePortalDescription">
                      Automatically gain helium equal to the amount you earned
                      on your best run
                    </span>
                  </div>
                </div>

                <div id="singleRunBonuses"></div>
                <div id="buyHeirloomArea">
                  <div
                    className="boneBtn boneBtnStateOn pointer noselect"
                    id="heirloomPurchaseBtn"
                  >
                    Buy Heirloom (30 bones)
                  </div>

                  <div className="miscDesc">
                    <div id="heirloomRarityMisc"></div>
                    Get&nbsp;one&nbsp;Heirloom&nbsp;at&nbsp;the&nbsp;chances&nbsp;above,&nbsp;based&nbsp;on&nbsp;highest&nbsp;zone
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        id="wrapper"
        style={{ background: "url(css/bg2.png) center repeat-x" }}
      >
        <div id="innerWrapper">
          <div id="warnings"></div>
          <div className="row" id="topRow">
            <div className="col-xs-4" id="resourceColumn">
              <div className="row resourceRow">
                <div className="col-xs-6 maxH">
                  <div id="food" className="playerGather">
                    <div
                      id="boneShrineBtn"
                      style={{ display: "none" }}
                      className="isEmpty noselect"
                    ></div>
                    <span className="title">Food</span>
                    <br />
                    <span className="ownedArea bdHover">
                      <span id="foodOwned">0</span> / <span id="foodMax"></span>
                    </span>
                    <br />
                    <div className="progress resProgress">
                      <div
                        className="progress-bar percentColorBlue"
                        id="foodBar"
                        role="progressbar"
                      >
                        <span id="foodTimeToFill"></span>
                      </div>
                    </div>
                    <div className="row collectRow">
                      <div className="col-xs-6">
                        <div
                          id="foodCollectBtn"
                          className="workBtn workColorOff pointer noselect"
                        >
                          Gather
                        </div>
                      </div>
                      <div className="col-xs-6">
                        <span
                          className="psText sizeSecRegular pointer noselect"
                          id="foodPs"
                        >
                          +0/sec
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-xs-6 maxH">
                  <div
                    id="wood"
                    className="playerGather"
                    style={{ visibility: "hidden" }}
                  >
                    <span className="title">Wood</span>
                    <br />
                    <span className="ownedArea bdHover">
                      <span id="woodOwned">0</span> / <span id="woodMax"></span>
                    </span>
                    <br />
                    <div className="progress resProgress">
                      <div
                        className="progress-bar percentColorBlue"
                        id="woodBar"
                        role="progressbar"
                      >
                        <span id="woodTimeToFill"></span>
                      </div>
                    </div>

                    <div className="row collectRow">
                      <div className="col-xs-6">
                        <div
                          id="woodCollectBtn"
                          className="workBtn workColorOff pointer noselect"
                        >
                          Chop
                        </div>
                      </div>

                      <div className="col-xs-6">
                        <span
                          className="psText sizeSecRegular pointer noselect"
                          id="woodPs"
                        >
                          +0/sec
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="row resourceRow">
                <div className="col-xs-6 maxH">
                  <div
                    id="metal"
                    className="playerGather"
                    style={{ visibility: "hidden" }}
                  >
                    <span className="title">Metal</span>
                    <br />
                    <span className="ownedArea bdHover">
                      <span id="metalOwned">0</span> /{" "}
                      <span id="metalMax"></span>
                    </span>
                    <br />
                    <div className="progress resProgress">
                      <div
                        className="progress-bar percentColorBlue"
                        id="metalBar"
                        role="progressbar"
                      >
                        <span id="metalTimeToFill"></span>
                      </div>
                    </div>
                    <div className="row collectRow">
                      <div className="col-xs-6">
                        <div
                          id="metalCollectBtn"
                          className="workBtn workColorOff pointer noselect"
                        >
                          Mine
                        </div>
                      </div>
                      <div className="col-xs-6">
                        <span
                          className="psText sizeSecRegular pointer noselect"
                          id="metalPs"
                        >
                          +0/sec
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xs-6 maxH">
                  <div
                    id="science"
                    className="playerGather"
                    style={{ visibility: "hidden" }}
                  >
                    <span className="title">Science</span>
                    <br />
                    <span className="ownedArea">
                      <span id="scienceOwned">0</span>
                    </span>
                    <br />
                    <div className="row collectRow">
                      <div className="col-xs-6">
                        <div
                          id="scienceCollectBtn"
                          className="workBtn workColorOff pointer noselect"
                        >
                          Research
                        </div>
                      </div>
                      <div className="col-xs-6">
                        <span
                          className="psText sizeSecRegular pointer noselect"
                          id="sciencePs"
                        >
                          +0/sec
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xs-1" id="miscColumn">
              <div
                id="fragments"
                className="playerGather playerGatherSm"
                style={{ visibility: "hidden" }}
              >
                <span className="title">Fragments</span>
                <br />
                <span className="ownedArea">
                  <span id="fragmentsOwned">0</span>
                </span>
                <br />
                <span
                  className="psText sizeSecRegular pointer noselect"
                  id="fragmentsPs"
                  style={{ display: "none" }}
                >
                  +0/sec
                </span>
              </div>

              <div
                id="gems"
                className="playerGather playerGatherSm"
                style={{ visibility: "hidden" }}
              >
                <span className="title">Gems</span>
                <br />
                <span className="ownedArea">
                  <span id="gemsOwned">0</span>
                </span>
                <br />
                <span
                  className="psText sizeSecRegular pointer noselect"
                  id="gemsPs"
                  style={{ display: "none" }}
                >
                  +0/sec
                </span>
              </div>

              <div
                id="helium"
                className="playerGather playerGatherSm"
                style={{ display: "none" }}
              >
                <span id="heliumName" className="title">
                  Helium
                </span>
                <br />
                <span className="ownedArea">
                  <span id="heliumOwned">0</span>
                </span>
                <br />
                <span id="heliumPh" className="heliumPh hePhColorNormal"></span>
              </div>
            </div>

            <div className="col-xs-2" id="trimpsColumn">
              <div
                id="trimps"
                className="playerGather"
                style={{ visibility: "hidden" }}
              >
                <div className="row">
                  <div className="col-xs-3" style={{ paddingRight: "0" }}>
                    <div id="turkimpBuff" style={{ display: "none" }}>
                      <span className="icomoon icon-spoon-knife"></span>
                      <br />
                      <span id="turkimpTime"></span>
                    </div>
                  </div>

                  <div className="col-xs-6">
                    <div className="maxCenter">
                      <span id="trimpTitle" className="title">
                        ???
                      </span>
                    </div>
                  </div>

                  <div className="col-xs-3" style={{ paddingLeft: "0" }}>
                    <div id="fluffyBox" style={{ display: "none" }}>
                      <span className="fluffyIcon glyphicon glyphicon-user"></span>
                      &nbsp;Lv<span id="fluffyLevel"></span>
                      <br />
                      <div className="progress" id="fluffyExpContainer">
                        <span
                          className="progress-bar noTransition"
                          id="fluffyExp"
                        >
                          &nbsp;
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <span className="ownedArea pointer noselect bdHover">
                  <span id="trimpsOwned">0</span> /
                  <span id="trimpsMax">10</span>
                </span>
                <br />
                <div className="progress resProgress">
                  <div
                    className="progress-bar percentColorBlue"
                    id="trimpsBar"
                    role="progressbar"
                  >
                    <span id="trimpsTimeToFill"></span>
                  </div>
                </div>
                <div id="unempHide" style={{ visibility: "hidden" }}>
                  <span id="trimpsUnemployed">0</span>&nbsp;
                  <span id="trimpsBreedingTitle">breeding</span>
                  <br />
                  <span
                    id="trimpsPs"
                    className="pointer sizeSecRegular noselect bdHover psColorWhite"
                  >
                    +0/sec
                  </span>
                  <br />
                </div>
                <div id="empHide" style={{ visibility: "hidden" }}>
                  <span id="trimpsEmployed">0</span>/
                  <span id="maxEmployed">0</span>
                  employed
                </div>
                <div id="trapArea">
                  <div
                    id="trimpsCollectBtn"
                    className="workBtn workColorOff pointer noSelect"
                  >
                    Check&nbsp;Traps&nbsp;(<span id="trimpTrapText">1</span>)
                  </div>
                  <div
                    id="trimpsCollecting"
                    className="collecting"
                    style={{ display: "none" }}
                  >
                    Trapping (<span id="trimpTrapText2">1</span>)
                  </div>
                  <div className="progress" id="trappingProgress">
                    <div
                      className="progress-bar"
                      id="trappingBar"
                      role="progressbar"
                    ></div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-xs-5" id="logColumn">
              <div id="logContainer">
                <div
                  className="btn-group btn-group-justified"
                  id="logBtnGroup"
                  role="group"
                >
                  <div className="btn-group" role="group">
                    <button
                      id="StoryFilter"
                      type="button"
                      className="btn btn-success logFlt"
                    >
                      Story
                    </button>
                  </div>

                  <div className="btn-group" role="group">
                    <button
                      id="LootFilter"
                      type="button"
                      className="btn btn-success logFlt"
                    >
                      Loot
                    </button>
                  </div>

                  <div className="btn-group" role="group">
                    <button
                      id="UnlocksFilter"
                      type="button"
                      className="btn btn-success logFlt"
                    >
                      Unlocks
                    </button>
                  </div>

                  <div className="btn-group" role="group">
                    <button
                      id="CombatFilter"
                      type="button"
                      className="btn btn-success logFlt"
                    >
                      Combat
                    </button>
                  </div>

                  <div id="logConfigHolder" className="btn-group" role="group">
                    <button
                      id="logConfigBtn"
                      type="button"
                      className="btn btn-default logFlt"
                    >
                      <span className="glyphicon glyphicon-cog"></span>
                    </button>
                  </div>
                </div>

                <div id="achievementTracker">
                  <div className="row">
                    <span
                      id="closeTrackedAchieve"
                      className="icomoon icon-close"
                      style={{ cursor: "pointer" }}
                    ></span>
                    <div
                      id="achievementTrackerIconContainer"
                      className="col-xs-2 noPad"
                    ></div>
                    <div className="col-xs-5 noPad">
                      <div
                        id="achievementTrackerTitle"
                        style={{ whiteSpace: "nowrap" }}
                      ></div>
                      <div id="achievementTrackerDescription"></div>
                    </div>
                    <div className="col-xs-4 noPad">
                      <div
                        id="achievementTrackerProgress"
                        className="trackerProgress"
                      ></div>
                      <div id="achievementTrackerReward"></div>
                    </div>
                    <div className="col-xs-1 noPad">&nbsp;</div>
                  </div>
                </div>

                <div id="log" className="niceScroll">
                  <span className="StoryMessage message">
                    <span className="glyphicon glyphicon-star"></span>A green
                    shimmer erupts then disappears, and you hit the ground. You
                    look pretty hungry...
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="row" id="bottomRow">
            <div
              id="buyCol"
              className="col-xs-5"
              style={{ visibility: "hidden" }}
            >
              <div id="queueContainer">
                <div className="row" id="queueRow">
                  <div className="col-xs-4 lowPad">
                    <span id="foremenCount"></span>
                  </div>

                  <div className="col-xs-2 lowPad">
                    <span id="buildSpeed"></span>
                  </div>

                  <div className="col-xs-3 lowPad">
                    <div
                      id="autoTrapBtn"
                      style={{ display: "none" }}
                      className="pointer noselect colorDanger autoUpgradeBtn"
                    >
                      AutoTraps Off
                    </div>
                  </div>

                  <div className="col-xs-3">
                    <div
                      id="buildingsCollectBtn"
                      className="workBtn workColorOff pointer noselect"
                    >
                      Build
                    </div>
                  </div>
                </div>
                <div className="queue niceScroll" id="buildingsQueue">
                  <span id="noQueue">Nothing in queue...</span>
                  <div id="queueItemsHere"></div>
                </div>
              </div>

              <div id="outerBuyContainer">
                <div id="buyTabs">
                  <ul
                    id="buyTabsUl"
                    className="nav nav-tabs nav-justified buyTabsUl"
                  >
                    <li
                      role="presentation"
                      id="allTab"
                      className="tabNotSelected buyTab"
                    >
                      <a id="allA">All</a>
                    </li>
                    <li
                      role="presentation"
                      id="buildingsTab"
                      className="tabNotSelected buyTab"
                    >
                      <a id="buildingsA">
                        <span
                          id="buildingsAlert"
                          className="alert badge"
                        ></span>
                        Buildings
                      </a>
                    </li>
                    <li
                      role="presentation"
                      id="jobsTab"
                      style={{ visibility: "hidden" }}
                      className="tabNotSelected buyTab"
                    >
                      <a id="jobsA">
                        <span id="jobsAlert" className="alert badge"></span>Jobs
                      </a>
                    </li>
                    <li
                      role="presentation"
                      id="upgradesTab"
                      style={{ visibility: "hidden" }}
                      className="tabNotSelected buyTab"
                    >
                      <a id="upgradesA">
                        <span id="upgradesAlert" className="alert badge"></span>
                        Upgrades
                      </a>
                    </li>
                    <li
                      role="presentation"
                      id="equipmentTab"
                      style={{ visibility: "hidden" }}
                      className="tabNotSelected buyTab"
                    >
                      <a id="equipmentA">
                        <span
                          id="equipmentAlert"
                          className="alert badge"
                        ></span>
                        Equipment
                      </a>
                    </li>
                  </ul>
                  <ul
                    id="buyTabsUl2"
                    className="nav nav-tabs nav-justified buyTabsUl"
                  >
                    <li
                      id="talentsTab"
                      className="tabNotSelected buyTab"
                      role="presentation"
                      style={{ display: "none" }}
                    >
                      <a id="talentA">
                        <span id="talentsAlert" className="alert badge"></span>
                        <span id="mutatorsAlert" className="alert badge"></span>
                        <span id="MasteryTabName">Mastery</span>
                        <span id="talentsEssenceTotal"></span>
                      </a>
                    </li>
                    <li
                      id="equalityTab"
                      className="tabNotSelected equalityTabScaling buyTab"
                      role="presentation"
                      style={{ display: "none" }}
                    >
                      <a id="equalityA">Equality</a>
                    </li>
                    <li
                      id="natureTab"
                      className="tabNotSelected buyTab empowerTabNone"
                      role="presentation"
                      style={{ display: "none" }}
                    >
                      <a id="natureA">Nature</a>
                    </li>
                    <li
                      id="playerSpireTab"
                      className="tabNotSelected buyTab pausedSpireNo"
                      role="presentation"
                      style={{ display: "none" }}
                    >
                      <a id="spireA">Spire</a>
                    </li>
                    <li
                      id="alchemyTab"
                      className="tabNotSelected buyTab alchTabNone"
                      role="presentation"
                      style={{ display: "none" }}
                    >
                      <a id="alchemyA">Alchemy</a>
                    </li>
                    <li
                      id="autoBattleTab"
                      className="tabNotSelected buyTab abTabNone"
                      role="presentation"
                      style={{ display: "none" }}
                    >
                      <a id="autoBattleA">SA</a>
                    </li>
                  </ul>
                </div>

                <div id="numTabs" className="numTabs">
                  <ul className="nav nav-tabs nav-justified">
                    <li
                      role="presentation"
                      className="tabNotSelected"
                      id="tab1"
                    >
                      <a id="tab1Text">+1</a>
                    </li>
                    <li
                      role="presentation"
                      className="tabNotSelected"
                      id="tab2"
                    >
                      <a id="tab2Text">+10</a>
                    </li>
                    <li
                      role="presentation"
                      className="tabNotSelected"
                      id="tab3"
                    >
                      <a id="tab3Text">+25</a>
                    </li>
                    <li
                      role="presentation"
                      className="tabNotSelected"
                      id="tab4"
                    >
                      <a id="tab4Text">+100</a>
                    </li>
                    <li
                      role="presentation"
                      className="tabNotSelected"
                      id="tab5"
                    >
                      <a id="tab5Text">+1</a>
                      <a id="tab5Text2">Custom</a>
                    </li>
                    <li
                      role="presentation"
                      className="tabNotSelected"
                      id="tab6"
                    >
                      <a id="tab6Text">Max</a>
                    </li>
                  </ul>
                </div>

                <div
                  id="buyContainer"
                  className="niceScroll buyContainerSizeSm"
                >
                  <div id="buyHere" className="niceScroll buttonSizeLarge">
                    <div id="buildingsContainer">
                      <div id="buildingsTitleDiv" className="titleDiv">
                        <div className="row">
                          <div
                            className="col-xs-3"
                            style={{ paddingRight: "5px" }}
                          >
                            <span id="buildingsTitleSpan" className="titleSpan">
                              Buildings
                            </span>
                          </div>

                          <div className="col-xs-3 lowPad">&nbsp;</div>

                          <div className="col-xs-3 lowPad">
                            <div
                              id="autoStructureBtn"
                              className="toggleConfigBtn pointer noselect colorDanger autoUpgradeBtn"
                            >
                              <div id="autoStructureText">AutoStructure</div>

                              <div id="autoStructureConfig">
                                <span className="glyphicon glyphicon-cog"></span>
                              </div>
                            </div>
                          </div>

                          <div
                            className="col-xs-3"
                            style={{ paddingLeft: "5px" }}
                          >
                            <div
                              id="autoStorageBtn"
                              className="pointer noselect colorDanger autoUpgradeBtn"
                            >
                              AutoStorage
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="buyBox" id="buildingsHere"></div>
                    </div>
                    <div id="jobsContainer">
                      <div
                        id="jobsTitleDiv"
                        className="titleDiv"
                        style={{ display: "none" }}
                      >
                        <div className="row">
                          <div
                            className="col-xs-3"
                            style={{ paddingRight: "5px" }}
                          >
                            <span id="jobsTitleSpan" className="titleSpan">
                              Jobs
                            </span>
                          </div>

                          <div className="col-xs-3 lowPad">
                            <span
                              id="jobsTitleUnemployed"
                              className="titleSpan"
                            ></span>
                          </div>

                          <div className="col-xs-3 lowPad">
                            <div
                              id="autoJobsBtn"
                              className="toggleConfigBtn pointer noselect colorDanger autoUpgradeBtn"
                            >
                              <div id="autoJobsText">AutoJobs</div>

                              <div>
                                <span className="glyphicon glyphicon-cog"></span>
                              </div>
                            </div>
                          </div>
                          <div
                            className="col-xs-3"
                            style={{ paddingLeft: "5px" }}
                          >
                            <div
                              id="fireBtn"
                              className="pointer noselect fireBtnNotFiring"
                            >
                              Fire
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="buyBox" id="jobsHere"></div>
                    </div>
                    <div id="upgradesContainer">
                      <div
                        id="upgradesTitleDiv"
                        style={{ display: "none" }}
                        className="titleDiv"
                      >
                        <div className="row">
                          <div
                            className="col-xs-3"
                            style={{ paddingRight: "5px" }}
                          >
                            <span id="upgradesTitleSpan" className="titleSpan">
                              Upgrades
                              <br />
                              (Research first)
                            </span>
                          </div>
                          <div className="col-xs-3 lowPad">
                            <div
                              id="autoGoldenBtn"
                              className="pointer noselect settingBtn0 autoUpgradeBtn"
                            >
                              <div id="autoGoldenText">AutoGold</div>
                            </div>
                          </div>
                          <div className="col-xs-3 lowPad">
                            <div
                              id="autoPrestigeBtn"
                              className="pointer noselect autoUpgradeBtn settingBtn0"
                            >
                              AutoPrestige
                            </div>
                          </div>
                          <div
                            className="col-xs-3"
                            style={{ paddingLeft: "5px" }}
                          >
                            <div
                              id="autoUpgradeBtn"
                              className="pointer noselect colorDanger autoUpgradeBtn"
                            >
                              AutoUpgrade
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="buyBox" id="upgradesHere"></div>
                    </div>
                    <div id="equipmentContainer">
                      <div
                        id="equipmentTitleDiv"
                        style={{ display: "none" }}
                        className="titleDiv"
                      >
                        <div className="row">
                          <div className="col-xs-3">
                            <span id="equipmentTitleSpan" className="titleSpan">
                              Equipment
                            </span>
                          </div>
                          <div className="col-xs-3 lowPad">&nbsp;</div>
                          <div className="col-xs-3 lowPad">&nbsp;</div>
                          <div
                            className="col-xs-3"
                            style={{ paddingLeft: "5px" }}
                          >
                            <div
                              id="autoEquipBtn"
                              className="toggleConfigBtn pointer noselect colorDanger autoUpgradeBtn"
                            >
                              <div id="autoEquipText">AutoEquip</div>
                              <div id="autoEquipConfig">
                                <span className="glyphicon glyphicon-cog"></span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="buyBox" id="equipmentHere"></div>
                    </div>

                    <div id="talentsContainer" style={{ display: "none" }}>
                      <div
                        style={{ display: "none", width: "100%" }}
                        id="swapToMutatorsBtn"
                        className="btn btn-primary btn-lg"
                      >
                        Swap to Mutators
                        <span
                          id="mutatorsAlert2"
                          className="alert badge"
                        ></span>
                      </div>

                      <div className="row noMarg">
                        <div className="col-xs-3 lowPad">
                          <div id="talentsAffordable"></div>
                        </div>
                        <div className="col-xs-6 lowPad">
                          <div id="talentsTitle">
                            <span id="essenceOwned">0</span> Dark Essence
                          </div>
                        </div>
                        <div className="col-xs-3 lowPad">
                          <div
                            className="pointer noselect colorDanger"
                            id="talentRespecBtn"
                          >
                            Respec (20 bones)
                          </div>
                        </div>
                      </div>
                      <div id="talentsCost">
                        Your next mastery costs
                        <span id="talentsNextCost">0</span>.
                      </div>
                      <div id="talentsHere"></div>
                    </div>
                    <div
                      id="natureContainer"
                      style={{ display: "none", height: "100%" }}
                    >
                      <div className="row noMarg" style={{ height: "100%" }}>
                        <div
                          id="tabColPoison"
                          className="col-xs-4 tabColPoison tabColNature noPad"
                        >
                          <div className="natureTop">
                            <div className="natureTitle">
                              <span
                                id="infoSpanPoison"
                                className="infoSpanNature"
                              >
                                <span className="icomoon icon-info2"></span>
                              </span>
                              Poison
                            </div>
                            Tokens: <span id="tokenCountPoison">0</span>
                          </div>
                          <span
                            id="natureUpgradePoison"
                            className="natureBuyIcon noselect"
                          >
                            <span
                              className="natureUpgradeLevel"
                              id="natureUpgradePoisonLevel"
                            ></span>
                            <span
                              className="natureUpgradeCost"
                              id="natureUpgradePoisonCost"
                            ></span>
                            <span className="natureBigIcon icomoon icon-plus"></span>
                          </span>
                          <span
                            id="natureUpgradeTransferPoison"
                            className="natureBuyIcon noselect"
                          >
                            <span
                              className="natureUpgradeLevel"
                              id="natureStackTransferPoisonLevel"
                            ></span>
                            <span
                              className="natureUpgradeCost"
                              id="natureStackTransferPoisonCost"
                            ></span>
                            <span className="natureBigIcon icomoon icon-rotate-left"></span>
                          </span>
                          <span
                            id="uberPoisonContainer"
                            className="natureBuyIcon natureUberContainer noselect"
                          >
                            <span
                              className="natureUpgradeLevel natureUberName"
                              id="uberPoisonName"
                            ></span>
                            <span
                              className="natureUpgradeCost"
                              id="natureUberEmpowerPoisonCost"
                            ></span>
                            <span className="natureBigIcon glyphicon glyphicon-king"></span>
                          </span>
                          <div className="transferButtons">
                            <span
                              id="natureConvertPoisonWind"
                              className="natureBuyIcon noselect natureBuyIconMini"
                            >
                              <span
                                className="natureUpgradeCost"
                                id="naturePoisonWindCost"
                              ></span>
                              <span className="natureSmallIcon icomoon icon-shuffle3"></span>
                              <span className="natureSmallIcon icomoon icon-air"></span>
                            </span>
                            <span
                              id="natureConvertPoisonIce"
                              className="natureBuyIcon noselect natureBuyIconMini"
                            >
                              <span
                                className="natureUpgradeCost"
                                id="naturePoisonIceCost"
                              ></span>
                              <span className="natureSmallIcon icomoon icon-shuffle3"></span>
                              <span className="natureSmallIcon glyphicon glyphicon-certificate"></span>
                            </span>
                          </div>
                          <span className="natureBackgroundIcon icomoon icon-flask"></span>
                        </div>

                        <div
                          id="tabColWind"
                          className="col-xs-4 tabColWind tabColNature noPad"
                        >
                          <div className="natureTop">
                            <div className="natureTitle">
                              <span
                                id="infoSpanWind"
                                className="infoSpanNature"
                              >
                                <span className="icomoon icon-info2"></span>
                              </span>
                              Wind
                            </div>
                            Tokens: <span id="tokenCountWind">0</span>
                          </div>
                          <span
                            id="natureUpgradeLevelWind"
                            className="natureBuyIcon noselect"
                          >
                            <span
                              className="natureUpgradeLevel"
                              id="natureUpgradeWindLevel"
                            ></span>
                            <span
                              className="natureUpgradeCost"
                              id="natureUpgradeWindCost"
                            ></span>
                            <span className="natureBigIcon icomoon icon-plus"></span>
                          </span>
                          <span
                            id="natureUpgradeTransferWind"
                            className="natureBuyIcon noselect"
                          >
                            <span
                              className="natureUpgradeLevel"
                              id="natureStackTransferWindLevel"
                            ></span>
                            <span
                              className="natureUpgradeCost"
                              id="natureStackTransferWindCost"
                            ></span>
                            <span className="natureBigIcon icomoon icon-rotate-left"></span>
                          </span>
                          <span
                            id="uberWindContainer"
                            className="natureBuyIcon natureUberContainer noselect"
                          >
                            <span
                              className="natureUpgradeLevel natureUberName"
                              id="uberWindName"
                            ></span>
                            <span
                              className="natureUpgradeCost"
                              id="natureUberEmpowerWindCost"
                            ></span>
                            <span className="natureBigIcon glyphicon glyphicon-king"></span>
                          </span>
                          <div className="transferButtons">
                            <span
                              id="natureTransferWindPoison"
                              className="natureBuyIcon noselect natureBuyIconMini"
                            >
                              <span
                                className="natureUpgradeCost"
                                id="natureWindPoisonCost"
                              ></span>
                              <span className="natureSmallIcon icomoon icon-shuffle3"></span>
                              <span className="natureSmallIcon icomoon icon-flask"></span>
                            </span>
                            <span
                              id="natureTransferWindIce"
                              className="natureBuyIcon noselect natureBuyIconMini"
                            >
                              <span
                                className="natureUpgradeCost"
                                id="natureWindIceCost"
                              ></span>
                              <span className="natureSmallIcon icomoon icon-shuffle3"></span>
                              <span className="natureSmallIcon glyphicon glyphicon-certificate"></span>
                            </span>
                          </div>
                          <span className="natureBackgroundIcon icomoon icon-air"></span>
                        </div>

                        <div
                          id="tabColIce"
                          className="col-xs-4 tabColIce tabColNature noPad"
                        >
                          <div className="natureTop">
                            <div className="natureTitle">
                              <span
                                id="infoSpanIce"
                                className="infoSpanNature"
                              ></span>
                              Ice
                            </div>
                            Tokens: <span id="tokenCountIce">0</span>
                          </div>
                          <span
                            id="natureUpgradeLevelIce"
                            className="natureBuyIcon noselect"
                          >
                            <span
                              className="natureUpgradeLevel"
                              id="natureUpgradeIceLevel"
                            ></span>
                            <span
                              className="natureUpgradeCost"
                              id="natureUpgradeIceCost"
                            ></span>
                            <span className="natureBigIcon icomoon icon-plus"></span>
                          </span>
                          <span
                            id="natureUpgradeTransferIce"
                            className="natureBuyIcon noselect"
                          >
                            <span
                              className="natureUpgradeLevel"
                              id="natureStackTransferIceLevel"
                            ></span>
                            <span
                              className="natureUpgradeCost"
                              id="natureStackTransferIceCost"
                            ></span>
                            <span className="natureBigIcon icomoon icon-rotate-left"></span>
                          </span>
                          <span
                            id="uberIceContainer"
                            className="natureBuyIcon noselect natureUberContainer"
                          >
                            <span
                              className="natureUpgradeLevel natureUberName"
                              id="uberIceName"
                            ></span>
                            <span
                              className="natureUpgradeCost"
                              id="natureUberEmpowerIceCost"
                            ></span>
                            <span className="natureBigIcon glyphicon glyphicon-king"></span>
                          </span>
                          <div className="transferButtons">
                            <span
                              id="natureConvertIcePoison"
                              className="natureBuyIcon noselect natureBuyIconMini"
                            >
                              <span
                                className="natureUpgradeCost"
                                id="natureIcePoisonCost"
                              ></span>
                              <span className="natureSmallIcon icomoon icon-shuffle3"></span>
                              <span className="natureSmallIcon icomoon icon-flask"></span>
                            </span>
                            <span
                              id="natureConvertIceWind"
                              className="natureBuyIcon noselect natureBuyIconMini"
                            >
                              <span
                                className="natureUpgradeCost"
                                id="natureIceWindCost"
                              ></span>
                              <span className="natureSmallIcon icomoon icon-shuffle3"></span>
                              <span className="natureSmallIcon icomoon icon-air"></span>
                            </span>
                          </div>
                          <span className="natureBackgroundIcon icomoon icon-certificate"></span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-xs-7" id="rightCol">
              <div id="battleContainer" style={{ visibility: "hidden" }}>
                <div id="battleHeadContainer">
                  <div className="row" id="battleStatsRow">
                    <div className="col-xs-6" id="goodGuyCol">
                      <div className="row">
                        <div
                          id="colGoodGuyName"
                          className="col-xs-9"
                          style={{ paddingRight: "5px" }}
                        >
                          {/* Update in resetGame if adding to name */}
                          <div className="battleStatsTitle" id="goodGuyName">
                            <span id="realTrimpName">Trimps</span>&nbsp;(
                            <span id="trimpsFighting">1</span>){" "}
                            <span id="anticipationSpan"></span>
                            <span id="titimpBuff"></span>
                            <span id="debuffSpan"></span>
                          </div>
                        </div>
                        <div
                          id="colStances"
                          className="col-xs-3"
                          style={{ paddingLeft: "5px" }}
                        >
                          <div
                            className="row noPad"
                            style={{ paddingRight: "15px" }}
                          >
                            <div
                              id="form0Container"
                              className="formFifth noPad"
                            >
                              <div
                                id="formation0"
                                className="formationBtn pointer formationStateDisabled"
                              >
                                X
                              </div>
                            </div>
                            <div
                              id="form1Container"
                              className="formFifth noPad"
                            >
                              <div
                                id="formation1"
                                className="formationBtn pointer formationStateDisabled"
                              >
                                H
                              </div>
                            </div>
                            <div
                              id="form2Container"
                              className="formFifth noPad"
                            >
                              <div
                                id="formation2"
                                className="formationBtn pointer formationStateDisabled"
                              >
                                D
                              </div>
                            </div>
                            <div
                              id="form3Container"
                              className="formFifth noPad"
                            >
                              <div
                                id="formation3"
                                className="formationBtn pointer formationStateDisabled"
                              >
                                B
                              </div>
                            </div>
                            <div
                              id="form4Container"
                              className="formFifth noPad"
                            >
                              <div
                                id="formation4"
                                className="formationBtn pointer formationStateDisabled"
                              >
                                S
                              </div>
                            </div>
                            <div
                              id="form5Container"
                              className="formSixth noPad"
                            >
                              <div
                                id="formation5"
                                className="formationBtn pointer formationStateDisabled"
                              >
                                N
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="row guyRow" id="goodGuyStatsRow">
                        <div
                          id="damageDiv"
                          className="col-xs-6 lbdHover pointer noselect bdHover"
                          style={{ paddingRight: "0" }}
                        >
                          <span
                            id="goodGuyAttack"
                            className="attackColorNormal"
                          ></span>
                          DMG <span id="critSpan"></span>
                        </div>

                        <div
                          className="col-xs-4 noPad pointer noselect bdHover"
                          id="blockDiv"
                          style={{ visibility: "hidden" }}
                        >
                          <span id="goodGuyBlock">0</span>
                          <span id="goodGuyBlockName">BLK</span>
                        </div>

                        <div
                          id="roboTrimpBtn"
                          className="col-xs-2 pointer noselect"
                          style={{ paddingLeft: "0" }}
                        >
                          <span
                            id="chainHolder"
                            className="shriekStateCooldown"
                            style={{ visibility: "hidden" }}
                          >
                            <span id="roboTrimpTurnsLeft"></span>
                            <span
                              className="icomoon icon-chain"
                              style={{ color: "white" }}
                            ></span>
                          </span>
                        </div>
                      </div>

                      <div className="progress fightBar">
                        <div
                          className="progress-bar percentColorBlue"
                          id="goodGuyBar"
                          role="progressbar"
                        >
                          <span
                            style={{ zIndex: "3" }}
                            className="bdHover pointer noselect innerFightBar"
                          >
                            <span id="goodGuyHealth">0</span>/
                            <span id="goodGuyHealthMax">0</span>
                          </span>
                        </div>

                        <div
                          className="progress-bar es0"
                          role="progressbar"
                          id="energyShield"
                        >
                          &nbsp;
                        </div>

                        <div
                          className="progress-bar es1"
                          role="progressbar"
                          id="energyShieldLayer"
                        >
                          &nbsp;
                        </div>

                        <div
                          className="progress-bar es2"
                          role="progressbar"
                          id="energyShieldLayer2"
                        >
                          &nbsp;
                        </div>
                      </div>
                    </div>

                    <div
                      className="col-xs-6"
                      id="badGuyCol"
                      style={{ visibility: "hidden" }}
                    >
                      <div>
                        <div className="row">
                          <div className="col-xs-11">
                            <span className="battleStatsTitle">
                              <span id="badGuyName"></span>
                              <span id="corruptionBuff"></span>
                              <span id="voidBuff"></span>
                              <span
                                id="badCanCrit"
                                style={{ display: "none" }}
                                className="badge"
                              >
                                <span className="icomoon icon-hair-cross"></span>
                              </span>
                              <span id="badDebuffSpan"></span>
                            </span>
                            <br />
                            <div className="guyRow" id="badGuyRow">
                              <div>
                                <span
                                  id="badGuyAttack"
                                  className="dmgColorWhite"
                                ></span>
                                DMG <span id="badCrit"></span>
                              </div>
                            </div>
                          </div>

                          <div
                            className="col-xs-1"
                            style={{ fontSize: "1.5em", padding: "0" }}
                          >
                            <div id="lootBdContainer">
                              <span
                                id="lootBdBtn"
                                className="icomoon icon-gift2 pointer"
                              ></span>
                              <div
                                id="openTutorialContainer"
                                style={{ display: "none" }}
                              >
                                <span
                                  id="openTutorialBtn"
                                  className="flashNo icomoon icon-star pointer tutorialStar"
                                  style={{ color: "gold" }}
                                ></span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="progress fightBar">
                        <div
                          className="progress-bar percentColorBlue"
                          id="badGuyBar"
                          role="progressbar"
                        >
                          <span className="innerFightBar">
                            <span id="badGuyHealth">0</span>/
                            <span id="badGuyHealthMax">0</span>
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="row" id="gridRow">
                  <div className="col-xs-2" id="battleBtnsColumn">
                    <div id="battleSideTitle">
                      <span id="worldName">Zone</span>
                      <span id="worldNumber">1</span>
                      <br />
                      <span id="mapBonus"></span>
                    </div>

                    <div className="battleSideBtnContainer">
                      <span className="btn btn-primary fightBtn" id="fightBtn">
                        Fight
                      </span>
                    </div>

                    <div className="battleSideBtnContainer">
                      <span
                        className="btn btn-danger fightBtn"
                        id="pauseFight"
                        style={{ display: "none" }}
                      >
                        AutoFight Off
                      </span>
                    </div>

                    <div className="battleSideBtnContainer">
                      <div
                        id="mapsBtn"
                        className="btn btn-warning fightBtn"
                        style={{ display: "none" }}
                      >
                        <div id="mapsBtnText">Maps</div>
                        <div id="configureMaps">
                          <span className="glyphicon glyphicon-cog"></span>
                        </div>
                      </div>
                    </div>

                    <div className="battleSideBtnContainer">
                      <span
                        className="btn voidMessage fightBtn"
                        id="voidMapsBtn"
                        style={{ display: "none" }}
                      >
                        Void Maps
                      </span>
                    </div>

                    <div className="battleSideBtnContainer">
                      <span
                        className="btn btn-info fightBtn"
                        id="portalBtn"
                        style={{ display: "none" }}
                      >
                        Portal
                      </span>
                    </div>

                    <div className="battleSideBtnContainer">
                      <span
                        className="btn btn-danger fightBtn"
                        id="repeatBtn"
                        style={{ display: "none" }}
                      >
                        Repeat Off
                      </span>
                    </div>

                    <div
                      className="battleSideBtnContainer"
                      style={{ display: "none" }}
                      id="heirloomBtnContainer"
                    >
                      <span
                        id="heirloomsBtn"
                        className="btn fightBtn heirloomsBtnColor"
                      >
                        Heirlooms
                      </span>
                    </div>

                    <div
                      className="battleSideBtnContainer"
                      style={{ display: "none" }}
                      id="boneBtnContainer"
                    >
                      <span
                        className="btn btn-default fightBtn"
                        id="boneBtnMain"
                      >
                        <span id="boneBtnText">Bone Trader</span>
                      </span>
                    </div>

                    <div
                      className="battleSideBtnContainer"
                      style={{ display: "none" }}
                      id="finishDailyBtnContainer"
                    >
                      <span
                        className="btn btn-success fightBtn"
                        id="finishDailyBtn"
                      >
                        Finish Daily
                      </span>
                    </div>

                    <div
                      className="battleSideBtnContainer"
                      style={{ display: "none" }}
                      id="exitSpireBtnContainer"
                    >
                      <span
                        className="btn btn-danger fightBtn"
                        id="exitSpireBtn"
                      >
                        Exit Spire
                      </span>
                    </div>
                  </div>

                  <div className="col-xs-10" id="gridContainer">
                    <div id="grid"></div>

                    <div id="preMaps" style={{ display: "none" }}>
                      <div
                        style={{ display: "none" }}
                        id="mapsCreateRow"
                        className="row"
                      >
                        <div
                          id="openTutorialContainer2"
                          style={{ display: "none" }}
                        >
                          <span
                            id="openTutorialBtn2"
                            className="flashNo icomoon icon-star pointer tutorialStar"
                            style={{ color: "gold" }}
                          ></span>
                        </div>
                        <div id="advMapsControlBtns">
                          <span
                            id="advMapsHideBtn"
                            className="icomoon icon-minus-circle pointer"
                          ></span>
                          <span
                            id="advMapsPreset1"
                            className="pointer mapPreset presetSelectionOff"
                          >
                            1
                          </span>
                          <span
                            id="advMapsPreset2"
                            className="pointer mapPreset presetSelectionOff"
                          >
                            2
                          </span>
                          <span
                            id="advMapsPreset3"
                            className="pointer mapPreset presetSelectionOff"
                          >
                            3
                          </span>
                          <span
                            id="advMapsPreset4"
                            className="pointer mapPreset presetSelectionOff"
                          >
                            4
                          </span>
                          <span
                            id="advMapsPreset5"
                            className="pointer mapPreset presetSelectionOff"
                          >
                            5
                          </span>
                          <span
                            id="advMapsSaveBtn"
                            className="icomoon icon-save pointer"
                          ></span>
                          <span
                            id="advMapsResetBtn"
                            className="icomoon icon-refresh pointer"
                          ></span>
                          <span
                            id="advMapsRecycleBtn"
                            className="icomoon icon-trash-o pointer iconStateBad"
                          ></span>
                        </div>
                        <div id="mapLevelContainer" className="col-xs-4">
                          Level
                          <span
                            id="incrementMapLevelBtn"
                            className="pointer noselect incrementBtn"
                          >
                            <span className="glyphicon glyphicon-download"></span>
                          </span>
                          <input id="mapLevelInput" type="number" />
                          <span
                            id="decrementMapLevelBtn"
                            className="pointer noselect incrementBtn"
                          >
                            <span className="glyphicon glyphicon-upload"></span>
                          </span>
                        </div>

                        <div id="mapCostContainer" className="col-xs-4 lowPad">
                          <span id="mapCostFragmentCost"></span>
                          <span id="mapCostFragmentText"> Fragments</span>
                        </div>

                        <div
                          id="mapCreateBtn"
                          className="workBtn primaryColor pointer noselect col-xs-4"
                        >
                          Create
                        </div>
                      </div>

                      <div id="advMapsRow" className="row">
                        <div
                          id="advLootContainer"
                          className="col-xs-3 mapConfigContainer lowPad"
                        >
                          <div
                            id="advLootContainerTitle"
                            className="advMapsTitle"
                          >
                            Loot
                          </div>
                          <br />
                          <input
                            id="lootAdvMapsRange"
                            className="mapSelector mapInput"
                            type="range"
                            min="0"
                            max="9"
                            defaultValue="0"
                          />
                          <div id="lootAdvMapsText"></div>
                        </div>

                        <div
                          id="advSizeContainer"
                          className="col-xs-3 mapConfigContainer lowPad"
                        >
                          <div
                            id="advSizeContainerTitle"
                            className="advMapsTitle"
                          >
                            Size
                          </div>
                          <br />
                          <input
                            id="sizeAdvMapsRange"
                            defaultValue="0"
                            className="mapSelector mapInput"
                            type="range"
                            min="0"
                            max="9"
                          />
                          <div id="sizeAdvMapsText"></div>
                        </div>

                        <div
                          id="advDifficultyContainer"
                          className="col-xs-3 mapConfigContainer lowPad"
                        >
                          <div
                            id="advDifficultyContainerTitle"
                            className="advMapsTitle"
                          >
                            Difficulty
                          </div>
                          <br />
                          <input
                            id="difficultyAdvMapsRange"
                            className="mapSelector mapInput"
                            type="range"
                            min="0"
                            max="9"
                            defaultValue="0"
                          />
                          <div id="difficultyAdvMapsText"></div>
                        </div>

                        <div
                          id="advBiomeContainer"
                          className="col-xs-3 mapConfigContainer lowPad"
                        >
                          <div className="advMapsTitle">Biome</div>
                          <br />
                          <select id="biomeAdvMapsSelect" className="advSelect">
                            <option value="Random">Random</option>
                            <option value="Mountain">Mountain</option>
                            <option value="Forest">Forest</option>
                            <option value="Sea">Sea</option>
                            <option value="Depths">Depths</option>
                          </select>
                        </div>
                      </div>

                      <div id="advMapsRow2" className="row">
                        <div className="col-xs-2 mapConfigContainer lowPad"></div>

                        <div className="col-xs-3 mapConfigContainer lowPad">
                          <div
                            id="advMapsRow2SpecialModifier"
                            className="advMapsTitle"
                          >
                            Special Modifier
                          </div>
                          <br />
                          <select
                            id="advSpecialSelect"
                            className="advSelect"
                          ></select>
                        </div>

                        <div className="col-xs-2 mapConfigContainer lowPad">
                          <div
                            id="advPerfectLocked"
                            style={{ border: "1px solid white" }}
                          >
                            <div
                              className="advMapsTitle"
                              id="advPerfectLockedText"
                            >
                              Unlock at Z110
                            </div>
                            <span className="icomoon icon-lock3"></span>
                          </div>
                          <div
                            id="advPerfectUnlocked"
                            style={{ display: "none" }}
                          >
                            <div
                              id="advPerfectUnlockedTitle"
                              className="advMapsTitle"
                            >
                              Perfect Sliders
                            </div>
                            <br />
                            <span
                              id="advPerfectCheckbox"
                              className="icomoon icon-checkbox-unchecked niceCheckbox"
                              data-checked="false"
                            ></span>
                          </div>
                        </div>

                        <div className="col-xs-3 mapConfigContainer lowPad">
                          <div
                            id="advExtraLevelLocked"
                            style={{ border: "1px solid white" }}
                          >
                            <div
                              className="advMapsTitle"
                              id="advExtraLockedText"
                            >
                              Unlock at Z210
                            </div>
                            <span className="icomoon icon-lock3"></span>
                          </div>
                          <div
                            id="advExtraLevelUnlocked"
                            style={{ display: "none" }}
                          >
                            <div
                              id="advExtraLevelTitle"
                              className="advMapsTitle"
                            >
                              Extra Zones
                            </div>
                            <br />
                            <select
                              id="advExtraLevelSelect"
                              className="advSelect"
                            ></select>
                          </div>
                        </div>

                        <div className="col-xs-2 mapConfigContainer lowPad"></div>
                      </div>

                      <div id="heirRare" style={{ display: "none" }}></div>

                      <div id="selectedMapContainer" className="row">
                        <div id="selectedMapCol" className="col-xs-3 lowPad">
                          <div id="selectedMapName"></div>
                          <br />
                          <div
                            id="mapCreditsLeft"
                            title="Earn 1 Credit for each zone you clear while on this challenge"
                          ></div>
                        </div>

                        <div id="mapStatsCol3" className="col-xs-5 lowPad">
                          <div className="row">
                            <div className="col-xs-7 mapStatsCol">
                              <div className="mapStatsTitle">Items</div>
                              <div className="mapStatsTitle">Resource</div>
                            </div>
                            <div
                              id="mapStatsCol4"
                              className="col-xs-5 mapStatsCol"
                            >
                              <div
                                className="mapStatsValue"
                                id="mapStatsItems"
                              ></div>
                              <div
                                className="mapStatsValue"
                                id="mapStatsResource"
                              ></div>
                            </div>
                          </div>
                          <div id="selectMapBtns">
                            <span
                              id="selectMapBtn"
                              className="workBtn pointer noselect infoColor selectMapBtn"
                              style={{ visibility: "hidden" }}
                            >
                              Run Map
                            </span>
                            <span
                              id="recycleMapBtn"
                              className="workBtn pointer noselect dangerColor selectMapBtn"
                              style={{ visibility: "hidden" }}
                            >
                              Recycle Map
                            </span>
                          </div>
                        </div>

                        <div id="mapStatsCol1" className="col-xs-2 mapStatsCol">
                          <div className="mapStatsTitle">Size</div>
                          <div className="mapStatsTitle">Difficulty</div>
                          <div className="mapStatsTitle">Loot</div>
                        </div>

                        <div id="mapStatsCol2" className="col-xs-2 mapStatsCol">
                          <div
                            className="mapStatsValue"
                            id="mapStatsSize"
                          ></div>
                          <div
                            className="mapStatsValue"
                            id="mapStatsDifficulty"
                          ></div>
                          <div
                            className="mapStatsValue"
                            id="mapStatsLoot"
                          ></div>
                        </div>
                      </div>

                      <div id="mapsHere" className="mapSize1 niceScroll"></div>

                      <div id="voidMapsHere" className="niceScroll"></div>
                    </div>

                    <div
                      id="mapGrid"
                      className="gridShrunk"
                      style={{ display: "none" }}
                    ></div>

                    <div id="extraGridInfo" style={{ display: "none" }}>
                      <div id="extraGridInfoTitle"></div>
                      <div id="extraGridInfoSummary"></div>
                      <div id="extraGridInfoSub"></div>
                      <div id="extraGridInfoBtns">
                        <span
                          id="extraGridInfoBtnsContinue"
                          className="btn btn-info"
                        >
                          Continue
                        </span>
                      </div>
                    </div>
                  </div>

                  <div id="extraMapBtns" className="col-xs-off">
                    <div className="battleSideBtnContainer">
                      <span
                        id="togglemapLoot2"
                        className="btn settingBtn1 fightBtn"
                      ></span>
                    </div>

                    <div className="battleSideBtnContainer">
                      <span
                        id="togglerepeatUntil"
                        className="btn settingBtn1 fightBtn"
                      ></span>
                    </div>

                    <div className="battleSideBtnContainer">
                      <span
                        id="toggleexitTo"
                        className="btn settingBtn1 fightBtn"
                      ></span>
                    </div>

                    <div className="battleSideBtnContainer">
                      <span
                        id="togglemapAtZone2"
                        className="btn settingBtn1 fightBtn"
                      ></span>
                    </div>

                    <div
                      className="battleSideBtnContainer"
                      style={{ display: "none" }}
                      id="repeatVoidsContainer"
                    >
                      <span
                        id="togglerepeatVoids"
                        className="btn settingBtn1 fightBtn"
                      ></span>
                    </div>

                    <div
                      className="battleSideBtnContainer"
                      style={{ display: "none" }}
                      id="climbBwContainer"
                    >
                      <span
                        id="toggleclimbBw2"
                        className="btn settingBtn1 fightBtn"
                      ></span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div id="settingsRow">
            <table id="settingsTable">
              <tbody>
                <tr>
                  <td id="settingTableSave" className="btn btn-info">
                    Save <span id="saveIndicator"></span>
                    <span id="playFabIndicator"></span>
                  </td>
                  <td id="settingTableExport" className="btn btn-info">
                    <div>Export</div>
                  </td>
                  <td id="settingTableImport" className="btn btn-info">
                    <div>Import</div>
                  </td>
                  <td id="settingTableStats" className="btn btn-success">
                    <div>Stats</div>
                  </td>
                  <td id="settingTableAchievments" className="btn tealColor">
                    <div>Achieves</div>
                  </td>
                  <td id="settingTableSettings" className="btn btn-default">
                    <div id="settingsText">Settings</div>
                  </td>
                  <td id="pastUpgradesBtn" className="btn"></td>
                  <td id="newUpdatesBtn" className="btn btn-new">
                    V <span id="versionNumber"></span> | What&apos;s New
                  </td>
                  <td id="portalTimer" className="timerNotPaused">
                    <span id="portalTime">&nbsp;</span>&nbsp;&nbsp;
                    <span
                      style={{ fontSize: "0.85em", lineHeight: "0.85em" }}
                      className="icomoon icon-pause3"
                    ></span>
                    &nbsp;
                  </td>
                </tr>
              </tbody>
            </table>

            <div id="settingsHere" style={{ display: "none" }}>
              <div id="searchSettingsWindow">
                <div id="settingTitleBar">
                  <div className="noselect optionContainer settingsBtn tealColor settingTypeBtn">
                    Browse All
                  </div>
                  <span id="searchSettingsTitle">
                    Choose a Category Below, or Search for a Setting/Keyword:
                  </span>
                  &nbsp; <input id="searchSettings" />
                  <br />
                  <div id="settingsTabs">
                    <ul className="nav nav-tabs nav-justified">
                      <li
                        id="NewTab"
                        className="tabNotSelected settingTab"
                        role="presentation"
                        style={{ display: "none" }}
                      >
                        <a>New</a>
                      </li>

                      <li
                        id="GeneralTab"
                        className="tabNotSelected settingTab"
                        role="presentation"
                      >
                        <a>General</a>
                      </li>

                      <li
                        id="PerformanceTab"
                        className="tabNotSelected settingTab"
                        role="presentation"
                      >
                        <a>Performance</a>
                      </li>

                      <li
                        id="QOLTab"
                        className="tabNotSelected settingTab"
                        role="presentation"
                      >
                        <a>Quality of Life</a>
                      </li>

                      <li
                        id="AlertsTab"
                        className="tabNotSelected settingTab"
                        role="presentation"
                      >
                        <a>Pop-ups and Alerts</a>
                      </li>

                      <li
                        id="LayoutTab"
                        className="tabNotSelected settingTab"
                        role="presentation"
                      >
                        <a>Layout</a>
                      </li>

                      <li
                        id="OtherTab"
                        className="tabNotSelected settingTab"
                        role="presentation"
                      >
                        <a>Other</a>
                      </li>

                      <li
                        id="HotkeyTab"
                        className="tabNotSelected settingTab"
                        role="presentation"
                      >
                        <a>Hotkeys</a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div id="settingSearchResults"></div>
              </div>

              <div id="allSettings" style={{ display: "none" }}>
                <div className="noselect optionContainer settingsBtn tealColor">
                  Back to Search
                </div>

                <div id="allSettingsHere"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div id="portalWrapper" style={{ display: "none" }} className="portalMk0">
        <div id="swapPortalUniverseBtn">Change Universe</div>

        <div id="titleRow">
          <div id="titleCol1" className="titleCol">
            <div>
              <div id="portalTitle"></div>
              <div id="portalError" style={{ display: "none" }}></div>
            </div>
          </div>

          <div id="titleCol2" className="titleCol">
            <div>
              <div id="portalHelium">
                <span id="portalHeliumOwned">0</span> Helium Canisters
              </div>

              <div id="portalTotalHelium">
                <span id="totalHeliumEarned">0</span> Earned All Time
              </div>

              <div id="portalTotalSpent">
                <span id="totalHeliumSpent">0</span> Spent on Perks
              </div>

              <div id="portalTotalPortals">
                <span id="totalPortals">0</span> Portals Used
              </div>
            </div>
          </div>
        </div>

        <div className="row" id="portalRow">
          <div id="perkCol" className="col-xs-7">
            <div className="challengeTitle">Perks</div>
            <div id="portalStory"></div>
            <div id="portalPresets" className="numTabs">
              <ul className="nav nav-tabs nav-justified" id="portalPresetsTabs">
                <li
                  id="presetTab1"
                  className="tabNotSelected"
                  role="presentation"
                >
                  <a id="presetTab1Text">Preset 1</a>
                </li>

                <li
                  id="presetTab2"
                  className="tabNotSelected"
                  role="presentation"
                >
                  <a id="presetTab2Text">Preset 2</a>
                </li>

                <li
                  id="presetTab3"
                  className="tabNotSelected"
                  role="presentation"
                >
                  <a id="presetTab3Text">Preset 3</a>
                </li>

                <li
                  id="presetTabSave"
                  className="tabNotEnabled"
                  role="presentation"
                >
                  <a>Save</a>
                </li>

                <li
                  id="presetTabLoad"
                  className="tabNotEnabled"
                  role="presentation"
                >
                  <a>Load</a>
                </li>

                <li
                  id="presetTabRename"
                  className="tabNotEnabled"
                  role="presentation"
                >
                  <a>Rename</a>
                </li>

                <li
                  id="presetTabExport"
                  className="tabNotEnabled"
                  role="presentation"
                >
                  <a>Export</a>
                </li>

                <li
                  id="presetTabImport"
                  className="tabNotEnabled"
                  role="presentation"
                >
                  <a>Import</a>
                </li>
              </ul>
            </div>

            <div id="pnumTabs" className="numTabs">
              <ul className="nav nav-tabs nav-justified" id="portalTabs">
                <li id="ptab1" className="tabNotSelected" role="presentation">
                  <a id="ptab1Text">+1</a>
                </li>

                <li id="ptab2" className="tabNotSelected" role="presentation">
                  <a id="ptab2Text">+10</a>
                </li>

                <li id="ptab3" className="tabNotSelected" role="presentation">
                  <a id="ptab3Text">+25</a>
                </li>

                <li id="ptab4" className="tabNotSelected" role="presentation">
                  <a id="ptab4Text">+100</a>
                </li>

                <li id="ptab5" className="tabNotSelected" role="presentation">
                  <a id="ptab5Text">Custom</a>
                </li>

                <li id="ptab6" className="tabNotSelected" role="presentation">
                  <a id="ptab6Text">Max</a>
                </li>

                <li
                  id="ptabInfo"
                  className="tabNotSelected pointer"
                  role="presentation"
                >
                  <a id="ptabInfoText">More Info</a>
                </li>

                <li
                  id="ptabRemove"
                  role="presentation"
                  style={{ display: "none" }}
                >
                  <a id="ptabRemoveText">Remove</a>
                </li>
              </ul>
            </div>

            <div id="portalUpgradesHere" className="niceScroll"></div>
          </div>

          <div id="challengeCol" className="col-xs-5">
            <div id="viewChallenge" style={{ display: "none" }}>
              <div style={{ textAlign: "center" }}>
                <span
                  id="challengeSquaredViewBtn"
                  className="thing thingColorSquared pointer"
                  style={{ width: "50%", display: "inline-block" }}
                >
                  Challenge
                  <sup>
                    <span id="challengeSquaredName">2</span>
                  </sup>{" "}
                  -<span id="challengeSquaredBonusAmtView">0</span>% bonus
                </span>
              </div>
              <span id="viewChallengeText">
                You do not currently have an active challenge.
              </span>
              <br />
              <br />
              <div
                id="cancelChallengeBtn"
                className="btn btn-warning inPortalBtn"
                style={{ display: "none" }}
              >
                Abandon Challenge
              </div>
              <span id="extraChallengeStuff"></span>
            </div>

            <div id="challenges" style={{ display: "none" }}>
              <div id="challengeTitleNoSquared">
                <div className="challengeTitle">Challenges</div>
              </div>

              <div id="challengeTitleSquared" style={{ display: "none" }}>
                <div
                  className="challengeTitle"
                  style={{
                    display: "inline-block",
                    width: "50%",
                    padding: "0",
                    margin: "0",
                  }}
                >
                  Challenges
                </div>

                <div
                  style={{
                    display: "inline-block",
                    width: "50%",
                    padding: "0",
                    margin: "0",
                  }}
                >
                  <span
                    id="inPortalC2Button"
                    className="thing thingColorSquared pointer"
                    style={{ width: "75%", display: "inline-block" }}
                  >
                    Challenge
                    <sup>
                      <span id="inPortalC2Name">2</span>
                    </sup>{" "}
                    -<span id="challengeSquaredBonusAmt">0</span>% bonus
                  </span>
                </div>
              </div>

              <div id="challengeDescription">
                <span id="challengeDescriptionPre">
                  You can also choose to activate a challenge before using your
                  portal. Completing a challenge will earn you a permanent
                  reward. You can abandon or view an active challenge at any
                  time by clicking the &quot;View Perks&quot; button.
                </span>
                <span id="flagMustRestart" style={{ display: "none" }}>
                  <b>
                    If you abandon this challenge, the portal will become
                    unstable and the world will restart (you&apos;ll keep
                    permanent bonuses like helium)
                  </b>
                </span>

                <div
                  id="specificChallengeDescription"
                  className="challengeDescriptionLg"
                ></div>
              </div>

              <div id="challengesHere"></div>
            </div>
          </div>
        </div>

        <div id="portalBtnContainer">
          <div id="activatePortalBtn" className="btn btn-primary inPortalBtn">
            Activate Portal
          </div>

          <div id="cancelPortalBtn" className="btn btn-danger inPortalBtn">
            Cancel
          </div>

          <div
            id="respecPortalBtn"
            className="btn btn-warning inPortalBtn"
            style={{ display: "none" }}
          ></div>

          <div
            id="swapToCurrentChallengeBtn"
            className="btn btn-success inPortalBtn"
            style={{ display: "none" }}
          >
            View Current Challenge
          </div>

          <div
            id="clearPerksBtn"
            className="btn btn-warning inPortalBtn"
            style={{ display: "none" }}
          >
            Clear All Perks
          </div>

          <div
            id="respecMutatorsBtn"
            className="btn inPortalBtn autoColor darkBorder"
            style={{ display: "none" }}
          ></div>
        </div>
      </div>

      <div id="achievementWrapper" style={{ display: "none" }}>
        <div id="achievementMainButtons">
          <span
            id="achievementHelp"
            className="icomoon icon-question-circle"
          ></span>
          <span id="achievementMainClose" className="icomoon icon-close"></span>
        </div>

        <div className="row" id="achievementTopRow">
          <div className="col-xs-6">
            <div id="achievementHover" style={{ display: "none" }}>
              <div className="row">
                <div
                  id="achievementHoverIconContainer"
                  className="col-xs-3 lowPad"
                ></div>

                <div className="col-xs-8">
                  <div id="achievementHoverTitle"></div>
                  <div id="achievementHoverDescription"></div>
                  <div id="achievementHoverProgress"></div>
                  <div id="achievementHoverReward"></div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-xs-6">
            <div className="maxCenter" id="achievementHeader">
              <span className="achievementMainTitle">Achievements</span>
              <br />
              <span className="achievementTotals">
                You are dealing <span id="achievementTotalPercent"></span>%
                extra damage<span id="achievementFluff"></span>.
              </span>
              <div id="achievementGoldenBonusContainer"></div>
            </div>
            <div id="achievementHelpContainer" style={{ display: "none" }}>
              You can earn achievements by doing stuff. Each achievement will
              boost the amount of damage your Trimps can deal, and later
              achievements grant a larger bonus. You can learn more about an
              achievement by hovering your mouse over it.
              <b>Click on an Achievement on this screen to track it!</b>
            </div>
          </div>

          <div className="col-xs-1"></div>
        </div>

        <div id="achievementsHere" className="niceScroll"></div>

        <div style={{ textAlign: "center" }}>
          <span id="achievementClose2" className="icomoon icon-close"></span>
        </div>
      </div>

      <div id="statsWrapper" style={{ display: "none" }}>
        <span id="statsTitle">Statistics!</span>
        <br />
        <div className="row" id="statsBtnRow">
          <div className="col-xs-3"></div>

          <div
            id="totalSelectBtn"
            className="col-xs-2 btn btn-info statToggleBtn"
          >
            Total
          </div>

          <div
            id="currentSelectBtn"
            className="col-xs-2 btn btn-success statToggleBtn"
          >
            Current Run
          </div>

          <div
            id="customSelectBtn"
            className="col-xs-2 btn btn-danger statToggleBtn"
          >
            Customize
          </div>
        </div>
        <br />
        <div className="row" id="statsRow">
          <div className="col-xs-4" id="statCol1"></div>
          <div className="col-xs-4" id="statCol2"></div>
          <div className="col-xs-4" id="statCol3"></div>
        </div>
        <div id="closeStatsBtn" className="btn btn-danger inPortalBtn">
          Close
        </div>
        &nbsp;
        <div id="infoStatsBtn" className="btn btn-info inPortalBtn">
          Trimps Info
        </div>
      </div>

      <div
        id="mutTreeWrapper"
        style={{ display: "none" }}
        className="noselect"
      ></div>

      <div id="heirloomWrapper" style={{ display: "none" }}>
        <div id="heirloomTitleBar" className="row">
          <div className="col-xs-5">
            Heirlooms - Gifts to past you from future you
          </div>

          <div className="col-xs-5" id="nullifiumContainer">
            You have <span id="nullifiumCount"></span> Nullifium
            <span id="heirloomSpirestoneCount"></span>
          </div>

          <div className="col-xs-2">
            <div className="pointer noselect colorInfo heirBtn heirInfo">
              Chances
            </div>

            <div className="pointer noselect colorPrimary heirBtn heirInfo">
              Help
            </div>

            <div className="pointer noselect colorDanger heirBtn heirInfo">
              Close
            </div>
          </div>
        </div>

        <div id="heirloomHelp" style={{ display: "none" }}>
          Heirlooms are powerful items that can drop with a variety of bonuses
          and a variety of rarities. You will earn one Heirloom every time a
          Void Map is completed, and you have a better chance to get higher
          rarities if you complete the Void Map at higher zones.
          <br />
          <br />
          You can click on the icon of any Heirloom to select it. Once
          you&apos;ve selected an Heirloom, you can Equip, Carry, or Recycle it.
          Only equipped Heirlooms give you stats, and you can only have one of
          each type of Heirloom equipped at a time. You can click a stat to
          upgrade or replace it. You can also click on the Heirloom&apos;s name
          on this menu to rename it, or click on the icon to change it.
          <br />
          <br />
          The currency to upgrade and replace stats,
          <b style={{ color: "rgb(75, 41, 197)" }}>Nullifium, or Nu</b>, can
          only be gathered by recycling an Heirloom.
          <b style={{ color: "red" }}>
            You can upgrade any Staff and Shield to the value of your total
            earned Nu. Nu is not spent, but dictates how powerful each of your
            Heirlooms can be!
          </b>
          <br />
          <br />
          Your Equipped Heirlooms will always stay with you when you Portal,
          along with any Heirlooms in your &quot;Carried&quot; slots.
          <b style={{ color: "red" }}>
            Any Heirlooms in the &quot;Temporary&quot; section will be recycled
            for Nullifium on portal.
          </b>
        </div>

        <div
          id="heirloomDropChances"
          style={{ display: "none" }}
          className="noselect"
        >
          <div className="heirloomChanceBtnContainer">
            <span
              id="heirloomChanceLeft"
              className="icomoon icon-arrow-left"
            ></span>
          </div>
          <div id="heirloomRarityMain"></div>
          <div className="heirloomChanceBtnContainer">
            <span
              id="heirloomChanceRight"
              className="icomoon icon-arrow-right"
            ></span>
          </div>
        </div>

        <div className="row">
          <div className="col-xs-6">
            <div id="equippedHeirlooms">
              <div className="row">
                <div
                  id="ShieldEquippedContainer"
                  className="col-xs-6 heirloomEquippedContainer"
                >
                  Equipped Shield
                  <br />
                  <div id="ShieldEquipped"></div>
                  <br />
                  <span id="ShieldEquippedName"></span>
                </div>

                <div
                  id="CoreEquippedContainer"
                  className="col-xs-4 heirloomEquippedContainer"
                  style={{ display: "none" }}
                >
                  Equipped Core
                  <br />
                  <div id="CoreEquipped"></div>
                  <br />
                  <span id="CoreEquippedName"></span>
                </div>

                <div
                  id="StaffEquippedContainer"
                  className="col-xs-6 heirloomEquippedContainer"
                >
                  Equipped Staff
                  <br />
                  <div id="StaffEquipped"></div>
                  <br />
                  <span id="StaffEquippedName"></span>
                </div>
              </div>

              <div
                id="equippedHeirloomsBtnGroup"
                className="heirloomBtnGroup"
                style={{ visibility: "hidden" }}
              >
                <div
                  id="unequipHeirloomBtn"
                  className="noselect heirloomBtnActive heirBtn"
                >
                  Unequip
                </div>

                <div
                  id="heirloomPortalBtn"
                  className="noselect heirloomBtnActive heirBtn"
                >
                  Equip on Portal
                </div>
              </div>
            </div>

            <div id="carriedHeirlooms">
              Carried <span id="carriedHeirloomsText"></span>
              <div id="carriedHeirloomsHere"></div>
              <div
                id="carriedHeirloomsBtnGroup"
                className="heirloomBtnGroup"
                style={{ visibility: "hidden" }}
              >
                <div
                  id="equipHeirloomBtn"
                  className="noselect heirloomBtnActive heirBtn"
                >
                  Equip
                </div>

                <div
                  id="stopCarryHeirloomBtn"
                  className="noselect heirloomBtnActive heirBtn"
                >
                  Stop Carrying
                </div>
              </div>
            </div>

            <div id="extraHeirlooms">
              Temporary <span id="extraHeirloomsText"></span>
              <div
                id="recycleAllHeirloomsBtn"
                className="heirloomBtnActive heirBtn noselect"
              >
                Recycle All
              </div>
              &nbsp;
              <div
                id="sortHeirloomsBtn"
                className="heirloomBtnActive heirBtn noselect"
              >
                Sort
              </div>
              <div id="extraHeirloomsHere"></div>
              <div
                id="extraHeirloomsBtnGroup"
                className="heirloomBtnGroup"
                style={{ visibility: "hidden" }}
              >
                <div
                  id="equipHeirloomBtn2"
                  className="noselect heirloomBtnActive heirBtn"
                >
                  Equip
                </div>

                <div
                  id="carryHeirloomBtn"
                  className="noselect heirloomBtnActive heirBtn"
                >
                  Carry
                </div>

                <div
                  id="recycleHeirloomBtn"
                  className="noselect heirloomBtnActive heirBtn"
                >
                  Recycle
                </div>
              </div>
            </div>
          </div>

          <div className="col-xs-6">
            <div id="selectedHeirloom"></div>
            <div id="modBreakdown" style={{ display: "none" }}>
              <div id="specialModDescription" style={{ display: "none" }}></div>
              <div className="row">
                <div className="col-xs-6" id="modReplaceBox">
                  <div id="modCantReplace" style={{ display: "none" }}></div>
                  <select id="modReplaceSelect"></select>
                  <br />
                  <div
                    id="modReplaceBtn"
                    className="heirloomBtnActive heirBtn noselect"
                  >
                    Replace
                  </div>
                </div>

                <div className="col-xs-6" id="modUpgradeBox">
                  <div id="modUpgradeCost"></div>

                  <div
                    id="modUpgradeBtn"
                    className="heirloomBtnActive heirBtn noselect modUpgradeBtn"
                  >
                    x1
                    <br />
                    &nbsp;
                  </div>

                  <div
                    id="modUpgradeBtn10"
                    className="heirloomBtnActive heirBtn noselect modUpgradeBtn"
                  >
                    x10
                    <br />
                    &nbsp;
                  </div>

                  <div
                    id="modUpgradeBtn100"
                    className="heirloomBtnActive heirBtn noselect modUpgradeBtn"
                  >
                    x100
                    <br />
                    &nbsp;
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div id="achievementPopup" style={{ display: "none" }}>
        <span className="achievementBtns">
          <span className="achievementBtnGo icomoon icon-newspaper-o"></span>
          <span className="achievementBtnClose icomoon icon-close"></span>
        </span>
        <div className="row">
          <div
            id="achievementPopupIconContainer"
            className="col-xs-3 lowPad"
          ></div>
          <div className="col-xs-8">
            <div id="achievementPopupTitle"></div>
            <div id="achievementPopupDescription"></div>
            <div id="achievementPopupReward"></div>
          </div>
        </div>
      </div>

      <div id="heirloomsPopup" style={{ display: "none" }}>
        <div id="heirloomsPopupBtns">
          You Found an Heirloom!
          <span className="heirloomPopupBtn icomoon icon-close"></span>
          <span className="heirloomPopupBtn icomoon icon-archive"></span>
        </div>

        <div id="heirloomsPopupHere"></div>
      </div>

      <div
        id="tooltipDiv"
        className="tooltipExtraNone"
        style={{ display: "none" }}
      >
        <div id="tipTitle"></div>
        <hr />
        <div id="tipText"></div>
        <hr />
        <div id="tipCost"></div>
      </div>

      <div
        id="tooltipDiv2"
        className="tooltipExtraNone"
        style={{ display: "none" }}
      >
        <div id="tipTitle2"></div>
        <hr />
        <div id="tipText2"></div>
        <hr />
        <div id="tipCost2"></div>
      </div>

      <div
        id="tutorialDiv"
        style={{ display: "none" }}
        className="tutorialWidth tutorialDiv"
      >
        <div id="tutorialBookmarks" className="niceScroll noselect">
          &nbsp;
        </div>

        <div id="tutorialInner">
          <div id="tutorialTitle" className="noselect">
            <span id="tutorialSizeBtn" className="icomoon icon-expand"></span>
            <span id="tutorialCloseBtn" className="icmoon icon-close"></span>
            <span className="pointer">
              <span
                id="tutorialBackBtn"
                className="icomoon icon-arrow-left"
              ></span>
              <span className="icomoon icon-star tutorialStar"></span>
            </span>
            ADVISOR <span id="tutorialStep"></span>
            <span className="pointer">
              <span className="icomoon icon-star tutorialStar"></span>
              <span
                id="tutorialNextBtn"
                className="icomoon icon-arrow-right"
              ></span>
            </span>
          </div>
          <hr />
          <div id="tutorialText">
            <div id="tutorialTextInner" className="niceScroll"></div>
          </div>
          <hr />
          <div id="tutorialGoal"></div>
        </div>
      </div>

      <div id="playerSpirePopout" style={{ display: "none" }}>
        <div id="playerSpireSpirePanel">
          <div id="playerSpireSpireSpirePanel" className="noselect">
            &nbsp;
          </div>
          <div id="floatingCombatText"></div>
          &nbsp;
        </div>

        <div id="playerSpireSmallPanel" className="niceScroll">
          &nbsp;
        </div>
        <div id="playerSpireInfoPanel" className="niceScroll">
          &nbsp;
        </div>
      </div>

      <Script defer src="Playfab/PlayFabSDK/PlayFabClientApi.js" />
      <Script defer src="lz-string.js" />
      <Script defer src="decimal.min.js" />
      <Script defer src="config.js" />
      <Script defer src="updates.js" />
      <Script defer src="playerSpire.js" />
      <Script defer src="objects.js" />
      <Script defer src="main.js" onLoad={() => init()} />
    </>
  );
}

export default Home;
