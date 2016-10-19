/*
* @Author: accord
* @Date:   2016-10-17 14:34:57
* @Last Modified by:   taoyage
* @Last Modified time: 2016-10-17 23:48:19
*/

'use strict';

(function(angular){

  var slide = angular.module('shop.home.service',[]);

  slide.factory('slide.factory',[function(){
    return {
      getSlideImg: function (){
        var headerSlideData = [
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
      }
    };

  }]);

})(angular);
