// 取得 DOM 元素
const lhsTextarea = document.getElementById('lhs');
const rhsTextarea = document.getElementById('rhs');
const languageSelect = document.getElementById('language-select');
const themeToggle = document.getElementById('theme-toggle');

// 使用 CodeMirror 取代 textarea
const lhsEditor = CodeMirror.fromTextArea(lhsTextarea, {
  lineNumbers: true,
  lineWrapping: true,
  mode: 'javascript',
  theme: 'default',
});

const rhsEditor = CodeMirror.fromTextArea(rhsTextarea, {
  lineNumbers: true,
  lineWrapping: true,
  mode: 'javascript',
  theme: 'default',
});

// 初始化 Mergely，啟用行號與自動換行
const mergely = new Mergely('#compare', {
  line_numbers: true,
  wrap_lines: true,
});

// 更新比對結果
function updateDiff() {
  mergely.lhs(lhsEditor.getValue());
  mergely.rhs(rhsEditor.getValue());
}

// 首次載入完成後即執行比對
mergely.once('updated', updateDiff);

// 在輸入時即時比對
lhsEditor.on('change', updateDiff);
rhsEditor.on('change', updateDiff);

// 切換語言並更新語法模式
languageSelect.addEventListener('change', () => {
  const mode = languageSelect.value;
  lhsEditor.setOption('mode', mode);
  rhsEditor.setOption('mode', mode);
});

// 切換深色模式
let dark = false;
function toggleTheme() {
  dark = !dark;
  document.body.classList.toggle('dark', dark);
  const theme = dark ? 'dracula' : 'default';
  lhsEditor.setOption('theme', theme);
  rhsEditor.setOption('theme', theme);
}

themeToggle.addEventListener('click', toggleTheme);
