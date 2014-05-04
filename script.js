$(function() {
 	$('#coin').on('click', function(){
 		$('#coin p').empty();
 		$('#coin').addClass('animation');
		setTimeout(function(){
			$('#coin').removeClass('animation');
			//$('#coin').html('heads');
			var randomNum = Math.random();
			if (randomNum > 0.5) {
				$('#coin p').html('HEADS');
			} else {
				$('#coin p').html('TAILS');
			}
		}, 1000);
	});
});
$('#coin p').html('');


// carley()
// carley(function(){alert('poop');}, 'poop', 1, 2);
// carley(1, 2);

// cheese(1, 2, 3, 'cheese', function(){}, 'butt', 74, 'dogs')


// function cheese(doThis) {
//   //doThis();
// }


// cheese(function(){
// 	alert('poop')
// });

// var poop = 7;
// var pee = 'pee';
// var dance = function(){ alert('dance')};
// fart(poop, pee);
// fart(7, 'pee');
// fart(dance);
// fart(function(){alert('dance')})

// var blanket = function(sock, lint){
//   sock(lint)
// };

// blanket(function(wave){alert(wave)} ,'tv' )




// string
// var a = 'abcd'
// a[0] == 'a'
// a[1] == 'b'

// array
// var a = [1, 'abcd', {}, function(){}];
// a[0] == 1
// a[1] == 'abcd'

// object
// var jessica = {
// 	name: 'jessica',
// 	age: 32,
// 	poop: function() {
// 		console.log('poop');
// 	}
// }

// console.log(jessica);

// console.log(jessica.name === 'jessica'); // true
// console.log(jessica.age === 32); // true
// jessica.poop();


// a['a'] == 1

