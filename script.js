function sel_chg() {
	//ボーダーを初期化
	cel_b = document.getElementsByClassName('b') ;
	for (i=0; i < cel_b.length; i++) {
		cel_b[i].style.border = "1px solid black" ;
	}
	//ボーダーを設定
	let selstr = document.getElementById('ipt-list').value
	switch(selstr) {
	case "v1":
		set_border('v1-1') ;
		set_border('v1-2') ;
		set_border('v1-3') ;
		set_border('v1-4') ;
		set_border('v1-5') ;
		break ;
	case "v2":
		set_border('v2-1') ;
		set_border('v2-2') ;
		set_border('v2-3') ;
		set_border('v2-4') ;
		break ;
	case "v4":
		set_border('v4-1') ;
		set_border('v4-2') ;
		set_border('v4-3') ;
		set_border('v4-4') ;
		set_border('v4-5') ;
		break ;
	case "v5":
		set_border('v5-1') ;
		set_border('v5-2') ;
		set_border('v5-3') ;
		set_border('v5-4') ;
		break ;
	case "h1":
		set_border('h1-1') ;
		set_border('h1-2') ;
		set_border('h1-3') ;
		set_border('h1-4') ;
		set_border('h1-5') ;
		break ;
	case "h3":
		set_border('h3-1') ;
		set_border('h3-2') ;
		set_border('h3-3') ;
		break ;
	case "h6":
		set_border('h6-1') ;
		set_border('h6-2') ;
		set_border('h6-3') ;
		set_border('h6-4') ;
		set_border('h6-5') ;
		break ;
	case "h7":
		set_border('h7-1') ;
		set_border('h7-2') ;
		set_border('h7-3') ;
		set_border('h7-4') ;
	}
}
//borderの設定
function set_border(obj_id){
	set_cel = document.getElementsByClassName(obj_id) ;
	set_cel[0].style.border ="3px solid black" ;
}
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
function getCN(cn){
	modori = document.getElementsByClassName(cn) ;
	return modori[0] ;
}
function xw_ipt() {
	let res = document.getElementById('ipt-list').value ;
	let ipt = document.getElementById('xw-iptbox').value ;
	let len = 0
	switch (res) {
	case "v1": len = 5 ;	break ;
	case "v2": len = 4 ;	break ;
	case "v4": len = 5 ;	break ;
	case "v5": len = 4 ;	break ;
	case "h1": len = 5 ;	break ;
	case "h3": len = 3 ;	break ;
	case "h6": len = 5 ;	break ;
	case "h7": len = 4 ;	break ;
	}
	
	if (ipt.length == len ) {
		for (i = 0; i < len; i++ ){
			getCN('v1-'+(i+1)).innerText=ipt.charAt(i) ;
		}
	} else {
		window.alert('文字数があっていません！') ;
	}

}
// 画像ダウンロード
function downloadImg(){
  const url = './imgs/img.jpg';
  const fileName = 'img.jpg';
  
  let link = document.getElementById("download");
  link.href= url;
  link.download = fileName;
