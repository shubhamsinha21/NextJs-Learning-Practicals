1. What is Next Js
The ReactJs Framework for the web applications
It is based on react js library and has many extra features such as routing, middleware, etc
It is used to make single page app

2. Why ahould we use Next js
Make big project easy
It has inbuilt features like - server side rendering (SSR) 
SSR heps in SEO
More features include- Routing, CSS support, nuilt in optimization features

3. Speciality - Production grade react framework

Series start -: 
##Chapter-1 :- Install node and next js + configuration of next js setup + run project + intrvw que  ##############

##Chapter-2 :- Freshcode in page.js + make component + reuse it + data passing + intrvw que #############

Q) export default - we can import that componentt by default. 
No need to do like this => import {home} from "home/jome"
we can do like this => import home from home/jome;

Q) What is component - piece of code which is re-usable. they are building blocks. Types are class based & functional based

Q) Difference between function & component - codes written in a function need not return output but in case of component, it will return output as we have JSX consists of both js as well as html. And first letter of component will be capital.

Q) Is react code work in next - yes, because next is a framework or react

Q) how to pass data in compoennt - via props

Q) Js vs Ts - Automatic type conversion in js but in ts we have to mention. And browser do not understsand ts, first code is converted from ts->js. Then it reads the code.

Q) Server side rendering vs client side rendering 

##Chapter-3 :-Events + make function and call + call component as function + make state and update + intrvw que ###########

Q) SSR - when data comes from server, rendering happens whereas in CSR,code executes in our browser.

So, in case to use events .. we have to say that we are use csr by writing - 'use client'

Q) States - are container in react which can be used only inside component. NOT accessible outside. We can take state data outside component as a props.

Q) Variable vs state - variable does not re-renders/ executes( updates data) component but states do so.

Q) {InnerComponent()} vs <InnerComponent/>

##Chapter-4  Files & folders ########

Q) nextjs.config.js vs jsconfig.js - it has configuration of nextjs framerwork and jsconfig has config of js prog lang.

Q) layout.js - entry point / entry file 

Q) dependency vs devdependency - dependency are used both in development as well as production mode. Whereas devdependency used only in debelopment mode.

##Chapter-5 Components in Next js #########

BY DEFAULT, EVERY COMPONENT IN NEXT JS IS SERVER SIDE COMPONENT, WE CAN MAKE IT USING 'Use client'

Q) components based on rendering - server & client
Q) client vs server
Q) can we use both ? > yes, ui reld on client side && data fetch and server side on server
Q) brower api - client side

##Chapter-6 Routing - #########

Q) pattern for creating page in next js - src/folder_name/page.js (localhost:3000/login/page.js)

Q) do we need to install any package for routing in next js - no , we have automatic routuing in next js .. which is based on file system routing. 


