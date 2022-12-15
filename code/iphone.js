const articleID = document.getElementById("article");

const getData = async () => {
  const response = await fetch("../data.json");
  const data = await response.json();
  return data;
};

const app = async (deviceN, storeN, urlV) => {
  const data = await getData();

  const title = data.article.title.replace("DEVICENAME", deviceN);
  const desp = data.article.desp.replace("DEVICENAME", deviceN);

  articleID.innerHTML += `
    <h2 class="article__subtitle">
      <a href="">${title}</a> 
    </h2>
    <p class="article__desp">
      ${desp}
    </p>`;

  const newSteps = data.article.steps;
  newSteps.splice(3, 1);

  for (let i = 0; i < newSteps.length; i++) {
    let step = newSteps[i].step;

    if (step.includes("DEVICENAME")) {
      step = step.replace("DEVICENAME", deviceN);
    }
    if (step.includes("STORENAME")) {
      step = step.replace("STORENAME", storeN);
    }
    if (step.includes("URLVALUE")) {
      step = step.replace("URLVALUE", urlV);
    }
    if (step.includes("Hacemos clic en <b>Start CloudSEE Int' Pro</b>")) {
      step = "estar";
    }

    articleID.innerHTML += `
      <!-- step ${i + 1} -->
        <div class="article__step">
          <p class="article__step_text">
              <span class="article__step_num">${i + 1}.</span>
              ${step}
          </p>
  
          <img
              class="article__step_img"
              src="../img/${i + 1}step${deviceN}.png"
              alt="${i + 1}Stepv${deviceN} Screenshot"
            />
        </div>`;
  }

  articleID.innerHTML += data.article.end;
};

app(
  "iPhone",
  "App Store",
  "https://apps.apple.com/us/app/cloudsee-intl-pro/id1475438405"
);
