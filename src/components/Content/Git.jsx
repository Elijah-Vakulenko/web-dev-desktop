import React from 'react';

const Git = () => {
  return (
    <div>
      <ul className="list">
        <li>
          <a className="link-with-favicon" href="https://www.youtube.com/watch?v=O00FTZDxD0o">GIT - Полный Курс Git и GitHub Для Начинающих [4 ЧАСА]</a>
        </li>
      </ul>

      <h2>ПОЧАТОК РОБОТИ</h2>
      <ul>
        <li>git clone http:// .git - клонуємо репозиторій за посиланням з GitHub</li>
        <li>git branch - викликаємо список гілок на локальному репозиторії (ваш комп'ютер)</li>
        <li>git branch Назва гілки - створює гілку</li>
        <li>git checkout назва гілки - Ця команда покаже, на якій гілці ви зараз працюєте.</li>
        <li>git checkout -b назва гілки - створює гілку і переходить на неї.</li>
      </ul>

      <h2>ЗБЕРЕЖЕННЯ ЗМІН</h2>
      <ul>
        <li>git status - перевірити чи вже зроблені якісь зміни</li>
        <li>git add index.html - додати зміни у файлі index.html</li>
        <li>git add . - додати всі зміни</li>
        <li>git reset - відмінити додавання змін</li>
        <li>git commit -m "add index.html file" - зробити коміт</li>
        <li>git push - відправити коміт</li>
        <li>git push --set-upstream origin назва гілки або ↓</li>
        <li>git -push -u origin назва гілки - ця і попередня команди - опублікувати нову гілку і відправити коміт</li>
        <li>git pull - Щоб зтягнути останні зміни з віддаленого репозиторію, використовуйте цю команду</li>
        <li>git fetch - Зтягує зміни з репозиторію, але не інтегрує їх до вашої гілки</li>
        <li>git commit -am "" - ця подвійна команда (git add . + git commit -m "") додає зміни і робить коміт.</li>
      </ul>

      <h2>РОБИМО ЗЛИТТЯ ГІЛОК ДО МЕЙНУ</h2>
      <ul>
        <li>git checkout main - перейти на гілку мейн</li>
        <li>git merge назва гілки - зробити злиття</li>
        <li>git merge --abort - відмінити мердж</li>
      </ul>

      <h2>ВИДАЛЕННЯ ГІЛОК</h2>
      <ul>
        <li>git branch -d назва гілки - видалення з локального репозиторію (комп'ютер)</li>
        <li>git branch origin --delete назва гілки або ↓ git push origin --delete назва гілки - видалення з віддаленого репозиторію</li>
      </ul>

      <h2>ПЕРЕНІС ВАШИХ ЗМІН НА ІНШУ ГІЛКУ</h2>
      <ul>
        <li>git stash - приховати зміни</li>
        <li>git checkout назва гілки - перейти на потрібну гілку</li>
        <li>git stash apply - дістати приховані зміни</li>
      </ul>

      <p>git diff - показує відмінності між вашими змінами та останнім комітом.</p>
      <p>git log - список всіх зроблених комітів.</p>
      <p>git config --list - показує список ваших налаштувань git.</p>

      <h2>ВІДКАТ ДО МИНУЛИХ МЕРДЖІВ</h2>
      <ul>
        <li>git log - вивід списку всіх зроблених комітів</li>
        <li>git checkout a19sdfsdf156asfsdfgf8j79ghhj8k7hj8l7jklasdasdg7898 - переходимо на гілку минулого коміту (абра кадабра це індентифікатор коміту)</li>
        <li>git checkout -b назва гілки - створюємо нову гілку з цим станом, після чого робимо процедуру нового коміту який перезапише останній.</li>
      </ul>

      <h2>Повний процес з прикладом:</h2>
      <ul>
        <li>git clone http://my-repository.git</li>
        <li>git checkout -b header</li>
        <li>робимо зміни</li>
        <li>git status - Перевірка поточної гілки</li>
        <li>git add . - Додати зміни</li>
        <li>git commit -m "header added"</li>
        <li>git checkout main - Перехід на гілку main</li>
        <li>git merge header - злити до мейну гілку header</li>
        <li>git pull origin main - притягнути поточний стан репозиторію</li>
      </ul>

      <h2>СТВОРЕННЯ ПАПОК ТА ФАЙЛІВ</h2>

      <ul>
        <li>cd src/components - перехід до потрібної папки в нашому проекті, нехай це буде папка "компоненти"</li>
        <li>mkdir назва папки - створення папки всередині папки components<br />
        mkdir Header - для прикладу створимо папку Header</li>
        <li>touch назва файлу - команда для створення файлу, нехай буде touch Header.jsx. Це для користувачів Linux чи macOS.</li>
        <li>New-Item -Path . -Name "назва файлу" -ItemType "File" - це команда створення файлу якщо у вас Windows</li>
        <li>Далі зберігаємо зміни git add Header.jsx та git commit -m "Header.jsx added"</li>
      </ul>
    </div>
  );
}

export default Git;
