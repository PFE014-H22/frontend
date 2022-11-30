# Frontend

## How to use DOPAMine

When navigating to our website, you should land on the home page of the application, where you will find a search bar, as well as buttons on the top right of your screen.

In order to perform a query, you need to : 

1. Type your query in the search box.
2. Refine your search by clicking on the "Technology" dropdown menu and selecting a specific technology.
3. Press ENTER on your keyboard or click on the search button to make your query. You will be sent to the results page.
4. Navigate the list of results to find the parameter that will fix your issue.
5. You may click on the arrow button in the top left corner of each result to see more details.

## How to navigate the website

In order to navigate to the different pages, simply click on one of the buttons on the top right of your screen.

**Home** will take you to the home page of the website. You may also click on the **DOPAMine** logo to navigate to the home page.

**About** will take you to the information page of the website, where you can find information about the website, the resources used, as well as the developers who worked on the project.

**Help** will take you to the help page of the website, where you can find the steps to make a query.

## Adding new components

The layout for the frontend is separated in several modules, as to functionally organize the code. 

To add new components to the website, you will need to do so in the `frontend > src > components` folder. 

The logic of the component as well as the HTML code should be added to a .tsx file. 

If styles are needed, then a .module.scss file should be created, which will contain all the CSS for that component.

## Adding new pages

To add new pages to the website, you will need to do so in the `frontend > src > pages` folder. 

Since Next.js allows file-based routing, if you create a page called example-page.tsx, you will be able to navigate to that page simply by adding `/example-page` to the project's URL. 

Alternatively, you could add a link to that page in `frontend > src > components > layout > header`, which will add a button to the top right corner of the screen.

## Testing the frontend

To test the frontend without having to start Docker and running the entire application, you may want to run the command: 

```bash
npm run start:dev
```

> **Note:** You may want to use mocks, since you won't be making queries to the StackOverflow API. 

Notably, in `frontend > src > pages > search.tsx`, you may want to change

```
const { data, isLoading } = trpc.search.stackoverflow.useQuery({
	searchTerm: q as string,
	technology: t as string,
});
```

to

```
const { data, isLoading } = trpc.search.mockStackoverflow.useQuery({
	searchTerm: q as string,
	technology: t as string,
});
```

Also, in `frontend > src > pages > index.tsx`, you may want to change

```
const { data } = trpc.technologies.dropdown.useQuery();
```

to 

```
const { data } = trpc.technologies.mockDropdown.useQuery();
```

## Using Storybook

To facilitate the creation of your component, and to avoid having to run the entire application to see you changes, you may want to create a .stories.tsx file for your components, which allows you to see an overview of all the components.

To run the Storybook, simply run the command: 

```bash
npm run storybook
```
