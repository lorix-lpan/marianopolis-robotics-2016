app.directive('navMapButton', function () {
  var link = function (scope, element) {
    var label = $('.nav-map-button span:nth-child(2)');
    var button = $('.nav-map-button span:first-child');
    label.hover(function() {
      $(this).addClass('animated swing');
    }, function () {
      $(this).removeClass('animated swing');
    });
    button.hover(function () {
      $(this).next().addClass('animated swing');
    }, function () {
      $(this).next().removeClass('animated swing');
    });
  };
  return {
    restrict: 'E',
    link: link,
    scope: {
      button: '='
    },
    templateUrl: 'app/shared/navigation/nav-map/nav-map-button.html'
  };
});
