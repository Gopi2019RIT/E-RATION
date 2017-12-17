$(document).ready(function() {
	var sectionHeads = $"section div:first-child");
	sectionHeads.show();
	sectionHeads.click(function(event) {
		$(event.target).siblings().toggleClass("active-section");
	})
});