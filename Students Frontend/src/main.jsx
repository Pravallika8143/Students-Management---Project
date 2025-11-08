import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux';
import App from "./App.jsx"
import { store } from './app/store.js';
import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
import Students from './features/students/StudentsTable.jsx';
import AddStudent from './features/students/AddStudent.jsx';
import UpdateStudent from './features/students/UpdateStudent.jsx';

  const router = createBrowserRouter([
    {
          path: "/",
          element:<App></App>,
          children:[
            {
            path:"/Students",
            element:<Students></Students>
         },
         {
            path:"/addStudent",
            element:<AddStudent></AddStudent>
         },
         {
            path:"/updateStudent/:id",
            element:<UpdateStudent></UpdateStudent>
         },
      ]
    },  
    
]);
  createRoot(document.getElementById('root')).render(
    <Provider store={store}>
       <RouterProvider router={router}>
       </RouterProvider>
    </Provider>
     
 )