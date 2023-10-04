function click_submit() {
  let res = document.getElementById('pass_in')
  if (res.value.length > 0 ) {
    window.alert('正解です！') ;
   window.open("https://tobirapolis.notion.site/TOBIRAPOLIS-9bc44d2cd75d4d4db1a31cc3779ecee9") ;
  } else {
    window.alert('パスワードが未入力です') ;
  }
}

