import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import React, { useState } from 'react';
import { Button } from 'react-bootstrap';

const BlogsPage = () => {
    const[loader, setLoader] =useState();
    const downloadPDF =() =>{
        const capture = document.querySelector('.actual-receipt');
        setLoader(true);
        html2canvas(capture).then((canvas)=>{
            const imgData = canvas.toDataURL('img/png');
            const doc = new jsPDF('p', 'mm', 'a4');
            const componentWidth = doc.internal.pageSize.getWidth();
            const componentHeight = doc.internal.pageSize.getHeight();
            doc.addImage(imgData, 'PNG', 0, 0, componentWidth, componentHeight);
            setLoader(false);
            doc.save('receipt.pdf');

        })
    }

    return (
        <div>
              <h2 className='text-center'>Question and Answer:</h2>
            <div>
                <h3>1.  differences between uncontrolled and controlled components</h3>
                <p> Ans: An uncontrolled component manages its own state internally, and the data is stored in the component's DOM. In other words, the component doesn't require a separate data management mechanism or external state management libraries like Redux. The data is accessed directly from the DOM through the use of a ref. A controlled component, on the other hand, gets its data and updates its state via properties passed down from a parent component. The parent component is responsible for managing the state of the controlled component. </p>
                        
                
            </div>
            <div>
                <h3>2.How to validate React props using PropTypes</h3>
                <p>Ans: To validate React props using PropTypes, you can use the PropTypes library that comes with React. PropTypes is a typechecking library that helps you validate the data types of props passed to your components. You can use PropTypes to ensure that the props passed to your components are of the expected data type and format.</p>         
            </div>
            <div>
                <h3>3.difference between nodejs and express js.</h3>
                <ul>Ans: Node.js is a server-side runtime environment that is built on top of Chrome's V8 JavaScript engine. It allows developers to build server-side applications using JavaScript. Node.js provides a set of built-in modules that enable developers to work with file systems, networking, and other server-side tasks.

                    Express.js, on the other hand, is a popular web application framework that is built on top of Node.js. It provides a set of features and tools that make it easier for developers to build web applications using Node.js. Express.js provides a set of middleware functions that enable developers to add functionality to their applications, such as routing, handling requests, and working with databases.

                
                    
                </ul>               
                
            </div>
            <div>
                <h3>4. What is a custom hook, and why will you create a custom hook?</h3>
                <p >Ans: A custom hook is a JavaScript function that starts with the prefix "use" and can contain stateful logic, such as managing the state of a component or making API requests. Custom hooks allow developers to encapsulate reusable logic in a single place and reuse it across multiple components in a React application.</p>


            </div>
            <Button className='receipt-modal-download-button'
            onClick={downloadPDF}
            disabled={!(loader===false)}>
            {loader?(
                  <span>Downloading</span>
                ):(
                  <span>Download</span>
                )}
             

            </Button>
        </div>
    );
};

export default BlogsPage;