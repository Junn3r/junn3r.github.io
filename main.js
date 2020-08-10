"strict mode"

$(document).ready(function () {
    //function that returns true if the page is loading on github domain (not using it actually)
    function onDomain() {
        if (window.location.href.indexOf('https://junn3r.github.io/') != -1) {
            return true;
        } else {
            return false;
        }
    }

    //function that allow us to show a image slider (thanks to bxslider plugin)
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

        //button to back top 
        $("#goTop").click(function (e) {
            e.preventDefault();
            $("html,body").animate({ scrollTop: 0 }, 500);

        });
    });


});