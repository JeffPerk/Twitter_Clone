$(document).ready(function() {

	jQuery(document).ready(function() {
  		jQuery("time.timeago").timeago();
	});

	$('.button').hide();
	$('#char-count').hide();

	$('.stats').hide();
	$('.reply').hide();


	$('.tweet-compose').on('click', function() {
		
		$('.tweet-compose').css('height', '6em');
		$('.button').show();
		$('#char-count').show();
	});


	$('.tweet-compose').on('keyup keydown', function() {
		var $tweetCompose = $('.tweet-compose');
		var $charCount = $('#char-count');
		$charCount.text(140 - $tweetCompose.val().length);
		if ($tweetCompose.val().length >= 130) {
			$charCount.css('color', 'red');
		} else if ($tweetCompose.val().length < 130) {
			$charCount.css('color', '#999');
		} 
		 if ($tweetCompose.val().length >= 140) {
			$('#tweet-submit').attr('disabled', true);
		} else if ($tweetCompose.val().length < 140) {
			$('#tweet-submit').attr('disabled', false);
		}
		
	})
 	$('#tweet-submit').click(function() {
			if ($('.tweet-compose').val()) {
				$('#stream').prepend('<div class="tweet"><div class="content"><img class="avatar" src="http://127.0.0.1:8080/img/alagoon.jpg" /><strong class="fullname">Bob Sagat</strong><span class="username">@bobsag</span><p class="tweet-text">' + $('.tweet-compose').val() + '</p><div class="tweet-actions"><ul><li><span class="icon action-reply"></span> Reply</li><li><span class="icon action-retweet"></span> Retweet</li><li><span class="icon action-favorite"></span> Favorite</li><li><span class="icon action-more"></span> More</li></ul></div><div class="stats"><div class="retweets"><p class="num-retweets">30</p><p>RETWEETS</p></div><div class="favorites"><p class="num-favorites">6</p><p>FAVORITES</p></div><div class="users-interact"><div><img src="img/alagoon.jpg" /><img src="img/vklimenko.jpg" /></div></div>1:04 PM - 19 Sep 13</div></div><div class="reply"><img class="avatar" src="img/alagoon.jpg" /><textarea class="tweet-compose" placeholder="Reply to @mybff"/></textarea></div></div></div>');
			}
	});

 	var t = true;
 	$(document).on('click', '.tweet', function() {
 		if (t) {
 			$(this).find('.stats, .reply').toggle(t);
 			t = false;
 		}
 		else {
 			$(this).find('.stats, .reply').toggle(t);
 			t = true;
 		}
 	});
	

 







});