import React from 'react';
import { AdminPanel } from './AdminPanel';
import { LoginForm } from './LoginForm';
let isLoggedIn = false; // This would typically come from your app's state or context

let content;
if (isLoggedIn) {
  content = <AdminPanel />;
} else {
  content = <LoginForm />;
}
export function HomePage(){
    return (
  <div>
    {content}
  </div>
);
}