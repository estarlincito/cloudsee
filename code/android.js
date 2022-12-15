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

  for (let i = 0; i < data.article.steps.length; i++) {
    let step = data.article.steps[i].step;

    if (step.includes("DEVICENAME")) {
      step = step.replace("DEVICENAME", deviceN);
    }
    if (step.includes("STORENAME")) {
      step = step.replace("STORENAME", storeN);
    }
    if (step.includes("URLVALUE")) {
      step = step.replace("URLVALUE", urlV);
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
  "Android",
  "Play Store",
  "https://play.google.com/store/apps/details?id=com.cloudsee.pro&hl=en&gl=US"
);
