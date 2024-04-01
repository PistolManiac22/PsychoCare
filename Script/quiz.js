function changeId() {
  const element = document.getElementById('q1');
  const element2 = document.getElementById('q2');
  element.id = 'pose1';
  element2.id = 'pose2';
  document.getElementById('next').onclick = changeId2;
}

function changeId2() {
  const element = document.getElementById('pose1');
  const element2 = document.getElementById('pose2');
  const element3 = document.getElementById('q3');
  element.id = 'pose3';
  element2.id = 'pose1';
  element3.id = 'pose2';
}

function back() {
  const element = document.getElementById('pose1');
  const element2 = document.getElementById('pose2');
  const element3 = document.getElementById('pose3');
  element3.id = 'pose-3';
  element.id = 'pose-1';
  element2.id = 'pose-2';
  document.getElementById('tombolkembali2').onclick = back2;
}

function back2() {
  const element = document.getElementById('pose-1');
  const element2 = document.getElementById('pose-2');
  const element3 = document.getElementById('pose-3');
  const element4 = document.getElementById('pose-4');
  element3.id = 'pose-1';
  element.id = 'pose-2';
  element2.id = 'pose-4';
}
