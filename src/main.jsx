import React from 'react';
import ReactDOM from 'react-dom/client';
import Card from './components/Card';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Card 
    first="Orwa" last="Diraneyya" twitter="@ODiraneyya" notes="A cool guy 😎"
    avatar="https://pbs.twimg.com/profile_images/1578722090194173953/lkDUvNAP_400x400.jpg" />
  </React.StrictMode>,
)
