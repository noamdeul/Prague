const STORAGE_KEY = "pragueTreasureGameState";

const stations = [
  {
    id: 0,
    title: "תחנה 0: פתיחה במלון",
    place: "Art Nouveau Palace Hotel",
    time: "2–3 דקות",
    type: "משפחתי",
    readAloud:
      "ברוכים הבאים למשימת 'סוד הכתר האבוד של פראג'. היום אנחנו לא רק מטיילים, אנחנו צוות חוקרים. בכל תחנה בעיר מחכה לנו מבחן קטן. כל הצלחה תביא לנו מטבעות מסע ומפתח נוסף בדרך לאוצר. המשימה שלנו: להגיע עד סוף היום עם מספיק מטבעות כדי להוכיח שאנחנו שומרי פראג.",
    task: "פותחים את המשחק, נותנים תפקידים, ויוצאים לדרך.",
    success: "אם כולם מסכימים לשחק ובוחרים תפקידים.",
    bonus: "1 מטבע בונוס אם כל אחד בוחר שם קוד למשחק.",
    reward: 1,
    bonusReward: 1,
  },
  {
    id: 1,
    title: "תחנה 1: כיכר העיר העתיקה",
    place: "Old Town Square",
    time: "5–8 דקות",
    type: "תחרות + שיתוף פעולה",
    readAloud:
      "הכיכר הזאת מלאה ברמזים מהעבר. יש לכם 5 דקות למצוא יחד 4 דברים שונים: 1. משהו מוזהב 2. משהו מחודד מאוד או גבוה מאוד 3. יצור חי או דמות שנראית כאילו היא שומרת על המקום 4. משהו שנראה עתיק במיוחד. כל אחד מכם צריך למצוא לפחות שני דברים בעצמו. אחר כך תסבירו למה בחרתם אותם.",
    task: "למצוא 4 פריטים שונים בכיכר ולהסביר למה בחרתם אותם.",
    success: "אם נמצאו 4 פריטים שונים עם הסבר קצר.",
    bonus: "למה לדעתכם ערים עתיקות בנו כיכר מרכזית גדולה?",
    reward: 3,
    bonusReward: 1,
  },
  {
    id: 2,
    title: "תחנה 2: השעון האסטרונומי",
    place: "Astronomical Clock",
    time: "5–7 דקות",
    type: "בלשי",
    readAloud:
      "מולכם אחת ממכונות הזמן המפורסמות בעולם. יש לכם דקה אחת להסתכל עליה בלי לחפש באינטרנט. אחר כך כל אחד צריך להגיד לפחות 3 דברים שהוא שם לב אליהם. אחרי זה יש לכם 2 דקות לבדוק באינטרנט: מה מסמלת דמות השלד שמופיעה בשעון?",
    task: "כל ילד אומר לפחות 3 פרטים שראה על השעון.",
    success: "אם כל ילד אומר לפחות 3 פרטים שראה.",
    bonus: "השלד מסמל את המוות, את הזמן שחולף, או תזכורת לכך שהזמן לא עוצר.",
    reward: 3,
    bonusReward: 1,
  },
  {
    id: 3,
    title: "תחנה 3: מגדל גשר העיר העתיקה",
    place: "Old Town Bridge Tower",
    time: "4–6 דקות",
    type: "שיתוף פעולה",
    readAloud:
      "המגדל הזה לא נבנה רק כדי להיות יפה. הוא גם שמר על העיר. מצאו 3 סימנים שגורמים לכם לחשוב שזה היה גם מבנה הגנתי, לא רק קישוט. אחר כך תענו: אם אתם הייתם שומרים על העיר מכאן, מה היתרון הכי גדול של המגדל?",
    task: "למצוא 3 סימנים שמראים שהמגדל היה גם מבנה הגנתי.",
    success:
      "דוגמאות טובות: שער צר, גובה, אבן עבה, מיקום בכניסה לגשר, אפשר לראות מי מגיע.",
    bonus: "בונוס יצירתי: מי נותן את ההסבר הכי משכנע?",
    reward: 3,
    bonusReward: 1,
  },
  {
    id: 4,
    title: "תחנה 4: גשר קארל",
    place: "Charles Bridge",
    time: "6–8 דקות",
    type: "תחרות + צילום",
    readAloud:
      "זה גשר של סיפורים. מי הראשון שמוצא: 1. פסל עם צלב 2. פסל עם הילה או כתר 3. בעל חיים כלשהו 4. מישהו שנראה כאילו הוא מספר סיפור או מטיף. אפשר לרוץ בעיניים, לא ברגליים. אחרי שמצאתם, כל אחד בוחר פסל אחד וממציא עליו סיפור קצר של שני משפטים.",
    task: "למצוא 4 סוגי פסלים או פרטים שונים, ולהמציא סיפור קצר על אחד מהם.",
    success: "אם מצאתם את 4 הסוגים, וכל ילד המציא סיפור קצר לפסל אחד.",
    bonus: "אתגר צילום: צלמו תמונה כאילו אתם הפסל הבא שיציבו על הגשר.",
    reward: 3,
    bonusReward: 1,
  },
  {
    id: 5,
    title: "תחנה 5: מצודת פראג",
    place: "Prague Castle",
    time: "6–8 דקות",
    type: "משפחתי",
    readAloud:
      "ברוכים הבאים למרכז הכוח של פראג. כדי לקבל את מפתח המלוכה, צריך למצוא 3 סימנים שמראים שזה מקום של שלטון, חשיבות וכבוד. למשל: שומרים, דגלים, סמלים, חצרות גדולות, שערים, שלטים רשמיים. אחרי שמוצאים, כל אחד עונה: אם הייתם מלך או מלכה ליום אחד כאן, מה החוק הראשון שהייתם מחוקקים?",
    task: "למצוא 3 סמלי כוח ולענות על שאלת החוק הראשון.",
    success: "אם מצאתם 3 סמלי כוח וכל אחד ענה תשובה.",
    bonus: "בדקו: האם מצודת פראג נחשבת לאחת ממתחמי הטירה הגדולים בעולם? תשובה: כן.",
    reward: 3,
    bonusReward: 1,
  },
  {
    id: 6,
    title: "תחנה 6: קתדרלת סנט ויטוס",
    place: "St. Vitus Cathedral",
    time: "5–8 דקות",
    type: "בלשי",
    readAloud:
      "המבנה הזה מלא בפרטים שנועדו לגרום לאנשים להרגיש קטנים מול משהו גדול ומרשים. מצאו 4 דברים מהסוגים הבאים: 1. משהו מחודד 2. משהו צבעוני או כמו חלון מיוחד 3. יצור, פנים או קישוט שנראה מוזר או מפחיד 4. פרט שמראה כמה גבוה ועצום המבנה הזה. אחרי זה תגידו: איזה רגש הבניין הזה אמור לעורר לדעתכם?",
    task: "למצוא 4 פרטים שונים ולתאר את התחושה שהמבנה יוצר.",
    success: "אם נמצאו 4 פרטים ודיברתם על תחושת המקום.",
    bonus: "איך קוראים לפתח הניקוז המעוצב כמו מפלצת או יצור? תשובה: גארגויל / Gargoyle",
    reward: 3,
    bonusReward: 1,
  },
  {
    id: 7,
    title: "תחנה 7: סמטת הזהב",
    place: "Golden Lane",
    time: "4–7 דקות",
    type: "תחרות קלה",
    readAloud:
      "אתם עכשיו ברחוב קטן שנראה כאילו יצא מאגדה. כל אחד צריך לבחור בית, פינה או דלת אחת שהיה רוצה לגור בה, ולהסביר ב־20 שניות: למה דווקא שם? מה הייתם עושים שם אם הייתם דמויות מסיפור?",
    task: "לבחור מקום אחד ברחוב ולתת הסבר קצר ויצירתי.",
    success: "אם כל אחד בחר מקום ונתן הסבר.",
    bonus: "למה לדעתכם קוראים לזה 'סמטת הזהב'?",
    reward: 3,
    bonusReward: 1,
  },
  {
    id: 8,
    title: "תחנה 8: מגדל פטרין",
    place: "Petřín Tower",
    time: "5–8 דקות",
    type: "שיתוף פעולה",
    readAloud:
      "המגדל הזה מזכיר קצת מישהו מפורסם מפריז. בלי לבדוק מיד, נסו לנחש: איזה מגדל נתן לו השראה? אחרי זה חפשו 3 דברים שונים שאתם מצליחים לזהות מלמעלה או מהאזור: נהר, גשר, טירה או מצודה, פארק, אזור גגות אדומים, או מבנה בולט. לבסוף כל אחד צריך לתאר את פראג ב־5 מילים בלבד.",
    task: "לנחש מה ההשראה למגדל ולזהות 3 דברים מהאזור.",
    success: "אם ניחשתם את ההשראה או בדקתם, ואם כל אחד תיאר את פראג ב־5 מילים.",
    bonus: "התשובה: מגדל אייפל.",
    reward: 3,
    bonusReward: 1,
  },
  {
    id: 9,
    title: "תחנה 9: מבוך המראות",
    place: "Petřín Mirror Maze",
    time: "5–8 דקות",
    type: "כיף + שיתוף פעולה",
    readAloud:
      "זהו מבחן המפתח האחרון. כל אחד צריך למצוא: 1. רגע אחד שבו המראה בלבלה אותו באמת 2. מראה אחת שיצרה אפקט מצחיק במיוחד 3. דרך אחת לדעת מה אמיתי ומה רק השתקפות. בסוף תחליטו יחד: מה יותר חזק, עיניים או מוח?",
    task: "לתאר 3 דברים שקשורים לאשליה ולחשיבה.",
    success: "אם כל אחד נותן תשובה על שלושת הדברים.",
    bonus: "צילום משפחתי מצחיק עם השתקפות מעוותת.",
    reward: 3,
    bonusReward: 1,
  },
];

const backupMissions = [
  "אתגר השנה: חפשו על בניין, שלט או פסל שנה כתובה. כל אחד מנחש מה השנה הכי מוקדמת שתמצאו היום.",
  "מה היה כאן פעם: בחרו מקום אחד ברחוב ודמיינו איך הוא נראה לפני 400 שנה. כל אחד אומר 3 דברים שהיו שונים.",
  "ציד אותיות: מצאו יחד ברחוב, בשלטים או במפות את האותיות של PRAHA או PRAGUE.",
  "עובדה מוזרה ב־60 שניות: לכל ילד יש 60 שניות למצוא באינטרנט עובדה מוזרה אחת על פראג, ואז לספר אותה במשפט אחד.",
  "משימת השקט: עוצרים ל־30 שניות בלי לדבר. אחר כך כל אחד אומר צליל אחד ששמע, ריח אחד שהרגיש, ופרט אחד שראה ולא שם לב אליו קודם.",
];

const photoMissions = [
  "הפסל החדש של פראג: צלמו תמונה שבה אחד מכם עומד כמו פסל, והשניים האחרים מעריצים אותו.",
  "מחזיקים את המגדל: בפטרין, נסו לצלם תמונת פרספקטיבה כאילו אחד הילדים מחזיק את המגדל ביד.",
  "המראה לא דוברת אמת: במבוך המראות, צלמו את הפרצוף הכי מופרע, הכי מבלבל, או הכי 'לא באמת אנחנו'.",
];

const tips = [
  "לא לעשות יותר ממשימה אחת כבדה ברצף.",
  "להחליף תפקידים כל 2 תחנות.",
  "לעצור למשהו קטן כל 90–120 דקות.",
  "לתת בחירה בין משימה בלשית למשימת צילום.",
  "לאפשר 2 דילוגים ביום בלי דרמה.",
  "לשבח על דרך החשיבה, לא רק על תשובה.",
  "לזהות נפילת אנרגיה ולעבור למשימה קצרה או להפסקה.",
];

const difficultyInfo = {
  easy: {
    label: "קל",
    description:
      "עושים רק את המשימה העיקרית, מותר רמז מהר, מותר להשתמש באינטרנט מיד, ובלי לחץ של זמן.",
  },
  normal: {
    label: "רגיל",
    description:
      "עושים משימה עיקרית ובונוס אם רוצים, קודם מנסים לבד ואז בודקים, זמן מומלץ 3–8 דקות לכל תחנה.",
  },
  hard: {
    label: "מאתגר",
    description:
      "אין אינטרנט ב־2 הדקות הראשונות, צריך להסביר כל תשובה, ובכל תחנה מוסיפים פרט יצירתי אחד.",
  },
};

const defaultState = {
  coins: 0,
  stars: { child1: 0, child2: 0 },
  completedStations: [],
  bonusStations: [],
  skippedStations: [],
  difficulty: "normal",
  manualBonusCoins: 0,
};

let state = loadState();

function loadState() {
  try {
    const saved = JSON.parse(localStorage.getItem(STORAGE_KEY));
    if (!saved) return { ...defaultState };
    return {
      ...defaultState,
      ...saved,
      stars: { ...defaultState.stars, ...(saved.stars || {}) },
    };
  } catch (error) {
    return { ...defaultState };
  }
}

function saveState() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
}

function updateScore() {
  document.getElementById("coinsValue").textContent = state.coins;
  document.getElementById("child1Stars").textContent = state.stars.child1;
  document.getElementById("child2Stars").textContent = state.stars.child2;
  document.getElementById("completedValue").textContent =
    state.completedStations.length;

  const progress = Math.round(
    (state.completedStations.length / stations.length) * 100
  );
  document.getElementById("progressFill").style.width = `${progress}%`;
  document.getElementById("progressText").textContent = `${progress}% הושלם`;

  const difficultyBadge = document.getElementById("difficultyBadge");
  difficultyBadge.textContent = `רמה: ${difficultyInfo[state.difficulty].label}`;

  saveState();
}

function isCompleted(stationId) {
  return state.completedStations.includes(stationId);
}

function hasBonus(stationId) {
  return state.bonusStations.includes(stationId);
}

function isSkipped(stationId) {
  return state.skippedStations.includes(stationId);
}

function toggleAccordion(id) {
  const panel = document.getElementById(`panel-${id}`);
  const button = document.getElementById(`toggle-${id}`);
  const isOpen = panel.classList.contains("open");

  panel.classList.toggle("open");
  button.setAttribute("aria-expanded", String(!isOpen));
}

function completeStation(stationId) {
  if (isCompleted(stationId)) return;

  const station = stations.find((s) => s.id === stationId);
  state.completedStations.push(stationId);
  state.skippedStations = state.skippedStations.filter((id) => id !== stationId);
  state.coins += station.reward;

  renderStations();
  updateScore();
  maybeShowEnding();
}

function awardBonus(stationId) {
  if (hasBonus(stationId)) return;

  const station = stations.find((s) => s.id === stationId);
  state.bonusStations.push(stationId);
  state.coins += station.bonusReward;

  renderStations();
  updateScore();
}

function skipStation(stationId) {
  if (isSkipped(stationId)) return;
  if (isCompleted(stationId)) return;

  state.skippedStations.push(stationId);
  renderStations();
  updateScore();
}

function awardStar(childKey) {
  state.stars[childKey] += 1;
  updateScore();
}

function addManualBonusCoin() {
  state.manualBonusCoins += 1;
  state.coins += 1;
  updateScore();
}

function resetGame() {
  const confirmed = window.confirm("לאפס את כל ההתקדמות במשחק?");
  if (!confirmed) return;

  state = { ...defaultState, stars: { child1: 0, child2: 0 } };
  saveState();
  renderStations();
  updateScore();
  renderEnding();
  showSection("intro");
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function setDifficulty(level) {
  state.difficulty = level;
  updateDifficultyUI();
  updateScore();
}

function updateDifficultyUI() {
  document.querySelectorAll("[data-difficulty]").forEach((button) => {
    const isActive = button.dataset.difficulty === state.difficulty;
    button.classList.toggle("active", isActive);
  });

  const description = difficultyInfo[state.difficulty].description;
  const info = document.getElementById("difficultyDescription");
  if (info) info.textContent = description;
}

function getStationStatusLabel(station) {
  if (isCompleted(station.id)) return "הושלם";
  if (isSkipped(station.id)) return "דולג";
  return "ממתין";
}

function renderStations() {
  const container = document.getElementById("stationsList");
  if (!container) {
    console.error('Missing element: #stationsList');
    return;
  }

  container.innerHTML = "";

  stations.forEach((station) => {
    const card = document.createElement("article");
    card.className = "station-card";

    const status = getStationStatusLabel(station);
    const completed = isCompleted(station.id);
    const bonus = hasBonus(station.id);
    const skipped = isSkipped(station.id);

    card.innerHTML = `
      <button class="accordion-toggle" id="toggle-${station.id}" aria-expanded="false" type="button">
        <span class="station-title-wrap">
          <span class="station-title">${station.title}</span>
          <span class="station-meta">${station.place} · ${station.time}</span>
        </span>
        <span class="station-status ${completed ? "done" : skipped ? "skipped" : ""}">${status}</span>
      </button>

      <div class="accordion-panel" id="panel-${station.id}">
        <div class="station-content">
          <p><strong>מקום:</strong> ${station.place}</p>
          <p><strong>זמן משוער:</strong> ${station.time}</p>
          <p><strong>סוג:</strong> ${station.type}</p>
          <p><strong>מה להקריא לילדים:</strong><br>${station.readAloud}</p>
          <p><strong>מה עושים:</strong><br>${station.task}</p>
          <p><strong>מה נחשב הצלחה:</strong><br>${station.success}</p>
          <p><strong>בונוס:</strong><br>${station.bonus}</p>

          <div class="actions">
            <button class="btn btn-primary" data-action="complete" data-id="${station.id}" ${completed ? "disabled" : ""} type="button">
              סיימנו את המשימה (+${station.reward})
            </button>
            <button class="btn btn-secondary" data-action="bonus" data-id="${station.id}" ${bonus ? "disabled" : ""} type="button">
              קיבלנו בונוס (+${station.bonusReward})
            </button>
            <button class="btn btn-muted" data-action="skip" data-id="${station.id}" ${completed || skipped ? "disabled" : ""} type="button">
              דילגנו
            </button>
          </div>

          <div class="stars-row">
            <span>כוכב אישי:</span>
            <button class="btn btn-star" data-action="star" data-child="child1" type="button">ילד 1 ⭐</button>
            <button class="btn btn-star" data-action="star" data-child="child2" type="button">ילד 2 ⭐</button>
          </div>
        </div>
      </div>
    `;

    container.appendChild(card);

    const toggle = card.querySelector(".accordion-toggle");
    toggle.addEventListener("click", () => toggleAccordion(station.id));

    card.querySelectorAll("[data-action]").forEach((button) => {
      button.addEventListener("click", (event) => {
        event.stopPropagation();
        const action = button.dataset.action;
        const id = Number(button.dataset.id);
        const child = button.dataset.child;

        if (action === "complete") completeStation(id);
        if (action === "bonus") awardBonus(id);
        if (action === "skip") skipStation(id);
        if (action === "star") awardStar(child);
      });
    });
  });
}

function renderStations1() {
  const container = document.getElementById("stationsList");
  container.innerHTML = "";

  stations.forEach((station) => {
    const card = document.createElement("article");
    card.className = "station-card";

    const status = getStationStatusLabel(station);
    const completed = isCompleted(station.id);
    const bonus = hasBonus(station.id);
    const skipped = isSkipped(station.id);

    card.innerHTML = `
      <button class="accordion-toggle" id="toggle-${station.id}" aria-expanded="false">
        <span class="station-title-wrap">
          <span class="station-title">${station.title}</span>
          <span class="station-meta">${station.place} · ${station.time}</span>
        </span>
        <span class="station-status ${completed ? "done" : skipped ? "skipped" : ""}">${status}</span>
      </button>

      <div class="accordion-panel" id="panel-${station.id}">
        <div class="station-content">
          <p><strong>מקום:</strong> ${station.place}</p>
          <p><strong>זמן משוער:</strong> ${station.time}</p>
          <p><strong>סוג:</strong> ${station.type}</p>
          <p><strong>מה להקריא לילדים:</strong><br>${station.readAloud}</p>
          <p><strong>מה עושים:</strong><br>${station.task}</p>
          <p><strong>מה נחשב הצלחה:</strong><br>${station.success}</p>
          <p><strong>בונוס:</strong><br>${station.bonus}</p>

          <div class="actions">
            <button class="btn btn-primary" data-action="complete" data-id="${station.id}" ${completed ? "disabled" : ""}>
              סיימנו את המשימה (+${station.reward})
            </button>
            <button class="btn btn-secondary" data-action="bonus" data-id="${station.id}" ${bonus ? "disabled" : ""}>
              קיבלנו בונוס (+${station.bonusReward})
            </button>
            <button class="btn btn-muted" data-action="skip" data-id="${station.id}" ${completed || skipped ? "disabled" : ""}>
              דילגנו
            </button>
          </div>

          <div class="stars-row">
            <span>כוכב אישי:</span>
            <button class="btn btn-star" data-action="star" data-child="child1">ילד 1 ⭐</button>
            <button class="btn btn-star" data-action="star" data-child="child2">ילד 2 ⭐</button>
          </div>
        </div>
      </div>
    `;

    container.appendChild(card);

    const toggle = card.querySelector(".accordion-toggle");
    toggle.addEventListener("click", () => toggleAccordion(station.id));

    card.querySelectorAll("[data-action]").forEach((button) => {
      button.addEventListener("click", (event) => {
        event.stopPropagation();
        const action = button.dataset.action;
        const id = Number(button.dataset.id);
        const child = button.dataset.child;

        if (action === "complete") completeStation(id);
        if (action === "bonus") awardBonus(id);
        if (action === "skip") skipStation(id);
        if (action === "star") awardStar(child);
      });
    });
  });
}

function renderSimpleList(listId, items) {
  const list = document.getElementById(listId);
  list.innerHTML = "";
  items.forEach((item) => {
    const li = document.createElement("li");
    li.textContent = item;
    list.appendChild(li);
  });
}

function getEndingTitle() {
  if (state.coins >= 30) return "שומרי הכתר של פראג";
  if (state.coins >= 24) return "חוקרי העיר המלכותית";
  if (state.coins >= 18) return "סיירי פראג הרשמיים";
  return "מגלי האוצר של פראג";
}

function getStarWinnerText() {
  if (state.stars.child1 > state.stars.child2) {
    return "ילד 1 קיבל יותר כוכבים אישיים.";
  }
  if (state.stars.child2 > state.stars.child1) {
    return "ילד 2 קיבל יותר כוכבים אישיים.";
  }
  return "יש תיקו מושלם בכוכבים האישיים.";
}

function renderEnding() {
  const endingTitle = document.getElementById("endingTitle");
  const endingSummary = document.getElementById("endingSummary");
  const endingTreasure = document.getElementById("endingTreasure");

  endingTitle.textContent = getEndingTitle();
  endingSummary.innerHTML = `
    <p><strong>סך המטבעות:</strong> ${state.coins}</p>
    <p><strong>כוכבים ילד 1:</strong> ${state.stars.child1}</p>
    <p><strong>כוכבים ילד 2:</strong> ${state.stars.child2}</p>
    <p>${getStarWinnerText()}</p>
  `;

  endingTreasure.innerHTML = `
    <p>האוצר שלכם יכול להיות אחד מאלה:</p>
    <ul>
      <li>בחירת הקינוח המשפחתי</li>
      <li>בחירת הגלידה</li>
      <li>תואר משפחתי מצחיק</li>
      <li>כל אחד נותן תואר למישהו אחר</li>
    </ul>
  `;
}

function maybeShowEnding() {
  if (state.completedStations.length === stations.length) {
    showSection("ending");
    renderEnding();
  }
}

function showSection(sectionId) {
  const section = document.getElementById(sectionId);
  if (!section) return;
  section.scrollIntoView({ behavior: "smooth", block: "start" });
}

function initNavigation() {
  document.querySelectorAll("[data-scroll-to]").forEach((button) => {
    button.addEventListener("click", () => {
      showSection(button.dataset.scrollTo);
    });
  });
}

function initControls() {
  document.getElementById("resetGameBtn").addEventListener("click", resetGame);
  document
    .getElementById("resetGameBtnSecondary")
    .addEventListener("click", resetGame);
  document
    .getElementById("finishGameBtn")
    .addEventListener("click", () => {
      renderEnding();
      showSection("ending");
    });

  document
    .getElementById("addBonusCoinBtn")
    .addEventListener("click", addManualBonusCoin);

  document.querySelectorAll("[data-difficulty]").forEach((button) => {
    button.addEventListener("click", () => {
      setDifficulty(button.dataset.difficulty);
    });
  });
}

function init() {
  renderStations();
  renderSimpleList("backupMissionsList", backupMissions);
  renderSimpleList("photoMissionsList", photoMissions);
  renderSimpleList("tipsList", tips);
  updateDifficultyUI();
  updateScore();
  renderEnding();
  initNavigation();
  initControls();
}

document.addEventListener("DOMContentLoaded", init);
