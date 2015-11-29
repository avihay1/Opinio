app.factory('postService', ['$http', function ($http) {
    return {
        cameraTakePicture: function () {
            navigator.camera.getPicture(

                function (img) {
                    try {
                        $http({
                            method: 'POST',
                            url: 'http://10.100.102.104:80/post',
                            data: {
                                userID: "1234567",
                                photoPath: img,
                                price: "70$",
                                privacy: 3
                            }
                        }).then(function success() {
                            alert("Super");
                        }, function error() {
                            alert("Hell");
                        });
                    }
                    catch (err) { console.log(err.message) }

                }, function (err) {
                    alert("camera error. Details: " + err);
                })
        },
        getHomePosts: function () {
            return ([
	                    {
	                        "postID": 1,
	                        "user": { "id": 1, "name": "Lior Grace", "pictureUrl": "https://scontent-frt3-1.xx.fbcdn.net/hphotos-frc3/v/t1.0-9/1391520_682405491784356_708033204_n.jpg?oh=8fa1a07173ef0e7cac2d85db047130c7&oe=56DF33E7" },
	                        "photoPath": "http://images2.chictopia.com/photos/Divided/9153599236/castro-dress_400.jpg",
	                        "price": 250,
	                        "shop": "Castro",
	                        "privacy": "worldWide",
	                        "createdOn": "22/11/2015 16:45",
	                        "feedback": { "likes": 212, "dislikes": 11 }
	                    },
	                    {
	                        "postID": 2,
	                        "user": { "id": 1, "name": "Lior Grace", "pictureUrl": "https://scontent-frt3-1.xx.fbcdn.net/hphotos-frc3/v/t1.0-9/1391520_682405491784356_708033204_n.jpg?oh=8fa1a07173ef0e7cac2d85db047130c7&oe=56DF33E7" },
	                        "photoPath": "http://www.gotoglamourgirl.com/wp-content/uploads/2012/11/zara-body-con-full.jpg",
	                        "price": 89,
	                        "shop": "Zara",
	                        "privacy": "worldWide",
	                        "createdOn": "13/05/2015 13:54",
	                        "feedback": { "likes": 51, "dislikes": 5 }
	                    },
	                    {
	                        "postID": 3,
	                        "user": { "id": 2, "name": "Nofar Faith", "pictureUrl": "https://scontent-frt3-1.xx.fbcdn.net/hphotos-xap1/v/t1.0-9/12115463_1250097621683194_2475359113638411958_n.jpg?oh=b08a61ab7b5a350495861af5406845c7&oe=56E6A4C4" },
	                        "photoPath": "https://asset3.surfcdn.com/fox-jackets-fox-duster-jacket-olive-green.jpg?w=1200&h=1200&q=80&o=AfZA1JkWdmjqQ7KmPFWiUkA1t@wj&V=sTWe",
	                        "price": 442,
	                        "shop": "FOX",
	                        "privacy": "worldWide",
	                        "createdOn": "15/10/2015 14:22",
	                        "feedback": { "likes": 891, "dislikes": 1 }
	                    },
	                    {
	                        "postID": 4,
	                        "user": { "id": 3, "name": "Ron Oren", "pictureUrl": "https://fbcdn-sphotos-a-a.akamaihd.net/hphotos-ak-xtf1/v/t1.0-9/12191522_764177547019458_6557553533785610278_n.jpg?oh=837d98d462bfb6636051f133bf6cd793&oe=56E20568&__gda__=1454189107_fa10e84cda35b7ef26470bc45136d128" },
	                        "photoPath": "http://g02.a.alicdn.com/kf/HTB133eyJFXXXXXdXFXXq6xXFXXXc/Autumn-2015-new-men-s-breathable-bean-shoes-font-b-Octopus-b-font-leather-casual-soft.jpg",
	                        "price": 120,
	                        "shop": "Tamnoon",
	                        "privacy": "worldWide",
	                        "createdOn": "01/09/2015 19:15",
	                        "feedback": { "likes": 56, "dislikes": 107 }
	                    }
            ]);
        },
        getTopPosts: function () {
            return ([
	                    {
	                        "postID": 3,
	                        "user": { "id": 2, "name": "Nofar Faith", "pictureUrl": "https://scontent-frt3-1.xx.fbcdn.net/hphotos-xap1/v/t1.0-9/12115463_1250097621683194_2475359113638411958_n.jpg?oh=b08a61ab7b5a350495861af5406845c7&oe=56E6A4C4" },
	                        "photoPath": "https://asset3.surfcdn.com/fox-jackets-fox-duster-jacket-olive-green.jpg?w=1200&h=1200&q=80&o=AfZA1JkWdmjqQ7KmPFWiUkA1t@wj&V=sTWe",
	                        "price": 442,
	                        "shop": "FOX",
	                        "privacy": "worldWide",
	                        "createdOn": "15/10/2015 14:22",
	                        "feedback": { "likes": 891, "dislikes": 1 }
	                    },
	                    {
	                        "postID": 1,
	                        "user": { "id": 1, "name": "Lior Grace", "pictureUrl": "https://scontent-frt3-1.xx.fbcdn.net/hphotos-frc3/v/t1.0-9/1391520_682405491784356_708033204_n.jpg?oh=8fa1a07173ef0e7cac2d85db047130c7&oe=56DF33E7" },
	                        "photoPath": "http://images2.chictopia.com/photos/Divided/9153599236/castro-dress_400.jpg",
	                        "price": 250,
	                        "shop": "Castro",
	                        "privacy": "worldWide",
	                        "createdOn": "22/11/2015 16:45",
	                        "feedback": { "likes": 212, "dislikes": 11 }
	                    }
            ]);
        }
    };
}]);