import { downloadSave } from '../../save/saveManager.js';

export function setupSaveSlotPopup(context) {
  document.addEventListener('DOMContentLoaded', () => {
    const savePopup = document.createElement('div');
    savePopup.id = 'save-slot-popup';
    savePopup.className = 'save-popup hidden';
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
      </div>`;

    if (context.saveBtn) {
      context.saveBtn.onclick = (e) => {
        e.stopPropagation();
        context.suppressClick = true;
        context.savePopup.classList.remove('hidden');
        context.savePopup.style.display = 'flex';
      };
    }

    document.querySelectorAll('.save-slot-btn').forEach(btn => {
      btn.onclick = (e) => {
        e.stopPropagation();
        const slot = btn.dataset.slot;
        downloadSave(slot, context, context.showPopup);
        context.savePopup.style.display = 'none';
      };
    });

    const closeBtn = context.savePopup.querySelector('#save-popup-close');
    if (closeBtn) {
      closeBtn.onclick = (e) => {
        e.stopPropagation();
        context.savePopup.style.display = 'none';
        setTimeout(() => {
          window.suppressClick = false;
        }, 300);
      };
    }
  });
}
