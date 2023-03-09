# Frontend for Contact-Card Application

This is a _ReactJS_ application that is created/scaffolded using [_Vite_](https://vitejs.dev/) (An alternative to _Create React App_ or [_CRA_](https://create-react-app.dev/)).

The application is deployed on Vercel, with the app being accessible at the following URL:
https://contactcard-frontend.vercel.app/ 

The frontend does not have the information for the contact card in the code, rather, it uses a [backend repo](https://github.com/diraneyya/contactcard-backend) and a live [backend endpoint](https://contactcard-backend.onrender.com/api) to fetch these fields dynamically each time the app is loaded in the browser.

The JSON containing the information is fetched from the backend and is used to display a simple contact card:
![](./docs/frontend.png)