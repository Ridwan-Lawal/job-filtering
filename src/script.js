import data from "./data.json" assert { type: "json" };
import { renderProfile, usersProfile } from "./renderData.js";

// Profile rendering to the dom from renderData.js
renderProfile(data);

const skillsSelectedSection = document.querySelector(".skills__selected");
const selectionSection = document.querySelector(".selection__section");
const btnClear = document.querySelector(".btn-clear");
const selectedSkill = [];

// rendering selected skill
const renderSelectedSkill = function (arr, event) {
  let html;
  arr.forEach((skill) => {
    html = `
        <section class="flex skill__parent rounded-md w-fit overflow-hidden">
        <button class="skill__select">${event.target.textContent}</button>
        <div class="bg-desaturatedDarkCyan w-fit pt-2.5 px-2 remove__skill-btn cursor-pointer">
          <img src="./images/icon-remove.svg" alt="" />
        </div>
      </section>
        `;
  });

  selectionSection.classList.remove("hidden");
  skillsSelectedSection.insertAdjacentHTML("beforeend", html);
};

// this section is for filtering the profiles based on the skill selected
// created this array so for each element in the dom I removed it will push in here also
let removedEl = [];

usersProfile.addEventListener("click", (e) => {
  if (e.target.classList.contains("skill")) {
    // guard clauses to prevent from adding multiple text content
    if (selectedSkill.includes(e.target.textContent)) return;

    // otherwise push the content to the selected skill array
    selectedSkill.push(e.target.textContent);
    // display the selected skill on the dashboard
    selectionSection.classList.remove("hidden");
    renderSelectedSkill(selectedSkill, e);

    // convert the userProfiles node list to an Array to carry out array operations
    const usersNodeToArr = Array.from(usersProfile.children);
    usersNodeToArr.forEach((el) => {
      // for each click remove the node in which the click target text-context isn't in its ID attributes
      if (!el.getAttribute("id").includes(e.target.textContent)) {
        // push the node into the array on line 32
        removedEl.push(el);
        // add the slide-out class created in the head tag in the html for animation effects
        el.classList.add("slide-out");
        // then hold and listen for the animation effects to end then remove the node(elements)
        el.addEventListener("animationend", function () {
          el.remove();
        });
      }
    });
  }
});

// // this section is for restoring the filtered, removed profile,
// // when certain skills is canceled from the selected skills
// skillsSelectedSection.addEventListener("click", (e) => {
//   if (e.target.closest(".remove__skill-btn")) {
//     // The Skill-type text content associated with each cancel button
//     const eachSkillContent =
//       e.target.closest(".skill__parent").firstElementChild.textContent;
//     console.log(eachSkillContent);

//     removedEl.forEach((el) => {
//       if (
//         !el.getAttribute("id").includes(eachSkillContent) &&
//         el.getAttribute("id").includes()
//       ) {
//         // Animations when removed profiles are restored
//         el.classList.remove("slide-out");
//         el.classList.add("box", "slide-in-element");
//         /* converted the removed element from the removedEl array
//         to an outerHtml in order to render it dynamically to the DOM*/
//         const elementAdd = el.outerHTML;
//         console.log(elementAdd);

//         // render restore  remove Element from the dom
//         usersProfile.insertAdjacentHTML("beforeend", elementAdd);
//       }

//       // if the skill selected was cancelled delete it from the
//       // SelectedSkill array from line 11
//       if (
//         selectedSkill.includes(eachSkillContent) &&
//         selectedSkill.length > 1
//       ) {
//         const indexSelected = selectedSkill.indexOf(eachSkillContent);
//         selectedSkill.splice(indexSelected, 1);

//         const checkEvery = selectedSkill.every((skill) =>
//           el.getAttribute("id").includes(skill)
//         );
//         console.log(checkEvery);
//         console.log(selectedSkill);
//       }

//       // if the length of the selectedSkill array is equal to !
//       // when clicked return all elements back to the page
//       if (selectedSkill.length === 0) {
//         usersProfile.innerHTML = "";
//         renderProfile(data);
//       }
//     });

//     e.target.closest(".skill__parent").remove();
//   }
// });

// when clear button is clicked clear skill selected
btnClear.addEventListener("click", (e) => {
  skillsSelectedSection.innerHTML = "";
  selectionSection.classList.add("hidden");
  usersProfile.innerHTML = "";
  renderProfile(data);
});
