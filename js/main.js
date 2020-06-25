'use strict';

{
	const btn_male = document.getElementById('btn_male');
	const btn_female = document.getElementById('btn_female');

	btn_male.addEventListener('click', () => {
		const results = ['山田', '安田', '小野寺', '関根', '野嵜', '根本', '津山', '野口', '森田']
		btn_male.textContent = results[Math.floor(Math.random() * results.length)];
	});

	btn_female.addEventListener('click', () => {
		const results = ['金子', '高松', '倉持', '西村', '有田', '関口', '枳穀', '斉藤(育)', '平田', '齊藤(花)', '小林(香)', '古谷', '盛', '茂木', '宮崎']
		btn_female.textContent = results[Math.floor(Math.random() * results.length)];
	});



}

// 表の動的作成
function makeTable(data, tableId){
	// 表の作成開始
	var rows=[];
	var table = document.createElement("table");

	// 表に2次元配列の要素を格納
	for(i = 0; i < data.length; i++){
			rows.push(table.insertRow(-1));  // 行の追加
			for(j = 0; j < data[0].length; j++){
					cell=rows[i].insertCell(-1);
					cell.appendChild(document.createTextNode(data[i][j]));
					// 背景色の設定
					if(i==0){
							cell.style.backgroundColor = "#bbb"; // ヘッダ行
					}else{
							cell.style.backgroundColor = "#ddd"; // ヘッダ行以外
					}
			}
	}
	// 指定したdiv要素に表を加える
	document.getElementById(tableId).appendChild(table);
}
window.onload = function(){ 
// 表のデータ
var data = [[11, 12, 13],
					[21, 22, 23],
					[31, 32, 33],
					[41, 42, 43]];

// 表の動的作成
makeTable(data,"table");
};