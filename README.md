# 🔭 Parallax page - zoom
As you scroll through the page, the sections are fixed, <br />
but the background image zooms in on the description, giving you a step-by-step feel for the background layers.

### Things to remember
```sh
imageAll.forEach((image, index) => {
    image.style.transform = `perspective(400px) translate3d(0, 0, ${scrollNumber / (2 * (totalNumber - index))}px)`;
  })
```
Give each background image a perspective style to create a sense of perspective.
