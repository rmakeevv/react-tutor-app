import React from 'react';
import ReactDOM from 'react-dom/client';
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import {Root} from "./routes/Root";
import './index.css'
import {Main} from "./routes/Main";
import {ErrorPage} from "./ErrorPage";
import {Testing} from "./routes/Testing";
import {sendTest} from "./api/sendTest";
import  {getTest} from "./api/getTest";
import {Appoint} from "./routes/Appoint";
import {Tutor} from "./routes/Tutor";
import {Appoints} from "./routes/Appoints";
import {createUserAppoint} from "./api/createUserAppoint";
import {getAllAppoints} from "./api/getAllAppoints";
import {deleteAllAppoints} from "./api/deleteAllAppoints";
import {authTutor} from "./api/authTutor";

const router = createBrowserRouter([
    {
        path: "/",
        element:<Root/>,
        errorElement: <ErrorPage/>,
        children: [
            {index: true, element:<Main/>},
            {
                path: '/test',
                element:<Testing/>,
                action: sendTest,
                loader: getTest
            },
            {
                path: '/appoint',
                element: <Appoint/>,
                action: createUserAppoint
            },
            {
                path: '/tutor',
                element: <Tutor/>,
                action: authTutor
            },
            {
                path: '/appoints',
                element: <Appoints/>,
                loader: getAllAppoints,
                action: deleteAllAppoints
            }
        ]
    }
])

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
    <RouterProvider router={router}/>
);