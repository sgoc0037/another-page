$(littleComb)
$(window).resize(littleComb)


let smallImg = $('.gallery__small-image img')
smallImg.click(function(e) {
	smallImg.css({border : 'none'})
	$('.gallery__big-image img').hide().attr('src', $(this).attr('src')).fadeIn()
	$(this).css({
		border : '1px solid black'
	})
});


const cardItem = $('.card-block__item')
const cardFilter = $('.card-block__filter span')
cardFilter.click(function(e) {
	cardItem.fadeOut(0)
	cardFilter.css({
		color: '#ff8266',
		border: "none"
	})
	$(this).css({
		color: "#38385e",
		borderBottom: '10px solid #38385e'
	})
	cardItem.each(function(item,value) {
		if($(this).attr('data') == e.target.getAttribute('data')) {
			$(this).fadeIn(500)
		} else if(e.target.getAttribute('data') == 'all') {
			cardItem.fadeIn(500)
		}
	})
})

const link = cardItem.children('a')
const cardButton = $('.card-block__item a')
cardButton.click(function(e) {
	cardItem.addClass('card-block__item_animation')
	$(this).css({
		'transform': "scale(1.5)"
	})
	e.preventDefault()
})


const close = $('.popup__close')
const body = $('body')

link.click(function(e) {
	let linkCurent = $($(this).attr('href'))
	popupOpen(linkCurent)
})
close.click(function(e) {
	let active = $(this).closest('.popup')
	popupClose(active)
})
$(document).keydown(function(e) {
	if(e.which === 27) {
		let active = $('.open')
		popupClose(active)
	}
})


function popupOpen(linkCurent) {
	linkCurent.addClass('open')
	$(linkCurent).css({
		'display': "block"
	})
	body.css({
		'position': "fixed",
		'top': `-${window.scrollY}px`
	})
}

function popupClose(value) {
	let scrollY = body.css('top')
	cardItem.removeClass('card-block__item_animation')
	link.css({'transform': "scale(1)"})
	value.css({
		'display': "none"
	})
	body.css({
		'position': "",
		'top': ""
	})
	window.scrollTo(0, parseInt(scrollY || '0') * -1)
	value.removeClass('open')
}

function littleComb() {
	let value = window.screen.width / 320 * 50 + 'px'
	$('.honey-comb__menu-title').height(value)
}