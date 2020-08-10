"strict mode"

$(document).ready(function () {
    //function that returns true if the page is loading on github domain
    function onDomain() {
        if (window.location.href.indexOf('https://junn3r.github.io/') != -1) {
            return true;
        } else {
            return false;
        }
    }

    //function that allow us to show a image slider (thanks to bxslider plugin)
    //First we validate if the page is loading on github pages domain

    if (onDomain()) {
        if (window.location.href == 'https://junn3r.github.io/index.html' || window.location.href == 'https://junn3r.github.io/') {
            const slider = () => {
                $('.bxslider').bxSlider({
                    mode: 'fade',
                    captions: true,
                    slideWidth: 1200,
                    adaptiveHeight: true,
                    randomStart: true,
                    auto: true
                });
            };

            slider();
        }
    } else {
        if (window.location.href.indexOf('index.html') != -1) {
            const slider = () => {
                $('.bxslider').bxSlider({
                    mode: 'fade',
                    captions: true,
                    slideWidth: 1200,
                    adaptiveHeight: true,
                    randomStart: true,
                    auto: true
                });
            };
            slider();
        }

    }


    if (onDomain()) {
        if (window.location.href == 'https://junn3r.github.io/index.html' || window.location.href == 'https://junn3r.github.io/') {
            //JSON that stores all posts in JSON format
            let jsonPost = [
                { title: 'title test 1', date: "Published on " + moment().format("MMMM Do YYYY"), content: 'this is the post content 1' },
                { title: 'title test 2', date: "Published on " + moment().format("MMMM Do YYYY"), content: 'this is the post content 2' },
                { title: 'title test 3', date: "Published on " + moment().format("MMMM Do YYYY"), content: 'this is the post content 3' },
                { title: 'title test 4', date: "Published on " + moment().format("MMMM Do YYYY"), content: 'this is the post content 4' }

            ];
            //Then each jsonPost goes into an HTML structure for it show
            jsonPost.forEach(element => {
                let htmlPost = `
            <article class="post">
                <h2>${element.title}</h2>
                <span class="date">${element.date}</span>
                <p>
                  ${element.content}
                </p>
                <a href="#" class="button-more">Read more</a>
              </article>
              <hr />
            `;
                //adding every post
                $("#posts").append(htmlPost);

                $("#goTop").click(function (e) {
                    e.preventDefault();
                    $("html,body").animate({ scrollTop: 0 }, 500);

                });
            });

        }
    } else {
        if (window.location.href.indexOf('index.html') != -1) {
            //JSON that stores all posts in JSON format
            let jsonPost = [
                { title: 'title test 1', date: "Published on " + moment().format("MMMM Do YYYY"), content: 'this is the post content 1' },
                { title: 'title test 2', date: "Published on " + moment().format("MMMM Do YYYY"), content: 'this is the post content 2' },
                { title: 'title test 3', date: "Published on " + moment().format("MMMM Do YYYY"), content: 'this is the post content 3' },
                { title: 'title test 4', date: "Published on " + moment().format("MMMM Do YYYY"), content: 'this is the post content 4' }

            ];
            //Then each jsonPost goes into an HTML structure for it show
            jsonPost.forEach(element => {
                let htmlPost = `
            <article class="post">
                <h2>${element.title}</h2>
                <span class="date">${element.date}</span>
                <p>
                  ${element.content}
                </p>
                <a href="#" class="button-more">Read more</a>
              </article>
              <hr />
            `;
                //adding every post
                $("#posts").append(htmlPost);

                $("#goTop").click(function (e) {
                    e.preventDefault();
                    $("html,body").animate({ scrollTop: 0 }, 500);

                });
            });

        }

    }

    if (onDomain()) {
        if (window.location.href == 'https://junn3r.github.io/about.html') {
            //accordion
            $(function () {
                $("#accordion").accordion({ heightStyle: "content" });
            });
        }
    } else {
        if (window.location.href.indexOf('about.html') != -1) {
            $(function () {
                $("#accordion").accordion({ heightStyle: "content" });
            });
        }

    }

    






});