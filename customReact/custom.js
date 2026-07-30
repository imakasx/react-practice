function customRender (reactElement , container){
    const element = document.createElement(reactElement.type)
    element.innerHTML = reactElement.children
    element.setAttribute('href', reactElement.props.href)
    element.setAttribute("target", reactElement.props.target)
    
    console.log(element)
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