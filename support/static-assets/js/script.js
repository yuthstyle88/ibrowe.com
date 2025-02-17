/*
  Template Name: Panatha
  Version: 3.1.14
  Author: Allies Interactive
  Website: http://www.diziana.com/
  Corporate Website : http://www.diziana.com
  Contact: support@diziana.com
  Follow: https://www.twitter.com/dizianaEngage
  Like: https://www.facebook.com/diziana.engage
  Purchase: Diziana.com
  License: You must have a valid license purchased only from
  diziana.com in order to legally use the theme for your project.
  Copyright: © 2019 Allies Interactive Services Pvt. Ltd. All Rights Reserved
*/

/*
 * jQuery v1.9.1 included
 */

$(document).ready(function() {
  // social share popups
  $(".share a").click(function(e) {
    e.preventDefault();
    window.open(this.href, "", "height = 500, width = 500");
  });

  if (document.URL.indexOf('/requests/new') >= 0) {
        $('.form-field label:contains("Attachments")').hide(); 
    $('#upload-dropzone').hide();}
  
  const select_element = document.getElementById("request_issue_type_select");
  const selection_labels = document.querySelectorAll("#selection-labels > p");
  const swapper = function(){
    const id = "option-" + select_element.value;
    for(let i = 0; i<selection_labels.length; i++){
      let item = selection_labels[i];
      item.style.display = item.id === id?"block":"none";
    }
  };
  
  if(select_element){
    swapper();
  }
	// $('#test').hide();
	 // var selected = $('#request_issue_type_select option:selected').text();
	 // if (selected === "Premium Account Cancellation") {
	 // $('div.request_ticket_form_id').append('<p>Insert whatever disclaimer or note you want here!</p>');
  // $('#test').show();}
  
  // show form controls when the textarea receives focus or backbutton is used and value exists
  var $commentContainerTextarea = $(".comment-container textarea"),
    $commentContainerFormControls = $(".comment-form-controls, .comment-ccs");

  $commentContainerTextarea.one("focus", function() {
    $commentContainerFormControls.show();
  });

  if ($commentContainerTextarea.val() !== "") {
    $commentContainerFormControls.show();
  }
  
  $(".page-header-description").html($(".page-header-description").text());
  $(".category-description").html($(".category-description").text());
  $(".section-description").html($(".section-description").text());
  
  // Expand Request comment form when Add to conversation is clicked
  var $showRequestCommentContainerTrigger = $(
      ".request-container .comment-container .comment-show-container"
    ),
    $requestCommentFields = $(
      ".request-container .comment-container .comment-fields"
    ),
    $requestCommentSubmit = $(
      ".request-container .comment-container .request-submit-comment"
    );

  $showRequestCommentContainerTrigger.on("click", function() {
    $showRequestCommentContainerTrigger.hide();
    $requestCommentFields.show();
    $requestCommentSubmit.show();
    $commentContainerTextarea.focus();
  });

  // Mark as solved button
  var $requestMarkAsSolvedButton = $(
      ".request-container .mark-as-solved:not([data-disabled])"
    ),
    $requestMarkAsSolvedCheckbox = $(
      ".request-container .comment-container input[type=checkbox]"
    ),
    $requestCommentSubmitButton = $(
      ".request-container .comment-container input[type=submit]"
    );

  $requestMarkAsSolvedButton.on("click", function() {
    $requestMarkAsSolvedCheckbox.attr("checked", true);
    $requestCommentSubmitButton.prop("disabled", true);
    $(this)
      .attr("data-disabled", true)
      .closest("form")
      .submit();
  });

  // Change Mark as solved text according to whether comment is filled
  var $requestCommentTextarea = $(
    ".request-container .comment-container textarea"
  );

  $requestCommentTextarea.on("keyup", function() {
    if ($requestCommentTextarea.val() !== "") {
      $requestMarkAsSolvedButton.text(
        $requestMarkAsSolvedButton.data("solve-and-submit-translation")
      );
      $requestCommentSubmitButton.prop("disabled", false);
    } else {
      $requestMarkAsSolvedButton.text(
        $requestMarkAsSolvedButton.data("solve-translation")
      );
      $requestCommentSubmitButton.prop("disabled", true);
    }
  });

  // Disable submit button if textarea is empty
  if ($requestCommentTextarea.val() === "") {
    $requestCommentSubmitButton.prop("disabled", true);
  }

  // Submit requests filter form in the request list page
  $("#request-status-select, #request-organization-select").on(
    "change",
    function() {
      search();
    }
  );

  // Submit requests filter form in the request list page
  $("#quick-search").on("keypress", function(e) {
    if (e.which === 13) {
      search();
    }
  });

  function search() {
    window.location.search = $.param({
      query: $("#quick-search").val(),
      status: $("#request-status-select").val(),
      organization_id: $("#request-organization-select").val()
    });
  }

  $(".header .icon-menu").on("click", function(e) {
    e.stopPropagation();
    var menu = document.getElementById("user-nav");
    var isExpanded = menu.getAttribute("aria-expanded") === "true";
    menu.setAttribute("aria-expanded", !isExpanded);
  });

  if ($("#user-nav").children().length === 0) {
    $(".header .icon-menu").hide();
  }

  // Submit organization form in the request page
  $("#request-organization select").on("change", function() {
    this.form.submit();
  });

  // Toggles expanded aria to collapsible elements
  $(".collapsible-nav, .collapsible-sidebar").on("click", function(e) {
    e.stopPropagation();
    var isExpanded = this.getAttribute("aria-expanded") === "true";
    this.setAttribute("aria-expanded", !isExpanded);
  });

  // Toggle promoted articles on homepage
  $(".knowledge-base .promoted-articles-item > div > a").click(function(e) {
    e.preventDefault();
    $(this).toggleClass("active").next().slideToggle(250);
  });

  // Latest Articles
	$(".knowledge-base").on("click", ".latest-articles-item > div > a", function(e) {
    e.preventDefault();
    console.log(e);
    $(e.currentTarget).toggleClass("active").next().slideToggle(250);
  });
  
  // Add class to make table responsive
  $(".article-body").find("table").wrap('<div class="table-responsive"></div>');

  // If multibrand search has more than 5 help centers or categories collapse the list
  const multibrandFilterLists = document.querySelectorAll(".multibrand-filter-list");
  Array.prototype.forEach.call(multibrandFilterLists, function(filter) {
    if (filter.children.length > 6) {
      // Display the show more button
      var trigger = filter.querySelector(".see-all-filters");
      trigger.setAttribute("aria-hidden", false);

      // Add event handler for click
      trigger.addEventListener("click", function(e) {
        e.stopPropagation();
        trigger.parentNode.removeChild(trigger);
        filter.classList.remove("multibrand-filter-list--collapsed")
      })
    }
  });
});

var $ = jQuery.noConflict();

// Load all necessary objects from Diziana Library
$(document).ready(function() {
  if (
    templateName == "category" ||
    templateName == "sections" ||
    templateName == "articles"
  ) {
    initMultiLevelMenu({
      htmlClass: "diziana-category-sidebar-menu",
      storageType: "session"
    });

    setTimeout(function() {
      $("li.category-" + categoryid).addClass("active");
    }, 1000);
  }
});

// ------------ Latest articles script 

// $.getJSON( "/api/v2/help_center/en-us/articles.json?per_page=100&sort_by=updated_at&sort_order=desc", function( data ) {
//   console.log(data);
//   console.log(data.articles[0]);
//   data.articles.sort(function(a,b){
//     return new Date(a.edited_at) > new Date(b.edited_at) ? -1 : 1;
//   })
//   console.log(data.articles.slice(0,6).map(x => [x.title,x.edited_at]));
//   var items = [];
//   var template = $("#latest-articles > li:first-child").detach()[0];
//   $.each( data.articles.slice(0,6), function( index, article ) {
//     var entry = template.cloneNode(true);
//     var excerpt = $.parseHTML("<div>" + article.body + "</div>")[0].textContent.split(" ").slice(0,25).join(" ");
//     $(entry).find("a").attr("href", article.html_url);
//     $(entry).find("span.article-title-text").text(article.title);
// 		$(entry).find(".article-body span:first-child").text(excerpt.trim() + "...");
//     //items.push( entry.outerHTML );
//     $(entry).appendTo("#latest-articles");
//   });
 
//   // $( "<ul/>", {
//   //   "class": "my-new-list",
//   //   html: items.join( "" )
//   // }).appendTo( "#footloose" );
// });

// ---------------- END Latest articles script


// $( function() {
//   $( '.icons-wrapper').on( 'click', function(){
//     var $icons = $( this );
//     $icons.toggleClass( 'promo-icon-active');
//     $icons
//     	.parents('.promo-icon')
//     	.slideToggle();
//   } );
// } );
/* accordion up and down functionality */
$( function () {
	$( '.accordion__item-title' ).on( 'click', function () {
		var $title = $( this );
		$title.toggleClass( 'accordion__item-title--active' )
    	.next()
			.slideToggle();
	} );
} );

function darkMode() {
   var element = document.body;
   element.classList.toggle("dark-mode");
}

/* Tab functionality */
window.addEventListener("load", function() {

	// store tabs variable
	var myTabs = document.querySelectorAll("ul.nav-tabs > li");

	function myTabClicks(tabClickEvent) {

		for (var i = 0; i < myTabs.length; i++) {
			myTabs[i].classList.remove("active");
		}

		var clickedTab = tabClickEvent.currentTarget; 

		clickedTab.classList.add("active");

		tabClickEvent.preventDefault();

		var myContentPanes = document.querySelectorAll(".tab-pane");

		for (i = 0; i < myContentPanes.length; i++) {
			myContentPanes[i].classList.remove("active");
		}

		var anchorReference = tabClickEvent.target;
		var activePaneId = anchorReference.getAttribute("href");
		var activePane = document.querySelector(activePaneId);

		activePane.classList.add("active");

	}

	for (i = 0; i < myTabs.length; i++) {
		myTabs[i].addEventListener("click", myTabClicks)
	}
});