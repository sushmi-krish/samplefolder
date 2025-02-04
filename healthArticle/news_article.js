var xhr = new XMLHttpRequest();
var url ="./news_article.json";
xhr.open('GET',url,true);
xhr.responseType ='json';
xhr.onload = function(){
var articles = xhr.response.articles;
var articlesDiv = document.getElementById('articles')
articles.forEach(article => {
    var articleDiv = document.createElement('div')
    articleDiv.classList.add('article')
     var title = document.createElement('h1');
     title.textContent = article.title
      
    var description = document.createElement('h3');
    description.textContent = article.description;

    var newsHeader = document.createElement('h2');
    newsHeader.textContent = 'Headlines'

    var newsList = document.createElement('ul')
    article.news_list.forEach(news =>{
        var listItem = document.createElement('li');
        listItem.textContent = news;
        newsList.appendChild(listItem);    
    });
    articleDiv.appendChild(title);
    articleDiv.appendChild(description);
    articleDiv.appendChild(newsHeader);
    articleDiv.appendChild(newsList)
    articlesDiv.append(articleDiv)    
});
}
xhr.send();