# Zodiac Wiki

This wiki / documentation site is built using [Nextra](https://github.com/shuding/nextra). To contribute, fork this repo, make your changes and open a PR.

### Running locally

Using a CLI like terminal or iTerm, clone this repo, navigate then run `yarn`, which will install the required dependencies.

Then run `yarn dev` to run a local instance, which will be viewable at `http://localhost:3000`

### Tips

- Each page has front matter, which allows you to set some values for each page. This project supports setting `title` and `description`, which will affect how the page is represented in the sidebar and how social previews will describe each page. To set the front matter, add this to the top of each page (including the dashes; neither field is required):
  ```
  ---
  title: "Your desired page title"
  description: "Your desired page description"
  ---
  ```
