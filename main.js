var parseDate = d3.timeParse("%Y-%m-%d");
d3.csv("https://raw.githubusercontent.com/jinalharia/racingbarchart/master/category-brands.csv")
    .then(data => {
        data.forEach(d => {
            d.value = +d.value;
            d.date = parseDate(d.date);
        });
        console.log(data[0]);
    });