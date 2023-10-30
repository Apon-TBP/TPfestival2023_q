function click_submit() {
	const D_PASS= "おんがく" ;		//正解を定義
	let res = document.getElementById('pass_in') ;	//記入したパスワードを取得
	//パスワードの文字数は0より大きいか？
	if (res.value.length > 0 ) {
		//パスワードの文字列は正解と一致しているか？
		if (res.value == D_PASS ) {
			window.alert('正解です！') ;	
			//プレゼントを表示
			let pre = document.getElementById('present');
			pre.style.display = 'block';
			//パスワード入力欄を非表示
			let pas = document.getElementById('pass');
			pas.style.display = 'none' ;
			//締め切りを非表示
			let sime = document.getElementById('sime') ;
			sime.style.display = 'none' ;

		} else {
			window.alert('回答が違うようです…再チャレンジ！') ;
		}
	} else {
		window.alert('パスワードが未入力です') ;
	}
}

function click_links(kind) {
	//リンク種別は？
	switch (kind) {
	case 1:						//トビラトリーHP
		window.open("https://www.tobiratory.com/") ;
		break ;
	case 2:						//TP祭の公開notion
		window.open("https://tobirapolis.notion.site/TOBIRAPOLIS-9bc44d2cd75d4d4db1a31cc3779ecee9") ;
		break ;
	case 3:						//トビラトリーのTwitter
		window.open("https://x.com/Tobiratory?s=20") ;
		break ;
	default:
	break ;
  	}
}
function xw_ipt() {
	let res = document.getElementById('ipt-list') ;
	let ipt = document.getElementById('xw-iptbox') ;
	switch (res.value) {
	case "↓タテのカギ1":
		if (ipt.value.length == 5 ) {
			document.setElementById('v1-1')=res.charAt(0) ;
			document.setElementById('v1-2')=res.charAt(1) ;
			document.setElementById('v1-3')=res.charAt(2) ;
			document.setElementById('v1-4')=res.charAt(3) ;
			document.setElementById('v1-5')=res.charAt(4) ;
		} else {
			window.alert('文字数があっていません！') ;
		}
		break ;
	case "↓タテのカギ2":
		if (ipt.value.length == 4 ) {
			document.setElementById('v2-1')=res.charAt(0) ;
			document.setElementById('v2-2')=res.charAt(1) ;
			document.setElementById('v2-3')=res.charAt(2) ;
			document.setElementById('v2-4')=res.charAt(3) ;
		} else {
			window.alert('文字数があっていません！') ;
		}
		break ;
	case "↓タテのカギ4":
		if (ipt.value.length == 5 ) {
			document.setElementById('v4-1')=res.charAt(0) ;
			document.setElementById('v4-2')=res.charAt(1) ;
			document.setElementById('v4-3')=res.charAt(2) ;
			document.setElementById('v4-4')=res.charAt(3) ;
			document.setElementById('v4-5')=res.charAt(4) ;
		} else {
			window.alert('文字数があっていません！') ;
		}
		break ;
	case "↓タテのカギ5":
		if (ipt.value.length == 4 ) {
			document.setElementById('v5-1')=res.charAt(0) ;
			document.setElementById('v5-2')=res.charAt(1) ;
			document.setElementById('v5-3')=res.charAt(2) ;
			document.setElementById('v5-4')=res.charAt(3) ;
		} else {
			window.alert('文字数があっていません！') ;
		}
		break ;
	case "→ヨコのカギ1":
		if (ipt.value.length == 5 ) {
			document.setElementById('h1-1')=res.charAt(0) ;
			document.setElementById('h1-2')=res.charAt(1) ;
			document.setElementById('h1-3')=res.charAt(2) ;
			document.setElementById('h1-4')=res.charAt(3) ;
			document.setElementById('h1-5')=res.charAt(4) ;
		} else {
			window.alert('文字数があっていません！') ;
		}
		break ;
	case "→ヨコのカギ3":
		if (ipt.value.length == 3 ) {
			document.setElementById('h3-1')=res.charAt(0) ;
			document.setElementById('h3-2')=res.charAt(1) ;
			document.setElementById('h3-3')=res.charAt(2) ;
		} else {
			window.alert('文字数があっていません！') ;
		}
		break ;
	case "→ヨコのカギ6":
		if (ipt.value.length == 5 ) {
			document.setElementById('h6-1')=res.charAt(0) ;
			document.setElementById('h6-2')=res.charAt(1) ;
			document.setElementById('h6-3')=res.charAt(2) ;
			document.setElementById('h6-4')=res.charAt(3) ;
			document.setElementById('h6-5')=res.charAt(4) ;
		} else {
			window.alert('文字数があっていません！') ;
		}
		break ;
	case "→ヨコのカギ7":
		if (ipt.value.length == 4 ) {
			document.setElementById('h7-1')=res.charAt(0) ;
			document.setElementById('h7-2')=res.charAt(1) ;
			document.setElementById('h7-3')=res.charAt(2) ;
			document.setElementById('h7-4')=res.charAt(3) ;
		} else {
			window.alert('文字数があっていません！') ;
		}
		break ;
			
	}
}
