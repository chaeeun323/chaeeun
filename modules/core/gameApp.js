import { attachMessageListeners, setupDialogueClickHandler } from '../input/inputHandlers.js';
import { createIntroScreen } from '../ui/introScreenManager.js';
import { initHintSystem, showAnswerInput } from '../dialogue/answerHandler.js';
import { getCombinedDialogue, findLastImage } from '../dialogue/dialogueManager.js';
import { setVh } from '../ui/viewportUtils.js';
import { autoUpdateSkipButton, updateSkipButton } from '../ui/control/skipButtonController.js';
import { createStartChoicePopup } from '../ui/startChoicePopup.js';
import { showPopup, showNotification } from '../ui/popup/popupHandler.js';
import { downloadSave } from '../save/saveManager.js';
import { showDialogue } from '../dialogue/showDialogue.js';

export default function initGameApp(context) {

  const currentDialogue = getCombinedDialogue();
  context.currentDialogue = currentDialogue;

  const { image: lastImage, index: lastImageIndex } = findLastImage(currentDialogue, context.indexRef.value);

  window.addEventListener('resize', setVh);
  window.addEventListener('load', setVh);

  // =====================================
  // 5. 최초 실행
// =====================================
function startGame() {
  document.getElementById("main-start-screen").style.display = "none";
  document.getElementById("game-wrapper").style.display = "block";
  context.gameStarted = true;
  context.updateLevelBar(context.indexRef.value, context.currentDialogue);
if (context.saveBtn) {
  context.saveBtn.style.display = 'block';
}
  
context.suppressClick = true;
  setTimeout(() => {
    context.suppressClick = false;
  }, 500); // 🔒 0.5초 동안 클릭 방지
}

  window.addEventListener("load", () => {
    createStartChoicePopup(context, currentDialogue);
  });




// 팝업 요소 생성
const msgBox = document.createElement('div');
msgBox.className = 'popup-message';
msgBox.innerHTML = `
  <div class="popup-message-text">슬롯 X에 저장되었습니다.</div>
  <button class="popup-message-close">닫기</button>
`;
document.body.appendChild(msgBox);

// ✅ context에 등록
context.msgBox = msgBox;

// 닫기 버튼 이벤트
msgBox.querySelector('.popup-message-close').addEventListener('click', (e) => {
  e.stopPropagation();
  msgBox.classList.remove('active');
  window.suppressClick = false; // ✅ 수정됨
});

document.querySelectorAll('.save-slot-btn').forEach(btn => {
  btn.onclick = (e) => {
    e.stopPropagation();
    const slot = btn.dataset.slot;

    // 모듈화된 함수 사용
    downloadSave(slot, context, context.showPopup);

    context.savePopup.style.display = 'none';
  };
});
  
const closeBtn = context.savePopup?.querySelector('#save-popup-close');
if (closeBtn) {
  closeBtn.onclick = (e) => {
    e.stopPropagation();
    context.savePopup.style.display = 'none';

    // ✅ suppressClick 정확하게 수정
    setTimeout(() => {
      window.suppressClick = false;
    }, 300);
  };
}
// ✅ 게임 인트로 시작 처리 (불러오기 포함 전체 정리)
createIntroScreen(() => {
  context.gameStarted = true;

  if (!context.currentDialogue || !Array.isArray(context.currentDialogue)) {
    context.currentDialogue = [];
  }

  if (
    context.saveLoaded &&
    Array.isArray(context.currentDialogue) &&
    context.indexRef.value >= 0 &&
    context.indexRef.value < context.currentDialogue.length
  ) {
    const first = context.currentDialogue[context.indexRef.value];
  
    const textExists = (() => {
      if (first.kakao || first.system || first.talk) {
        const text = first.text?.replace(/\s+/g, '');
        const content = context.kakaoBox.innerHTML.replace(/\s+/g, '');
        return text && content.includes(text);
      }
      return false;
    })();

    if (!textExists) {
      showDialogue(context.indexRef.value, context);
    }

    context.scrollToBottom(context.kakaoBox);
    context.saveLoaded = false;
  } else {
    context.indexRef.value = 0;
    if (context.currentDialogue.length > 0) {
      showDialogue(context.indexRef.value, context);
    }
  }

  context.saveBtn.style.display = 'block';
},
context.showDialogue, // ✅ 전달
context               // ✅ 전달
);

context.gameWrapper.style.display = 'none';

const startScreen = document.getElementById('main-start-screen');
const levelBox = context.createLevelBox();
startScreen.appendChild(levelBox);
if (startScreen) {
  startScreen.style.display = 'none';
}
});

document.addEventListener('DOMContentLoaded', () => {
  context.autoUpdateSkipButton = autoUpdateSkipButton;
  context.saveBtn = document.getElementById('save-btn');
  console.log('📢 DOMContentLoaded fired'); 
  console.log('▶️ attachMessageListeners 호출 직전');
  context.gameWrapper = document.getElementById('game-wrapper');
  context.kakaoBox = document.getElementById('kakao-chat-box');
  context.choiceContainer = document.getElementById('choice-container');
  context.talkWrapper = document.getElementById('talk-wrapper');
  context.nameEl = document.querySelector('.dialogue-name');
  context.bubbleEl = document.querySelector('.dialogue-bubble');
  context.kakaoOverlay = document.getElementById('kakao-overlay');
  context.overlayImage = document.getElementById('overlay-image');
  context.answerUi = document.getElementById('answer-ui');
  context.answerInput = document.getElementById('answer-input');
  context.submitAnswer = document.getElementById('submit-answer');
  context.hintPopup = document.getElementById('hint-popup');
  context.hintStep1 = document.getElementById('hint-step1');
  context.hintStep2 = document.getElementById('hint-step2');
  context.hintBtn = document.getElementById('hint-btn');
  context.hintConfirm = document.getElementById('hint-confirm');
  context.msgBox = document.querySelector('.popup-message');
  
  // ✅ 저장 팝업 생성
const savePopup = document.createElement('div');
savePopup.id = 'save-slot-popup';
savePopup.className = 'save-popup hidden'; // 클래스만 지정
document.body.appendChild(savePopup);
context.savePopup = savePopup;
context.savePopup.innerHTML = `
  <div class="save-popup-box">
    <div id="save-popup-close" class="save-popup-close">
      <img src="images/close-icon.png" alt="닫기">
    </div>
    <div class="save-popup-title">어디에 저장할까요?</div>
    <div class="save-popup-desc">현재 진행 위치를 저장합니다.</div>
    <div class="save-slot-btns">
      <button class="save-slot-btn" data-slot="1">📂 슬롯 1 저장</button>
      <button class="save-slot-btn" data-slot="2">📂 슬롯 2 저장</button>
      <button class="save-slot-btn" data-slot="3">📂 슬롯 3 저장</button>
    </div>
  </div>
`;

context.saveBtn.onclick = (e) => {
  e.stopPropagation();
  context.suppressClick = true;
  context.savePopup.classList.remove('hidden');
  context.savePopup.style.display = 'flex';
};

  if (!context.skipBtn) {
    const skipBtn = document.createElement('button');
    skipBtn.id = 'skip-button';
    skipBtn.textContent = '⏩ 스킵';
    skipBtn.classList.add('skip-btn');
    skipBtn.style.display = 'none';
    document.body.appendChild(skipBtn);
    context.skipBtn = skipBtn;
  }
  context.skipBtn.addEventListener('click', () => {
    context.skipModeRef.value = true;
    context.jumpToNextInterrupt(context); // ✅ 이거 하나만 있어야 함
  });

  attachMessageListeners({
    // 필수 요소들
    kakaoBox: context.kakaoBox,
    showDialogue,
    context,

    // 버튼 엘리먼트
    saveBtn: context.saveBtn,
    skipBtn: context.skipBtn,
    hintBtn: document.getElementById('hint-button'),
    hintConfirm: document.getElementById('hint-confirm'),
    answerContainer: context.answerContainer,

    getGameState: () => ({
      preventAutoAdvance: context.preventAutoAdvance.value,
      isWaitingForAnswer: context.isWaitingForAnswer.value
    }),

    indexRef: context.indexRef
  });

  console.log('▶️ attachMessageListeners 호출 완료');
  console.log('▶️ initHintSystem 호출 직전');
  console.log('▶️ initHintSystem 호출 완료');
  setupDialogueClickHandler(context);
});

}

