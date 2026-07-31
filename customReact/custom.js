function customRender (reactElement , container){
    // const element = document.createElement(reactElement.type)
    // element.innerHTML = reactElement.children
    // element.setAttribute('href', reactElement.props.href)
    // element.setAttribute("target", reactElement.props.target)
    
    // console.log(element)
    // container.appendChild(element)


    const element = document.createElement(reactElement.type)
    console.log(element)
    element.innerHTML  = reactElement.children
    for (const prop in reactElement.props) {
        if(prop === 'children') continue // line is not importent just testing for work 
        element.setAttribute(prop, reactElement.props[prop])
        
    }
    container.appendChild(element)

}

const reactElement ={
    type: "a",
    props :{
        href : "https://google.com",
        target: '_blank'
    },
    children: "click the link" 

}

const container = document.querySelector('#root');

customRender(reactElement, container);