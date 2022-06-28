import React, {ChangeEvent} from 'react';

type male = 'man' | 'woman'

interface IPermissions {
    type: string;
    id: number;
    allow: boolean;
}

interface IUser {
    name: string;
    surName: string;
    male?: male;
}

enum Direction {
    Up,
    Down,
    Left,
    Right,
}

const turnFN = (direction: Direction): string[] => {
    return ['dsadas']
}
turnFN(Direction.Down)

interface IAdmin<Type = any> extends Omit<IUser, 'male' | 'surName'> {
    permissions: Type[]
}

//https://www.typescriptlang.org/docs/handbook/utility-types.html

let variable: string | string[] = 'art'
if (1 > 2) {
    variable = []
}
if (typeof variable === 'string') {
    console.log(variable)
} else if (Array.isArray(variable)) {
    console.log(variable)
}

const userList: IUser[] = [
    {
        name: 'artem',
        surName: 'rus',
        male: 'man',
    },
    {
        name: 'andy',
        surName: 'petrov'
    },
    {
        name: 'vlad',
        surName: 'min'
    },
    {
        name: 'vlad',
        surName: 'min'
    },

]
const adminList: IAdmin<IPermissions>[] = [
    {
        name: 'artem',
        permissions: [
            {
                allow: true,
                id: 1,
                type: 'all'
            }
        ]
    },
    {
        name: 'andy',
        permissions: [
            {
                allow: true,
                id: 1,
                type: 'all'
            }
        ]
    },
    {
        name: 'vlad',
        permissions: [
            {
                allow: true,
                id: 1,
                type: 'all'
            }
        ]
    },
    {
        name: 'vlad',
        permissions: [
            {
                allow: true,
                id: 1,
                type: 'all'
            }
        ]
    },

]
const CustomBtn = (onClick) => {
    return <button onClick={onClick}>custom</button>
}
const TestPage = () => {
    const [users, setUsers] = React.useState<IUser[]>([]);
    const [val, setVal] = React.useState<string>('')
    React.useEffect(() => {
        setUsers(userList)
    }, [])

    return (
        <div>
            <input type="text" onChange={(event: ChangeEvent<HTMLInputElement>) => {
                setVal(event.target.value)
            }}
            />
            <CustomBtn onClick={(event: React.MouseEvent<HTMLButtonElement>) => {
            }}/>
            {users.map((item, index) => {
                return <div>
                    {item.name} {item.surName} <br/>
                </div>
            })}
        </div>
    );
};

export default TestPage;