$(function () {
  // Fade out element over 2000ms
  $(".red-box").fadeOut(2000);

  // Fade back in over 1000ms
  $(".red-box").fadeIn(1000);

  // Fade element to specific opacity (here 50%)
  $(".blue-box").fadeTo(1000, 0.5);

  // Note that the blue box animation starts right away, whereas the second red box animation waits until the first animation finished. This is because each element has its own animation queue which is executed one after the other. So while the red box is still "busy" with its first animation, the second animation waits in the queue.

  // Fade element in or out, depending on current status
  // Notice that fadeToggle fades back to the blue box's previous opacity, thus only back to 50% opacity.
  $(".blue-box").fadeToggle();
  $(".blue-box").fadeToggle();

  // Fade out element over 2000ms
  $(".red-box").fadeOut(2000);

  // Try to use fadeTo
  // This doesn't work because fadeOut() will set display: none and fadeTo doesn't modify the display property. Thus, it's not able to make it reappear.
  $(".red-box").fadeTo(1000, 1.0);

  // Back to original state
  $(".red-box").fadeIn(100);

  // To keep red box in the layout, use only fadeTo
  $(".red-box").fadeTo(2000, 0);

  // Can now make it re-appear in the way we tried above
  $(".red-box").fadeTo(1000, 1.0);

  // Hide an element
  $(".red-box").hide();

  // Show it again
  $(".red-box").show();

  // Just toggle visibility depending on whether element is shown or hidden
  $(".red-box").toggle(); // hides

  // Use show/hide as animations (not very commonly used)
  $(".green-box").hide(1000);
  $(".green-box").show(1000);

  // Slide element up to hide (over 2s)
  $(".blue-box").slideUp(2000);

  // Slide back down to show element
  $(".blue-box").slideDown(2000);

  // Toggle sliding up/down depending on current state
  $(".blue-box").slideToggle(1000);
  $(".blue-box").slideToggle(1000);

  // Custom animation to move element by gradually increasing margin to 200px
  $(".green-box").animate({
    "margin-left": "+=200px",
  });

  // Reset
  $(".green-box").animate({
    "margin-left": "0px",
  });

  // Move element by gradually increasing margin BY 200px (using +=) (no matter what it was before)
  $(".green-box").animate({
    "margin-left": "+=200px",
  });

  // Define animation duration (here 2s)
  // Default duration is 300ms
  $(".green-box").animate(
    {
      "margin-left": "-=200px",
    },
    2000
  );

  // Define animation progression function
  // Linear updates the margin-left linearly
  $(".green-box").animate(
    {
      "margin-left": "+=200px",
    },
    2000,
    "linear"
  );

  // Animate various CSS properties of the blue box
  $(".blue-box").animate(
    {
      marginLeft: "200px",
      opacity: "0",
      height: "50px",
      width: "50px",
      marginTop: "25px",
    },
    1000
  );

  // Animate font size of all paragraphs
  $("p").animate(
    {
      fontSize: "20px",
    },
    1000
  );

  // Fade out red box immediately to 50% opacity (over 1 second)
  $(".red-box").fadeTo(1000, 0.5);

  // Wait 1 second, then fade out green box to 50% opacity (over 1 second)
  $(".green-box").delay(1000).fadeTo(1000, 0.5);

  // Chaining even more function calls to create animation
  $(".blue-box")
    .delay(2000)
    .fadeTo(1000, 0.5)
    .fadeTo(1000, 1.0)
    .delay(1000)
    .fadeOut();

  // Select all paragraph tags
  var p = $("p");
  highlight(p);

  // Select all elements with the class .red-box (only one in this case)
  var redBoxes = $(".red-box");
  highlight(redBoxes);

  // Select the unique element with ID "list"
  var list = $("#list");
  highlight(list);

  // Select all h2, p, and input tags
  var elements = $("h2, p, input");
  highlight(elements);

  // Select only the last <li> on the page
  var lastItem = $("li:last");
  highlight(lastItem);

  // Select all even list items on the page (every second list item)
  var everySecondItem = $("li:even");
  highlight(everySecondItem);

  // Select all odd list items (every other list item)
  var everyOtherItem = $("li:odd");
  highlight(everyOtherItem);

  // Select all input elements that are checked/selected
  // Checkboxes and radio buttons don't have background-color
  var selected = $("input:checked");
  console.log(selected.length);

  // Select all input elements of type email
  var emails = $("input[type=email]");
  highlight(emails);

  // Select the #list and find all <li> tags it contains
  // This contains even indirect children further down in the hierarchy
  var items = $("#list").find("li");
  highlight(items);

  // Select the #list and find only <li> that are *direct* children
  // Note that this will still produce a yellow background around the whole list
  // because the direct children <li> have enough height to contain their children
  var children = $("#list").children("li");
  highlight(children);

  // Search for non-direct parents
  var body = $("#list").parents("body");
  highlight(body);

  // Select the (unique) direct parent of an element
  var content = $("#list").parent();
  highlight(content);

  // Search through siblings on the same level in the HTML hierarchy
  var siblingHeadlines = $("#list").siblings(":header");
  highlight(siblingHeadlines);

  // Select the previous sibling of a selected element
  var previous = $("#list").prev();
  highlight(previous);

  // Select the next sibling of a selected element
  var next = $("#list").next();
  highlight(next);

  // Select all <li> tags and then filter out all odd ones (keep only even ones)
  // Same as $("#list > li:even"), using more advanced CSS
  var everySecondItem = $("#list").children("li").filter(":even");
  highlight(everySecondItem);

  // The filter can even be a function that gets the index of an element and
  // returns true (to keep the element) or false (to filter it out).
  // For instance, to select only every third sub list item, we can do this:
  var everyThirdItem = $("li li").filter(function (index) {
    return index % 3 == 0;
  });
  highlight(everyThirdItem);

  // Keep only the first item of a selection
  var first = $("li").first();
  highlight(first);

  // Keep only the last item of a selection
  var last = $("li").last();
  highlight(last);

  // Keep only the item at a specific index of a selection
  // For instance, keep only the 5th item (thus index 4):
  var fifth = $("li").eq(4);
  highlight(fifth);

  // Keep only the second last item (index -2):
  var secondLast = $("li").eq(-2);
  highlight(secondLast);

  // 1) Appending elements to existing elements.
  // -> This adds elements as the last children of a given element
  // Append a new list item to the end of the first sub list
  $("ul ul:first").append("<li>New sub item</li>");

  // Other way to achieve the same effect
  $("<li>Another new sub item</li>").appendTo("ul ul:first");

  // 2) Prepending elements to existing elements.
  // -> This adds elements as the first children of a given element
  // Prepend a new list item to the start of the first sub list
  $("ul ul:first").prepend("<li>First sub item</li>");

  // Other way to achieve the same effect
  $("<li>Very first sub item</li>").prependTo("ul ul:first");

  // 3) Adding elements as siblings of existing elements
  // Add a new elements after an existing one (as next sibling)
  $(".red-box").after("<div class='red-box'>New Red</div>");

  // Add a new elements before an existing one (as previous sibling)
  $(".blue-box").before("<div class='blue-box'>New Blue</div>");

  // You can also use a callback function to construct more complex
  // elements to add to the DOM
  $(".green-box").after(function () {
    // Maybe more complex string of new element(s)
    return "<div class='green-box'>New Green</div>";
  });

  // 4) Add existing elements to other existing elements
  // -> This will move the added element, so the original vanishes
  // For instance, add the #list after the first paragraph (removes it from its
  // original position).
  // In case it's added to multiple elements, jQuery must clone the added element.
  $("p:first").after($("#list"));

  // Replace each selected item with another one.
  // For instance, replace all <p> tags with another one.
  $("p:first").replaceWith("<p>I've been replaced.</p>");

  // Again, to construct more complex elements, you may want
  // to do that in a callback function:
  $("p:last").replaceWith(function () {
    return "<p>Complex new paragraph...</p>";
  });

  // Also, you can again replace an element with another existing
  // element which will remove it from its original position.
  $(".red-box").replaceWith($(".blue-box"));

  // You can also replace multiple items at the same time.
  $("li:first, li:last").replaceWith("<li>First or last list item</li>");

  // You can remove an existing element simply with remove().
  // For instance, the first main item:
  $("li:first").remove();

  // If you want to reuse/re-display the element later, you should
  // use detach(). This also keeps all attached event handlers alive.
  // First, this removes the element from the DOM:
  var detached = $("p:first").detach();
  // Next, this will re-attach the element to the DOM (at another position):
  $("#list").after(detached);

  // To remove all elements *inside* a given elements, you can use empty().
  // The element itself remains in the DOM, so in this case the <form>.
  $("form").empty();

  // 1) Attributes with attr()
  // To read the current value of an attribute, use attr() with only
  // one argument: the name of the attribute you want to read.
  var link = $("#link");

  // Retrieve the value of the href attribute of the <a> tag
  console.log(link.attr("href"));

  // Log the value of the title attribute
  console.log(link.attr("title"));

  // To set the value of an attribute, you call the attr() function with two
  // arguments: first, the name of the attribute you want to change, and second
  // the new value:
  link.attr("href", "http://google.com");

  // 2) Properties with prop()
  // To read the *current* value of a checkbox for instance, you must use the
  // prop() function:
  var radioButton = $("input[type=radio]:first");
  console.log(radioButton.prop("checked")); // false

  // 3) Values with val()
  // -> Read or set the value attribute of input elements
  // To retrieve the value of an input element, simply call val()
  var email = $("input[type=email]").val();
  console.log(email); // i@mine.me
  var number = $("input[type=range]").val();
  console.log(number); // 3

  // To set a new value, pass the new value as an argument to val():
  $("input[type=text]").val("John");
  $("input[type=range]").val(9);

  // If you have multiple elements selected, using val() will implicitly
  // always call first() beforehand, so only change the first input element:
  var value = $("input").val();
  console.log(value); // John

  // To retrieve or set the value of a CSS property, you can use css().
  // This works similar to attr() and prop(): pass one argument to read
  // or two arguments to set a new value.
  // For instance, you can achieve the same as with hide() like this:
  $("p:first").css("display", "none");

  // Let's read the width property of .red-box:
  var redBox = $(".red-box");
  console.log(redBox.css("width")); // 80px

  // To get the width or height without unit, you can use width() and height():
  console.log(redBox.width()); // 80

  // You can change any CSS property in this simple way.
  redBox.css("background-color", "#AA5500");
  $("p").css("font-size", "20px");

  // You can even change the value of a property relative to its previous value
  redBox.css("width", "+=20px");
  redBox.css("height", "-=20px");

  // Also, you can retrieve multiple values by passing an array as the argument
  // The result is an object containing all values
  var properties = $("p").css(["font-size", "line-height", "color"]);
  console.log(properties);
  console.log(properties["font-size"]); // 20px

  // In line with jQuery's other function, you can also use a callback function
  // instead of passing in a new value directly.
  // This example also demonstrates that jQuery automatically uses the correct
  // vendor prefix for the CSS property depending on the browser, which is
  // -moz-user-select in this case.
  redBox.css("user-select", function () {
    // some logic here...
    return "none";
  });

  // Additional CSS classes can be added to an element via addClass()
  // For instance, add the class .fancy-link to all anchor tags.
  // Note that you *do not* add a dot in front of the class name here.
  $("a").addClass("fancy-link");

  // You can also add multiple classes at once.
  $("p:first").addClass("large emphasize");

  // To attach a class based on the index of the element in your selected
  // set of elements, you can use a callback function.
  $("li li").addClass(function (index) {
    // This adds classes .item-0, .item-1, ... to the list's sub-items.
    $(this).addClass("item-" + index);
  });

  // You can even use two parameters for the callback function, the index
  // and the current class of the element.
  $("div").addClass(function (index, currentClasses) {
    console.log(currentClasses); // String containing all classes
    // Add .red-box if the current classes contain "dummy"
    if (currentClasses.indexOf("dummy") !== -1) {
      return "red-box";
    }
  });

  // You can again chain these calls to switch one class for another.
  $(".green-box").removeClass("green-box").addClass("blue-box");

  // To quickly toggle one particular CSS class, use toggleClass().
  $("li li:first").toggleClass("emphasize");

  // jQuery allows you to attach arbitrary data to any element, represented as
  // HTML attributes prefixed with "data-", e.g. "data-images".
  // Here, we'll attach data about all available images to the gallery itself.

  // Select the <img> inside the gallery to manipulate it later
  var gallery = $(".gallery");

  // Initialize an array of all images for the gallery
  var images = [
    "images/laptop-mobile_small.jpg",
    "images/laptop-on-table_small.jpg",
    "images/people-office-group-team_small.jpg",
  ];

  // To attach data, use the data() function and pass in two arguments: first,
  // the key for the data, and second the actual data/value.
  gallery.data("availableImages", images);
  // To retrieve the data, again use just one argument: the key.
  console.log(gallery.data("availableImages")); // Array[...]

  gallery.data("name", "The Amazing Gallery");
  console.log(gallery.data("name")); // The Amazing Gallery

  // Remove data just as easily using removeData().
  gallery.removeData("name");
  console.log(gallery.data("name")); // undefined

  // If you attach data directly in HTML via an attribute prefixed with "data-",
  // you can read that automatically from jQuery.
  var data = $("p:first").data("mydata");
  console.log(data); // Data coming from HTML attribute

  // To read or change the textual content of an element, you use text().
  var p = $("p:first");
  console.log(p.text()); // Lorem ipsum...

  p.text("Now it's a very short paragraph.");
  console.log(p.text()); // Now it's a very short paragraph.

  // In contrast to text(), html() allows you to retrieve the content of an
  // element including the HTML code of its content/children.
  var p2 = $("p").eq(1); // Second <p> tag
  console.log(p2.text()); // Lorem ipsum...
  console.log(p2.html()); // <span>Lorem</span> ipsum ...

  // Similarly, you can set the HTML content of an element with html()
  // whereas text() would escape the HTML code to make it show as text.
  $("li ul").eq(0).text("<li>Not an item</li>");
  $("li ul").eq(1).html("<li>Correct item</li>");

  // You can use this in a way that appends content to an element.
  p2.text(p2.text() + " This is an additional sentence.");
  p2.html(
    p2.html() + " <span class='emphasize'>And another emphasized one.</span>"
  );

  // Click handler can be attached by passing a callback function to the click()
  // function. Whatever code you write into the callback function is then
  // executed whenever the user clicks the element.
  // You can add a parameter to the callback to retrieve additional info about
  // the event. Accordingly, we call the parameter "event".
  $("#btn-click").click(function (event) {
    console.log(event);
    alert("Thanks for clicking me!");
  });

  // As always in jQuery, inside the callback, you can refer to the element
  // as $(this).
  $(".red-box").click(function () {
    var currentOpacity = $(this).css("opacity");
    $(this).fadeTo(500, currentOpacity - 0.2);
  });

  // You can even simulate click events on the element by calling click()
  // without any arguments.
  $(".red-box").click();

  // Hover handlers are defined the same way as click handlers but using hover().
  // Hover events fire as soon as the cursor enters *or* leaves the element.
  $("#btn-hover").hover(function (event) {
    console.log(event);
    alert("You hovered me!");
  });

  // And you can again refer to the element as $(this) from within the callback.
  $(".green-box").hover(function () {
    $(this).text("Hovered!");
  });

  // While hover() with one callback function triggers both when entering and
  // leaving the element with the cursor, mouseenter() and mouseleave() allow
  // you to attach different event handlers for both.
  $(".blue-box").mouseenter(function () {
    $(this).stop().fadeTo(500, 0.5);
  });

  $(".blue-box").mouseleave(function () {
    $(this).stop().fadeTo(500, 1);
  });

  // However, you can achieve the same with hover() as well. For this, you must
  // pass in two callback functions: first the one for mouseenter, then the one
  // for mouseleave.
  // So the following does the same as the above, but for the red box:
  $(".red-box").hover(
    function () {
      $(this).stop().fadeTo(500, 0.5);
    },
    function () {
      $(this).stop().fadeTo(500, 1);
    }
  );

  // You can attach the same handler (callback function) for multiple events
  // using jQuery's on() function.
  // For instance, the following logs to the console whenever you click anywhere
  // on the page or press any key while the page/browser is focused.
  $("html").on("click keydown", function () {
    console.log("Mouse was clicked or key was pressed.");
  });

  // Let's use this to add a gallery that switches to the next image on click.
  var images = [
    "images/laptop-mobile_small.jpg",
    "images/laptop-on-table_small.jpg",
    "images/people-office-group-team_small.jpg",
  ];

  // The following is the same as in the image slideshow code, except we now
  // use a click event instead of setTimeout().
  var i = 0;
  $(".gallery")
    .find("img")
    .on("click", function () {
      i = (i + 1) % images.length;
      $(this).fadeOut(function () {
        $(this).attr("src", images[i]).fadeIn();
      });
    });
});

// Helper function which highlights the given element with yellow background
function highlight(element) {
  element.css("background-color", "rgba(180, 180, 30, 0.8)");
}
