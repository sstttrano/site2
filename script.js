
var close = document.getElementById("close");
close.addEventListener("click", function(){
	document.querySelector(".img_1_block").classList.remove("active")
	document.querySelector(".img_2_block").classList.remove("active")
	document.querySelector(".img_3_block").classList.remove("active")
	document.querySelector(".img_4_block").classList.remove("active")
	document.querySelector(".img_5_block").classList.remove("active")
	document.querySelector(".img_6_block").classList.remove("active")
	document.querySelector(".closes").classList.remove("active")

	document.querySelector(".img_1_block").classList.remove("unactive")
	document.querySelector(".img_2_block").classList.remove("unactive")
	document.querySelector(".img_3_block").classList.remove("unactive")
	document.querySelector(".img_5_block").classList.remove("unactive")
	document.querySelector(".img_6_block").classList.remove("unactive")
	document.querySelector(".img_4_block").classList.remove("unactive")
});

function show_menu_adaptive() {
	document.querySelector(".show_menu_adaptive").classList.toggle("active");
	document.querySelector(".logo").classList.toggle("unactive");
	document.getElementById("Show_menu_button_text").classList.toggle("active");

};
window.onscroll = function (e) {
	let scroll = window.pageYOffset;
	scroll = Math.round(scroll);
	if(scroll < 730){
		document.querySelector(".Href_Home").classList.add("active");
		document.querySelector(".Href_portfolio").classList.remove("active");
		document.querySelector(".Href_About").classList.remove("active");
		document.querySelector(".Href_what_we_do").classList.remove("active");
	}else {
		document.querySelector(".Href_Home").classList.remove("active");
	};
	if(scroll > 730){
		document.querySelector(".sub_header").classList.add("active");
		document.querySelector(".Href_About").classList.add("active");
	}else {
		document.querySelector(".sub_header").classList.remove("active");
		document.querySelector(".Href_About").classList.remove("active");
	};
	if (scroll > 530) {
		document.getElementById("block_1").classList.add("active");
		document.querySelector(".About_us h1").classList.add("active");
		document.querySelector(".About_us").classList.add("active");
		document.querySelector(".bizon").classList.add("active");
		document.querySelector(".border").classList.add("active");
		document.querySelector(".header_content_text").classList.add("unactive");
	}else {
		document.querySelector(".header_content_text").classList.remove("unactive");
	};
		
	if(scroll > 1350){
		document.querySelector(".border_2").classList.add("active");
		document.querySelector(".window_2_img").classList.add("active");
		document.querySelector(".block_2_list").classList.add("active");
		document.querySelector(".What_we_do h1").classList.add("active");
		document.querySelector(".What_we_do").classList.add("active");
		document.querySelector(".block_2").classList.add("active");
		document.querySelector(".Href_what_we_do").classList.add("active");
		document.querySelector(".Href_About").classList.remove("active");
		document.querySelector(".Href_portfolio").classList.remove("active");
	}else{
		document.querySelector(".Href_what_we_do").classList.remove("active");
	};
	if(scroll > 2300){
		document.querySelector(".border_3").classList.add("active");
		document.querySelector(".border_4").classList.add("active");
		document.querySelector(".gallerey").classList.add("active");
		document.querySelector(".Href_what_we_do").classList.remove("active");
		document.querySelector(".Href_About").classList.remove("active");
		document.querySelector(".Href_Home").classList.remove("active");
		document.querySelector(".Href_portfolio").classList.add("active");

	}else{
		document.querySelector(".Href_portfolio").classList.remove("active");

	};
	if (scroll > 3200) {
		document.querySelector(".window_4_title").classList.add("active");
		document.querySelector(".Href_what_we_do").classList.remove("active");
		document.querySelector(".Href_About").classList.remove("active");
		document.querySelector(".Href_portfolio").classList.remove("active");
		document.querySelector(".Href_contact").classList.add("active");
	}else{
		document.querySelector(".Href_contact").classList.remove("active");
	};
	if (scroll > 2150) {
		document.querySelector(".portfolio_parallax h2").classList.add("active");
		document.querySelector(".portfolio_parallax h1").classList.add("active");
		document.querySelector(".background").classList.add("active");
	};
}
function img_1(){
	document.querySelector(".img_1_block").classList.toggle("active")
	document.querySelector(".img_2_block").classList.remove("active")
	document.querySelector(".img_3_block").classList.remove("active")
	document.querySelector(".img_4_block").classList.remove("active")
	document.querySelector(".img_5_block").classList.remove("active")
	document.querySelector(".img_6_block").classList.remove("active")
	document.querySelector(".closes").classList.toggle("active")

	document.querySelector(".img_2_block").classList.toggle("unactive")
	document.querySelector(".img_3_block").classList.toggle("unactive")
	document.querySelector(".img_4_block").classList.toggle("unactive")
	document.querySelector(".img_5_block").classList.toggle("unactive")
	document.querySelector(".img_6_block").classList.toggle("unactive")
	document.querySelector(".img_1_block").classList.remove("unactive")
};
function img_2(){
	document.querySelector(".img_1_block").classList.remove("active")
	document.querySelector(".img_2_block").classList.toggle("active")
	document.querySelector(".img_3_block").classList.remove("active")
	document.querySelector(".img_4_block").classList.remove("active")
	document.querySelector(".img_5_block").classList.remove("active")
	document.querySelector(".img_6_block").classList.remove("active")
	document.querySelector(".closes").classList.toggle("active")


	document.querySelector(".img_1_block").classList.toggle("unactive")
	document.querySelector(".img_3_block").classList.toggle("unactive")
	document.querySelector(".img_4_block").classList.toggle("unactive")
	document.querySelector(".img_5_block").classList.toggle("unactive")
	document.querySelector(".img_6_block").classList.toggle("unactive")
	document.querySelector(".img_2_block").classList.remove("unactive")
};
function img_3(){
	document.querySelector(".img_1_block").classList.remove("active")
	document.querySelector(".img_2_block").classList.remove("active")
	document.querySelector(".img_3_block").classList.toggle("active")
	document.querySelector(".img_4_block").classList.remove("active")
	document.querySelector(".img_5_block").classList.remove("active")
	document.querySelector(".img_6_block").classList.remove("active")
	document.querySelector(".closes").classList.toggle("active")


	document.querySelector(".img_1_block").classList.toggle("unactive")
	document.querySelector(".img_2_block").classList.toggle("unactive")
	document.querySelector(".img_4_block").classList.toggle("unactive")
	document.querySelector(".img_5_block").classList.toggle("unactive")
	document.querySelector(".img_6_block").classList.toggle("unactive")
	document.querySelector(".img_3_block").classList.remove("unactive")
};
function img_4(){
	document.querySelector(".img_1_block").classList.remove("active")
	document.querySelector(".img_2_block").classList.remove("active")
	document.querySelector(".img_3_block").classList.remove("active")
	document.querySelector(".img_4_block").classList.toggle("active")
	document.querySelector(".img_5_block").classList.remove("active")
	document.querySelector(".img_6_block").classList.remove("active")
	document.querySelector(".closes").classList.toggle("active")

	document.querySelector(".img_1_block").classList.toggle("unactive")
	document.querySelector(".img_2_block").classList.toggle("unactive")
	document.querySelector(".img_3_block").classList.toggle("unactive")
	document.querySelector(".img_5_block").classList.toggle("unactive")
	document.querySelector(".img_6_block").classList.toggle("unactive")
	document.querySelector(".img_4_block").classList.remove("unactive")
};
function img_5(){
	document.querySelector(".img_1_block").classList.remove("active")
	document.querySelector(".img_2_block").classList.remove("active")
	document.querySelector(".img_3_block").classList.remove("active")
	document.querySelector(".img_4_block").classList.remove("active")
	document.querySelector(".img_5_block").classList.toggle("active")
	document.querySelector(".img_6_block").classList.remove("active")
	document.querySelector(".closes").classList.toggle("active")


	document.querySelector(".img_1_block").classList.toggle("unactive")
	document.querySelector(".img_2_block").classList.toggle("unactive")
	document.querySelector(".img_3_block").classList.toggle("unactive")
	document.querySelector(".img_4_block").classList.toggle("unactive")
	document.querySelector(".img_6_block").classList.toggle("unactive")
	document.querySelector(".img_5_block").classList.remove("unactive")
};
function img_6(){
	document.querySelector(".img_1_block").classList.remove("active")
	document.querySelector(".img_2_block").classList.remove("active")
	document.querySelector(".img_3_block").classList.remove("active")
	document.querySelector(".img_4_block").classList.remove("active")
	document.querySelector(".img_5_block").classList.remove("active")
	document.querySelector(".img_6_block").classList.toggle("active")
	document.querySelector(".closes").classList.toggle("active")


	document.querySelector(".img_1_block").classList.toggle("unactive")
	document.querySelector(".img_2_block").classList.toggle("unactive")
	document.querySelector(".img_3_block").classList.toggle("unactive")
	document.querySelector(".img_4_block").classList.toggle("unactive")
	document.querySelector(".img_5_block").classList.toggle("unactive")
	document.querySelector(".img_6_block").classList.remove("unactive")
};