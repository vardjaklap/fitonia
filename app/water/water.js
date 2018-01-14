'use strict';

angular.module('myApp.water', ['ngRoute'])

    .controller('WaterCtrl', ['$scope', function($scope) {
        $scope.progressWater = 0;
        $scope.add = function(){
            $scope.progressWater+= 100;
        };
        $scope.add250 = function(){
            $scope.progressWater+= 200;
        };
        $scope.add500 = function(){
            $scope.progressWater+= 500;
        };
        $scope.add1000 = function(){
            $scope.progressWater+= 1000;
        };

        var bar1 = new ldBar("#barwaterld");
        var bar2 = new ldBar("#barwaterhumanld");

        $scope.$watch('progressWater',function(newValue,oldValue){
            var progr = newValue / 25;
            if(newValue>=2500){
                $("#barwaterhumanld").attr("data-stroke", "rgb(255, 255, 150)");
                bar2.set(100);
                bar1.set(100);
            }else{
                bar2.set(progr);
                bar1.set(progr);
            }
        });


        $scope.addml = function(){
            $scope.progressWater+= Number(mili.value);
            mili.value = '';

        };

        var canvas = document.querySelector('.snow'),
            ctx = canvas.getContext('2d'),
            windowW = window.innerWidth,
            windowH = window.innerHeight,
            numFlakes = 40,
            flakes = [];

        function Flake(x, y) {
            var maxWeight = 5,
                maxSpeed = 3;

            this.x = x;
            this.y = y;
            this.r = randomBetween(0, 1);
            this.a = randomBetween(0, Math.PI);
            this.aStep = 0.01;


            this.weight = randomBetween(2, maxWeight);
            this.alpha = (this.weight / maxWeight);
            this.speed = (this.weight / maxWeight) * maxSpeed;

            this.update = function() {
                this.x += Math.cos(this.a) * this.r;
                this.a += this.aStep;

                this.y += this.speed;
            }

        }

        function init() {
            var i = numFlakes,
                flake,
                x,
                y;

            while (i--) {
                x = randomBetween(0, windowW, true);
                y = randomBetween(0, windowH, true);


                flake = new Flake(x, y);
                flakes.push(flake);
            }

            scaleCanvas();
            loop();
        }

        function scaleCanvas() {
            canvas.width = windowW;
            canvas.height = windowH;
        }

        function loop() {
            var i = flakes.length,
                z,
                dist,
                flakeA,
                flakeB;

            // clear canvas
            ctx.save();
            ctx.setTransform(1, 0, 0, 1, 0, 0);
            ctx.clearRect(0, 0, windowW, windowH);
            ctx.restore();

            // loop of hell
            while (i--) {

                flakeA = flakes[i];
                flakeA.update();



                ctx.beginPath();
                ctx.arc(flakeA.x, flakeA.y, flakeA.weight, 0, 0.8 * Math.PI, false);
                ctx.fillStyle = 'rgba(33, 150, 243, 0.4)';
                ctx.fill();

                if (flakeA.y >= windowH) {
                    flakeA.y = -flakeA.weight;
                }
            }

            requestAnimationFrame(loop);
        }

        function randomBetween(min, max, round) {
            var num = Math.random() * (max - min + 1) + min;

            if (round) {
                return Math.floor(num);
            } else {
                return num;
            }
        }

        function distanceBetween(vector1, vector2) {
            var dx = vector2.x - vector1.x,
                dy = vector2.y - vector1.y;

            return Math.sqrt(dx*dx + dy*dy);
        }

        init();
    }]);

