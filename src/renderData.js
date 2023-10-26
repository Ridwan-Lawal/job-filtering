const usersProfile = document.querySelector(".user__profiles");

export const renderProfile = function (arr) {
  arr.forEach((profile) => {
    const html = `
      <!-- profile -->
      <div
        class="border-l-8 md:flex md:flex-row shadow-lg md:items-center md:justify-between md:gap-8
           border-desaturatedDarkCyan rounded-md pb-6 md:pt-6 px-6 bg-white duration-800"
           id="${profile.level} ${profile.role} ${profile.languages.join(
      " "
    )} ${profile.tools.join(" ")} "
      >
        <!-- company logo -->
        <div class="md:flex items-center md:w-[60%] gap-6">
          <div>
            <img
              src="${profile?.logo}"
              alt=""
              class="w-[58px] relative md:static -top-5 md:w-[80px]"
            />
          </div>
  
          <!-- company text -->
  
          <div>
            <section class="flex gap-7 -mt-1 items-center">
              <p class="text-desaturatedDarkCyan font-bold">${
                profile.company
              }</p>
              <div class="flex gap-3">
                <button
                  class="bg-desaturatedDarkCyan ${
                    profile.new ? "" : "hidden"
                  } px-2.5 font-medium text-sm pt-1 uppercase text-white rounded-2xl"
                >
                  ${profile.new ? "New" : ""}
                </button>
                <button
                  class="bg-veryDarkGrayishCyan ${
                    profile.featured ? "block" : "hidden"
                  } px-2.5 font-medium pt-1 text-sm uppercase text-white rounded-2xl"
                >
                  ${profile.featured ? "Featured" : ""}
                </button>
              </div>
            </section>
  
            <!-- company position -->
            <div>
              <p
                class="font-bold mt-3 md:mt-2 md:text-lg text-veryDarkGrayishCyan"
              >
                ${profile?.position ?? ""}
              </p>
  
              <!-- other details -->
              <div class="mt-3 md:mt-1">
                <div class="text-darkGrayishCyan flex gap-4 items-center">
                  <p>${profile?.postedAt ?? ""}</p>
                  <p
                    class="dot w-fit p-[2px] rounded full bg-darkGrayishCyan h-[3px]"
                  ></p>
                  <p>${profile?.contract ?? ""}</p>
                  <p
                    class="dot w-fit p-[2px] rounded full bg-darkGrayishCyan h-[3px]"
                  ></p>
                  <p>${profile?.location ?? ""}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
  
        <!-- border -->
        <div class="border-t border-gray-300 md:hidden mt-4"></div>
  
        <!-- skills -->
        <div class="flex gap-5 flex-wrap mt-4 md:w-[60%]">
          <button class="skill">${profile?.role ?? ""}</button>
          <button class="skill">${profile?.level ?? ""}</button>
          <div class='flex gap-5 flex-wrap'>
          ${profile.languages
            .map((language) => `<button class="skill">${language}</button>`)
            .join("")}
          </div>
          <div class='flex gap-5 flex-wrap'>
          ${profile.tools
            .map((tool) => `<button class="skill">${tool}</button>`)
            .join("")}
          </div>
          
        </div>
      </div>
    </div>
          `;

    usersProfile.insertAdjacentHTML("beforeend", html);
  });
};

export { usersProfile };
