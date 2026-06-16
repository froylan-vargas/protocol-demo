# Hosting This Demo On GitHub Pages

This project is a static site, so it can be hosted directly with GitHub Pages.

## Files To Include

Make sure these files are committed to the repository:

- `index.html`
- `styles.css`
- `app.js`

The `images/` folder is not required for the hosted demo unless you add image references back into the app.

## Steps

1. Create a new GitHub repository.
2. Upload or commit the project files to the repository root.
3. In GitHub, open the repository settings.
4. Go to `Pages`.
5. Under `Build and deployment`, choose:
   - Source: `Deploy from a branch`
   - Branch: `main`
   - Folder: `/root`
6. Click `Save`.

GitHub will publish the site after a short build. The final URL will look like:

```text
https://USERNAME.github.io/REPOSITORY_NAME/
```

## Local Preview

You can also open `index.html` directly in a browser to preview the demo locally.
