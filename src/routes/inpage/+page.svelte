<script>
    /** @type {import('./$types').PageData} */
    export let data;

    let news = data.news;
</script>

<div class="container show-news">
    <div class="title-wrapper">
        <h5></h5>
        <p class="close-news">&#9587;</p>
    </div>
    {#each news as News}
        <h2 class="news-title">{News.title}</h2>
        <img src="{News.imageURL}" alt="">
        <h3 class="sub-title">{News.subTitle}</h3>
    {/each}

    <added>

    </added>

    <div class="time">
        <br>
        <ul>
            {#each news as News}
                <li>
                    <h4 style="display: inline;">Event Date: {News.start} - {News.end}</h4> <span class="date"></span>
                </li>
                <br>
                <ul>
                    <h4 style="display: inline;">Time: </h4>
                    <li class="ohD">{News.ohDaily}</li>
                    <li class="ohW">{News.ohWeekend}</li>
                </ul>
                <br>
                <ul>
                    <h4 style="display: inline;">Location: {News.location}</h4>
                    <li class="venue"></li>
                </ul>
            {/each}

        </ul>
    </div>

    <div style="z-index: 1;">
        <div class="enlarge">
            <button class="enlarge-btn">Click to enlarge</button>
            <div class="img-container background">
                <img class="enlargable" src="" alt="">
            </div>
        </div>
    </div>

    <div class="flex-row featured">
        <h3>Featured News</h3>
        <a href="">View All</a>
    </div>

    <div class="flex-row featured-news"></div>

</div>

<style>

</style>