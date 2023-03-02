const loadData =()=>{
    fetch('https://openapi.programming-hero.com/api/news/categories')
    .then(res => res.json())
    .then(data => showData(data.data))
};
const showData= data =>{
    // captures categories container to append
    const catContainer= document.getElementById('categories-container');
    data.news_category.forEach(singleCat=>{
        // console.log(singleCat);
        catContainer.innerHTML +=`
        <a onclick="fetchCategoryNews('${singleCat.category_id}', '${singleCat.category_name}')" class="nav-link" href="#">${singleCat.category_name}</a>

        `
    })
}
// loadData();


// fetch all news available 
const fetchCategoryNews = (categoryId, categoryName) =>{
    const url = ` https://openapi.programming-hero.com/api/news/category/${categoryId}`;
    fetch(url)
    .then(res => res.json())
    .then(data => showAllNews(data, categoryName))
}
const showAllNews = (data, categoryName) =>{
    console.log(data.data, categoryName);
    document.getElementById('news-count').innerText=data.data.length;
    document.getElementById('category-name').innerText=categoryName;
    console.log(data.data.category_name)
}