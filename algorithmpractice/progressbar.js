function fillBar(seconds) {
  const bar = document.querySelector('.bar');
  let atPercent = 0;
  const interval = setInterval(() => {
    console.log('running at', atPercent);
    bar.style.width = atPercent + '%';
    atPercent++;
    if (atPercent >= 100) {
      clearInterval(interval);
    }
  }, (seconds * 1000) / 100);
}

// const fillBar = (seconds) => {
// 	const bar = document.querySelector('.bar');
// 	let atPercent = 0;
// 	const interval = setInterval(() => {
// 		bar.style.width = atPercent + '%';
// 		atPercent++;
// 		if (atPercent >= 100) {
// 			clearInterval(interval);
// 		}
// 	}, seconds * 1000 / 100);
// };

// const fillBar = (seconds) => {
// 	const bar = document.querySelector('.bar');
// 	let atPercent = 0;
// 	const interval = setInterval(() => {
// 		bar.style.width = atPercent + '%';
// 		atPercent++;
// 		if (atPercent === 100) {
// 			clearInterval(interval);
// 		}
// 	}, seconds * 1000 / 100);
// };

// const fillBall = (seconds) => {
// 	const bar = document.querySelector('.bar');
// 	let atPercent = 0;
// 	const interval = setInterval(() => {
// 		bar.style.width = atPercent + '%';
// 		atPercent++;
// 		if (atPercent === 100) {
// 			clearInterval(interval);
// 		}
// 	}, seconds * 1000 / 100);
// };
