

## 目錄與檔案用途說明


#### assets/
- `layout/`：自訂佈局 SCSS，分為：
	- `_common.scss`：全域變數。
	- `_core.scss`：基本排版與字型。
	- `_main.scss`：主內容區排版。
	- `_menu.scss`：側邊選單樣式。
	- `_topbar.scss`：頂部導覽列樣式。
	- `_responsive.scss`：響應式設計。
	- `_evaluation.scss`：評鑑題目專用樣式。
	- `_mixins.scss`：SCSS mixin。
	- `layout.scss`：整合所有佈局樣式。

#### components/
- `evaluation/`：評鑑問卷相關元件：
	- `EvaluationBtn.vue`：上一題組/下一題組按鈕。
	- `EvaluationMain.vue`：顯示題組與題目內容。
	- `EvaluationMarkdown.vue`：問卷說明區塊。
	- `EvaluationQuestion.vue`：單一題目顯示與填答。
	- `EvaluationSidebar.vue`：左側題組導覽。
	- `EvaluationToolbar.vue`：問卷操作工具列（匯出、暫存、送出等）。

#### layout/
- `AppConfigurator.vue`：主題色彩切換與設定。
- `AppLayout.vue`：整體佈局（含側邊欄、頂欄）。
- `AppMenu.vue`：側邊選單。
- `AppMenuItem.vue`：選單項目。
- `AppSidebar.vue`：側邊欄容器。
- `AppTopbar.vue`：頂部導覽列。
- `composables/layout.js`：佈局狀態管理與操作。

#### service/
- `evaluationService.js`：問卷資料結構與取得方法。
- `markDownService.js`：問卷說明文字資料。

#### views/
- `EvaluationView.vue`：主問卷頁面，整合所有元件。


