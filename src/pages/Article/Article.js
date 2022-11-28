import React from 'react';

const Article = () => {
    return (
        <div className='lg:w-1/2 mx-auto'>
            <div className='border border-red-500 p-5 rounded-lg mb-10'>
                <h2 className="text-3xl font-semibold mb-5">What are the different ways to manage a state in a React application?</h2>
                <p>In modern React, we build our applications with functional components. Components are themselves JavaScript functions, independent and reusable bits of code. <br /><br />
                    In order to implement state in our components, React provides us with a hook called useState. Let's see how it works with the following example. <br /> <br />

                    We'll use the classic counter example, in which we're displaying a number and we have several buttons to increase, decrease, or reset that number.
                </p>
            </div>
            <div className='border border-red-500 p-5 rounded-lg mb-10'>
                <h2 className="text-3xl font-semibold mb-5">How does prototypical inheritance work?</h2>
                <p>In programming, we often want to take something and extend it <br /><br />
                    For instance, we have a user object with its properties and methods, and want to make admin and guest as slightly modified variants of it. Wed like to reuse what we have in user, not copy/reimplement its methods, just build a new object on top of it.
                </p>
            </div>
            <div className='border border-red-500 p-5 rounded-lg mb-10'>
                <h2 className="text-3xl font-semibold mb-5">What is a unit test? Why should we write unit tests?</h2>
                <p>Unit testing is a software development process in which the smallest testable parts of an application, called units, are individually and independently scrutinized for proper operation. This testing methodology is done during the development process by the software developers and sometimes QA staff.  The main objective of unit testing is to isolate written code to test and determine if it works as intended. <br /><br />
                    Unit testing is an important step in the development process, because if done correctly, it can help detect early flaws in code which may be more difficult to find in later testing stages.
                </p>
            </div>
            <div className='border border-red-500 p-5 rounded-lg mb-10'>
                <h2 className="text-3xl font-semibold mb-5">React vs. Angular vs. Vue?</h2>
                <p>There are three frameworks for building web applications that every frontend developer has heard about: React, Vue.js, and Angular. <br /><br />
                    React is a UI library, Angular is a fully-fledged front-end framework, while Vue.js is a progressive framework. <br /><br />

                    They can be used almost interchangeably to build front-end applications, but theyre not 100 percent the same, so it makes sense to compare them and understand their differences. <br /><br />

                    Each framework is component-based and allows the rapid creation of UI features.

                    However, they all have a different structure and architecture — so first, well look into their architectural differences to understand the philosophy behind them. <br /><br />

                    React doesnt enforce a specific project structure, and as you can see from the official “Hello World” example below, you can start using React with just a few lines of code <br /> <br />

                    The Vue.js core library focuses on the View layer only. Its called a progressive framework because you can extend its functionality with official and third-party packages, such as Vue Router or Vuex, to turn it into an actual framework. <br /><br />

                    In this article, Im discussing Angular 2, and not the first version of the framework which is now known as AngularJS.
                </p>
            </div>
        </div>
    );
};

export default Article;