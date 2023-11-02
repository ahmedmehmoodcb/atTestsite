$(document).ready(function () {
  $(".customer-logos").slick({
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1500,
    arrows: false,
    dots: false,
    pauseOnHover: false,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 6,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 520,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 2,
        },
      },
    ],
  });
});

$(document).ready(function () {
  $(".customer-logos2").slick({
    slidesToShow: 6,
    slidesToScroll: -1,
    autoplay: true,
    autoplaySpeed: 1500,
    arrows: false,
    dots: false,
    pauseOnHover: false,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 6,
          slidesToScroll: -2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 4,
          slidesToScroll: -2,
        },
      },
      {
        breakpoint: 520,
        settings: {
          slidesToShow: 4,
          slidesToScroll: -2,
        },
      },
    ],
  });
});
$(document).ready(function () {
  $(".customer-logos3").slick({
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1500,
    arrows: false,
    dots: false,
    pauseOnHover: false,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 520,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
        },
      },
    ],
  });
});

$(document).ready(function () {
  $(".customer-logos4").slick({
    slidesToShow: 0,
    slidesToScroll: 0,
    autoplay: true,
    autoplaySpeed: 1500,
    arrows: false,
    dots: false,
    pauseOnHover: false,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 6,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 520,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  });
});
$(document).ready(function () {
  $(".innercard").slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1500,
    arrows: false,
    dots: true,
    pauseOnHover: false,
    responsive: [
      {
        breakpoint: 1230,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 1025,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 520,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 2,
        },
      },
    ],
  });
});

$(document).ready(function () {
  $(".clientSection").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1500,
    arrows: false,
    dots: true,
    pauseOnHover: false,
    responsive: [
      {
        breakpoint: 1230,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1025,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 520,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  });
});

// // Set an interval to call the switchTab function
// setInterval(switchTab, interval);

// Time interval (in milliseconds) for tab switching
const interval = 3000; // 3 seconds
let tabSwitchInterval; // Variable to store the interval ID

// Function to switch to the next tab
function switchTab() {
  const tabs = $("#myTab .nav-link");
  const activeTab = $("#myTab .nav-link.active");
  const nextTab = activeTab.parent().next().find(".nav-link");
  if (nextTab.length === 0) {
    // If there is no next tab, go back to the first tab
    tabs.first().tab("show");
  } else {
    nextTab.tab("show");
  }
}

// Set an interval to call the switchTab function
tabSwitchInterval = setInterval(switchTab, interval);

// Pause tab switching on mouseenter
$("#main-services-tabs").on("mouseenter", function () {
  clearInterval(tabSwitchInterval); // Clear the interval
});

// Resume tab switching on mouseleave
$("#main-services-tabs").on("mouseleave", function () {
  tabSwitchInterval = setInterval(switchTab, interval); // Restart the interval
});

$(document).ready(function () {
  var current_fs, next_fs, previous_fs; //fieldsets
  var opacity;
  var current = 1;
  var steps = $("fieldset").length;

  setProgressBar(current);

  $(".next").click(function () {
    current_fs = $(this).parent();
    next_fs = $(this).parent().next();

    // Add Class Active
    $("#progressbar li").eq($("fieldset").index(next_fs)).addClass("active");

    // Show the next fieldset
    next_fs.show();
    // Hide the current fieldset with style
    current_fs.animate(
      { opacity: 0 },
      {
        step: function (now) {
          // For making fieldset appear animation
          opacity = 1 - now;

          current_fs.css({
            display: "none",
            position: "relative",
          });
          next_fs.css({ opacity: opacity });
        },
        duration: 500,
      }
    );
    setProgressBar(++current);
  });

  $(".previous").click(function () {
    current_fs = $(this).parent();
    previous_fs = $(this).parent().prev();

    // Remove class active
    $("#progressbar li")
      .eq($("fieldset").index(current_fs))
      .removeClass("active");

    // Show the previous fieldset
    previous_fs.show();

    // Hide the current fieldset with style
    current_fs.animate(
      { opacity: 0 },
      {
        step: function (now) {
          // For making fieldset appear animation
          opacity = 1 - now;

          current_fs.css({
            display: "none",
            position: "relative",
          });
          previous_fs.css({ opacity: opacity });
        },
        duration: 500,
      }
    );
    setProgressBar(--current);
  });

  $(".skip").click(function () {
    // Skip to the next step
    current_fs = $(this).parent();
    next_fs = $(this).parent().next();

    // Add Class Active
    $("#progressbar li").eq($("fieldset").index(next_fs)).addClass("active");

    // Show the next fieldset
    next_fs.show();
    // Hide the current fieldset with style
    current_fs.animate(
      { opacity: 0 },
      {
        step: function (now) {
          // For making fieldset appear animation
          opacity = 1 - now;

          current_fs.css({
            display: "none",
            position: "relative",
          });
          next_fs.css({ opacity: opacity });
        },
        duration: 500,
      }
    );
    setProgressBar(++current);
  });

  function setProgressBar(curStep) {
    var percent = parseFloat((100 / steps) * curStep);
    percent = percent.toFixed();
    $(".progress-bar").css("width", percent + "%");
  }

  $(".submit").click(function () {
    return false;
  });
});

const skill = document.getElementById("skill");
const add = document.getElementById("add");
const submit = document.getElementById("submit");
const output = document.getElementById("output");
let skills = [];

const generateTagHTML = (skills) => {
  return `
            <ul id="skill-sets" class="skill-sets">
                ${skills
                  .map(
                    (skill) =>
                      `<li class="chip js-chip">${skill} <span data-skill=${skill} class="cross" aria-label="Remove ${skill} skill from your skill set">&times;</span></li>`
                  )
                  .join("")}
            </ul>
        `;
};

// Pass a tag to delete and update original array
const deleteTag = (tag) => (skills = skills.filter((skill) => skill !== tag));

// Toggle disable state of 'Add' button
const toggleButtonState = (btn, hasDisable) => (btn.disabled = hasDisable);

// add.addEventListener("click", e => {
//   e.preventDefault();
//   if (!skill.value.trim()) return;
//   skills.push(skill.value);
//   if (skills.length >= 10) toggleButtonState(add, true); // Prevent entering > 10 tags (Skills)
//   output.innerHTML = generateTagHTML(skills);
//   dragon(document.querySelector(".skill-sets")); // Elements are in the DOM, Make them sortable
//   skill.value = "";
// });

// On 'Continue' click, Print tags as array
// submit.addEventListener("click", e => {
//   e.preventDefault();
//   if (skills.length > 0) {
//   }
// });

// Delete tag
// output.addEventListener("click", e => {
//   if (e.target.classList.value === "cross") {
//     const updatedSkills = deleteTag(e.target.dataset.skill); // Get updated array
//     if (skills.length >= 10) {
//       toggleButtonState(add, true);
//     } else {
//       toggleButtonState(add, false);
//     }
//     output.innerHTML = generateTagHTML(updatedSkills); // Update UI with updated array
//     dragon(document.querySelector(".skill-sets"));
//   }
// });

// Drag and drop function - I call it Dragon and inspired from https://github.com/RubaXa/Sortable
function dragon(parentEl) {
  // Making all siblings draggable
  [...parentEl.children].forEach((itemEl) => (itemEl.draggable = true));

  parentEl.addEventListener("dragstart", function (e) {
    dragEl = e.target; // Remembering an element that will be moved

    e.dataTransfer.effectAllowed = "move";

    parentEl.addEventListener("dragover", _dragover, false);
    parentEl.addEventListener("dragend", _dragend, false);

    dragEl.classList.add("chip--ghost");
  });

  // Function responsible for sorting
  function _dragover(e) {
    e.preventDefault();
    e.dataTransfer.dropEffect = "move";
    const target = e.target;
    if (target && target !== dragEl && target.classList.contains("js-chip")) {
      // Sorting
      var rect = target.getBoundingClientRect();
      var next = (e.clientY - rect.top) / (rect.bottom - rect.top) > 0.5;
      parentEl.insertBefore(dragEl, (next && target.nextSibling) || target);
      animation(rect, target, 150);
    }
  }

  // End of sorting
  function _dragend(e) {
    e.preventDefault();
    parentEl.removeEventListener("dragover", _dragover, false);
    parentEl.removeEventListener("dragend", _dragend, false);
    dragEl.classList.remove("chip--ghost");
  }

  function animation(prevRect, target, ms) {
    var currentRect = target.getBoundingClientRect();

    _css(target, "transition", "transform " + ms + "ms");
    _css(
      target,
      "transform",
      "translate3d(" +
        (prevRect.left - currentRect.left) +
        "px," +
        (prevRect.top - currentRect.top) +
        "px,0)"
    );

    clearTimeout(target.animated);
    target.animated = setTimeout(function () {
      _css(target, "transition", "");
      _css(target, "transform", "");
      target.animated = false;
    }, ms);
  }

  // CSS helper function
  function _css(el, prop, val) {
    var style = el && el.style;

    if (style) {
      if (val === void 0) {
        if (document.defaultView && document.defaultView.getComputedStyle) {
          val = document.defaultView.getComputedStyle(el, "");
        } else if (el.currentStyle) {
          val = el.currentStyle;
        }

        return prop === void 0 ? val : val[prop];
      } else {
        if (!(prop in style)) {
          prop = "-webkit-" + prop;
        }

        style[prop] = val + (typeof val === "string" ? "" : "px");
      }
    }
  }
}

// Example starter JavaScript for disabling form submissions if there are invalid fields
(() => {
  "use strict";

  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  const forms = document.querySelectorAll(".needs-validation");

  // Loop over them and prevent submission
  Array.from(forms).forEach((form) => {
    form.addEventListener(
      "submit",
      (event) => {
        if (!form.checkValidity()) {
          event.preventDefault();
          event.stopPropagation();
        }

        form.classList.add("was-validated");
      },
      false
    );
  });
})();
