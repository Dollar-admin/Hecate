

let pageCount = 0;

document.getElementById("myForm").addEventListener("submit", function(e) {
    e.preventDefault();

    const text = document.getElementById("my-textarea").value;
    const pagesContainer = document.getElementById("pages");

    pagesContainer.innerHTML = "";
    pageCount = 0;

    let page = createNewPage();
    pagesContainer.appendChild(page);
    let p = page.querySelector(".str_fam");

    const words = text.split(" ");
    p.innerText = "";

    for (let word of words) {
        let oldText = p.innerText;
        p.innerText += (p.innerText === "" ? word : " " + word);
        
        // Принудительный пересчёт стилей
        p.offsetHeight; // это вызывает reflow
        
        // Проверяем переполнение
        if (p.scrollHeight > p.clientHeight + 2) { // +2 пиксела на погрешность
            // Откатываем
            p.innerText = oldText;
            
            // Создаём новую страницу
            page = createNewPage();
            pagesContainer.appendChild(page);
            p = page.querySelector(".str_fam");
            
            // Добавляем слово на новую страницу
            p.innerText = word;
        }
    }
});

function createNewPage() {
    const div = document.createElement("div");
    div.classList.add("fon_box", "page");

    if (pageCount % 2 === 1) {
        div.classList.add("mirrored");
    }

    div.innerHTML = `
        <p class="str_fam"></p>
        <img src="https://raw.githubusercontent.com/3Dima10/Hecate/refs/heads/main/image/fon.jpg" alt="fon">
    `;

    pageCount++;
    return div;
}

document.querySelectorAll('.fon_box.mirrored').forEach(el => {
    console.log("Элемент с mirrored:", el);
    console.log("Стили:", window.getComputedStyle(el).transform);
});



