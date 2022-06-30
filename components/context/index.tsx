import React from 'react';


const defaultTheme = {
    color: 'white',
    fontColor: 'black',
    fontSize: '12px'
}
const theme = {
    color: 'dark',
    fontColor: 'white',
    fontSize: '16px'
}


const ThemeContext = React.createContext(defaultTheme);

const ContextComponent = () => {
    return (
        <div>
            <ThemeContext.Provider value={theme}>
                <Component2/>
            </ThemeContext.Provider>
        </div>
    );
};

const Component2 = () => {
    const data = React.useContext(ThemeContext)
    console.log(data)
    return <div>

    </div>
}

export default ContextComponent;