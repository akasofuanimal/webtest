//即時関数
(function () {
 
    // Push.Permission.request(
    //     () => console.log('許可されました！'),
    //     () => console.log('許可されませんでした。')
    // );

    $('#allow_push_notification').click(function () {
    // ブラウザが通知をサポートしているか確認する
      // 許可を求める
      Notification.requestPermission()
        .then((permission) => {
        if (permission == 'granted') {
        // 許可
        } else if (permission == 'denied') {
        // 拒否
          alert("拒否");
        } else if (permission == 'default') {
        // 無視
          alert("無視");
        }
      });
    });
})();
