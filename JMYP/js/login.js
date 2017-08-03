/**
 * Created by Administrator on 2017/7/25.
 */
angular.module("myApp",[])
    .controller('Maincontroller',function ($scope) {
        $scope.userData={}
        $scope.submitForm=function () {

            console.log($scope.userData)
            if($scope.signUpForm.$invalid){
                alert('请检查你的信息')
            }
            else {
                alert('提交成功')
            }
        }
    })
    .directive('compare',function () {
        var o={}
        o.strict='AE';
        o.scope={
            orgText:"=compare"
        };
        o.require='ngModel';
        o.link=function (sco,ele,att,con) {
            con.$validators.compare=function (v) {
                return v== sco.orgText;
            };
            sco.$watch('orgText',function() {
                con.$validate();
            });
        }
        return o;
    });