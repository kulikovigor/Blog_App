const posts = [];

const TITLE_VALIDATION_LIMIT = 100;
const TEXT_VALIDATION_LIMIT = 200;

const postTitleInputNode = document.querySelector('.js-post-title-input');
const postTextInputNode = document.querySelector('.js-post-text-input');
const newPostBtnNode = document.querySelector('.js-new-post-btn');
const postsNode = document.querySelector('.js-posts'); 
const validationMessage = document.getElementById('validationMessage'); 
const myBtn = document.getElementById('btn').disabled = false;


newPostBtnNode.addEventListener('click', function(){
    const postFromUser = getPostFromUser();

    addPost(postFromUser);

    renderPosts();
});


postTitleInputNode.addEventListener('input', function (){ 
    validation();
});


postTextInputNode.addEventListener('input', function (){ 
    validation();
});

function validation() {
   const titleLen = postTitleInputNode.value.length;
   const textLen = postTextInputNode.value.length;

   if (titleLen > TITLE_VALIDATION_LIMIT) {
    validationMessage.innerText = `Заголовок больше ${TITLE_VALIDATION_LIMIT} символов`;
    validationMessage.classList.remove('validationMessage_hidden')
    btn.setAttribute('disabled', true);
    btn.style.opacity = "0.5";
    return;
   }

   if (textLen > TEXT_VALIDATION_LIMIT) {
   validationMessage.innerText = `Пост больше ${TEXT_VALIDATION_LIMIT} символов`;
   validationMessage.classList.remove('validationMessage_hidden')
   btn.setAttribute('disabled', true);
   btn.style.opacity = "0.5";
   return;
}

validationMessage.classList.add('validationMessage_hidden');
}


function getPostFromUser() {
    const title = postTitleInputNode.value;
    const text = postTextInputNode.value;

    return {
        title: title,
        text: text,
    };
}

function addPost({ title, text }) {
    const currentDate = new Date();
    const dt = `${("0" + currentDate.getDate()).slice(-2)}.${("0" + (currentDate.getMonth() + 1)).slice(-2)}.${currentDate.getFullYear()} ${currentDate.getHours()}:${("0" + currentDate.getMinutes()).slice(-2)}`;

    posts.push({
        dt,
        title,
        text,
    });
}

function getPosts() {
    return posts
}

function renderPosts() {
    const posts = getPosts();

    let postsHTML = '';

    posts.forEach(post => {
        postsHTML += `
        <div class='post'>
            <p class='post__date'>${post.dt}</p>
            <p class='post__title'>${post.title}</p>
            <p class='post__text'>${post.text}</p>
        </div>   
        `;
    });

    postsNode.innerHTML = postsHTML;
}




// Свойство innerText позволяет считывать или задавать текстовое содержимое элемента
// Свойство value устанавливает или возвращает значение атрибута. - получение атрибута.
