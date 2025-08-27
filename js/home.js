const callButtons = document.getElementsByClassName('call-btn');
const copyButtons = document.getElementsByClassName('copy-btn');
const heartButtons = document.getElementsByClassName('heart-btn');
let callHistoryArr = [];

function inerTextNum(inerTextId) {
  const text = parseInt(document.getElementById(inerTextId).innerText);
  return text;
}

// call button okk
for (const callButton of callButtons) {
  callButton.addEventListener('click', function () {
    const coin = inerTextNum('service-coin');
    if (coin < 20) {
      alert(
        "❌ You don't have enough coins! You need at least 20 coins to make a call."
      );
      return;
    } else {
      document.getElementById('call-history-section').innerText = '';
      const cardTitle =
        callButton.parentNode.parentNode.children[0].children[1].innerText;
      const callNumber =
        callButton.parentNode.parentNode.children[0].children[3].innerText;
      alert(`📞 Calling ${cardTitle} ${callNumber}...`);
      document.getElementById('service-coin').innerText = coin - 20;
      const historyAdd = {
        title: cardTitle,
        number: callNumber,
        time: new Date().toLocaleTimeString(),
      };
      callHistoryArr.push(historyAdd);
      const historySection = document.getElementById('call-history-section');
      for (const callHistory of callHistoryArr) {
        const div = document.createElement('div');
        div.innerHTML = `
       <div class="flex items-center gap-4 justify-between p-4 bg-gray-100 rounded-2xl">
              <div>
                <h4 class="text-lg font-bold">${callHistory.title}</h4>
                <p class="text-sm text-gray-500">${callHistory.number}</p>
              </div>
              <p>${callHistory.time}</p>
        </div>
      `;
        historySection.appendChild(div);
      }
    }
  });
}
// clear button ok
document.getElementById('clear-btn').addEventListener('click', function () {
  const historySection = document.getElementById('call-history-section');
  callHistoryArr = [];
  historySection.innerText = '';
});

// copy button ok
for (const copyButton of copyButtons) {
  copyButton.addEventListener('click', function () {
    const copyInerNumber =
      copyButton.parentNode.parentNode.children[0].children[3].innerText;
    const copyCount = inerTextNum('copy-count');
    navigator.clipboard.writeText(copyInerNumber);
    alert(`The number has been copied : ${copyInerNumber}`);
    document.getElementById('copy-count').innerText = copyCount + 1;
  });
}
// heart button ok
for (const heartButton of heartButtons) {
  heartButton.addEventListener('click', function () {
    const heartCount = inerTextNum('heart-count');
    document.getElementById('heart-count').innerText = heartCount + 1;
  });
}
