// 初始化 Mergely，啟用行號與自動換行
const mergely = new Mergely('#compare', {
  line_numbers: true,
  wrap_lines: true,
});

// 設定預設內容，可直接在編輯器內修改
mergely.lhs('今天天氣很好，\n適合出門散步。\n');
mergely.rhs('今天天氣很好，\n非常適合出門散步。\n');