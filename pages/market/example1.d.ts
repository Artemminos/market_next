interface ITest {
    name: string,
    pass: number
}
const testObj: ITest = {
    name: 'art',
    pass: 1
}



const setState = <Type>(defaultArg: Type): [Type, () => unknown] => {

    return [defaultArg, () => {}]
}





setState<ITest>(testObj)[0].name
