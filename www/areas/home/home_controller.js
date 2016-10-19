/*
* @Author: accord
* @Date:   2016-10-17 14:34:43
* @Last Modified by:   taoyage
* @Last Modified time: 2016-10-17 23:58:04
* @HomePage controller
*/

'use strict';

(function(angular){
  var module = angular.module('shop.home',[]);

  module.controller('HomeController',['$scope','$window',function($scope,$window){

    /*初始化头部滚动条*/
    function initHeaderSlide(){
      var headerSwiper = new Swiper('#headerSlider', {
        paginationClickable: true,
        autoplay: 2000,
        autoplayDisableOnInteraction: false,
        loop: true,
        pagination: '.swiper-pagination',
        observer:true,
        observeParents:true
      });
    }

    /*头部滚动条数据*/

    $scope.headerSlideData=[
    {
      alt:"双十一预热主场会",
      src:"img/home/home-headerSlide-1.jpg"
    },
    {
      alt:"11月11天家电低价不停歇",
      src:"img/home/home-headerSlide-2.jpg"
    },
    {
      alt:"家具盛典 好货提前抢",
      src:"img/home/home-headerSlide-3.jpg"
    },
    {
      alt:"IT抢券节",
      src:"img/home/home-headerSlide-4.jpg"
    },
    {
      alt:"潮流数码 双11爽购攻略",
      src:"img/home/home-headerSlide-5.jpg"
    }
    ];


    $scope.$on('$ionicView.afterEnter', function(e) {
      initHeaderSlide();
      // initToutiaoSlide()
      // headerChangeColor();
      // goTop();
    });

  }]);

})(angular);
