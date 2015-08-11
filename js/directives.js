(function(){
    var app = angular.module("directives", []);
    app.directive("review", function () {
        return {templateUrl: "reviews.html"}
    });

    app.directive("carTabs", function () {
        return {
            templateUrl: "carTabs.html",
            controller: function () {
                var self = this;
                self.currentTab = 1;

                this.isSet = function (tab) {
                    return self.currentTab === tab;
                };

                this.setActive = function (tab) {
                    return self.currentTab = tab;
                };
            },
            controllerAs: 'tab'
        }
    })
})();
