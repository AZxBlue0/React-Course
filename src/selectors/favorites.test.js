import { getFavorites } from "./favorites";


const people = [{
    id: '1',
    name: 'Aubrey Long',
    profilePicUrl: `${process.env.PUBLIC_URL}/fren1.jpg`,
    age: 40,
    bio: 'likes to eat',
    intrests: ['Cats', 'Dogs', 'Food']
},{
    id: '2',
    name: 'Eva Pena',
    profilePicUrl: `${process.env.PUBLIC_URL}/fren2.jpg`,
    age: 24,
    bio: 'likes to eat',
    intrests: ['Cats', 'Dogs', 'Frogs']
},{
    id: '3',
    name: 'Phyllis Carpenter',
    profilePicUrl: `${process.env.PUBLIC_URL}/fren3.jpg`,
    age: 31,
    bio: 'likes to paint',
    intrests: ['Landscapes', 'Human', 'Monke']
}];


test('getFavorites correctly populates favoritesIds with people', () => {
    const favorites = ['2', '3'];
    const friends =people;
    const state =  {
        favorites,
        friends
    }
    const actual = getFavorites(state);
    const expected = [people[1], people[2]];

    expect(actual).toEqual(expected)
})