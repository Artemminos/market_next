// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
const computersArray = [
    {
        name: 'Aser',
        cost: '1000P',
        short_desc: {
            memory: '8gb',
            video: '2gb',
            color:'red'
        },
        image: 'https://media.istockphoto.com/vectors/desktop-computer-vector-id862739260',
        _id: '1'
    },
    {
        name: 'Gigabyte',
        cost: '1050P',
        short_desc: {
            memory: '16gb',
            video: '4gb',
            weight:'3kg'
        },
        image:'https://i.pcmag.com/imagery/articles/00tLYTqwmgFvacZlYPc5ecO-8.fit_lim.v1583853669.jpg',
        _id: '2'
    },
    {
        name: 'MSI',
        cost: '4050P',
        short_desc: {
            memory: '32gb',
            video: '16gb',
            size:'100cm'
        },
        image: 'https://www.freecodecamp.org/news/content/images/2021/11/niclas-illg-wzVQp_NRIHg-unsplash.jpg',
        _id: '3'
    },
]
export default function handler(req, res) {
    res.status(200).json(computersArray)
}
