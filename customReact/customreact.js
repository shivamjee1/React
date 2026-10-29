const reaactElement={
    type:'a',
    props: {
        href: 'https://google.com',
        target: '_blank'
    },
    children: 'Click me to visit google'
}

const mainContailner = document.querySelector('#root')

customRender(reaactElement,mainContailner)