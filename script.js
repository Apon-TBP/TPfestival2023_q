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
	let res = document.getElementById('ipt-list').value ;
	let ipt = document.getElementById('xw-iptbox').value ;
	switch (res) {
	case "↓タテのカギ1":
		if (ipt.length == 5 ) {
			document.getElementById('v1-1').innerText=ipt.charAt(0) ;
			document.getElementById('v1-2').innerText=ipt.charAt(1) ;
			document.getElementById('v1-3').innerText=ipt.charAt(2) ;
			document.getElementById('v1-4').innerText=ipt.charAt(3) ;
			document.getElementById('v1-5').innerText=ipt.charAt(4) ;
		} else {
			window.alert('文字数があっていません！') ;
		}
		break ;
	case "↓タテのカギ2":
		if (ipt.length == 4 ) {
			document.getElementById('v2-1').innerText=ipt.charAt(0) ;
			document.getElementById('v2-2').innerText=ipt.charAt(1) ;
			document.getElementById('v2-3').innerText=ipt.charAt(2) ;
			document.getElementById('v2-4').innerText=ipt.charAt(3) ;
		} else {
			window.alert('文字数があっていません！') ;
		}
		break ;
	case "↓タテのカギ4":
		if (ipt.length == 5 ) {
			document.getElementById('v4-1').innerText=ipt.charAt(0) ;
			document.getElementById('v4-2').innerText=ipt.charAt(1) ;
			document.getElementById('v4-3').innerText=ipt.charAt(2) ;
			document.getElementById('v4-4').innerText=ipt.charAt(3) ;
			document.getElementById('v4-5').innerText=ipt.charAt(4) ;
		} else {
			window.alert('文字数があっていません！') ;
		}
		break ;
	case "↓タテのカギ5":
		if (ipt.length == 4 ) {
			document.getElementById('v5-1').innerText=ipt.charAt(0) ;
			document.getElementById('v5-2').innerText=ipt.charAt(1) ;
			document.getElementById('v5-3').innerText=ipt.charAt(2) ;
			document.getElementById('v5-4').innerText=ipt.charAt(3) ;
		} else {
			window.alert('文字数があっていません！') ;
		}
		break ;
	case "→ヨコのカギ1":
		if (ipt.length == 5 ) {
			document.getElementById('h1-1').innerText=ipt.charAt(0) ;
			document.getElementById('h1-2').innerText=ipt.charAt(1) ;
			document.getElementById('h1-3').innerText=ipt.charAt(2) ;
			document.getElementById('h1-4').innerText=ipt.charAt(3) ;
			document.getElementById('h1-5').innerText=ipt.charAt(4) ;
		} else {
			window.alert('文字数があっていません！') ;
		}
		break ;
	case "→ヨコのカギ3":
		if (ipt.length == 3 ) {
			document.getElementById('h3-1').innerText=ipt.charAt(0) ;
			document.getElementById('h3-2').innerText=ipt.charAt(1) ;
			document.getElementById('h3-3').innerText=ipt.charAt(2) ;
		} else {
			window.alert('文字数があっていません！') ;
		}
		break ;
	case "→ヨコのカギ6":
		if (ipt.length == 5 ) {
			document.getElementById('h6-1').innerText=ipt.charAt(0) ;
			document.getElementById('h6-2').innerText=ipt.charAt(1) ;
			document.getElementById('h6-3').innerText=ipt.charAt(2) ;
			document.getElementById('h6-4').innerText=ipt.charAt(3) ;
			document.getElementById('h6-5').innerText=ipt.charAt(4) ;
		} else {
			window.alert('文字数があっていません！') ;
		}
		break ;
	case "→ヨコのカギ7":
		if (ipt.length == 4 ) {
			document.getElementById('h7-1').innerText=ipt.charAt(0) ;
			document.getElementById('h7-2').innerText=ipt.charAt(1) ;
			document.getElementById('h7-3').innerText=ipt.charAt(2) ;
			document.getElementById('h7-4').innerText=ipt.charAt(3) ;
		} else {
			window.alert('文字数があっていません！') ;
		}
		break ;
			
	}
}
