var arr = [
  {
    dp: "https://i.pinimg.com/474x/7b/5a/33/7b5a33e314cc8f4bafca7d038ae0ebde.jpg",
    story:
      "https://i.pinimg.com/474x/34/d7/02/34d702d1555b64310bd81e046fe2cd78.jpg",
  },
  {
    dp: "https://i.pinimg.com/474x/55/c5/33/55c5339515b350efbc533ac5bf1a1020.jpg",
    story:
      "https://i.pinimg.com/474x/32/0d/cf/320dcf0959f0861833a6964284115a35.jpg",
  },
  {
    dp: "https://i.pinimg.com/474x/6d/50/9d/6d509d329b23502e4f4579cbad5f3d7f.jpg",
    story:
      "https://i.pinimg.com/474x/6b/aa/03/6baa03017c41b8a66456e14360d0df2c.jpg",
  },
  {
    dp: "https://i.pinimg.com/474x/ba/ad/48/baad48c45c58140e9e91aae489af5766.jpg",
    story:
      "https://i.pinimg.com/474x/7b/d4/79/7bd4794e9e9819b0fe6208e9be46f4a5.jpg",
  },
  {
    dp: "https://i.pinimg.com/474x/25/6e/d7/256ed705eddbe2e606e0d3200cd96d65.jpg",
    story:
      "https://i.pinimg.com/474x/db/dd/39/dbdd3937c772acdec80918b4e201da38.jpg",
  },
  {
    dp: "https://i.pinimg.com/474x/4a/e2/3f/4ae23fff549023ae525260cca88a7cb2.jpg",
    story:
      "https://i.pinimg.com/474x/6d/6a/f4/6d6af4f1e079b1bbe5f9f98077647c3e.jpg",
  },
  {
    dp: "https://i.pinimg.com/474x/0e/fd/3f/0efd3f90928d96d2d799b185efb7c0e8.jpg",
    story:
      "https://i.pinimg.com/474x/72/67/bb/7267bbb1212a72b6938902024cdfce5a.jpg",
  },
];
var stories = document.querySelector("#stories");
var clutter = "";
arr.forEach((elem, id) => {
  clutter += `<div class="story">
          <img
            id= ${id}
            src="${elem.dp}"
            alt=""
          />
        </div>`;
});

stories.innerHTML = clutter;

stories.addEventListener("click", (dets) => {
  var fullScreen = document.querySelector(".full-screen-story");
  fullScreen.style.display = "block";
  fullScreen.style.backgroundImage = `url(${arr[dets.target.id].story})`;
  setTimeout(() => {
    fullScreen.style.display = "none";
  }, 3000);
});
