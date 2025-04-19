
let current = 0;
function nextPage() {
  document.getElementById('page' + current).classList.remove('active');
  current++;
  document.getElementById('page' + current).classList.add('active');
}

function drawTask(index) {
  const taskPools = [
    ['弹力带拉伸 +50 次', '研究翡翠15分钟'],
    ['弹力带拉伸 +20 次', '研究钻石15分钟'],
    ['学习摄影 30 分钟', '出去走一走'],
    ['按摩 10 分钟', '点一道你喜欢吃的菜，我来做'],
    ['写 1 条今天的感想', '做一次伸展拉伸']
  ];

  const chosenPool = taskPools[index];
  const result = chosenPool[Math.floor(Math.random() * chosenPool.length)];
  document.getElementById('task-result').textContent = `🎯 你抽到：${result}`;
}

// function drawTask() {
//   const tasks = [
//     '弹力带拉伸 +50 次',
//     '弹力带拉伸 +20 次',
//     '按摩 10 分钟',
//     '学习摄影 30 分钟'
//   ];
//   const result = tasks[Math.floor(Math.random() * tasks.length)];
//   document.getElementById('page3').classList.remove('active');
//   document.getElementById('page4').classList.add('active');
//   document.getElementById('task-result').textContent = `🎯 今日任务：${result}`;
// }

function restart() {
  location.reload();
}
