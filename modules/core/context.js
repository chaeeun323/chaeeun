
// context.js

import { updateLevelBar, createLevelBox } from '../ui/levelBarManager.js';
import { sendKakao, isKakaoMessage, getRoomBackground, toggleKakaoDisplay, clearKakaoMessages, scrollToBottom } from '../kakao/kakaoMessageManager.js';
import { renderChoiceButtons, attachChoiceListener } from '../dialogue/choiceHandler.js';
import { showAnswerInput } from '../dialogue/answerHandler.js';
import { changeBackgroundInstant, changeBackgroundSmoothly, clearBackground } from '../ui/backgroundManager.js';
import { showDialogue } from '../dialogue/showDialogue.js';
import { jumpToNextInterrupt } from './skipManager.js';
import { showPopup, showNotification } from '../ui/popup/popupHandler.js';
import { autoUpdateSkipButton } from '../ui/control/skipButtonController.js';

const context = {
  gameWrapper: null,
  kakaoBox: null,
  choiceContainer: null,
  talkWrapper: null,
  nameEl: null,
  bubbleEl: null,
  kakaoOverlay: null,
  overlayImage: null,
  skipBtn: null,
  saveBtn: null,
  answerUi: null,
  answerInput: null,
  submitAnswer: null,
  hintPopup: null,
  hintStep1: null,
  hintStep2: null,
  hintBtn: null,
  hintConfirm: null,
  msgBox: null,
  savePopup: null,
  // 상태 관련
  indexRef: { value: 0 },
  skipModeRef: { value: false },
  preventAutoAdvance: { value: false },
  isWaitingForAnswer: { value: false },
  notificationActive: false,
  suppressClick: false,
  gameStarted: false,
  overlayJustCleared: false,
  saveLoaded: false,
  isRestored: false,
  hintSystemInitialized: false,

  // currentDialogue → getter/setter로만 관리
  get currentDialogue() {
    return window.currentDialogue;
  },
  set currentDialogue(val) {
    window.currentDialogue = val;
  },

  // 기능 함수
  updateLevelBar,
  createLevelBox,
  sendKakao,
  isKakaoMessage,
  getRoomBackground,
  toggleKakaoDisplay,
  clearKakaoMessages,
  scrollToBottom,
  renderChoiceButtons,
  attachChoiceListener,
  showAnswerInput,
  changeBackgroundInstant,
  changeBackgroundSmoothly,
  clearBackground,
  showDialogue,
  jumpToNextInterrupt,

  // 유틸 함수
  setNotificationActive: (val) => {
  context.notificationActive = val;
  autoUpdateSkipButton(context);
},
  updateSkipButton: (enabled) => {
    const btn = context.skipBtn;
    if (!btn) return;

    btn.disabled = !enabled;
    btn.classList.toggle('btn-enabled', enabled);
    btn.classList.toggle('btn-disabled', !enabled);
  },
  showPopup: (msg, target = context.msgBox) => showPopup(target, msg),
};

export default context;
