import { autoUpdateSkipButton } from '../ui/control/skipButtonController.js';
import { DEBUG } from '../util/debug.js';
export function renderChoiceButtons(choices, container, context) {
  if (DEBUG) console.log("🟡 선택지 생성 시작", choices);
  container.innerHTML = '';

  choices.forEach(choice => {
    const btn = document.createElement('button');
    btn.className = 'choice-btn';
    btn.dataset.branch = JSON.stringify(choice.branch);
    btn.textContent = choice.text;
    container.appendChild(btn);
  });

  // ✅ 선택지 표시
  container.style.display = 'block';

  // ✅ skip 버튼 갱신
  autoUpdateSkipButton(context);
}

export function attachChoiceListener(container, context, showDialogue) {
  container.addEventListener('click', e => {
    const btn = e.target.closest('.choice-btn');
    if (!btn) return;

    e.stopPropagation();
    window.suppressClick = true;

    let branch;
    try {
      branch = JSON.parse(btn.dataset.branch);
    } catch {
      return;
    }
    if (!Array.isArray(branch)) return;

    container.style.display = 'none';
    context.kakaoBox.style.display = 'block';
    context.kakaoOverlay.style.display = 'block';

    const rest = context.currentDialogue.slice(context.indexRef.value + 1);
    const updated = [
      ...context.currentDialogue.slice(0, context.indexRef.value + 1),
      ...branch,
      ...rest
    ];
    window.currentDialogue = updated;
    context.indexRef.value++;

    let idx = context.indexRef.value;
    const cds = context.currentDialogue;
    while (idx < cds.length && !(
      cds[idx].talk || cds[idx].choice ||
      cds[idx].notification || cds[idx].answer || cds[idx].kakao
    )) {
      idx++;
    }
    context.indexRef.value = idx;

    setTimeout(() => {
      showDialogue(idx, context);
      window.suppressClick = false;
    }, 0);
  });
}
