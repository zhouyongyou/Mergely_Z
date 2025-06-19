// 取得 DOM 元素
const lhsTextarea = document.getElementById('lhs');
const rhsTextarea = document.getElementById('rhs');
const compareBtn = document.getElementById('compare-btn');

// 初始化 Mergely，啟用行號與自動換行
const mergely = new Mergely('#compare', {
  line_numbers: true,
  wrap_lines: true,
});

// 更新比對結果的函式
function updateDiff() {
  mergely.lhs(lhsTextarea.value);
  mergely.rhs(rhsTextarea.value);
}

// 首次載入完成後即執行比對
mergely.once('updated', updateDiff);

// 按下按鈕時，重新取得輸入內容並比對
compareBtn.addEventListener('click', updateDiff);
