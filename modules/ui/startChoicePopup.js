import { initHintSystem } from "../dialogue/answerHandler.js";
export function createStartChoicePopup(context, currentDialogue) {
  const { showDialogue } = context;
  const startChoicePopup = document.createElement('div');
  startChoicePopup.id = 'start-choice-popup';
  startChoicePopup.innerHTML = `
  <div class="popup-inner">
    <div id="popup-close" class="popup-close">
      <img src="images/close-icon.png" alt="닫기">
    </div>
    <div id="popup-back" class="popup-back">
      <img src="images/back-icon.png" alt="뒤로가기">
    </div>

    <div id="main-options">
      <div class="icon">🎮</div>
      <div class="title">게임을 어떻게 시작할까요?</div>
      <div class="subtitle">
        진행 중이던 저장 데이터를<br>
        불러올 수도 있어요.
      </div>
      <div class="popup-buttons">
        <button id="start-new-btn">처음부터</button>
        <button id="start-load-btn">불러오기</button>
      </div>
    </div>

    <div id="slot-options">
      <div class="title">슬롯을 선택하세요</div>
      <div class="slot-buttons">
        <button id="slot-1">📂 슬롯 1</button>
        <button id="slot-2">📂 슬롯 2</button>
        <button id="slot-3">📂 슬롯 3</button>
      </div>
    </div>
  </div>`;
  document.body.appendChild(startChoicePopup);

  document.getElementById('popup-close').onclick = () => {
    startChoicePopup.style.display = 'none';
  };

  document.getElementById('popup-back').onclick = () => {
    document.getElementById('main-options').style.display = 'block';
    document.getElementById('slot-options').style.display = 'none';
    document.getElementById('popup-back').style.display = 'none';
  };

  document.getElementById('start-load-btn').onclick = () => {
    document.getElementById('main-options').style.display = 'none';
    document.getElementById('slot-options').style.display = 'block';
    document.getElementById('popup-back').style.display = 'block';
  };

  document.getElementById('start-new-btn').onclick = () => {
    const intro = document.getElementById('intro-screen');
    if (intro) intro.remove();

    startChoicePopup.style.display = 'none';
    document.getElementById('main-start-screen').style.display = 'none';
    document.getElementById('game-wrapper').style.display = 'block';

    context.gameStarted = true;
    if (context.saveBtn) context.saveBtn.style.display = 'block';
    context.indexRef.value = 0;
    context.currentDialogue = currentDialogue;
    showDialogue(context.indexRef.value, context);
    context.autoUpdateSkipButton?.(context);
  };

  ['1', '2', '3'].forEach(num => {
    document.getElementById(`slot-${num}`).onclick = () => {
      const input = document.createElement('input');
      input.type = 'file';
      input.accept = 'application/json';
      input.style.display = 'none';

      input.onchange = (e) => {
        const file = e.target.files[0];
        if (!file) return;

        const reader = new FileReader();
        reader.onload = (event) => {
          if (context.overlayImage) context.overlayImage.style.display = 'none';
          if (context.overlayImage) context.overlayImage.src = '';
          context.preventAutoAdvance.value = true;
          try {
            const data = JSON.parse(event.target.result);
            if (!data || typeof data.index !== 'number') {
              alert('유효하지 않은 저장 파일입니다.');
              return;
            }

            if (data.theme === 'dark') {
              document.body.classList.add('dark-mode');
            } else {
              document.body.classList.remove('dark-mode');
            }

            context.currentDialogue = data.dialogue;
            context.indexRef.value = data.index;
            context.saveLoaded = true;
            context.isRestored = true;

            const videoEl = document.getElementById('bg-video');

            if (data.lastVideoIndex > data.lastImageIndex) {
              if (videoEl) {
                videoEl.src = data.lastVideo;
                videoEl.load();
                videoEl.style.display = 'block';
              }
              if (context.gameWrapper) context.gameWrapper.style.background = '';
              const startScreen = document.getElementById('main-start-screen');
              if (startScreen) startScreen.style.background = '';
              if (context.overlayImage) {
                context.overlayImage.style.display = 'none';
                context.overlayImage.src = '';
              }
            } else {
              if (context.gameWrapper) {
                context.gameWrapper.style.background = `url('${data.lastImage}') no-repeat center center`;
                context.gameWrapper.style.backgroundSize = 'cover';
              }
              if (videoEl) videoEl.style.display = 'none';
            }

            if (data.overlayImageSrc) {
              context.overlayImage.src = data.overlayImageSrc;
              context.overlayImage.style.display = data.overlayImageVisible;
            }
            if (data.overlayHistory !== undefined && context.kakaoOverlay) {
              context.kakaoOverlay.innerHTML = data.overlayHistory;
            }

            if (data.history !== undefined) {
              context.kakaoBox.innerHTML = data.history;
              const current = context.currentDialogue[context.indexRef.value];
              if (current.notification) {
                if (current.hideKakao) {
                  context.kakaoBox.style.display = 'none';
                  context.kakaoOverlay.style.display = 'none';
                } else {
                  context.kakaoBox.style.display = 'block';
                  context.kakaoOverlay.style.display = 'block';
                  context.scrollToBottom(context.kakaoBox);
                }
              }
              if (!current.notification) {
                context.kakaoBox.style.display = 'block';
                context.kakaoOverlay.style.display = 'block';
                context.scrollToBottom(context.kakaoBox);
              }
            }

            if (data.choiceHistory !== undefined) {
              context.choiceContainer.innerHTML = data.choiceHistory;
              context.choiceContainer.style.display = data.choiceVisible;
              context.autoUpdateSkipButton?.(context);
            }

            if (data.answerVisible && data.answerVisible !== 'none') {
              context.answerContainer.innerHTML = data.answerHTML;
              context.answerContainer.style.display = data.answerVisible;
              const correct = context.currentDialogue[context.indexRef.value].answer;
              context.showAnswerInput(correct, context);
              context.isWaitingForAnswer.value = true;
              context.suppressClick = true;
              context.toggleKakaoDisplay(false, context.kakaoBox, context.kakaoOverlay);
            }

            if (context.currentDialogue[context.indexRef.value].answer) {
              context.toggleKakaoDisplay(false, context.kakaoBox, context.kakaoOverlay);
            }

            const first = context.currentDialogue[context.indexRef.value];
            if (first && first.talk) {
              context.talkWrapper.style.display = 'block';
              context.nameEl.textContent = first.name || '';
              context.bubbleEl.textContent = first.text || '';
            }

            if (context.currentDialogue[context.indexRef.value].hideKakao) {
              context.toggleKakaoDisplay(false, context.kakaoBox, context.kakaoOverlay);
            }

            startChoicePopup.style.display = 'none';
            const intro = document.getElementById('intro-screen');
            if (intro) intro.remove();
            document.getElementById('main-start-screen').style.display = 'flex';
            document.getElementById('game-wrapper').style.display = 'none';
            context.updateLevelBar(context.indexRef.value, context.currentDialogue);
            context.notificationActive = false;
            context.autoUpdateSkipButton?.(context);
            context.overlayJustCleared = false;
            setTimeout(() => {
              context.suppressClick = false;
            }, 300);
            context.preventAutoAdvance.value = false;
            initHintSystem(context);
          } catch (err) {
            console.error('파일 파싱 실패:', err);
            alert('파일 읽기 실패');
          }
        };

        reader.onerror = (err) => {
          console.error('파일 읽기 오류:', err);
          alert('파일을 불러오는 중 오류가 발생했습니다.');
        };

        reader.readAsText(file);
      };

      document.body.appendChild(input);
      input.click();
      document.body.removeChild(input);
    };
  });
}
