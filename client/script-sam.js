$(document).ready(function () {
    // home
    $.ajax({
        type: "get",
        url: "http://localhost:3000/news",
        success: function (response) {
            const results = response.response.results;
            if (results.length !== 0) {
                const cols = results.map(item => `<div class="col-12 col-md-6 col-lg-3">
<div class="card">
    <div class="card-body">
        <h5 class="card-title">${item.webTitle}</h5>
        <a href="${item.webUrl}" class="btn btn-primary">Read More</a>
    </div>
</div>
</div>`);
                $("#news-container div").html(`${cols.join("\n")}`)
            }
        }
    });

    // search
    $("#search-news").on("click", function (e) {
        const value = $("#news-input").val();
        $.ajax({
            type: "get",
            url: `http://localhost:3000/news/${value}`,
            success: function (response) {
                const results = response.response.results;
                if (results.length !== 0) {
                    const cols = results.map(item => `<div class="col-12 col-md-6 col-lg-3">
<div class="card">
    <div class="card-body">
        <h5 class="card-title">${item.webTitle}</h5>
        <a href="${item.webUrl}" target="_blank" class="btn btn-primary">Read More</a>
    </div>
</div>
</div>`);
                    $("#news-container div").html(`${cols.join("\n")}`)
                }
            }
        });
    })
});