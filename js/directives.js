eshopApp.directive("raty", function () {
    return {
        restrict: 'AE',
        link: function (scope, elem, attrs) {
            $(elem).raty({
                score: attrs.score,
                number: attrs.number,
                click: function (score, event) {
                    alert('Vote succeeded');
                    ////Set the model value
                    //scope[attrs.ngModel] = score;

                    ////Apply the changes so that the controller and any $watch on the model will be notified
                    //scope.$apply();

                    //console.log('Current ' + attrs.ngModel + ' value: ' + scope[attrs.ngModel]);
                }
            });
        }
    }
});