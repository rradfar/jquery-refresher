$(function () {
  // Fade out element over 2000ms
  // $(".red-box").fadeOut(2000);
  // Fade back in over 1000ms
  // $(".red-box").fadeIn(1000);
  // Fade element to specific opacity (here 50%)
  // $(".blue-box").fadeTo(1000, 0.5);
  // Note that the blue box animation starts right away, whereas the second red box animation waits until the first animation finished. This is because each element has its own animation queue which is executed one after the other. So while the red box is still "busy" with its first animation, the second animation waits in the queue.
  // Fade element in or out, depending on current status
  // $(".blue-box").fadeToggle();
  // $(".blue-box").fadeToggle();
  // Notice that fadeToggle fades back to the blue box's previous opacity, thus only back to 50% opacity.
  // Fade out element over 2000ms
  // $(".red-box").fadeOut(2000);
  // Try to use fadeTo
  // $(".red-box").fadeTo(1000, 1.0);
  // This doesn't work because fadeOut() will set display: none and fadeTo doesn't modify the display property. Thus, it's not able to make it reappear.
  // Back to original state
  // $(".red-box").fadeIn(100);
  // To keep red box in the layout, use only fadeTo
  // $(".red-box").fadeTo(2000, 0);
  // Can now make it re-appear in the way we tried above
  // $(".red-box").fadeTo(1000, 1.0);
  // Hide an element
  // $(".red-box").hide();
  // Show it again
  // $(".red-box").show();
  // Just toggle visibility depending on whether element is shown or hidden
  // $(".red-box").toggle(); // hides
  // Up until this point, you can't even see what happens in the browser because it happens in a matter of milliseconds.
  // Use show/hide as animations (not very commonly used)
  // $(".green-box").hide(1000);
  // $(".green-box").show(1000);
  // Slide element up to hide (over 2s)
  // $(".blue-box").slideUp(2000);
  // Slide back down to show element
  // $(".blue-box").slideDown(2000);
  // Toggle sliding up/down depending on current state
  // $(".blue-box").slideToggle(1000);
  // $(".blue-box").slideToggle(1000);
  // Custom animation to move element by gradually increasing margin to 200px
  // $(".green-box").animate({
  //   "margin-left": "+=200px",
  // });
  // Reset
  // $(".green-box").animate({
  //   "margin-left": "0px",
  // });
  // Move element by gradually increasing margin BY 200px (using +=) (no matter what it was before)
  // $(".green-box").animate({
  //   "margin-left": "+=200px",
  // });
  // Define animation duration (here 2s)
  // Default duration is 300ms
  // $(".green-box").animate(
  //   {
  //     "margin-left": "-=200px",
  //   },
  //   2000
  // );
  // Define animation progression function
  // Linear updates the margin-left linearly
  // $(".green-box").animate(
  //   {
  //     "margin-left": "+=200px",
  //   },
  //   2000,
  //   "linear"
  // );
  // Animate various CSS properties of the blue box
  // $(".blue-box").animate(
  //   {
  //     marginLeft: "200px",
  //     opacity: "0",
  //     height: "50px",
  //     width: "50px",
  //     marginTop: "25px",
  //   },
  //   1000
  // );
  // Animate font size of all paragraphs
  // $("p").animate(
  //   {
  //     fontSize: "20px"
  //   },
  //   1000
  // );
  // Fade out red box immediately to 50% opacity (over 1 second)
  // $(".red-box").fadeTo(1000, 0.5);
  // Wait 1 second, then fade out green box to 50% opacity (over 1 second)
  // This already using function chaining to call .fadeTo() directly on the
  // return value of .delay()
  // $(".green-box").delay(1000).fadeTo(1000, 0.5);
  // Chaining even more function calls to create animation
  // $(".blue-box")
  //   .delay(2000)
  //   .fadeTo(1000, 0.5)
  //   .fadeTo(1000, 1.0)
  //   .delay(1000)
  //   .fadeOut();
  // Select all paragraph tags
  // var p = $("p");
  // highlight(p);
  // Select all elements with the class .red-box (only one in this case)
  // var redBoxes = $(".red-box");
  // highlight(redBoxes);
  // Select the unique element with ID "list"
  // var list = $("#list");
  // highlight(list);
  // Select all h2, p, and input tags
  // var elements = $("h2, p, input");
  // highlight(elements);
  // Select only the last <li> on the page
  // var lastItem = $("li:last");
  // highlight(lastItem);
  // Select all even list items on the page (every second list item)
  // var everySecondItem = $("li:even");
  // highlight(everySecondItem);
  // Select all odd list items (every other list item)
  // var everyOtherItem = $("li:odd");
  // highlight(everyOtherItem);
  // Select all input elements that are checked/selected
  // Checkboxes and radio buttons don't have background-color
  // var selected = $("input:checked");
  // console.log(selected.length);
  // Select all input elements of type email
  // var emails = $("input[type=email]");
  // highlight(emails);
  // Select the #list and find all <li> tags it contains
  // This contains even indirect children further down in the hierarchy
  // var items = $("#list").find("li");
  // highlight(items);
  // Select the #list and find only <li> that are *direct* children
  // Note that this will still produce a yellow background around the whole list
  // because the direct children <li> have enough height to contain their children
  // var children = $("#list").children("li");
  // highlight(children);
  // Search for even non-direct parents
  // var body = $("#list").parents("body");
  // highlight(body);
  // Select the (unique) direct parent of an element
  // var content = $("#list").parent();
  // highlight(content);
  // Search through siblings on the same level in the HTML hierarchy
  // var siblingHeadlines = $("#list").siblings(":header");
  // highlight(siblingHeadlines);
  // Select the previous sibling of a selected element
  // var previous = $("#list").prev();
  // highlight(previous);
  // Select the next sibling of a selected element
  // var next = $("#list").next();
  // highlight(next);
  // Select all <li> tags and then filter out all odd ones (keep only even ones)
  // Same as $("#list > li:even"), using more advanced CSS
  // var everySecondItem = $("#list").children("li").filter(":even");
  // highlight(everySecondItem);
  // The filter can even be a function that gets the index of an element and
  // returns true (to keep the element) or false (to filter it out).
  // For instance, to select only every third sub list item, we can do this:
  // var everyThirdItem = $("li li").filter(function (index) {
  //   return index % 3 == 0;
  // });
  // highlight(everyThirdItem);
  // Keep only the first item of a selection
  // var first = $("li").first();
  // highlight(first);
  // Keep only the last item of a selection
  // var last = $("li").last();
  // highlight(last);
  // Keep only the item at a specific index of a selection
  // For instance, keep only the 5th item (thus index 4):
  // var fifth = $("li").eq(4);
  // highlight(fifth);
  // Keep only the second last item (index -2):
  // var secondLast = $("li").eq(-2);
  // highlight(secondLast);
  // 1) Appending elements to existing elements.
  // -> This adds elements as the last children of a given element
  // Append a new list item to the end of the first sub list
  // $("ul ul:first").append("<li>New sub item</li>");
  // Other way to achieve the same effect
  // $("<li>Another new sub item</li>").appendTo("ul ul:first");
  // 2) Prepending elements to existing elements.
  // -> This adds elements as the first children of a given element
  // Prepend a new list item to the start of the first sub list
  // $("ul ul:first").prepend("<li>First sub item</li>");
  // Other way to achieve the same effect
  // $("<li>Very first sub item</li>").prependTo("ul ul:first");
  // 3) Adding elements as siblings of existing elements
  // Add a new elements after an existing one (as next sibling)
  // $(".red-box").after("<div class='red-box'>New Red</div>");
  // Add a new elements before an existing one (as previous sibling)
  // $(".blue-box").before("<div class='blue-box'>New Blue</div>");
  // You can also use a callback function to construct more complex
  // elements to add to the DOM
  // $(".green-box").after(function () {
  //   // Maybe more complex string of new element(s)
  //   return "<div class='green-box'>New Green</div>";
  // });
  // 4) Add existing elements to other existing elements
  // -> This will move the added element, so the original vanishes
  // For instance, add the #list after the first paragraph (removes it from its
  // original position).
  // In case it's added to multiple elements, jQuery must clone the added element.
  // $("p:first").after($("#list"));
  // Replace each selected item with another one.
  // For instance, replace all <p> tags with another one.
  // $("p:first").replaceWith("<p>I've been replaced.</p>");
  // Again, to construct more complex elements, you may want
  // to do that in a callback function:
  // $("p:last").replaceWith(function () {
  //   return "<p>Complex new paragraph...</p>";
  // });
  // Also, you can again replace an element with another existing
  // element which will remove it from its original position.
  // $(".red-box").replaceWith($(".blue-box"));
  // You can also replace multiple items at the same time.
  // $("li:first, li:last").replaceWith("<li>First or last list item</li>");
  // You can remove an existing element simply with remove().
  // For instance, the first main item:
  // $("li:first").remove();
  // If you want to reuse/re-display the element later, you should
  // use detach(). This also keeps all attached event handlers alive.
  // First, this removes the element from the DOM:
  // var detached = $("p:first").detach();
  // Next, this will re-attach the element to the DOM (at another position):
  // $("#list").after(detached);
  // To remove all elements *inside* a given elements, you can use empty().
  // The element itself remains in the DOM, so in this case the <form>.
  // $("form").empty();
  // 1) Attributes with attr()
  // To read the current value of an attribute, use attr() with only
  // one argument: the name of the attribute you want to read.
  // var link = $("#link");
  // Retrieve the value of the href attribute of the <a> tag
  // This is logged into the console. To see it, press F12 in Firefox/Chrome
  // to open the Developer Tools and click on the Console tab.
  // console.log(link.attr("href"));
  // Log the value of the title attribute
  // console.log(link.attr("title"));
  // To set the value of an attribute, you call the attr() function with two
  // arguments: first, the name of the attribute you want to change, and second
  // the new value:
  // link.attr("href", "http://google.com");
  // 2) Properties with prop()
  // To read the *current* value of a checkbox for instance, you must use the
  // prop() function:
  // var radioButton = $("input[type=radio]:first");
  // console.log(radioButton.prop("checked")); // false
  // console.log(radioButton.attr("checked")); // undefined
  // 3) Values with val()
  // -> Read or set the value attribute of input elements
  // To retrieve the value of an input element, simply call val()
  // var email = $("input[type=email]").val();
  // console.log(email); // i@mine.me
  // var number = $("input[type=range]").val();
  // console.log(number); // 3
  // To set a new value, pass the new value as an argument to val():
  // $("input[type=text]").val("John");
  // $("input[type=range]").val(9);
  // If you have multiple elements selected, using val() will implicitly
  // always call first() beforehand, so only change the first input element:
  // var value = $("input").val();
  // console.log(value); // John
});

// Helper function which highlights the given element with yellow background
function highlight(element) {
  element.css("background-color", "rgba(180, 180, 30, 0.8)");
}
