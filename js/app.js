(function () {
    var testData = [{
        mark: "Opel",
        model: "Astra",
        photos: ["http://dreamatico.com/data_images/car/car-5.jpg", "http://www.wellclean.com/wp-content/themes/artgallery_3.0/images/car3.png"],
        reviews: [{author: "some author", title: "some title", description: "some Desc"}, {
            author: "sec author",
            title: "sec title",
            description: "sec Desc",
            star: 4
        }],
        description: "Description",
        additionalData: "data"
    },
        {
            mark: "VW",
            model: "CC",
            photos: ["http://www.bloomberg.com/ss/07/04/0418_shanghai_auto/image/audi-a6-sedan.jpg", "http://udhao.net/wp-content/uploads/Black-Audi-TTS-Car-Wallpaper.jpg"],
            reviews: [{author: "rev author", title: "revtitle", description: "desc CC"}, {
                author: "cc sec author",
                title: "cc sec title",
                description: "cc sec Desc",
                star: 5
            }],
            description: "CC long",
            additionalData: "CC data"
        }];
    var app = angular.module("carApp", ['directives']);

    app.controller("CarController", function () {
        this.cars = testData;
    });

    app.controller("ReviewController", function () {
        this.review = {};
        this.addReview = function (car) {
            car.reviews.push(this.review);
            this.review = {};
        }
    });

    app.controller("PhotoController", function () {
        this.current = 0;
        this.setCurrent = function (elem) {
            this.current = elem ? elem : 0;
        };
        this.currentPhotoUrl = function (car) {
            return car.photos[current];
        }
    });
})();