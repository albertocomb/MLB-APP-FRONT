const axios = require("axios");
const cheerio = require("cheerio");
const fs = require("fs");

const url = "https://www.mlb.com/news";

async function scrapeData() {
    try {
        const { data } = await axios.get(url);
        const $ = cheerio.load(data);
        const articles = $("article.l-grid__content--card");
        const articleData = [];
        articles.each((idx, el) => {
            const article = {
                title: $(el).find("h1.article-item__headline").text().trim(),
                imageURL: $(el).find("img.lazyload--loaded").attr("data-srcset"),
                articleURL: "https://www.mlb.com" + $(el).find("a.p-button__link").attr("href"),
                paragraph: $(el).find("div.article-item__preview p").text().trim()
            };
            articleData.push(article);
        });
        console.dir(articleData);

        fs.writeFile("articles.json", JSON.stringify(articleData, null, 2), (err) => {
            if (err) {
                console.error(err);
                return;
            }
            console.log("Datos de los artículos escritos con éxito en el archivo articles.json");
        });
    } catch (err) {
        console.error(err);
    }
}

scrapeData();
