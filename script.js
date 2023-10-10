function click_submit() {
	const D_PASS = "おんがく" ;
	let res = document.getElementById('pass_in')
	if (res.value.length > 0 ) {
		if (res === D_PASS ) {
			window.alert('正解です！') ;	
			window.open("https://tobirapolis.notion.site/TOBIRAPOLIS-9bc44d2cd75d4d4db1a31cc3779ecee9") ;
		} else {
			window.alert('回答が違うようです…再チャレンジ！') ;
		}
	} else {
		window.alert('パスワードが未入力です') ;
	}
}

function click_links(kind) {
	switch (kind) {
	case 1:
		window.open("https://www.tobiratory.com/") ;
		break ;
	case 2:
		window.open("https://tobirapolis.notion.site/TOBIRAPOLIS-9bc44d2cd75d4d4db1a31cc3779ecee9") ;
		break ;
	case 3:
		window.open("https://x.com/Tobiratory?s=20") ;
		break ;
	default:
	break ;
  	}
}
