const contact = () => alert("Thank You for reaching out to us!\n Email-Address: malikabdullah_10@icloud.com \n Number: +923044030832 \n Postal-Code: 54770");

//the main body
const newsAccordian = document.getElementById("accordion");



//creating the get request
let xhr = new XMLHttpRequest();

xhr.open("GET", `https://cors-anywhere.herokuapp.com/http://newsapi.org/v2/top-headlines?${niche}=${source}&apiKey=${key}`, true);

xhr.onload = function(){
    if (this.status ===200){
        let json = JSON.parse(this.responseText);
        let articles = json.articles;
        let newsHTML = ""
        let index = ["One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine", "Ten", "Eleven", "Twelve", "Thirteen", "Fourteen", "Fifteen", "Sixteen", "Seventeen", "Eighteen", "Nineteen", "Twenty"];
        let i = 0;
        var num;

        for (article of articles){
            num = index[i];
            i++;
            let news = `<div class="card bg-secondary">
                            <div class="card-header px-0 py-0" id="headingThree">
                            <h5 class="mb-0">
                                <button class="btn btn-lg btn-block collapsed" id="story" data-toggle="collapse" data-target="#collapse${num}" aria-expanded="false" aria-controls="collapse${num}">
                                ${article.title}
                                </button>
                            </h5>
                            </div>
                            <div id="collapse${num}" class="collapse" aria-labelledby="heading${num}" data-parent="#accordion">
                            <div class="card-body">
                                ${article.content}               <a href="${article.url}" class = "text-info">Read more</a>

                            </div>
                            </div>
                        </div>`

            newsHTML += news;
        }
    
        newsAccordian.innerHTML = newsHTML;

    }
}

xhr.send();

document.body.style.backgroundColor = "gray";