const quiz = document.getElementById("quiz");
const result = document.getElementById("result");
const submit = document.getElementById("submit");

const questions = [
  { q: "هل تشعر بالراحة أغلب الوقت؟", a: true },
  { q: "هل تتوتر بسرعة؟", a: false },
  { q: "هل تستطيع التركيز بسهولة؟", a: true }
];

questions.forEach((item, index) => {
  const div = document.createElement("div");
  div.innerHTML = `
    <p>${item.q}</p>
    <label><input type="radio" name="q${index}" value="true"> نعم</label>
    <label><input type="radio" name="q${index}" value="false"> لا</label>
  `;
  quiz.appendChild(div);
});

submit.addEventListener("click", () => {
  let score = 0;
  questions.forEach((item, index) => {
    const answer = document.querySelector(`input[name="q${index}"]:checked`);
    if (answer && String(item.a) === answer.value) score++;
  });

  result.classList.remove("hidden");
  result.innerHTML = `نتيجتك: ${score} من ${questions.length}`;
});
