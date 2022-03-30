const $addEventListenerButton = document.querySelector('#addEventListener-button');
$addEventListenerButton.addEventListener('click', () => show('addEventlistener'));

const $onclickButton = document.querySelector('#onclick-button');
$onclickButton.onclick = () => show('onclick');

function show(type) {
  alert(`${type}을 활용하여 이벤트 핸들러를 달아주었습니다`);
}

// 공통

const $showCodeButton = document.querySelector('#show-code-button');
const $codeDialog = document.querySelector('#code-dialog');
$codeDialog.innerHTML = codeTemplate();
$showCodeButton.addEventListener('click', toggleCodeDialog);

function toggleCodeDialog() {
  $codeDialog.toggleAttribute('open');
}

function codeTemplate() {
  return `<pre>
    <code>
      const $addEventListenerButton = document.querySelector('#addEventListener-button')
      $addEventListenerButton.addEventListener('click', () => show('addEventlistener'))

      const $onclickButton = document.querySelector('#onclick-button')
      $onclickButton.onclick = () => show('onclick')

      function show(type) {
      alert('type을 활용하여 이벤트 핸들러를 달아주었습니다')
      }
    </code>
  </pre>`;
}
