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