import React from "react";

const Blogs = () => {
  return (
    <div className='h-screen mx-10 lg:mx-40 my-10'>
      <div
        tabIndex={0}
        className='collapse collapse-arrow my-3 border border-base-300 bg-base-300 rounded-box'>
        <div className='collapse-title text-xl font-medium'>
          What are the different ways to manage a state in a React application?
        </div>
        <div className='collapse-content'>
          <p className='font-semibold'>
            The Four Kinds of React State to Manage
          </p>
          <ul>
            <li>1. Local state</li>
            <li>2. Global state</li>
            <li>3. Server state</li>
            <li>4. URL state</li>
          </ul>
        </div>
      </div>
      <div
        tabIndex={0}
        className='collapse collapse-arrow my-3 border border-base-300 bg-base-300 rounded-box'>
        <div className='collapse-title text-xl font-medium'>
          How does prototypical inheritance work?
        </div>
        <div className='collapse-content'>
          <p>
            The Prototypal Inheritance is a feature in javascript used to add
            methods and properties in objects. It is a method by which an object
            can inherit the properties and methods of another object.
            Traditionally, in order to get and set the [[Prototype]] of an
            object, we use Object. getPrototypeOf and Object.
          </p>
        </div>
      </div>
      <div
        tabIndex={0}
        className='collapse collapse-arrow my-3 border border-base-300 bg-base-300 rounded-box'>
        <div className='collapse-title text-xl font-medium'>
          What is a unit test? Why should we write unit tests?
        </div>
        <div className='collapse-content'>
          <p>
            The main objective of unit testing is to isolate written code to
            test and determine if it works as intended. Unit testing is an
            important step in the development process, because if done
            correctly, it can help detect early flaws in code which may be more
            difficult to find in later testing stages.
          </p>
        </div>
      </div>
      <div
        tabIndex={0}
        className='collapse collapse-arrow my-3 border border-base-300 bg-base-300 rounded-box'>
        <div className='collapse-title text-xl font-medium'>
          React vs. Angular vs. Vue?
        </div>
        <div className='collapse-content'>
          <p className='my-3'>
            <strong>Angular</strong>, developed by Google, was first released in
            2010, making it the oldest of the lot. It is a TypeScript-based
            JavaScript framework. A substantial shift occurred in 2016 on the
            release of Angular 2 (and the dropping of the “JS” from the original
            name – AngularJS). Angular 2+ is known as just Angular. Although
            AngularJS (version 1) still gets updates, we will focus the
            discussion on Angular.
          </p>
          <p className='my-3'>
            <strong>Vue</strong>, also known as Vue.js, is the youngest member
            of the group. It was developed by ex-Google employee Evan You in
            2014. Over the last several years, Vue has seen a substantial shift
            in popularity, even though it doesn’t have the backing of a large
            company.
          </p>
          <p className='my-3'>
            <strong>React</strong>, developed by Facebook, was initially
            released in 2013. Facebook uses React extensively in their products
            (Facebook, Instagram, and WhatsApp). Similar to Vue, the React
            developers also announce their newest version on the blog section of
            the React website.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
