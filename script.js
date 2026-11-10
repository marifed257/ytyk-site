const dishes = [
    // ХОЛОДНЫЕ БЛЮДА
    { name: "Индигирка", nameRus: "Салат «Индигирка»", category: "Холодные блюда", time: "20 минут", image: "images/indigirka.jpg",
      description: "Традиционный якутский салат из свежей рыбы с луком.",
      ingredients: ["Свежая рыба — 300 г", "Репчатый лук — 1 шт", "Соль, перец — по вкусу", "Растительное масло — 2 ст. л."],
      steps: ["Рыбу очистить и нарезать мелкими кусочками.", "Лук нарезать полукольцами.", "Смешать рыбу с луком, посолить, поперчить.", "Заправить маслом и дать настояться 15 минут."] },
    { name: "Строганина", nameRus: "Строганина", category: "Холодные блюда", time: "10 минут", image: "images/stroganina.jpg",
      description: "Замороженная рыба, настроганная тонкими стружками.",
      ingredients: ["Мороженая рыба — 500 г", "Соль — по вкусу", "Перец — по вкусу"],
      steps: ["Рыбу слегка подморозить.", "Настрогать тонкими стружками.", "Подавать сразу, посыпав солью и перцем."] },
    { name: "Үтэһэлээх эт", nameRus: "Отварное мясо", category: "Холодные блюда", time: "3 часа", image: "images/uteheleeh-et.jpg",
      description: "Отварная конина или говядина, праздничное блюдо народа саха.",
      ingredients: ["Конина или говядина — 1 кг", "Лук — 1 шт", "Соль, лавровый лист — по вкусу"],
      steps: ["Мясо промыть, залить холодной водой.", "Варить 2–3 часа на медленном огне.", "Добавить лук, соль, лавровый лист за 30 минут до готовности.", "Нарезать порционными кусками."] },
    { name: "Тансык", nameRus: "Мясной деликатес из печени жеребёнка", category: "Холодные блюда", time: "40 минут", image: "images/tansyk.jpg",
      description: "Изысканное блюдо из печени жеребёнка — деликатес якутской кухни.",
      ingredients: ["Печень жеребёнка — 500 г", "Лук — 1 шт", "Соль, перец — по вкусу", "Масло — для обжарки"],
      steps: ["Печень промыть и нарезать кусками.", "Обжарить на масле до готовности.", "Добавить лук, соль, перец.", "Тушить 10 минут и подать."] },

    // НАПИТКИ
    { name: "Быырпах", nameRus: "Быырпах", category: "Напитки", time: "10 минут", image: "images/byyrpah.jpg",
      description: "Традиционный якутский кисломолочный напиток.",
      ingredients: ["Кобылье молоко — 1 л", "Закваска — по инструкции"],
      steps: ["Молоко подогреть до тёплого состояния.", "Добавить закваску.", "Оставить в тёплом месте на несколько часов.", "Подавать охлаждённым."] },
    { name: "Кымыс", nameRus: "Кумыс", category: "Напитки", time: "2 дня", image: "images/kymys.jpg",
      description: "Напиток из кобыльего молока, символ якутского гостеприимства.",
      ingredients: ["Кобылье молоко — 1 л", "Кумысная закваска — по инструкции"],
      steps: ["Молоко довести до тёплого состояния.", "Добавить закваску и перемешать.", "Оставить для брожения на 1–2 дня.", "Подавать охлаждённым."] },
    { name: "Суорат", nameRus: "Суорат", category: "Напитки", time: "6 часов", image: "images/suorat.jpg",
      description: "Кисломолочный напиток, популярный у народа саха.",
      ingredients: ["Молоко — 1 л", "Закваска — по инструкции"],
      steps: ["Молоко вскипятить и остудить.", "Добавить закваску.", "Оставить в тёплом месте на несколько часов.", "Подавать охлаждённым."] },

    // ВЫПЕЧКА
    { name: "Лэппиэскэ", nameRus: "Якутская лепёшка", category: "Выпечка", time: "40 минут", image: "images/leppieske.jpg",
      description: "Традиционная якутская лепёшка, мягкая и ароматная.",
      ingredients: ["Мука — 500 г", "Молоко — 200 мл", "Яйцо — 1 шт", "Сахар, соль — по вкусу", "Масло — для жарки"],
      steps: ["Замесить тесто из муки, молока, яйца, сахара и соли.", "Дать тесту отдохнуть 20 минут.", "Раскатать лепёшки.", "Обжарить на масле до золотистой корочки."] },
    { name: "Алаадьы", nameRus: "Якутские оладьи", category: "Выпечка", time: "30 минут", image: "images/alaady.jpg",
      description: "Пышные якутские оладьи.",
      ingredients: ["Мука — 300 г", "Кефир — 200 мл", "Яйцо — 1 шт", "Сахар, соль, сода — по вкусу"],
      steps: ["Смешать кефир, яйцо, сахар и соль.", "Добавить муку и соду, замесить тесто.", "Жарить оладьи на разогретой сковороде.", "Подавать со сметаной или вареньем."] },
    { name: "Баахыла", nameRus: "Якутские вафли", category: "Выпечка", time: "30 минут", image: "images/baahyyla.jpg",
      description: "Хрустящие якутские вафли.",
      ingredients: ["Мука — 300 г", "Молоко — 200 мл", "Яйцо — 2 шт", "Сахар, соль — по вкусу", "Масло — 100 г"],
      steps: ["Растопить масло, смешать с молоком и яйцами.", "Добавить муку, сахар и соль.", "Замесить тесто.", "Выпекать в вафельнице до готовности."] },

    // ГОРЯЧИЕ БЛЮДА
    { name: "Хаан", nameRus: "Кровяная колбаса", category: "Горячие блюда", time: "2 часа", image: "images/haan.jpg",
      description: "Традиционная якутская кровяная колбаса.",
      ingredients: ["Кровь — 500 мл", "Кишка — для начинки", "Лук — 1 шт", "Соль, специи — по вкусу"],
      steps: ["Смешать кровь с луком и специями.", "Наполнить кишку.", "Варить в подсоленной воде 40 минут.", "Подавать горячей."] },
    { name: "Саламаат", nameRus: "Саламаат", category: "Горячие блюда", time: "40 минут", image: "images/salamaat.jpg",
      description: "Густая мучная каша на сметане.",
      ingredients: ["Мука — 200 г", "Сметана — 500 мл", "Масло — 50 г", "Соль — по вкусу"],
      steps: ["Растопить масло в казане.", "Добавить муку и обжарить.", "Влить сметану и варить до густоты.", "Посолить и подать горячим."] },
    { name: "Силии", nameRus: "Костный мозг", category: "Горячие блюда", time: "2 часа", image: "images/silii.jpg",
      description: "Костный мозг — питательное блюдо якутской кухни.",
      ingredients: ["Кости с мозгом — 1 кг", "Соль — по вкусу", "Лавровый лист — по вкусу"],
      steps: ["Кости промыть и залить водой.", "Варить 2 часа на медленном огне.", "Добавить соль и лавровый лист.", "Подавать горячим."] },
    { name: "Ис миинэ", nameRus: "Суп из потрохов", category: "Горячие блюда", time: "1,5 часа", image: "images/is-miine.jpg",
      description: "Наваристый суп из потрохов.",
      ingredients: ["Потроха — 500 г", "Картофель — 3 шт", "Лук — 1 шт", "Соль, специи — по вкусу"],
      steps: ["Потроха промыть и варить 1 час.", "Добавить картофель и лук.", "Варить до готовности.", "Посолить и подать горячим."] },
    { name: "Тыл", nameRus: "Говяжий язык", category: "Горячие блюда", time: "2 часа", image: "images/tyl.jpg",
      description: "Отварной говяжий язык — нежное блюдо.",
      ingredients: ["Говяжий язык — 1 шт", "Лук — 1 шт", "Соль, лавровый лист — по вкусу"],
      steps: ["Язык промыть и залить водой.", "Варить 2 часа на медленном огне.", "Добавить лук, соль, лавровый лист.", "Снять кожицу и нарезать."] },
    { name: "Собо миинэ", nameRus: "Уха из карася", category: "Горячие блюда", time: "1 час", image: "images/sobo-miine.jpg",
      description: "Ароматная уха из карася по-якутски.",
      ingredients: ["Карась — 500 г", "Картофель — 3 шт", "Лук — 1 шт", "Соль, специи — по вкусу"],
      steps: ["Рыбу очистить и промыть.", "Довести воду до кипения и опустить рыбу.", "Добавить картофель и лук.", "Варить до готовности, посолить."] },
    { name: "Кус миинэ", nameRus: "Суп из утки по-якутски", category: "Горячие блюда", time: "1,5 часа", image: "images/kus-miine.png",
      description: "Сытный суп из утки.",
      ingredients: ["Утка — 500 г", "Картофель — 3 шт", "Лук — 1 шт", "Соль, специи — по вкусу"],
      steps: ["Утку промыть и варить 1 час.", "Добавить картофель и лук.", "Варить до готовности.", "Посолить и подать горячим."] },

    // ДЕСЕРТЫ
    { name: "Куерчэх", nameRus: "Сливочный десерт", category: "Десерты", time: "15 минут", image: "images/kuercheh.jpg",
      description: "Нежный сливочный десерт.",
      ingredients: ["Сливки — 500 мл", "Сахар — 100 г", "Желатин — 10 г"],
      steps: ["Сливки взбить с сахаром.", "Добавить растворённый желатин.", "Разлить по формам.", "Охладить до застывания."] },
    { name: "Кэбүөрдээх лэппиэскэ", nameRus: "Якутская лепёшка с маслом", category: "Десерты", time: "40 минут", image: "images/kebuordeekh-leppieske.jpg",
      description: "Сладкая якутская лепёшка с маслом.",
      ingredients: ["Мука — 500 г", "Молоко — 200 мл", "Яйцо — 1 шт", "Сахар, соль — по вкусу", "Масло — для смазывания"],
      steps: ["Замесить тесто из муки, молока, яйца, сахара и соли.", "Раскатать лепёшки.", "Обжарить на сковороде.", "Смазать маслом и подать."] }
];

const app = document.getElementById("app");

let savedRecipes = JSON.parse(localStorage.getItem('savedRecipes')) || [];

function toggleSave(index, event) {
    event.stopPropagation();
    if (savedRecipes.includes(index)) {
        savedRecipes = savedRecipes.filter(i => i !== index);
    } else {
        savedRecipes.push(index);
    }
    localStorage.setItem('savedRecipes', JSON.stringify(savedRecipes));
    showRecipe(index);
}

function showHome() {
    app.innerHTML = `
        <section class="hero" style="display: flex; align-items: center; justify-content: space-between; text-align: left; gap: 40px;">
            <div style="flex: 1;">
                <p style="margin-bottom: 15px; color: #967a58; font-weight: 600; letter-spacing: 2px; font-size: 13px;">ТРАДИЦИИ · КУЛЬТУРА · ВКУС</p>
                <h1 style="font-size: 64px; color: #4a2c16; margin-bottom: 20px; line-height: 1.1;">Открой вкус<br>Якутии</h1>
                <p style="font-size: 18px; color: #6b5a47; margin-bottom: 30px;">Традиционные рецепты народа саха</p>
                <button onclick="showCategory('Все блюда')">Смотреть рецепты</button>
            </div>
            <div style="flex: 1; display: flex; justify-content: flex-end;">
                <div style="position: relative;">
                    <div style="position: absolute; top: -15px; left: -15px; right: -15px; bottom: -15px; border: 3px solid #d89b1e; border-radius: 50%; opacity: 0.3;"></div>
                    <!-- ТУТ МЫ ПОМЕНЯЛИ КАРТИНКУ НА HERO.JPG -->
                    <img src="images/hero.jpg" alt="Якутская кухня" style="width: 380px; height: 380px; object-fit: cover; border-radius: 50%; box-shadow: 0 20px 40px rgba(0,0,0,0.1); position: relative; z-index: 1;">
                </div>
            </div>
        </section>

        <!-- Национальный узор под главным экраном -->
        <div style="text-align: center; margin: -10px 0 40px 0; opacity: 0.6;">
            <svg width="100%" height="20" viewBox="0 0 1200 20" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">
                <defs>
                    <pattern id="yakut-pattern-top" x="0" y="0" width="40" height="20" patternUnits="userSpaceOnUse">
                        <polygon points="20,2 38,10 20,18 2,10" fill="none" stroke="#d89b1e" stroke-width="1.5"/>
                        <circle cx="20" cy="10" r="2" fill="#d89b1e"/>
                    </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#yakut-pattern-top)"/>
            </svg>
        </div>

        <h2>Категории</h2>
        <div class="categories">
            <button onclick="showCategory('Горячие блюда')">Горячие блюда</button>
            <button onclick="showCategory('Холодные блюда')">Холодные блюда</button>
            <button onclick="showCategory('Напитки')">Напитки</button>
            <button onclick="showCategory('Выпечка')">Выпечка</button>
            <button onclick="showCategory('Десерты')">Десерты</button>
        </div>

        <h2>Популярные рецепты</h2>
        <div class="dish-grid">
            ${dishes.slice(0, 8).map((dish, i) => `
                <article class="dish-card" onclick="showRecipe(${i})">
                    <img src="${dish.image}" alt="${dish.name}">
                    <div class="dish-info">
                        <h3>${dish.name}</h3>
                        <p>${dish.nameRus}</p>
                        <p>◷ ${dish.time}</p>
                    </div>
                </article>
            `).join("")}
        </div>
    `;
}

function showCategory(category) {
    const filtered = category === "Все блюда"
        ? dishes
        : dishes.filter(d => d.category === category);

    app.innerHTML = `
        <button onclick="showHome()">← Назад</button>
        <h1>${category}</h1>
        <div class="dish-grid">
            ${filtered.map(dish => `
                <article class="dish-card" onclick="showRecipe(${dishes.indexOf(dish)})">
                    <img src="${dish.image}" alt="${dish.name}">
                    <div class="dish-info">
                        <h3>${dish.name}</h3>
                        <p>${dish.nameRus}</p>
                        <p>◷ ${dish.time}</p>
                    </div>
                </article>
            `).join("")}
        </div>
    `;
}

function showCategoriesPage() {
    app.innerHTML = `
        <button onclick="showHome()">← На главную</button>
        <h1 style="margin-top: 20px; margin-bottom: 30px;">Категории рецептов</h1>
        <div class="categories" style="display: grid; grid-template-columns: repeat(auto-fill, minmax(250px, 1fr)); gap: 20px;">
            <button onclick="showCategory('Холодные блюда')" style="padding: 40px 20px; font-size: 20px; background: white; color: #4a2c16; border: 1px solid #eaddc7;">Холодные блюда</button>
            <button onclick="showCategory('Напитки')" style="padding: 40px 20px; font-size: 20px; background: white; color: #4a2c16; border: 1px solid #eaddc7;">Напитки</button>
            <button onclick="showCategory('Выпечка')" style="padding: 40px 20px; font-size: 20px; background: white; color: #4a2c16; border: 1px solid #eaddc7;">Выпечка</button>
            <button onclick="showCategory('Горячие блюда')" style="padding: 40px 20px; font-size: 20px; background: white; color: #4a2c16; border: 1px solid #eaddc7;">Горячие блюда</button>
            <button onclick="showCategory('Десерты')" style="padding: 40px 20px; font-size: 20px; background: white; color: #4a2c16; border: 1px solid #eaddc7;">Десерты</button>
        </div>
    `;
}

function showRecipe(index) {
    const dish = dishes[index];

    app.innerHTML = `
        <button onclick="showHome()">← На главную</button>
        <h1>${dish.name}</h1>
        <p>${dish.nameRus}</p>
        <img class="recipe-image" src="${dish.image}" alt="${dish.name}">
        <p>${dish.category} · ◷ ${dish.time}</p>
        <p>${dish.description}</p>
        <h2>Ингредиенты</h2>
        <ul>
            ${dish.ingredients.map(item => `<li>${item}</li>`).join("")}
        </ul>
        <h2>Приготовление</h2>
        <ol>
            ${dish.steps.map(step => `<li>${step}</li>`).join("")}
        </ol>
        ${savedRecipes.includes(index) 
            ? `<button onclick="toggleSave(${index}, event)" style="background: #d89b1e;">🔖 В избранном</button>`
            : `<button onclick="toggleSave(${index}, event)">🔖 В избранное</button>`
        }
    `;
}

function showProfile() {
    let savedHtml = '';
    if (savedRecipes.length === 0) {
        savedHtml = '<p>Вы пока не добавили ни одного рецепта в избранное.</p>';
    } else {
        savedHtml = `
            <div class="dish-grid">
                ${savedRecipes.map(index => {
                    const dish = dishes[index];
                    return `
                        <article class="dish-card" onclick="showRecipe(${index})">
                            <img src="${dish.image}" alt="${dish.name}">
                            <div class="dish-info">
                                <h3>${dish.name}</h3>
                                <p>${dish.nameRus}</p>
                            </div>
                        </article>
                    `;
                }).join("")}
            </div>
        `;
    }

    app.innerHTML = `
        <button onclick="showHome()">← Назад</button>
        <h1>Мой профиль</h1>
        <p>Добро пожаловать в Ытык!</p>
        <h2>Избранные рецепты</h2>
        ${savedHtml}
    `;
}

function showAbout() {
    app.innerHTML = `
        <button onclick="showHome()">← На главную</button>
        <section class="about-section" style="max-width: 800px; margin: 0 auto; background: white; padding: 40px; border-radius: 20px; box-shadow: 0 4px 20px #00000008; margin-top: 20px;">
            <h1 style="color: #4a2c16; margin-bottom: 20px;">О проекте «Ытык»</h1>
            <p style="font-size: 18px; margin-bottom: 15px;">«Ытык» — это пространство, посвященное традиционной кухне народа саха. Мы создали этот сайт, чтобы сохранить и передать молодому поколению уникальные рецепты, которые веками передавались из уст в уста.</p>
            <p style="font-size: 16px; color: #827567; margin-bottom: 15px;">Здесь вы найдете не просто еду, а настоящую культуру Якутии: от строганины и саламаата до традиционных кисломолочных напитков и сладостей.</p>
            <p style="font-size: 16px; color: #827567;">Наша цель — показать, что национальная кухня может быть красивой, аппетитной и интересной для каждого.</p>
        </section>
    `;
}

function showContacts() {
    app.innerHTML = `
        <button onclick="showHome()">← На главную</button>
        <section class="contacts-section" style="max-width: 800px; margin: 0 auto; background: white; padding: 40px; border-radius: 20px; box-shadow: 0 4px 20px #00000008; margin-top: 20px;">
            <h1 style="color: #4a2c16; margin-bottom: 20px;">Связаться с нами</h1>
            <p style="font-size: 16px; margin-bottom: 20px;">Мы всегда рады обратной связи, вопросам и предложениям о сотрудничестве!</p>
            
            <div style="margin-bottom: 15px;">
                <strong style="color: #4a2c16; font-size: 18px;">📍 Адрес:</strong>
                <p style="color: #827567;">г. Якутск, ул. Кулинарная, д. 1</p>
            </div>
            
            <div style="margin-bottom: 15px;">
                <strong style="color: #4a2c16; font-size: 18px;">📞 Телефон:</strong>
                <p style="color: #827567;">+7 (999) 123-45-67</p>
            </div>
            
            <div style="margin-bottom: 15px;">
                <strong style="color: #4a2c16; font-size: 18px;">✉️ Email:</strong>
                <p style="color: #827567;">hello@ytyk.ru</p>
            </div>
            
            <div style="margin-top: 30px;">
                <p style="font-weight: bold; margin-bottom: 10px;">Мы в соцсетях:</p>
                <a href="#" style="color: #e58b3b; text-decoration: none; margin-right: 15px; font-weight: bold;">Telegram</a>
                <a href="#" style="color: #e58b3b; text-decoration: none; font-weight: bold;">VK</a>
            </div>
        </section>
    `;
}

showHome();