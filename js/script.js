/**
 * Hello World Application
 * 
 * このスクリプトはユーザー名入力フォームの処理と挨拶メッセージの表示を行います。
 * 入力バリデーションと挨拶メッセージのコンソール出力機能も含みます。
 */

// DOMが完全に読み込まれた後に実行
document.addEventListener('DOMContentLoaded', function() {
    // 必要なDOM要素の取得
    const greetingForm = document.getElementById('greeting-form');
    const usernameInput = document.getElementById('username');
    const greetingResult = document.getElementById('greeting-result');
    const errorMessage = document.getElementById('error-message');
    
    /**
     * フォーム送信イベントのハンドラ
     * @param {Event} e - イベントオブジェクト
     */
    greetingForm.addEventListener('submit', function(e) {
        // フォームのデフォルト送信を防止
        e.preventDefault();
        
        // 入力値の取得と空白のトリム
        const username = usernameInput.value.trim();
        
        // 入力のバリデーション
        if (username === '') {
            // エラーメッセージの表示
            errorMessage.textContent = 'お名前を入力してください。';
            greetingResult.textContent = '';
            return;
        }
        
        // エラーメッセージをクリア
        errorMessage.textContent = '';
        
        // 挨拶メッセージの作成
        const greeting = `Hello, ${username}!`;
        
        // 画面上に挨拶を表示
        greetingResult.textContent = greeting;
        
        // コンソールにも同じメッセージを出力
        console.log(greeting);
        
        // 入力欄をリセット（オプション）
        // usernameInput.value = '';
    });
    
    /**
     * 入力中にエラーメッセージをクリア
     */
    usernameInput.addEventListener('input', function() {
        errorMessage.textContent = '';
    });
});