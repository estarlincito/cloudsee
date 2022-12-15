const articleID = document.getElementById("article");

const getData = async () => {
  const response = await fetch("../data.json");
  const data = await response.json();
  return data;
};

const app = async () => {
  const data = await getData();
  articleID.innerHTML += data.article.end;
};

app();

// alert('')
